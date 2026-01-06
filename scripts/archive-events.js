/**
 * Archive Events Script
 * Moves past events to archived status and updates counts
 *
 * An event is considered "past" when:
 * - Its end date has passed, OR
 * - Its deadline has passed (for CFPs), OR
 * - Its start date has passed (if no end date)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '..', 'js', 'data.js');
const DRY_RUN = process.argv.includes('--dry-run');

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
 * Check if an event should be archived
 */
function shouldArchive(event) {
  const now = new Date();

  // Already archived
  if (event.isArchived) {
    return false;
  }

  // For CFPs, check the deadline
  if (event.page === 'cfp' && event.dates.deadline) {
    const deadline = new Date(event.dates.deadline);
    return deadline < now;
  }

  // For other events, check the end date (or start date if no end)
  const endDate = event.dates.end ? new Date(event.dates.end) : null;
  const startDate = new Date(event.dates.start);

  if (endDate) {
    return endDate < now;
  }

  return startDate < now;
}

/**
 * Archive events and update counts
 */
function archiveEvents(data) {
  let archivedCount = 0;
  const archivedByPage = { events: 0, hackathons: 0, cfp: 0 };

  data.events.forEach(event => {
    if (shouldArchive(event)) {
      event.isArchived = true;
      archivedCount++;
      archivedByPage[event.page]++;
      console.log(`  Archived: ${event.title} (${event.page})`);
    }
  });

  // Update meta counts (only count non-archived events)
  const activeEvents = data.events.filter(e => !e.isArchived);
  data.meta.totalEvents = activeEvents.length;
  data.meta.berlinEvents = activeEvents.filter(e =>
    e.page === 'events' && e.category.includes('berlin')
  ).length;
  data.meta.cfpCount = activeEvents.filter(e => e.page === 'cfp').length;

  return { archivedCount, archivedByPage };
}

/**
 * Serialize event object to JavaScript string
 */
function serializeEvent(event, indent = '    ') {
  const lines = ['{'];
  const entries = Object.entries(event);

  entries.forEach(([key, value], index) => {
    const comma = index < entries.length - 1 ? ',' : '';

    if (value === null) {
      lines.push(`${indent}  ${key}: null${comma}`);
    } else if (typeof value === 'boolean') {
      lines.push(`${indent}  ${key}: ${value}${comma}`);
    } else if (typeof value === 'string') {
      // Escape quotes and newlines in strings
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
      lines.push(`${indent}  ${key}: "${escaped}"${comma}`);
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(`${indent}  ${key}: []${comma}`);
      } else if (typeof value[0] === 'string') {
        const items = value.map(v => `"${v}"`).join(', ');
        lines.push(`${indent}  ${key}: [${items}]${comma}`);
      } else {
        // Array of objects
        const items = value.map(item => {
          if (typeof item === 'object') {
            const props = Object.entries(item).map(([k, v]) => {
              if (v === null) return `${k}: null`;
              if (typeof v === 'boolean') return `${k}: ${v}`;
              if (typeof v === 'string') {
                const esc = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                return `${k}: "${esc}"`;
              }
              return `${k}: ${JSON.stringify(v)}`;
            }).join(', ');
            return `{ ${props} }`;
          }
          return JSON.stringify(item);
        });
        lines.push(`${indent}  ${key}: [`);
        items.forEach((item, i) => {
          const itemComma = i < items.length - 1 ? ',' : '';
          lines.push(`${indent}    ${item}${itemComma}`);
        });
        lines.push(`${indent}  ]${comma}`);
      }
    } else if (typeof value === 'object') {
      // Nested object (dates, location, modal, links, etc.)
      const nestedLines = [];
      const nestedEntries = Object.entries(value);
      nestedEntries.forEach(([nKey, nValue], nIndex) => {
        const nComma = nIndex < nestedEntries.length - 1 ? ',' : '';
        if (nValue === null) {
          nestedLines.push(`${indent}    ${nKey}: null${nComma}`);
        } else if (typeof nValue === 'boolean') {
          nestedLines.push(`${indent}    ${nKey}: ${nValue}${nComma}`);
        } else if (typeof nValue === 'string') {
          const escaped = nValue.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
          nestedLines.push(`${indent}    ${nKey}: "${escaped}"${nComma}`);
        } else if (Array.isArray(nValue)) {
          if (nValue.length === 0) {
            nestedLines.push(`${indent}    ${nKey}: []${nComma}`);
          } else if (typeof nValue[0] === 'string') {
            const items = nValue.map(v => `"${v}"`).join(', ');
            nestedLines.push(`${indent}    ${nKey}: [${items}]${nComma}`);
          } else {
            // Array of objects (like resources)
            const items = nValue.map(item => {
              const props = Object.entries(item).map(([k, v]) => {
                if (v === null) return `${k}: null`;
                if (typeof v === 'string') {
                  const esc = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                  return `${k}: "${esc}"`;
                }
                return `${k}: ${JSON.stringify(v)}`;
              }).join(', ');
              return `{ ${props} }`;
            });
            nestedLines.push(`${indent}    ${nKey}: [`);
            items.forEach((item, i) => {
              const itemComma = i < items.length - 1 ? ',' : '';
              nestedLines.push(`${indent}      ${item}${itemComma}`);
            });
            nestedLines.push(`${indent}    ]${nComma}`);
          }
        } else if (typeof nValue === 'object') {
          // Deep nested object
          const deepProps = Object.entries(nValue).map(([dk, dv]) => {
            if (dv === null) return `${dk}: null`;
            if (typeof dv === 'string') {
              const esc = dv.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
              return `${dk}: "${esc}"`;
            }
            return `${dk}: ${JSON.stringify(dv)}`;
          }).join(', ');
          nestedLines.push(`${indent}    ${nKey}: { ${deepProps} }${nComma}`);
        }
      });
      lines.push(`${indent}  ${key}: {`);
      lines.push(...nestedLines);
      lines.push(`${indent}  }${comma}`);
    }
  });

  lines.push(`${indent}}`);
  return lines.join('\n');
}

