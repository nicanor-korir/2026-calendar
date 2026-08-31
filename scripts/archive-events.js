/**
 * Archive Events Script
 * Moves past events to archived status and updates counts
 *
 * An event is considered "past" when:
 * - Its deadline has passed (for CFPs), OR
 * - Its end date has passed, OR
 * - Its start date has passed (if no end date)
 *
 * Events whose dates are not known yet (TBD/TBA, or a placeholder left behind
 * by a source that published no dates) are NOT archived on those dates - they
 * are handed to refresh-events.js instead, which tries to resolve them. The one
 * exception is a TBD event still pointing at a year that has already ended.
 */

import { loadData, writeData, updateMetaCounts } from './lib/data-file.js';
import { isEventPast, hasUnknownDates, isStaleUnknown } from './lib/event-dates.js';

const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Check if an event should be archived
 */
function shouldArchive(event, now = new Date()) {
  // Already archived
  if (event.isArchived) {
    return false;
  }

  // Dates not announced yet - keep it listed unless its year is already over
  if (hasUnknownDates(event)) {
    return isStaleUnknown(event, now);
  }

  return isEventPast(event, now);
}

/**
 * Archive events and update counts
 */
function archiveEvents(data) {
  const now = new Date();
  let archivedCount = 0;
  const archivedByPage = { events: 0, hackathons: 0, cfp: 0 };

  data.events.forEach(event => {
    if (shouldArchive(event, now)) {
      event.isArchived = true;
      archivedCount++;
      archivedByPage[event.page]++;
      console.log(`  Archived: ${event.title} (${event.page})`);
    }
  });

  updateMetaCounts(data);

  return { archivedCount, archivedByPage };
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
  const data = loadData();
  console.log(`Found ${data.events.length} total events`);
  console.log('');

  // Archive past events
  console.log('Checking for past events...');
  const { archivedCount, archivedByPage } = archiveEvents(data);
  console.log('');

  // Report events still waiting on dates so the TBD backlog stays visible
  const pendingDates = data.events.filter(e => !e.isArchived && hasUnknownDates(e));
  if (pendingDates.length > 0) {
    console.log(`${pendingDates.length} active events still have unknown dates ` +
      `(run refresh-events.js to resolve them)`);
    console.log('');
  }

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
