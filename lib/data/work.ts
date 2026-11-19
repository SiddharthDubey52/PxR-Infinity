/**
 * CASE STUDIES — every /work/[slug] page is generated from this list.
 * Only publish real, client-approved results.
 * `cover` uses the client photo in /public/clients/ (initials fallback if missing).
 */

export const allWorkCategories = ['Brands', 'Celebrities', 'Reality TV', 'OTT show', 'Entertainment'] as const
export type WorkCategory = (typeof allWorkCategories)[number]

export type CaseStudy = {
  slug: string
  title: string
  /** SEO <title> (the page H1 stays `title`) */
  metaTitle: string
  keywords: string[]
  client: string
  category: WorkCategory
  services: string[] // service slugs
  cover: string
  coverAlt: string
  summary: string
  problem: string
  approach: string[]
  results: { value: string; label: string }[]
  quote?: { text: string; name: string; role: string }
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shehzad-poonawalla-rise-and-fall-winner',
    title: 'Taking a TV debater all the way to the Rise & Fall trophy',
    metaTitle: 'Shehzad Poonawalla — Rise & Fall S2 Winner Campaign',
    keywords: ['Shehzad Poonawalla Rise and Fall campaign', 'Shehzad Poonawalla PR team', 'Rise and Fall winner PR campaign'],
    client: 'Shehzad Poonawalla',
    category: 'Reality TV',
    services: ['reality-show-pr', 'meme-marketing', 'pr-media-coverage'],
    cover: '/clients/shehzad-poonawalla.jpg',
    coverAlt: 'Shehzad Poonawalla — PXR Infinity client, Rise & Fall S2 winner',
    summary:
      'A season-long narrative campaign: meme pages, media and paps pages, news coverage, reel comments and X Spaces.',
    problem:
      'A political commentator entered an entertainment show with a polarising image and politically opposed housemates.',
    approach: [
      'Built a season-long narrative for audiences outside his political following.',
      'Ran meme page campaigns from our network across the season.',
      'Placed coverage on media and paps pages, and secured news articles across 35+ outlets.',
      'Kept the conversation going through reel comments and X Spaces.',
    ],
    results: [
      { value: 'Winner', label: 'Rise & Fall Season 2' },
      { value: '246', label: 'Media and meme page posts' },
      { value: '73', label: 'News articles across 35+ outlets' },
    ],
    featured: true,
  },
  {
    slug: 'niharika-tiwari-rise-and-fall-finalist',
    title: 'Building a name of her own in a celebrity-heavy cast',
    metaTitle: 'Niharika Tiwari — Rise & Fall Campaign, 350M+ Reach',
    keywords: ['Niharika Tiwari Rise and Fall campaign', 'Niharika Tiwari PR team', 'Rise and Fall contestant PR'],
    client: 'Niharika Tiwari',
    category: 'Reality TV',
    services: ['reality-show-pr', 'meme-marketing', 'x-twitter-trends'],
    cover: '/clients/niharika-tiwari.jpg',
    coverAlt: 'Niharika Tiwari — PXR Infinity client, Rise & Fall S2 finalist',
    summary: 'Meme marketing on 500+ pages from our network, paps spotting, reality TV media, news articles and X trends.',
    problem:
      'She was known mostly through a past relationship and was up against film, TV and political names.',
    approach: [
      'Ran meme marketing on 500+ pages from our network.',
      'Arranged paps spotting and coverage on reality TV media pages.',
      'Secured news articles to build her own identity.',
      'Ran X trends that reached #1 eight times.',
    ],
    results: [
      { value: 'Top 6', label: 'Finalist, Rise & Fall Season 2' },
      { value: '350M+', label: 'Reach delivered' },
      { value: '8', label: 'X trends at #1' },
    ],
    featured: true,
  },
  {
    slug: 'the-alliance-prime-video-x-campaign',
    title: 'A show-wide X campaign for Prime Video’s first daily reality show',
    metaTitle: 'The Alliance (Prime Video) — #1 Finale Trend Campaign',
    keywords: ['The Alliance Prime Video finale trend', 'The Alliance Twitter campaign', 'OTT reality show promotion'],
    client: 'The Alliance (Prime Video)',
    category: 'OTT show',
    services: ['x-twitter-trends', 'movie-web-series-promotion'],
    cover: '/clients/the-alliance.jpg',
    coverAlt: 'The Alliance — PXR Infinity client, Prime Video reality show',
    summary: 'An X PR campaign across the six-week season, ending in a planned finale-day trend.',
    problem: 'A brand-new format with no fanbase, and a rival reality show launched the very next day.',
    approach: [
      'Ran an X PR campaign covering the show across its six-week season.',
      'Covered all 42 daily episodes to build a conversation from scratch.',
      'Planned and executed a finale-day trend that reached #1 in India.',
    ],
    results: [
      { value: '42', label: 'Daily episodes covered' },
      { value: '#1', label: 'Finale-day trend in India' },
      { value: 'Season 2', label: 'Renewed by Prime Video' },
    ],
    featured: true,
  },
]

/** Filter chips: only categories that currently have case studies */
export const workCategories = allWorkCategories.filter((c) => caseStudies.some((s) => s.category === c))

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
export const featuredWork = caseStudies.filter((c) => c.featured)
