/**
 * Refresh Events Script
 *
 * Keeps two things current:
 *
 *  1. Events whose dates we do not actually know - explicit TBD/TBA entries,
 *     and the placeholder dates left behind by sources that published no
 *     machine-readable date.
 *  2. Submission deadlines for CFPs. A call for papers is only useful while
 *     you can still submit to it, so the deadline - not the conference date -
 *     is what the card shows and what decides when the entry is archived.
 *     The WikiCFP RSS feed carries conference dates but no deadline, so the
 *     deadline has to come from the event's own page.
 *
 * Resolution order for dates:
 *   1. Offline: many listings embed the dates in the description we already
 *      stored, e.g. "... [Berlin, Germany] [Oct 14, 2026 - Oct 18, 2026]".
 *   2. Network: the event's own page - a WikiCFP "When / Submission Deadline"
 *      table, schema.org JSON-LD, or a date range in the page text.
 *
 * Anything still unresolved is marked datesTBD so the UI shows "TBD" instead
 * of a fabricated date, and so archive-events.js leaves it alone.
 *
 * Usage:
 *   node refresh-events.js              # offline + network passes
 *   node refresh-events.js --offline    # no network calls
 *   node refresh-events.js --dry-run    # report only
 *   node refresh-events.js --limit=25   # cap the number of pages fetched
 */

import { loadData, writeData, updateMetaCounts } from './lib/data-file.js';
import { inspectEventPage, sleep } from './lib/sources.js';
import {
  parseDateRangeFromText,
  formatDateDisplay,
  hasUnknownDates,
  hasPlaceholderDates,
  safeParseDate,
  MONTHS,
} from './lib/event-dates.js';

const DRY_RUN = process.argv.includes('--dry-run');
const OFFLINE = process.argv.includes('--offline');
const LIMIT = Number(
  (process.argv.find(a => a.startsWith('--limit=')) || '').split('=')[1] || 60
);

const FETCH_DELAY_MS = 750; // be polite to the sources

/**
 * Text we already hold about an event that might contain its dates
 */
function localTextFor(event) {
  return [
    event.modal?.overview || '',
    event.title || '',
    event.dateDisplay ? `${event.dateDisplay.month} ${event.dateDisplay.day}` : '',
  ].join(' ');
}

/**
 * Listings often name the venue in the same bracketed form as the dates:
 * "... [Granada] [Dec 2, 2026 - Dec 4, 2026]". Events imported before that was
 * parsed all say "Online / TBA", which is wrong for an on-site conference.
 */
