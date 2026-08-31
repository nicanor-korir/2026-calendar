/**
 * Fetching and parsing event pages.
 *
 * Shared by fetch-events.js (enriching newly discovered events) and
 * refresh-events.js (revisiting events with missing dates or deadlines).
 */

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { parseDateRangeFromText, safeParseDate } from './event-dates.js';

const FETCH_TIMEOUT_MS = 15000;

export const USER_AGENT =
  'Mozilla/5.0 (compatible; 2026-calendar-bot/1.0; +https://github.com/nicanor-korir/2026-calendar)';

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch a page, returning its HTML or null. Never throws.
 */
export async function fetchPage(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml',
      },
    });
    clearTimeout(timer);
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}

export function isWikiCfpUrl(url) {
  return typeof url === 'string' && url.includes('wikicfp.com');
}

const WIKICFP_LABELS = new Set([
  'when',
  'where',
  'abstract registration due',
  'submission deadline',
  'notification due',
  'final version due',
]);

/**
 * The label/value table at the top of a WikiCFP event page:
 *
 *   When                 Sep 3, 2026 - Sep 4, 2026
 *   Where                Amsterdam, The Netherlands
 *   Submission Deadline  Feb 1, 2026
 *   Notification Due     Mar 1, 2026
 */
export function parseWikiCfpFields(html) {
  const $ = cheerio.load(html);
  const fields = {};

  $('tr').each((i, row) => {
    const cells = $(row).children('td, th');
    if (cells.length < 2) return;
    const label = $(cells[0]).text().replace(/\s+/g, ' ').trim().toLowerCase();
    const value = $(cells[1]).text().replace(/\s+/g, ' ').trim();
    if (WIKICFP_LABELS.has(label) && value && !fields[label]) {
      fields[label] = value;
    }
  });

  return fields;
}

/**
 * Dates from a WikiCFP event page. "TBD" is a legitimate value there.
 */
export function wikiCfpDates(html) {
  const fields = parseWikiCfpFields(html);
  const when = parseDateRangeFromText(fields['when']);
  const deadline = parseDateRangeFromText(fields['submission deadline']);
  const notification = parseDateRangeFromText(fields['notification due']);

  if (!when && !deadline) return null;

  return {
    start: when ? when.start : deadline.start,
    end: when ? when.end : deadline.start,
    deadline: deadline ? deadline.start : null,
    notification: notification ? notification.start : null,
    location: fields['where'] || null,
    source: 'wikicfp',
  };
}

/**
 * schema.org Event markup - the most reliable generic source of dates
 */
export function jsonLdDates(html) {
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
      return {
        start,
        end: safeParseDate(node.endDate) || start,
        deadline: null,
        source: 'json-ld',
      };
    }
  }

  return null;
}

/**
 * A submission deadline stated in the page's own prose, e.g.
 * "Submission deadline: 15 December 2026" or "Paper submission: Dec 15, 2026"
 */
export function deadlineFromPageText(html) {
  const $ = cheerio.load(html);
  $('script, style, nav, footer').remove();
  const text = $('body').text().replace(/\s+/g, ' ').slice(0, 40000);

  const patterns = [
    /(?:paper|abstract|full[- ]paper)?\s*submission\s*(?:deadline|due|closes?)\s*[:\-–]?\s*([^.;|]{4,40})/i,
    /(?:deadline\s*for\s*submissions?)\s*[:\-–]?\s*([^.;|]{4,40})/i,
    /call\s*for\s*papers?\s*(?:deadline|closes?)\s*[:\-–]?\s*([^.;|]{4,40})/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (!match) continue;
    const range = parseDateRangeFromText(`[${match[1]}]`) ||
      parseDateRangeFromText(`[${normaliseDayFirst(match[1])}]`);
    if (range) return range.start;
  }

  return null;
}

/**
 * "15 December 2026" -> "Dec 15, 2026" so the shared parser can read it
 */
function normaliseDayFirst(text) {
  const match = String(text).match(
    /\b(\d{1,2})(?:st|nd|rd|th)?\s+([A-Z][a-z]{2})[a-z]*\.?,?\s+(\d{4})\b/i
  );
  if (!match) return text;
  const month = match[2][0].toUpperCase() + match[2].slice(1, 3).toLowerCase();
  return `${month} ${match[1]}, ${match[3]}`;
}

/**
 * Last resort: a date range sitting in the visible page text
 */
export function pageTextDates(html) {
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
 * Everything we can learn about one event from its own page.
 * Returns null when the page could not be fetched.
 */
export async function inspectEventPage(url) {
  const html = await fetchPage(url);
  if (!html) return null;

  const strategies = isWikiCfpUrl(url)
    ? [wikiCfpDates, jsonLdDates, pageTextDates]
    : [jsonLdDates, wikiCfpDates, pageTextDates];

  let dates = null;
  for (const strategy of strategies) {
    try {
      const result = strategy(html);
      if (result && result.start) {
        dates = result;
        break;
      }
    } catch {
      // try the next strategy
    }
  }

  // A submission deadline can exist even when the dates came from elsewhere
  let deadline = dates?.deadline || null;
  if (!deadline) {
    try {
      deadline = deadlineFromPageText(html);
    } catch {
      deadline = null;
    }
  }

  if (!dates && !deadline) return null;

  return { ...(dates || { source: 'page-text' }), deadline };
}
