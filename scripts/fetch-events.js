/**
 * Event Fetcher Script
 * Fetches new events from various sources and updates data.js
 *
 * Sources:
 * - Lablab.ai (hackathons)
 * - DevPost (hackathons)
 * - MLH (hackathons)
 * - WikiCFP (academic CFPs)
 * - Conference RSS feeds
 */

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '..', 'js', 'data.js');
const DRY_RUN = process.argv.includes('--dry-run');

// How many days an event keeps the NEW tag
const NEW_TAG_DURATION_DAYS = 7;

/**
 * Parse the existing data.js file
 */
function loadExistingData() {
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  // Extract the EVENTS_DATA object
  const match = content.match(/const EVENTS_DATA = (\{[\s\S]*?\});[\s\S]*?\/\/ Helper API/);
  if (!match) {
    throw new Error('Could not parse EVENTS_DATA from data.js');
  }
  // Use eval to parse the object (safe since we control the file)
  return eval('(' + match[1] + ')');
}

/**
 * Get existing event IDs to avoid duplicates
 */
function getExistingIds(data) {
  return new Set(data.events.map(e => e.id));
}

/**
 * Fetch hackathons from Lablab.ai
 */
async function fetchLablabEvents() {
  const events = [];
  try {
    console.log('Fetching from Lablab.ai...');
    const response = await fetch('https://lablab.ai/event');
    const html = await response.text();
    const $ = cheerio.load(html);

    // Parse event cards (adjust selectors based on actual site structure)
    $('a[href^="/event/"]').each((i, el) => {
      const href = $(el).attr('href');
      const title = $(el).find('h3, h4, .title').first().text().trim();
      const dateText = $(el).find('.date, time').first().text().trim();

      if (title && href && !href.includes('/event/page')) {
        const id = 'lablab-' + href.split('/').pop().toLowerCase().replace(/[^a-z0-9]/g, '-');
        events.push({
          id,
          title,
          source: 'lablab.ai',
          url: 'https://lablab.ai' + href,
          dateText,
          page: 'hackathons',
          category: ['hackathon'],
        });
      }
    });

    console.log(`Found ${events.length} events from Lablab.ai`);
  } catch (error) {
    console.error('Error fetching Lablab.ai:', error.message);
  }
  return events;
}

/**
 * Parse DevPost date strings like "Dec 25, 2025", "Dec 26 - 27, 2025", or "Jan 1, 2026"
 */
function parseDevPostDate(dateStr, fallbackYear = null) {
  if (!dateStr) return null;
  try {
    let cleanDate = dateStr.trim();

    // If it's a range like "Dec 26 - 27, 2025", extract the first date
    if (cleanDate.includes(' - ')) {
      cleanDate = cleanDate.split(' - ')[0].trim();
    }

    // Try to parse the date
    let date = new Date(cleanDate);

    // If the date is invalid or the year is before 2024, try adding a year
    if (isNaN(date.getTime()) || date.getFullYear() < 2024) {
      // Check if there's a year in the original string
      const yearMatch = dateStr.match(/\b(202[4-9]|203[0-9])\b/);
      if (yearMatch) {
        // Month and day without year - add the found year
        date = new Date(cleanDate + ', ' + yearMatch[1]);
      } else if (fallbackYear) {
        date = new Date(cleanDate + ', ' + fallbackYear);
      } else {
        // Default to current or next year
        const currentYear = new Date().getFullYear();
        date = new Date(cleanDate + ', ' + currentYear);
        // If the date is in the past, use next year
        if (date < new Date()) {
          date = new Date(cleanDate + ', ' + (currentYear + 1));
        }
      }
    }

    if (!isNaN(date.getTime())) {
      return date.toISOString();
    }
  } catch (e) {
    // Fall through
  }
  return null;
}

/**
 * Clean HTML from prize strings
 */
