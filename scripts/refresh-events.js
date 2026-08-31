/**
 * Refresh Events Script
 *
 * Revisits every active event whose dates we do not actually know - explicit
 * TBD/TBA entries, and the placeholder dates left behind by sources that
 * published no machine-readable date - and tries to resolve them.
 *
 * Resolution happens in two passes:
 *   1. Offline: many listings embed the dates in the description we already
 *      stored, e.g. "... [Berlin, Germany] [Oct 14, 2026 - Oct 18, 2026]".
 *   2. Network: fetch the event's own page and look for schema.org JSON-LD,
 *      a WikiCFP "When / Submission Deadline" table, or a date range in the
 *      page text.
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

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { loadData, writeData, updateMetaCounts } from './lib/data-file.js';
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
  (process.argv.find(a => a.startsWith('--limit=')) || '').split('=')[1] || 40
);

const FETCH_TIMEOUT_MS = 15000;
const FETCH_DELAY_MS = 750; // be polite to the sources

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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
 * Fetch a page, returning its HTML or null. Never throws.
 */
async function fetchPage(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; 2026-calendar-bot/1.0; +https://github.com/nicanor-korir/2026-calendar)',
        'Accept': 'text/html,application/xhtml+xml',
      },
    });
    clearTimeout(timer);
    if (!response.ok) return null;
    return await response.text();
  } catch (error) {
    return null;
  }
}

/**
 * schema.org Event markup - the most reliable generic source of dates
 */
function datesFromJsonLd(html) {
  const $ = cheerio.load(html);
  const blocks = $('script[type="application/ld+json"]')
    .map((i, el) => $(el).contents().text())
    .get();

  for (const raw of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      continue;
    }

    const candidates = [];
    const walk = node => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) return node.forEach(walk);
      if (node['@graph']) walk(node['@graph']);
      const type = node['@type'];
      const types = Array.isArray(type) ? type : [type];
      if (types.some(t => typeof t === 'string' && /Event/i.test(t))) {
        candidates.push(node);
      }
    };
    walk(parsed);

    for (const node of candidates) {
      const start = safeParseDate(node.startDate);
      if (!start) continue;
      const end = safeParseDate(node.endDate) || start;
      return { start, end, deadline: null, source: 'json-ld' };
    }
  }

  return null;
}

/**
 * WikiCFP event pages carry a "When / Where / Submission Deadline" table
 */
function datesFromWikiCfp(html) {
  const $ = cheerio.load(html);
  const fields = {};

  $('table tr').each((i, row) => {
    const cells = $(row).find('th, td');
    if (cells.length < 2) return;
    const label = $(cells[0]).text().trim().toLowerCase().replace(/\s+/g, ' ');
    const value = $(cells[1]).text().trim();
    if (label && value && !fields[label]) fields[label] = value;
  });

  const when = fields['when'] || fields['when '] || '';
  const deadlineText =
    fields['submission deadline'] || fields['paper submission deadline'] || '';

  // "Oct 14, 2026 - Oct 18, 2026"
  const range = parseDateRangeFromText(when);
  const deadline = parseDateRangeFromText(deadlineText);

  if (!range && !deadline) return null;

  return {
    start: range ? range.start : deadline.start,
    end: range ? range.end : deadline.start,
    deadline: deadline ? deadline.start : null,
    source: 'wikicfp',
  };
}

/**
 * Last resort: a date range sitting in the visible page text
 */
function datesFromPageText(html) {
  const $ = cheerio.load(html);
  $('script, style, nav, footer').remove();
  const text = $('body').text().replace(/\s+/g, ' ').slice(0, 20000);

  const match = text.match(
    /\b([A-Z][a-z]{2})[a-z]*\.?\s+(\d{1,2}),?\s+(\d{4})\s*[-–—to]+\s*([A-Z][a-z]{2})?[a-z]*\.?\s*(\d{1,2}),?\s*(\d{4})\b/
  );
  if (!match) return null;

  const range = parseDateRangeFromText(`[${match[0]}]`);
  return range ? { ...range, deadline: null, source: 'page-text' } : null;
}

/**
 * Try every strategy against one event's own page
 */
async function resolveFromNetwork(event) {
  const url = event.links?.website || event.links?.register ||
    event.modal?.resources?.[0]?.url;
  if (!url) return null;

  const html = await fetchPage(url);
  if (!html) return null;

  const strategies = url.includes('wikicfp.com')
    ? [datesFromWikiCfp, datesFromJsonLd, datesFromPageText]
    : [datesFromJsonLd, datesFromWikiCfp, datesFromPageText];

  for (const strategy of strategies) {
    try {
      const result = strategy(html);
      if (result && result.start) return result;
    } catch {
      // try the next strategy
    }
  }

  return null;
}

/**
 * Apply resolved dates to an event
 */
function applyDates(event, resolved) {
  const { start, end, deadline } = resolved;
  const toIso = d => d.toISOString();

  event.dates = {
    ...event.dates,
    start: toIso(start),
    end: toIso(end || start),
    deadline: deadline ? toIso(deadline) : (event.dates.deadline || null),
  };
  event.dates.countdownTarget = event.dates.deadline ? 'deadline' : 'start';
  event.dateDisplay = formatDateDisplay(start, end);
  event.datesTBD = false;
  event.datesResolvedFrom = resolved.source;
  event.datesCheckedAt = new Date().toISOString().split('T')[0];
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
  const pending = data.events.filter(e => !e.isArchived && hasUnknownDates(e));

  console.log(`Total events: ${data.events.length}`);
  console.log(`Active events with unknown dates: ${pending.length}`);
  console.log('');

  if (pending.length === 0) {
    console.log('Nothing to refresh.');
    return;
  }

  let resolvedOffline = 0;
  let resolvedOnline = 0;
  const stillUnknown = [];

  // Pass 1 - recover dates from text we already stored
  console.log('Pass 1: recovering dates from stored descriptions...');
  for (const event of pending) {
    const range = parseDateRangeFromText(localTextFor(event));
    if (range) {
      applyDates(event, { ...range, deadline: null, source: 'description' });
      resolvedOffline++;
      console.log(`  ${event.title} -> ${event.dateDisplay.month} ${event.dateDisplay.day}`);
    } else {
      stillUnknown.push(event);
    }
  }
  console.log(`  Resolved ${resolvedOffline} from stored text`);
  console.log('');

  // Pass 2 - visit the event's own page
  if (!OFFLINE && stillUnknown.length > 0) {
    const batch = stillUnknown.slice(0, LIMIT);
    console.log(`Pass 2: checking ${batch.length} source pages (limit ${LIMIT})...`);

    for (const event of batch) {
      const resolved = await resolveFromNetwork(event);
      if (resolved) {
        applyDates(event, resolved);
        resolvedOnline++;
        console.log(`  ${event.title} -> ${event.dateDisplay.month} ${event.dateDisplay.day} (${resolved.source})`);
      } else {
        markUnknown(event);
        console.log(`  ${event.title} -> still TBD`);
      }
      await sleep(FETCH_DELAY_MS);
    }

    // Anything past the limit gets flagged, and is picked up on the next run
    stillUnknown.slice(LIMIT).forEach(markUnknown);
    console.log(`  Resolved ${resolvedOnline} from source pages`);
  } else {
    stillUnknown.forEach(markUnknown);
  }

  console.log('');
  console.log('Summary:');
  console.log(`  - Resolved from stored text: ${resolvedOffline}`);
  console.log(`  - Resolved from source page: ${resolvedOnline}`);
  console.log(`  - Still TBD: ${stillUnknown.length - resolvedOnline}`);

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
