/**
 * Read/write helpers for js/data.js.
 *
 * data.js is a plain JS file rather than JSON, so it is parsed by extracting
 * the EVENTS_DATA literal and re-serialised in full when written back.
 * Shared by archive-events.js and refresh-events.js so the two can never
 * disagree about the file format.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DATA_FILE = path.join(__dirname, '..', '..', 'js', 'data.js');

/**
 * Parse the existing data.js file
 */
export function loadData() {
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  const match = content.match(/const EVENTS_DATA = (\{[\s\S]*?\});[\s\S]*?\/\/ Helper API/);
  if (!match) {
    throw new Error('Could not parse EVENTS_DATA from data.js');
  }
  // Use eval to parse the object (safe since we control the file)
  return eval('(' + match[1] + ')');
}

/**
 * Recompute the header counts from the current event list
 */
export function updateMetaCounts(data) {
  const activeEvents = data.events.filter(e => !e.isArchived);
  data.meta.totalEvents = activeEvents.length;
  // 'berlin' lives in type[] for most events, category[] for a few - the
  // Berlin filter tab matches either, so the header count must too
  data.meta.berlinEvents = activeEvents.filter(e =>
    e.page === 'events' &&
    (e.category.includes('berlin') || e.type.includes('berlin'))
  ).length;
  data.meta.cfpCount = activeEvents.filter(e => e.page === 'cfp').length;
  return data.meta;
}

/**
 * Helper to format object key - quotes if contains special characters
 */
export function formatKey(key) {
  // If key contains characters that require quoting (hyphens, spaces, etc.)
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
    return key; // Valid identifier, no quotes needed
  }
  return `"${key}"`; // Needs quotes
}

/**
 * Serialize event object to JavaScript string
 */
export function serializeEvent(event, indent = '    ') {
  const lines = ['{'];
  const entries = Object.entries(event);

  entries.forEach(([key, value], index) => {
    const comma = index < entries.length - 1 ? ',' : '';

    if (value === null) {
      lines.push(`${indent}  ${formatKey(key)}: null${comma}`);
    } else if (typeof value === 'boolean') {
      lines.push(`${indent}  ${formatKey(key)}: ${value}${comma}`);
    } else if (typeof value === 'string') {
      // Escape quotes and newlines in strings
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
      lines.push(`${indent}  ${formatKey(key)}: "${escaped}"${comma}`);
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(`${indent}  ${formatKey(key)}: []${comma}`);
      } else if (typeof value[0] === 'string') {
        const items = value.map(v => `"${v}"`).join(', ');
        lines.push(`${indent}  ${formatKey(key)}: [${items}]${comma}`);
      } else {
        // Array of objects
        const items = value.map(item => {
          if (typeof item === 'object') {
            const props = Object.entries(item).map(([k, v]) => {
              if (v === null) return `${formatKey(k)}: null`;
              if (typeof v === 'boolean') return `${formatKey(k)}: ${v}`;
              if (typeof v === 'string') {
                const esc = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                return `${formatKey(k)}: "${esc}"`;
              }
              return `${formatKey(k)}: ${JSON.stringify(v)}`;
            }).join(', ');
            return `{ ${props} }`;
          }
          return JSON.stringify(item);
        });
        lines.push(`${indent}  ${formatKey(key)}: [`);
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
          nestedLines.push(`${indent}    ${formatKey(nKey)}: null${nComma}`);
        } else if (typeof nValue === 'boolean') {
          nestedLines.push(`${indent}    ${formatKey(nKey)}: ${nValue}${nComma}`);
        } else if (typeof nValue === 'string') {
          const escaped = nValue.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
          nestedLines.push(`${indent}    ${formatKey(nKey)}: "${escaped}"${nComma}`);
        } else if (Array.isArray(nValue)) {
          if (nValue.length === 0) {
            nestedLines.push(`${indent}    ${formatKey(nKey)}: []${nComma}`);
          } else if (typeof nValue[0] === 'string') {
            const items = nValue.map(v => `"${v}"`).join(', ');
            nestedLines.push(`${indent}    ${formatKey(nKey)}: [${items}]${nComma}`);
          } else {
            // Array of objects (like resources)
            const items = nValue.map(item => {
              const props = Object.entries(item).map(([k, v]) => {
                if (v === null) return `${formatKey(k)}: null`;
                if (typeof v === 'string') {
                  const esc = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                  return `${formatKey(k)}: "${esc}"`;
                }
                return `${formatKey(k)}: ${JSON.stringify(v)}`;
              }).join(', ');
              return `{ ${props} }`;
            });
            nestedLines.push(`${indent}    ${formatKey(nKey)}: [`);
            items.forEach((item, i) => {
              const itemComma = i < items.length - 1 ? ',' : '';
              nestedLines.push(`${indent}      ${item}${itemComma}`);
            });
            nestedLines.push(`${indent}    ]${nComma}`);
          }
        } else if (typeof nValue === 'object') {
          // Deep nested object
          const deepProps = Object.entries(nValue).map(([dk, dv]) => {
            if (dv === null) return `${formatKey(dk)}: null`;
            if (typeof dv === 'string') {
              const esc = dv.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
              return `${formatKey(dk)}: "${esc}"`;
            }
            return `${formatKey(dk)}: ${JSON.stringify(dv)}`;
          }).join(', ');
          nestedLines.push(`${indent}    ${formatKey(nKey)}: { ${deepProps} }${nComma}`);
        }
      });
      lines.push(`${indent}  ${formatKey(key)}: {`);
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
export function writeData(data) {
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
    return `    ${formatKey(page)}: [\n${filterItems}\n    ]`;
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
    // Sort by the date the card advertises: a CFP's submission deadline,
    // everything else's start date. Events whose dates are not announced yet
    // sort to the end rather than to 1970.
    const key = (e) => {
      if (e.datesTBD) return Infinity;
      const value = e.page === 'cfp' && e.dates.deadline
        ? e.dates.deadline
        : e.dates.start;
      const t = new Date(value).getTime();
      return isNaN(t) ? Infinity : t;
    };
    return [...events].sort((a, b) => key(a) - key(b));
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