function cleanPrize(prizeStr) {
  if (!prizeStr) return null;
  // Strip HTML tags and decode entities
  return prizeStr
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

/**
 * Fetch hackathons from DevPost
 */
async function fetchDevPostEvents() {
  const events = [];
  try {
    console.log('Fetching from DevPost...');
    const response = await fetch('https://devpost.com/api/hackathons?status=upcoming&order_by=deadline');
    const data = await response.json();

    for (const hack of data.hackathons || []) {
      const id = 'devpost-' + hack.id;

      // Parse dates from the submission_period_dates string
      // Format is like "Dec 26 - 27, 2025" or "Jan 1 - Feb 1, 2026"
      const fullDateStr = hack.submission_period_dates || '';
      const startDateStr = parseDevPostDate(fullDateStr);

      // For end date, try to parse the second part if it exists
      let endDateStr = startDateStr;
      if (fullDateStr.includes(' - ')) {
        const parts = fullDateStr.split(' - ');
        if (parts[1]) {
          endDateStr = parseDevPostDate(parts[1]) || startDateStr;
        }
      }

      // Skip events with invalid dates
      if (!startDateStr) {
        continue;
      }

      // Clean up prize (remove HTML)
      const cleanedPrize = cleanPrize(hack.prize_amount);

      events.push({
        id,
        title: hack.title,
        source: 'devpost',
        url: hack.url,
        startDate: startDateStr,
        endDate: endDateStr,
        prize: cleanedPrize,
        page: 'hackathons',
        category: ['hackathon'],
        themes: hack.themes || [],
      });
    }

    console.log(`Found ${events.length} events from DevPost`);
  } catch (error) {
    console.error('Error fetching DevPost:', error.message);
  }
  return events;
}

/**
 * Fetch hackathons from MLH
 */
async function fetchMLHEvents() {
  const events = [];
  try {
    console.log('Fetching from MLH...');
    const response = await fetch('https://mlh.io/seasons/2026/events');
    const html = await response.text();
    const $ = cheerio.load(html);

    $('.event-wrapper, .event').each((i, el) => {
      const title = $(el).find('.event-name, h3').first().text().trim();
      const dateText = $(el).find('.event-date, .date').first().text().trim();
      const location = $(el).find('.event-location, .location').first().text().trim();
      const link = $(el).find('a').first().attr('href');

      if (title) {
        const id = 'mlh-' + title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 50);
        events.push({
          id,
          title,
          source: 'mlh',
          url: link || 'https://mlh.io',
          dateText,
          location,
          page: 'hackathons',
          category: ['hackathon'],
        });
      }
    });

    console.log(`Found ${events.length} events from MLH`);
  } catch (error) {
    console.error('Error fetching MLH:', error.message);
  }
  return events;
}

/**
 * Fetch CFPs from WikiCFP
 */
async function fetchWikiCFP() {
  const events = [];
  try {
    console.log('Fetching from WikiCFP...');
    // WikiCFP has an RSS feed for AI/ML conferences
    const parser = new Parser();
    const feed = await parser.parseURL('http://www.wikicfp.com/cfp/rss?cat=machine%20learning');

    for (const item of feed.items || []) {
      const id = 'wikicfp-' + (item.title || '').toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 50);
      events.push({
        id,
        title: item.title,
        source: 'wikicfp',
        url: item.link,
        description: item.contentSnippet,
        page: 'cfp',
        category: ['cfp'],
        type: ['ml'],
      });
    }

    console.log(`Found ${events.length} CFPs from WikiCFP`);
  } catch (error) {
    console.error('Error fetching WikiCFP:', error.message);
  }
  return events;
}

/**
 * Fetch from AI conference deadlines
 */