/**
 * Write updated data back to data.js
 */
function writeData(data) {
  // Build the events array section
  const eventsSerialized = data.events.map(e => serializeEvent(e)).join(',\n');

  // Build filters section
  const filtersSection = Object.entries(data.filters).map(([page, filters]) => {
    const filterItems = filters.map(f => {
      const props = [];
      props.push(`id: "${f.id}"`);
      props.push(`label: "${f.label}"`);
      props.push(`icon: ${f.icon ? `"${f.icon}"` : 'null'}`);
      if (f.showCount) props.push(`showCount: true`);
      return `      { ${props.join(', ')} }`;
    }).join(',\n');
    return `    ${page}: [\n${filterItems}\n    ]`;
  }).join(',\n');

  const content = `// 2026 Tech Events Calendar - Data Layer
// Single source of truth for all events

const EVENTS_DATA = {
  meta: {
    title: "${data.meta.title}",
    subtitle: "${data.meta.subtitle}",
    totalEvents: ${data.meta.totalEvents},
    totalPrizes: "${data.meta.totalPrizes}",
    berlinEvents: ${data.meta.berlinEvents},
    cfpCount: ${data.meta.cfpCount}
  },

  // Filter definitions for each page
  filters: {
${filtersSection}
  },

  // All events
  events: [
${eventsSerialized}
  ]
};

// Helper API to access events data
const EventsAPI = {
  _sortByDate(events) {
    return [...events].sort((a, b) => {
      const dateA = new Date(a.dates.start);
      const dateB = new Date(b.dates.start);
      return dateA - dateB;
    });
  },

  getAll() {
    return this._sortByDate(EVENTS_DATA.events);
  },

  getByPage(pageName, includeArchived = false) {
    const filtered = EVENTS_DATA.events.filter(e =>
      e.page === pageName && (includeArchived || !e.isArchived)
    );
    return this._sortByDate(filtered);
  },

  getById(id) {
    return EVENTS_DATA.events.find(e => e.id === id);
  },

  getFeatured(pageName) {
    return EVENTS_DATA.events.find(e => e.isFeatured && e.page === pageName && !e.isArchived);
  },

  getFiltersForPage(pageName) {
    return EVENTS_DATA.filters[pageName] || [];
  },

  getMeta() {
    return EVENTS_DATA.meta;
  },

  filterEvents(events, filterValue) {
    if (filterValue === 'all') return events.filter(e => !e.isArchived);

    // Special handling for "archive" filter
    if (filterValue === 'archive') {
      return events.filter(event => event.isArchived === true);
    }

    // Special handling for "new" filter
    if (filterValue === 'new') {
      return events.filter(event => event.isNew === true && !event.isArchived);
    }

    return events.filter(event => {
      if (event.isArchived) return false;
      const matchesCategory = event.category.includes(filterValue);
      const matchesType = event.type.includes(filterValue);
      return matchesCategory || matchesType;
    });
  },

  // Get count of new events
  getNewEventsCount() {
    return EVENTS_DATA.events.filter(e => e.isNew === true && !e.isArchived).length;
  },

  // Get count of archived events for a page
  getArchivedCount(pageName) {
    return EVENTS_DATA.events.filter(e => e.page === pageName && e.isArchived).length;
  }
};
`;

  fs.writeFileSync(DATA_FILE, content, 'utf-8');
}

/**
 * Main function
 */
async function main() {
  console.log('Archive Events Script');
  console.log('=====================');
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no changes)' : 'LIVE'}`);
  console.log('');

  // Load current data
  console.log('Loading data.js...');
  const data = loadExistingData();
  console.log(`Found ${data.events.length} total events`);
  console.log('');

  // Archive past events
  console.log('Checking for past events...');
  const { archivedCount, archivedByPage } = archiveEvents(data);
  console.log('');

  if (archivedCount === 0) {
    console.log('No events to archive.');
    return;
  }

  console.log(`Archived ${archivedCount} events:`);
  console.log(`  - Events page: ${archivedByPage.events}`);
  console.log(`  - Hackathons page: ${archivedByPage.hackathons}`);
  console.log(`  - CFP page: ${archivedByPage.cfp}`);
  console.log('');

  console.log('Updated counts:');
  console.log(`  - Total active events: ${data.meta.totalEvents}`);
  console.log(`  - Berlin events: ${data.meta.berlinEvents}`);
  console.log(`  - Active CFPs: ${data.meta.cfpCount}`);

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