function locationFromText(text) {
  for (const chunk of [...String(text || '').matchAll(/\[([^\]]+)\]/g)].map(m => m[1])) {
    const value = chunk.trim();
    // Skip the date bracket and anything that is obviously not a place
    if (parseDateRangeFromText(`[${value}]`)) continue;
    if (value.length < 3 || value.length > 60) continue;
    if (!/^[A-Za-z][A-Za-z\s.,'()-]+$/.test(value)) continue;
    if (/^(online|virtual|tba|tbd)$/i.test(value)) continue;
    return value;
  }
  return null;
}

function sourceUrlFor(event) {
  return event.links?.website || event.links?.register ||
    event.modal?.resources?.[0]?.url || null;
}

/**
 * A CFP with no known submission deadline cannot tell the reader whether it is
 * still open, so it needs a look at its source page.
 */
function needsDeadline(event) {
  return event.page === 'cfp' && !event.dates?.deadline;
}

/**
 * Recompute the badge for an event from its dates. CFPs advertise the
 * submission deadline; everything else advertises the event date.
 */
function refreshDisplay(event) {
  if (event.datesTBD) return;

  if (event.page === 'cfp' && event.dates.deadline) {
    const deadline = safeParseDate(event.dates.deadline);
    if (deadline) {
      event.dateDisplay = formatDateDisplay(deadline, deadline);
      event.dates.countdownTarget = 'deadline';
      return;
    }
  }

  const start = safeParseDate(event.dates.start);
  if (start) {
    event.dateDisplay = formatDateDisplay(start, safeParseDate(event.dates.end));
    event.dates.countdownTarget = 'start';
  }
}

/**
 * Apply resolved dates to an event
 */
function applyDates(event, resolved) {
  const toIso = d => (d ? d.toISOString() : null);

  if (resolved.start) {
    event.dates.start = toIso(resolved.start);
    event.dates.end = toIso(resolved.end || resolved.start);
    event.datesTBD = false;
  }
  if (resolved.deadline) {
    event.dates.deadline = toIso(resolved.deadline);
  }

  if (resolved.location) applyLocation(event, resolved.location);

  refreshDisplay(event);
  event.datesResolvedFrom = resolved.source;
  event.datesCheckedAt = new Date().toISOString().split('T')[0];
}

/**
 * Fill in a real venue, but never overwrite one that is already specific
 */
function applyLocation(event, display) {
  const current = event.location?.display || '';
  if (current && !/^(online\s*\/\s*tba|tba|tbd|online)$/i.test(current.trim())) return;

  const parts = display.split(',').map(p => p.trim()).filter(Boolean);
  event.location = {
    type: 'onsite',
    city: parts[0] || null,
    country: parts.length > 1 ? parts[parts.length - 1] : null,
    display,
  };
}

/**
 * Mark an event we could not resolve, so the card says TBD rather than lying.
 * Keeps whatever granularity we do have: an event with a real month but an
 * unconfirmed day stays "Dec TBA" and still archives once that date passes;
 * only a pure placeholder becomes "2026 TBD" and opts out of archiving.
 */
function markUnknown(event) {
  const start = safeParseDate(event.dates?.start);

  if (start && !hasPlaceholderDates({ ...event, datesTBD: false })) {
    // Real date, unconfirmed day - keep it archivable
    event.datesTBD = false;
    event.dateDisplay = { month: MONTHS[start.getUTCMonth()], day: 'TBA' };
  } else {
    const year = String(event.dates?.start || '').match(/^(\d{4})/);
    event.datesTBD = true;
    event.dateDisplay = { month: year ? year[1] : 'TBD', day: 'TBD' };
  }

  event.datesCheckedAt = new Date().toISOString().split('T')[0];
}

async function main() {
  console.log('Refresh Events Script');
  console.log('=====================');
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no changes)' : 'LIVE'}${OFFLINE ? ' / OFFLINE' : ''}`);
  console.log('');

  const data = loadData();
  const active = data.events.filter(e => !e.isArchived);
  const missingDates = active.filter(hasUnknownDates);
  const missingDeadline = active.filter(needsDeadline);

  console.log(`Total events: ${data.events.length}`);
  console.log(`Active events with unknown dates: ${missingDates.length}`);
  console.log(`Active CFPs with no submission deadline: ${missingDeadline.length}`);
  console.log('');

  // Pass 1 - recover dates from text we already stored
  let resolvedOffline = 0;
  const stillUnknown = [];

  if (missingDates.length > 0) {
    console.log('Pass 1: recovering dates from stored descriptions...');
    for (const event of missingDates) {
      const range = parseDateRangeFromText(localTextFor(event));
      if (range) {
        applyDates(event, { ...range, source: 'description' });
        resolvedOffline++;
      } else {
        stillUnknown.push(event);
      }
    }
    console.log(`  Resolved ${resolvedOffline} from stored text`);
    console.log('');
  }

  // Pass 2 - visit the event's own page. Anything still missing dates, plus
  // every CFP whose submission deadline we do not have.
  let resolvedOnline = 0;
  let deadlinesFound = 0;
  const seen = new Set();
  const queue = [...stillUnknown, ...missingDeadline]
    .filter(e => {
      if (seen.has(e.id)) return false;
      seen.add(e.id);
      return Boolean(sourceUrlFor(e));
    })
    // Least recently checked first, so successive runs work through the list
    .sort((a, b) => String(a.datesCheckedAt || '').localeCompare(String(b.datesCheckedAt || '')));

  if (!OFFLINE && queue.length > 0) {
    const batch = queue.slice(0, LIMIT);
    console.log(`Pass 2: checking ${batch.length} of ${queue.length} source pages (limit ${LIMIT})...`);

    for (const event of batch) {
      const resolved = await inspectEventPage(sourceUrlFor(event));
      const hadDeadline = Boolean(event.dates.deadline);

      if (resolved) {
        applyDates(event, resolved);
        if (resolved.start) resolvedOnline++;
        if (!hadDeadline && event.dates.deadline) {
          deadlinesFound++;
          console.log(`  ${event.title.slice(0, 55)} -> deadline ${event.dateDisplay.month} ${event.dateDisplay.day}`);
        }
      }

      if (hasUnknownDates(event)) markUnknown(event);
      else event.datesCheckedAt = new Date().toISOString().split('T')[0];

      await sleep(FETCH_DELAY_MS);
    }

    // Anything past the limit keeps its current state and is picked up next run
    queue.slice(LIMIT).filter(hasUnknownDates).forEach(markUnknown);
  } else {
    queue.filter(hasUnknownDates).forEach(markUnknown);
  }

  // Make sure every active event's badge matches its dates, and fill in any
  // venue still sitting on the "Online / TBA" default
  let locationsFixed = 0;
  active.forEach(event => {
    refreshDisplay(event);
    const venue = locationFromText(localTextFor(event));
    if (venue && /^(online\s*\/\s*tba|tba|tbd)$/i.test((event.location?.display || '').trim())) {
      applyLocation(event, venue);
      locationsFixed++;
    }
  });

  console.log('');
  console.log('Summary:');
  console.log(`  - Dates resolved from stored text: ${resolvedOffline}`);
  console.log(`  - Dates resolved from source page: ${resolvedOnline}`);
  console.log(`  - Submission deadlines found: ${deadlinesFound}`);
  console.log(`  - Still awaiting dates: ${active.filter(e => e.datesTBD).length}`);
  console.log(`  - CFPs still without a deadline: ${active.filter(needsDeadline).length}`);
  console.log(`  - Venues filled in: ${locationsFixed}`);

  updateMetaCounts(data);

  if (!DRY_RUN) {
    console.log('');
    console.log('Writing updated data.js...');
    writeData(data);
    console.log('Done!');
  } else {
    console.log('');
    console.log('(Dry run - no changes written)');
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
