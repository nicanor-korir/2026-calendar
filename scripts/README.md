# Event Scripts

Automated scripts that keep the calendar current.

| Script | What it does | Schedule |
| --- | --- | --- |
| `fetch-events.js` | Discovers new events from the sources below | Weekly (Sun 20:00 UTC) |
| `refresh-events.js` | Re-checks events whose dates are TBD/TBA or still a placeholder | Daily (05:00 UTC) |
| `archive-events.js` | Moves finished events to the Archive tab | Daily (05:00 UTC) |

`refresh-events.js` and `archive-events.js` run in that order inside the same
workflow, so an event whose real dates turn out to be in the past is resolved
and archived in one pass. Shared logic lives in `lib/`:

- `lib/event-dates.js` - date parsing, TBD detection, "is this event over?"
- `lib/data-file.js` - reading and re-serialising `js/data.js`

## Sources

The fetcher monitors these sources:

### Hackathons
- **Lablab.ai** - AI hackathons and challenges
- **DevPost** - General tech hackathons
- **MLH** - Major League Hacking events

### Academic CFPs
- **WikiCFP** - Academic call for papers
- **AI Deadlines** (aideadlin.es) - AI/ML conference deadlines

## Usage

### Manual Run

```bash
cd scripts
npm install
npm run fetch
```

### Dry Run (test without saving)

```bash
npm run test
```

### Archiving past events

```bash
npm run archive              # move finished events to the archive
node archive-events.js --dry-run
```

### Refreshing TBD / TBA events

```bash
npm run refresh              # stored-text pass, then fetch source pages
node refresh-events.js --offline    # skip all network calls
node refresh-events.js --dry-run    # report only
node refresh-events.js --limit=25   # cap how many pages are fetched
```

### GitHub Actions (Automated)

**Update Events Calendar** (weekly) fetches from all sources, filters out
duplicates by event ID, and opens a PR adding the new events with a `NEW` tag.

**Refresh & Archive Events** (daily) resolves TBD dates, archives everything
that has finished, and opens a PR. Both workflows share a `events-data`
concurrency group so they never rewrite `js/data.js` at the same time.

## NEW Tag System

- New events get a `NEW` tag with green pulsing animation
- Tags automatically expire after 7 days
- Filter by "New" on any page to see recent additions

## Configuration

### GitHub Secrets (Optional)

- `DEVPOST_API_KEY` - For enhanced DevPost API access

### Modifying Sources

Edit `fetch-events.js` to:
- Add new event sources
- Adjust scraping selectors
- Change the NEW tag duration

## Unknown dates (TBD / TBA)

Sources regularly list an event before its dates are set. The fetcher records
those as `datesTBD: true` with a `"2026 TBD"` badge instead of inventing a
date - a fabricated date renders as a real one on the card and would never
archive.

`refresh-events.js` revisits every such event daily and tries, in order:

1. A date range in the description we already stored, e.g.
   `... [Berlin, Germany] [Oct 14, 2026 - Oct 18, 2026]`
2. schema.org `Event` JSON-LD on the event's own page
3. A WikiCFP "When / Submission Deadline" table
4. A date range in the page's visible text

Anything still unresolved keeps whatever granularity is known: a real month
with an unconfirmed day stays `Dec TBA` (and still archives once that date
passes), while a pure placeholder stays `2026 TBD` and is only archived once
that year is over.

The frontend also treats any event whose date has passed as archived at render
time, so the calendar stays correct even between workflow runs.

## Event Format

New events are converted to this format:

```javascript
{
  id: "source-unique-id",
  title: "Event Title",
  organizer: "Source Name",
  icon: "💻",
  page: "hackathons",  // or "events" or "cfp"
  category: ["hackathon"],
  type: [],
  tags: [{ text: "NEW", color: "gold" }],
  isNew: true,
  addedDate: "2025-12-21",
  dates: { start: "...", end: "...", deadline: null },
  // ... other fields
}
```

## Troubleshooting

### Scraper not finding events
- Website structure may have changed
- Check browser console for CSS selectors
- Some sites block automated requests

### Duplicate events appearing
- Check the `id` generation logic
- Ensure consistent ID format across runs
