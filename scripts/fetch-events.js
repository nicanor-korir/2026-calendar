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
      events.push({
        id,
        title: hack.title,
        source: 'devpost',
        url: hack.url,
        startDate: hack.submission_period_dates?.split(' - ')[0],
        endDate: hack.submission_period_dates?.split(' - ')[1],
        prize: hack.prize_amount,
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
 */
function saveData(data) {
  // Read the original file to preserve the EventsAPI code
  const originalContent = fs.readFileSync(DATA_FILE, 'utf-8');
  const apiMatch = originalContent.match(/(\/\/ Helper API for accessing event data[\s\S]*$)/);
  const apiCode = apiMatch ? apiMatch[1] : '';

  // Format the events data
  const jsonStr = JSON.stringify(data, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
    .replace(/"/g, "'"); // Use single quotes for strings

  const newContent = `// 2026 Tech Events Calendar - Data Layer
// Single source of truth for all events
// Last auto-updated: ${new Date().toISOString()}

const EVENTS_DATA = ${jsonStr};

${apiCode}`;

  fs.writeFileSync(DATA_FILE, newContent, 'utf-8');
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

  // Fetch from all sources
  const allRawEvents = [
    ...(await fetchLablabEvents()),
    ...(await fetchDevPostEvents()),
    ...(await fetchMLHEvents()),
    ...(await fetchWikiCFP()),
    ...(await fetchAIDeadlines()),
  ];

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

  // Add new events
  data.events.push(...convertedEvents);

  // Cleanup expired NEW tags
  data.events = cleanupNewTags(data.events);

  // Update meta
  data.meta.totalEvents = data.events.length;

  console.log('');
  console.log('New events to add:');
  convertedEvents.forEach(e => {
    console.log(`  - [${e.page}] ${e.title}`);
  });

  if (DRY_RUN) {
    console.log('');
    console.log('DRY RUN - not saving changes');
  } else {
    saveData(data);
    console.log('');
    console.log('Data saved to data.js');
  }

  console.log('');
  console.log('=== Event Fetcher Complete ===');
}

main().catch(console.error);