async function fetchAIDeadlines() {
  const events = [];
  try {
    console.log('Fetching from AI Conference Deadlines...');
    // Try the GitHub raw URL for aideadlin.es data
    const response = await fetch('https://raw.githubusercontent.com/paperswithcode/ai-deadlines/main/_data/conferences.yml', {
      headers: { 'Accept': 'text/plain' }
    });

    if (!response.ok) {
      console.log('AI Deadlines: Could not fetch data, skipping...');
      return events;
    }

    const text = await response.text();

    // Check if we got HTML instead of YAML
    if (text.startsWith('<!DOCTYPE') || text.startsWith('<html')) {
      console.log('AI Deadlines: Got HTML response, skipping...');
      return events;
    }

    // Simple YAML parsing for conference entries
    const confBlocks = text.split(/^- /m).filter(block => block.trim());

    for (const block of confBlocks) {
      try {
        const getField = (name) => {
          const match = block.match(new RegExp(`${name}:\\s*["']?([^"'\n]+)["']?`));
          return match ? match[1].trim() : null;
        };

        const title = getField('title');
        const deadline = getField('deadline');
        const link = getField('link');

        if (title && deadline && new Date(deadline) > new Date()) {
          const id = 'aiconf-' + title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 50);
          events.push({
            id,
            title,
            source: 'aideadlin.es',
            url: link || 'https://aideadlin.es',
            deadline,
            startDate: getField('start'),
            endDate: getField('end'),
            location: getField('place'),
            page: 'cfp',
            category: ['cfp'],
            type: ['ml'],
          });
        }
      } catch (e) {
        // Skip malformed entries
      }
    }

    console.log(`Found ${events.length} CFPs from AI Deadlines`);
  } catch (error) {
    console.error('Error fetching AI Deadlines:', error.message);
  }
  return events;
}

/**
 * Safely parse a date string, returning null if invalid
 */
function safeParseDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  // Check if date is valid
  if (isNaN(date.getTime())) return null;
  return date;
}

/**
 * Convert a raw scraped event to the full event format
 * Returns null if the event has invalid data
 */
function convertToFullEvent(rawEvent) {
  try {
    const now = new Date();
    const addedDate = now.toISOString().split('T')[0];
    const defaultDate = new Date(now.getFullYear() + 1, 0, 1); // Jan 1 next year

    // Parse dates safely
    let startDate = safeParseDate(rawEvent.startDate) || defaultDate;
    let endDate = safeParseDate(rawEvent.endDate) || startDate;
    let deadline = safeParseDate(rawEvent.deadline);

    // Validate dates are not in the past (except for testing)
    const cutoffDate = new Date(now.getFullYear(), 0, 1); // Jan 1 of current year
    if (startDate < cutoffDate && !rawEvent.startDate) {
      startDate = defaultDate;
      endDate = defaultDate;
    }

    // Create tags including NEW tag
    const tags = [
      { text: 'NEW', color: 'gold' },
    ];

    if (rawEvent.source) {
      tags.push({ text: rawEvent.source, color: 'default' });
    }

    return {
      id: rawEvent.id,
      title: rawEvent.title,
      organizer: rawEvent.source || 'TBA',
      icon: rawEvent.page === 'hackathons' ? '💻' : rawEvent.page === 'cfp' ? '📄' : '🎯',
      page: rawEvent.page,
      category: rawEvent.category || [],
      type: rawEvent.type || [],
      tags,
      dates: {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        deadline: deadline ? deadline.toISOString() : null,
        countdownTarget: deadline ? 'deadline' : 'start',
      },
      dateDisplay: {
        month: startDate.toLocaleString('en', { month: 'short' }),
        day: startDate.getDate().toString(),
      },
    eventType: rawEvent.page === 'hackathons' ? 'Hackathon' : rawEvent.page === 'cfp' ? 'CFP' : 'Event',
    isUrgent: false,
    isFeatured: false,
    isNew: true,
    addedDate,
    prize: rawEvent.prize ? { amount: rawEvent.prize, icon: '💰' } : null,
    location: rawEvent.location
      ? { type: 'onsite', city: null, country: null, display: rawEvent.location }
      : { type: 'online', city: null, country: null, display: 'Online / TBA' },
    modal: {
      overview: rawEvent.description || `New ${rawEvent.page} found from ${rawEvent.source}. Click to learn more.`,
      requirements: null,
      keyDates: null,
      topics: null,
      resources: [
        { icon: '🌐', label: 'Official Website', url: rawEvent.url },
      ],
    },
    links: {
      register: rawEvent.url,
      website: rawEvent.url,
    },
  };
  } catch (error) {
    console.error(`Error converting event "${rawEvent.title}":`, error.message);
    return null;
  }
}

/**
 * Remove expired NEW tags from events
 */
