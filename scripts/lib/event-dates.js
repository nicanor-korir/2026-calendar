/**
 * Shared date helpers for the event scripts.
 *
 * The calendar has two recurring date problems this module exists to solve:
 *  1. Sources that do not expose machine-readable dates used to get a
 *     fabricated placeholder (Jan 1 of next year), which looks like a real
 *     date on the card and never archives.
 *  2. Events that are genuinely announced as TBD/TBA need to be revisited
 *     regularly until the organiser publishes real dates.
 */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Parse a date-ish string, returning null instead of an Invalid Date.
 */
export function safeParseDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? null : date;
}

/**
 * Pull a date range out of free text of the shape used by WikiCFP RSS and
 * most conference listings: "... [Berlin, Germany] [Oct 14, 2026 - Oct 18, 2026]"
 * Also handles a single date: "[Dec 12, 2026]".
 */
export function parseDateRangeFromText(text) {
  if (!text) return null;

  const bracketed = [...String(text).matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
  const candidates = bracketed.length ? bracketed : [String(text)];

  for (const chunk of candidates) {
    const dates = [...chunk.matchAll(
      /\b([A-Z][a-z]{2})[a-z]*\.?\s+(\d{1,2}),?\s+(\d{4})\b/g
    )];
    if (dates.length === 0) continue;

    const toDate = (m) => {
      const month = MONTHS.indexOf(m[1]);
      if (month < 0) return null;
      return new Date(Date.UTC(Number(m[3]), month, Number(m[2])));
    };

    const start = toDate(dates[0]);
    if (!start) continue;
    const end = dates.length > 1 ? toDate(dates[dates.length - 1]) : start;

    return { start, end: end && end >= start ? end : start };
  }

  return null;
}

/**
 * Build the {month, day} badge shown on a card. Ranges inside one month
 * render as "Mar 23-26"; ranges spanning months as "Mar 23 - Apr 2".
 */
export function formatDateDisplay(start, end) {
  if (!start) return { month: 'TBD', day: 'TBA' };

  const month = MONTHS[start.getUTCMonth()];
  const day = start.getUTCDate();

  if (!end || end.getTime() === start.getTime()) {
    return { month, day: String(day) };
  }

  if (end.getUTCMonth() === start.getUTCMonth() &&
      end.getUTCFullYear() === start.getUTCFullYear()) {
    return { month, day: `${day}-${end.getUTCDate()}` };
  }

  return {
    month,
    day: `${day} - ${MONTHS[end.getUTCMonth()]} ${end.getUTCDate()}`
  };
}

/**
 * Does the stored date VALUE carry no real information? These are either an
 * explicit datesTBD flag or the fingerprints of the old "invent a placeholder"
 * behaviour: Jan 1 at midnight, or a span covering a whole calendar year.
 */
export function hasPlaceholderDates(event) {
  if (!event || !event.dates) return false;
  if (event.datesTBD === true) return true;

  // Inspect the raw ISO strings: parsing them into Date first would shift the
  // day across midnight depending on the runner's timezone.
  const start = String(event.dates.start || '');
  const end = String(event.dates.end || '');

  if (!safeParseDate(start)) return true;

  const jan1 = start.match(/^(\d{4})-01-01T00:00/);
  if (jan1) {
    // Whole-year span (2026-01-01 -> 2026-12-31) or the bare Jan 1 placeholder
    if (!end || end === start) return true;
    if (end.startsWith(`${jan1[1]}-12-31`)) return true;
  }

  return false;
}

/**
 * Should this event be re-checked against its source? Either the date value is
 * a placeholder, or the card is still advertising the date as TBD/TBA.
 */
export function hasUnknownDates(event) {
  if (hasPlaceholderDates(event)) return true;
  const display = `${event?.dateDisplay?.month || ''} ${event?.dateDisplay?.day || ''}`;
  return /\bTB[DA]\b/i.test(display);
}

/**
 * Is the event over? Mirrors isEventPast() in js/app.js - keep them in sync.
 * An event is over once its own end date has passed, or - for CFPs - once the
 * submission deadline has passed. Events with unknown dates are never "past":
 * archiving them on a placeholder date would hide events that simply have not
 * been scheduled yet.
 */
export function isEventPast(event, now = new Date()) {
  if (!event || !event.dates) return false;
  // A placeholder date must never archive an event; an unconfirmed *display*
  // over a real date still can.
  if (hasPlaceholderDates(event)) return false;

  // The event window itself. Once that has passed the event is over, whatever
  // the deadline says - some listings carry a deadline for the *next* edition.
  const end = safeParseDate(event.dates.end);
  const start = safeParseDate(event.dates.start);
  const eventEnd = end || start;
  if (eventEnd && eventEnd < now) return true;

  // For CFPs a passed submission deadline also retires the entry: there is
  // nothing left to act on even if the conference is still ahead.
  if (event.page === 'cfp' && event.dates.deadline) {
    const deadline = safeParseDate(event.dates.deadline);
    if (deadline && deadline < now) return true;
  }

  return false;
}

/**
 * A placeholder-dated event still sitting on a year that has already gone by
 * is dead - nobody is going to announce dates for it.
 */
export function isStaleUnknown(event, now = new Date()) {
  if (!hasPlaceholderDates(event)) return false;
  const year = String(event.dates?.start || '').match(/^(\d{4})/);
  if (!year) return false;
  return Number(year[1]) < now.getUTCFullYear();
}

export { MONTHS };
