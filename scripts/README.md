# Event Fetcher Scripts

Automated scripts to fetch new tech events, hackathons, and CFPs.

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

### GitHub Actions (Automated)

The GitHub Action runs daily at 6:00 AM UTC. It:
1. Fetches events from all sources
2. Filters out duplicates (by event ID)
3. Adds new events with a `NEW` tag
4. Auto-commits changes to the repository

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