function cleanupNewTags(events) {
  const now = new Date();
  const cutoff = new Date(now - NEW_TAG_DURATION_DAYS * 24 * 60 * 60 * 1000);

  return events.map(event => {
    if (event.isNew && event.addedDate) {
      const addedDate = new Date(event.addedDate);
      if (addedDate < cutoff) {
        // Remove NEW tag
        event.isNew = false;
        event.tags = event.tags.filter(t => t.text !== 'NEW');
      }
    }
    return event;
  });
}

/**
 * Write updated data back to data.js
 *
 * IMPORTANT: This function appends new events to the existing file
 * rather than rewriting the entire file to preserve formatting.
 */
function saveData(data, newEvents) {
  // Read the original file
  const originalContent = fs.readFileSync(DATA_FILE, 'utf-8');

  // Find the position to insert new events (before the last ] of events array)
  // Look for the pattern: closing of last event object followed by events array close
  const insertionMatch = originalContent.match(/(\n  \]\n\};\n\n\/\/ Helper API)/);

  if (!insertionMatch) {
    console.error('Could not find insertion point in data.js');
    return false;
  }

  // Format each new event as a string
  const newEventsStr = newEvents.map(event => {
    return formatEventAsJS(event);
  }).join(',\n');

  // Insert the new events before the closing bracket
  const insertPosition = originalContent.indexOf(insertionMatch[0]);
  const beforeInsert = originalContent.substring(0, insertPosition);
  const afterInsert = originalContent.substring(insertPosition);

  // Add comma after last existing event and insert new events
  const today = new Date().toISOString().split('T')[0];
  const sectionHeader = `    // ========================================\n    // AUTO-ADDED EVENTS (${today})\n    // ========================================\n`;
  const newContent = beforeInsert + ',\n\n' + sectionHeader + newEventsStr + afterInsert;

  // Update the totalEvents count in meta
  const updatedContent = newContent.replace(
    /totalEvents: \d+/,
    `totalEvents: ${data.meta.totalEvents}`
  );

  fs.writeFileSync(DATA_FILE, updatedContent, 'utf-8');
  return true;
}

/**
 * Format a single event object as JavaScript code string
 */
function formatEventAsJS(event) {
  const indent = '    ';
  const lines = [];

  lines.push(`${indent}{`);
  lines.push(`${indent}  id: "${event.id}",`);
  lines.push(`${indent}  title: "${escapeString(event.title)}",`);
  lines.push(`${indent}  organizer: "${escapeString(event.organizer)}",`);
  lines.push(`${indent}  icon: "${event.icon}",`);
  lines.push(`${indent}  page: "${event.page}",`);
  lines.push(`${indent}  category: ${JSON.stringify(event.category)},`);
  lines.push(`${indent}  type: ${JSON.stringify(event.type)},`);
  lines.push(`${indent}  tags: [`);
  event.tags.forEach((tag, i) => {
    const comma = i < event.tags.length - 1 ? ',' : '';
    lines.push(`${indent}    { text: "${escapeString(tag.text)}", color: "${tag.color}" }${comma}`);
  });
  lines.push(`${indent}  ],`);
  lines.push(`${indent}  dates: {`);
  lines.push(`${indent}    start: "${event.dates.start}",`);
  lines.push(`${indent}    end: "${event.dates.end}",`);
  lines.push(`${indent}    deadline: ${event.dates.deadline ? `"${event.dates.deadline}"` : 'null'},`);
  lines.push(`${indent}    countdownTarget: "${event.dates.countdownTarget}"`);
  lines.push(`${indent}  },`);
  lines.push(`${indent}  dateDisplay: { month: "${event.dateDisplay.month}", day: "${event.dateDisplay.day}" },`);
  lines.push(`${indent}  eventType: "${event.eventType}",`);
  lines.push(`${indent}  isUrgent: ${event.isUrgent},`);
  lines.push(`${indent}  isFeatured: ${event.isFeatured},`);
  lines.push(`${indent}  isNew: ${event.isNew},`);
  lines.push(`${indent}  addedDate: "${event.addedDate}",`);
  lines.push(`${indent}  prize: ${event.prize ? `{ amount: "${escapeString(event.prize.amount)}", icon: "${event.prize.icon}" }` : 'null'},`);
  lines.push(`${indent}  location: { type: "${event.location.type}", city: ${event.location.city ? `"${event.location.city}"` : 'null'}, country: ${event.location.country ? `"${event.location.country}"` : 'null'}, display: "${escapeString(event.location.display)}" },`);
  lines.push(`${indent}  modal: {`);
  lines.push(`${indent}    overview: "${escapeString(event.modal.overview)}",`);
  lines.push(`${indent}    requirements: null,`);
  lines.push(`${indent}    keyDates: null,`);
  lines.push(`${indent}    topics: null,`);
  lines.push(`${indent}    resources: [`);
  event.modal.resources.forEach((res, i) => {
    const comma = i < event.modal.resources.length - 1 ? ',' : '';
    lines.push(`${indent}      { icon: "${res.icon}", label: "${escapeString(res.label)}", url: "${res.url}" }${comma}`);
  });
  lines.push(`${indent}    ]`);
  lines.push(`${indent}  },`);
  lines.push(`${indent}  links: {`);
  lines.push(`${indent}    register: "${event.links.register}",`);
  lines.push(`${indent}    website: "${event.links.website}"`);
  lines.push(`${indent}  }`);
  lines.push(`${indent}}`);

  return lines.join('\n');
}

