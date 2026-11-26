/**
 * REALITY TV TRENDS TIMELINE — /reality-tv-trends-timeline
 * Real, public events only: fan campaigns and X trends with a screenshot or a public source.
 * `date`: 'YYYY-MM-DD', or '' if you don't have it yet (it then shows as "Date to be added" and sorts last in its season).
 * The page is noindex and left out of the sitemap until it has at least MIN_ENTRIES entries.
 */
export type TimelineEntry = {
  show: string // e.g. 'Bigg Boss'
  season: string // e.g. 'Season 18'
  year: number // year the season aired / ended (for ordering)
  date: string
  title: string
  desc: string
  caseStudy?: string
  source?: string // public link, if any
}

export const MIN_ENTRIES = 8

export const timeline: TimelineEntry[] = [
  {
    show: 'Rise and Fall',
    season: 'Season 2',
    year: 2026,
    date: '2026-09-19',
    title: 'Niharika Tiwari’s campaign begins',
    desc: 'A seven-week campaign from 19 September to 5 November 2026: 143 media page posts, 330+ meme page posts including regional Punjabi pages, six interviews and 67 X posts.',
    caseStudy: 'niharika-tiwari-rise-and-fall-finalist',
  },
  {
    show: 'The Alliance',
    season: 'Season 1',
    year: 2025, // TODO(Sid): confirm year
    date: '', // TODO(Sid): finale date
    title: 'Finale-day trend reaches #1 in India',
    desc: 'After a six-week X campaign covering all 42 daily episodes of Prime Video’s The Alliance, the finale-day trend reached #1 in India.',
    caseStudy: 'the-alliance-prime-video-x-campaign',
  },
  {
    show: 'Bigg Boss',
    season: 'Season 19',
    year: 2025,
    date: '', // TODO(Sid): date
    title: 'BIGGBOSS USE MRIDUL hits #1',
    desc: 'Mridul Tiwari’s fans trend BIGGBOSS USE MRIDUL to #1 in India with 187.9K+ posts.',
    caseStudy: 'mridul-tiwari-bigg-boss-19-x-trends',
  },
  {
    show: 'Bigg Boss',
    season: 'Season 19',
    year: 2025,
    date: '', // TODO(Sid): date
    title: 'BEST CAPTAIN MRIDUL trends at #1',
    desc: 'Mridul Tiwari’s captaincy becomes a trend of its own, reaching #1 in India with 42K+ posts.',
    caseStudy: 'mridul-tiwari-bigg-boss-19-x-trends',
  },
  {
    show: 'Bigg Boss',
    season: 'Season 19',
    year: 2025,
    date: '', // TODO(Sid): date
    title: 'MRIDUL ALWAYS ON FIRE reaches #3',
    desc: '80K+ posts and #3 in India for MRIDUL ALWAYS ON FIRE.',
    caseStudy: 'mridul-tiwari-bigg-boss-19-x-trends',
  },
  {
    show: 'Bigg Boss',
    season: 'Season 18',
    year: 2025,
    date: '2025-01-07',
    title: '“BB TROPHY HAKDAAR RAJAT” X Space',
    desc: 'A live X Space for Rajat Dalal’s supporters runs 2 hours 18 minutes, with 77K people tuned in.',
    caseStudy: 'rajat-dalal-bigg-boss-18-pr-campaign',
  },
  {
    show: 'Bigg Boss',
    season: 'Season 18',
    year: 2025,
    date: '2025-01-13',
    title: '#RajatIsTheBoss logs 210K mentions',
    desc: 'In the run-up to the finale, #RajatIsTheBoss logs 210K mentions between 13 and 17 January 2025, measured on Talkwalker.',
    caseStudy: 'rajat-dalal-bigg-boss-18-pr-campaign',
  },
  // TODO(Sid): add more real, public fan campaigns and trends (other seasons, other shows), with sources
]

export const timelineIndexable = timeline.length >= MIN_ENTRIES
export const timelineUpdatedAt = '2026-11-26'
