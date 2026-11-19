/**
 * CASE STUDIES — every /work/[slug] page is generated from this list.
 * Replace [PLACEHOLDERS] with real data. Never publish invented results.
 * Images: put a file in /public/images/work/ and set `cover`.
 */

export const workCategories = ['Brands', 'Celebrities', 'Reality TV', 'Entertainment'] as const
export type WorkCategory = (typeof workCategories)[number]

export type CaseStudy = {
  slug: string
  title: string
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
    slug: 'd2c-brand-launch-meme-campaign',
    title: 'Making a new D2C brand impossible to scroll past',
    client: '[CLIENT NAME]',
    category: 'Brands',
    services: ['brand-launch-campaigns', 'meme-marketing', 'influencer-marketing'],
    cover: '/images/work/d2c-launch.svg',
    coverAlt: 'D2C brand launch meme marketing campaign by PXR Infinity',
    summary: 'A launch campaign combining meme pages, creators and an X trend in one coordinated week.',
    problem:
      'A new D2C brand was launching in a crowded category with almost no awareness and a limited budget. Paid ads alone were too expensive to build recall.',
    approach: [
      'Built a launch idea around a relatable everyday problem the product solves.',
      'Ran meme waves across [X] niche meme pages in the target audience’s cities.',
      'Seeded the product with [X] micro creators for honest reviews and reels.',
      'Ran a launch-day hashtag on X to concentrate the conversation.',
    ],
    results: [
      { value: '[RESULT]', label: 'Total reach' },
      { value: '[RESULT]', label: 'Website visits in launch week' },
      { value: '[RESULT]', label: 'Peak X trend position' },
    ],
    quote: { text: '[CLIENT QUOTE]', name: '[CLIENT NAME]', role: '[ROLE, COMPANY]' },
    featured: true,
  },
  {
    slug: 'bigg-boss-contestant-season-pr',
    title: 'Season-long PR and finale push for a reality-show contestant',
    client: '[CONTESTANT NAME]',
    category: 'Reality TV',
    services: ['reality-show-pr', 'x-twitter-trends', 'celebrity-pr'],
    cover: '/images/work/reality-season.svg',
    coverAlt: 'Bigg Boss contestant reality show PR campaign by PXR Infinity',
    summary: 'Fan army building, weekly trends and voting campaigns from entry day to the finale.',
    problem:
      'The contestant had a small social following before entering the house and very little visibility in the early weeks of the season.',
    approach: [
      'Set up a fan page network and handover plan with the family before entry.',
      'Posted daily episode highlights, edits and memes within hours of each episode.',
      'Ran weekly X trends and a voting campaign during every nomination week.',
      'Launched a full finale push across trends, paps pages and portals.',
    ],
    results: [
      { value: '[RESULT]', label: 'Final position' },
      { value: '[RESULT]', label: 'Follower growth during the season' },
      { value: '[RESULT]', label: 'Trends run' },
    ],
    featured: true,
  },
  {
    slug: 'film-release-week-buzz',
    title: 'Building release-week buzz for a feature film',
    client: '[FILM NAME]',
    category: 'Entertainment',
    services: ['movie-web-series-promotion', 'meme-marketing', 'x-twitter-trends'],
    cover: '/images/work/film-release.svg',
    coverAlt: 'Movie promotion meme and trend campaign by PXR Infinity',
    summary: 'Scene-based memes, creator reactions and trailer trends across a [X]-week campaign.',
    problem:
      'The film had strong content but limited marketing spend compared to bigger releases in the same week.',
    approach: [
      'Turned key scenes and dialogues into meme templates for meme pages.',
      'Ran trends on trailer launch and release day.',
      'Brought in creators for reactions and recommendations in release week.',
      'Secured portal and paps coverage of the cast and events.',
    ],
    results: [
      { value: '[RESULT]', label: 'Meme impressions' },
      { value: '[RESULT]', label: 'Creator videos' },
      { value: '[RESULT]', label: 'Articles published' },
    ],
    featured: true,
  },
  {
    slug: 'actor-image-building',
    title: 'Always-on image building for an actor',
    client: '[CELEBRITY NAME]',
    category: 'Celebrities',
    services: ['celebrity-pr', 'pr-media-coverage', 'x-twitter-trends'],
    cover: '/images/work/actor-pr.svg',
    coverAlt: 'Celebrity PR and image building campaign by PXR Infinity',
    summary: 'Monthly media presence, fandom management and birthday trend for a TV and OTT actor.',
    problem:
      'The actor had strong fan love on TV but little visibility with OTT and film audiences or in online news.',
    approach: [
      'Defined a clear public image aligned with upcoming OTT projects.',
      'Secured regular features on entertainment portals and paps pages.',
      'Organised fan clubs and ran a birthday trend on X.',
    ],
    results: [
      { value: '[RESULT]', label: 'Articles in [X] months' },
      { value: '[RESULT]', label: 'Birthday trend peak' },
      { value: '[RESULT]', label: 'Instagram growth' },
    ],
  },
  {
    slug: 'music-single-reels-campaign',
    title: 'Turning a new single into a reel audio',
    client: '[ARTIST / LABEL]',
    category: 'Entertainment',
    services: ['music-album-promotion', 'influencer-marketing', 'meme-marketing'],
    cover: '/images/work/music-reels.svg',
    coverAlt: 'Music promotion Instagram reels campaign by PXR Infinity',
    summary: 'Creator seeding and meme page edits built around the song’s hook.',
    problem: 'An independent single needed reel usage in the first two weeks after release to get picked up by the algorithm.',
    approach: [
      'Picked the strongest 15-second hook for reels.',
      'Seeded the audio with dance, lip-sync and comedy creators in waves.',
      'Placed meme edits set to the song across meme pages.',
    ],
    results: [
      { value: '[RESULT]', label: 'Reels created with the audio' },
      { value: '[RESULT]', label: 'Total views' },
      { value: '[RESULT]', label: 'Streaming growth' },
    ],
  },
  {
    slug: 'brand-reputation-turnaround',
    title: 'Turning around negative sentiment for a consumer brand',
    client: '[CLIENT NAME]',
    category: 'Brands',
    services: ['crisis-pr-reputation-management', 'pr-media-coverage', 'social-media-management'],
    cover: '/images/work/brand-crisis.svg',
    coverAlt: 'Brand crisis PR and reputation management by PXR Infinity',
    summary: 'Rapid response, a founder statement and a positive narrative push after a viral complaint.',
    problem: 'A customer complaint went viral and negative comments started dominating the brand’s social pages and search results.',
    approach: [
      'Assessed the spread and drafted a clear, human founder response within hours.',
      'Briefed community managers to respond consistently.',
      'Pushed positive customer stories and media coverage in the following weeks.',
    ],
    results: [
      { value: '[RESULT]', label: 'Change in negative mentions' },
      { value: '[RESULT]', label: 'Time to stabilise' },
      { value: '[RESULT]', label: 'Positive articles published' },
    ],
  },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
export const featuredWork = caseStudies.filter((c) => c.featured)