/**
 * Escape special characters in strings for JavaScript
 */
function escapeString(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

/**
 * Validate that data.js is still valid JavaScript after modification
 */
function validateDataFile() {
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf-8');
    // Use Function constructor to validate syntax
    new Function(content + '; return EVENTS_DATA;');
    console.log('Validation: data.js syntax is valid');
    return true;
  } catch (error) {
    console.error('Validation FAILED: data.js has syntax errors!');
    console.error(error.message);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('=== Event Fetcher Started ===');
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
  console.log('');

  // Load existing data
  const data = loadExistingData();
  const existingIds = getExistingIds(data);
  console.log(`Existing events: ${data.events.length}`);
  console.log('');

  // Fetch from all sources (with error handling per source)
  console.log('Fetching events from sources...');
  const sources = [
    { name: 'Lablab.ai', fn: fetchLablabEvents },
    { name: 'DevPost', fn: fetchDevPostEvents },
    { name: 'MLH', fn: fetchMLHEvents },
    { name: 'WikiCFP', fn: fetchWikiCFP },
    { name: 'AI Deadlines', fn: fetchAIDeadlines },
  ];

  const allRawEvents = [];
  for (const source of sources) {
    try {
      const events = await source.fn();
      allRawEvents.push(...events);
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error.message);
    }
  }

  console.log('');
  console.log(`Total raw events found: ${allRawEvents.length}`);

  // Filter out duplicates
  const newEvents = allRawEvents.filter(e => !existingIds.has(e.id));
  console.log(`New events (not already in calendar): ${newEvents.length}`);

  if (newEvents.length === 0) {
    console.log('No new events to add.');
    return;
  }

  // Convert to full format, filtering out any that failed conversion
  const convertedEvents = newEvents
    .map(convertToFullEvent)
    .filter(event => event !== null);

  if (convertedEvents.length === 0) {
    console.log('No valid events to add after conversion.');
    return;
  }

  // Update meta count
  data.meta.totalEvents = data.events.length + convertedEvents.length;

  console.log('');
  console.log(`New events to add (${convertedEvents.length}):`);
  convertedEvents.forEach(e => {
    console.log(`  - [${e.page}] ${e.title}`);
  });

  if (DRY_RUN) {
    console.log('');
    console.log('DRY RUN - not saving changes');
    console.log('');
    console.log('Sample formatted event:');
    console.log(formatEventAsJS(convertedEvents[0]));
  } else {
    // Save the new events
    const success = saveData(data, convertedEvents);

    if (success) {
      console.log('');
      console.log('Data saved to data.js');

      // Validate the file is still valid
      console.log('');
      if (!validateDataFile()) {
        console.error('ERROR: File validation failed! Restoring backup...');
        // The git workflow will not commit if validation fails
        process.exit(1);
      }
    } else {
      console.error('ERROR: Failed to save data');
      process.exit(1);
    }
  }

  console.log('');
  console.log('=== Event Fetcher Complete ===');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
