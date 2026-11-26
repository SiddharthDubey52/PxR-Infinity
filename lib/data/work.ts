/**
 * CASE STUDIES — every /work/[slug] page is generated from this list.
 * Only publish real, client-approved results.
 *
 * - `pending: true` on a result / trend / glance value keeps it in the data but OFF the page
 *   until you verify it. Flip it to false (or delete the flag) once you have proof.
 * - `draft: true`  → page exists at its URL but is `noindex`, left out of the sitemap,
 *   the Work page and every "related" list. Remove the flag once the page is filled in.
 * - `noindex: true` → page is public and linked as normal, but asks Google not to index it.
 * - `updatedAt` feeds the sitemap's lastModified — change it when the content really changes.
 * - `cover` uses the client photo in /public/clients/ (initials fallback if missing).
 */

import type { Faq } from './services'

export const allWorkCategories = ['Brands', 'Celebrities', 'Reality TV', 'OTT show', 'Entertainment'] as const
export type WorkCategory = (typeof allWorkCategories)[number]

export type Metric = { value: string; label: string; pending?: boolean }
export type Trend = { tag: string; posts?: string; rank?: string; pending?: boolean; postsPending?: boolean }

export type CaseStudy = {
  slug: string
  /** Page H1 */
  title: string
  /** Full SEO <title> (used as-is, no template) */
  metaTitle: string
  metaDescription?: string
  mainKeyword: string
  client: string
  category: WorkCategory
  services: string[] // service slugs
  cover: string
  coverAlt: string
  summary: string
  /** "At a glance" box. Any value marked pending is hidden. */
  glance?: { label: string; value: string; pending?: boolean }[]
  problem: string
  approach: string[]
  /** "What we delivered" table */
  deliverables?: { item: string; detail: string }[]
  results: Metric[]
  /** Short paragraph(s) for "The result" */
  resultText?: string[]
  trends?: Trend[]
  faqs?: Faq[]
  /** Screenshot gallery (shown once you add images to /public/work/<slug>/) */
  gallery?: { src: string; alt: string }[]
  quote?: { text: string; name: string; role: string }
  featured?: boolean
  noindex?: boolean
  draft?: boolean
  datePublished: string
  updatedAt: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shehzad-poonawalla-rise-and-fall-winner',
    title: 'Taking a TV debater all the way to the Rise & Fall trophy',
    metaTitle: 'Shehzad Poonawalla — Rise & Fall S2 Winner Campaign | PXR Infinity',
    mainKeyword: 'Rise and Fall winner campaign (not indexed)',
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
    // Kept live and linked everywhere, but hidden from Google (noindex, follow) and left out of the sitemap.
    noindex: true,
    datePublished: '2026-11-19',
    updatedAt: '2026-11-19',
  },
  {
    slug: 'niharika-tiwari-rise-and-fall-finalist',
    title: 'Building a name of her own in a celebrity-heavy cast',
    metaTitle: 'Niharika Tiwari Rise and Fall PR Case Study | PXR Infinity',
    metaDescription:
      'Rise and Fall contestant PR case study: 330+ meme page posts, 143 media page posts, 6 interviews and reels by 8 creators for Niharika Tiwari.',
    mainKeyword: 'Rise and Fall contestant PR case study',
    client: 'Niharika Tiwari',
    category: 'Reality TV',
    services: ['reality-show-pr', 'meme-marketing', 'x-twitter-trends'],
    cover: '/clients/niharika-tiwari.jpg',
    coverAlt: 'Niharika Tiwari — PXR Infinity client, Rise & Fall Season 2',
    summary:
      '330+ meme page posts, 143 posts on reality and entertainment media pages, six interviews, creator reels and paparazzi coverage across a seven-week campaign.',
    glance: [
      { label: 'Client', value: 'Niharika Tiwari' },
      { label: 'Show', value: 'Rise & Fall Season 2' },
      { label: 'Period', value: '19 September – 5 November 2026' },
      // TODO(Sid): verify final position ("Top 6") before showing it
      { label: 'Outcome', value: 'Top 6 finalist', pending: true },
      { label: 'Services', value: 'Reality show PR, meme marketing, media coverage, X campaign' },
    ],
    problem:
      'Niharika came to Rise & Fall Season 2 from Gidam in Bastar, up against film, TV and political names with far bigger fan bases. She needed audiences to know her for her own game — fast.',
    approach: [
      'Told her story as a small-town journey from Gidam in Bastar to national reality TV.',
      'Lined up interviews that showed her as a candid, confident player.',
      'Turned her gameplay into posts for reality TV media pages and meme pages, including regional Punjabi pages.',
      'Added reels from content creators and coverage from a network of paparazzi photographers.',
      'During a mid-season controversy, shared her side of the story quickly across media pages and X.',
    ],
    deliverables: [
      { item: 'Reality & entertainment media pages', detail: '143 posts' },
      { item: 'Meme pages', detail: '330+ posts, including regional Punjabi pages' },
      { item: 'Interviews', detail: '6 — The Times of India, Hindustan Times, Times Now, India Forums, NewsX' },
      { item: 'Online features', detail: '2 — Dainik Bhaskar, ABP Live' },
      { item: 'Creator reels', detail: 'Reels by 8 content creators' },
      { item: 'Paparazzi coverage', detail: 'A network of 12 paparazzi photographers' },
      { item: 'X posts', detail: '67' },
    ],
    results: [
      { value: '330+', label: 'Meme page posts' },
      { value: '143', label: 'Reality & entertainment media posts' },
      { value: '6', label: 'Interviews with national outlets' },
      // TODO(Sid): verify each of these before showing them (screenshots / analytics)
      { value: 'Top 6', label: 'Finalist, Rise & Fall Season 2', pending: true },
      { value: '350M+', label: 'Reach delivered', pending: true },
      { value: '8', label: 'X trends at #1', pending: true },
      { value: '500+', label: 'Pages in the meme campaign', pending: true },
    ],
    resultText: [
      'Her gameplay was picked up by media and meme pages through the season, and her interviews gave audiences a clear picture of who she is outside the house. When a controversy broke mid-season, her side of the story was out quickly instead of days later.',
    ],
    faqs: [
      {
        q: 'What did PXR Infinity do for Niharika Tiwari on Rise & Fall?',
        a: 'We ran her reality show PR from 19 September to 5 November 2026: 143 posts on reality and entertainment media pages, 330+ meme page posts, six interviews, two online features, reels by eight creators, paparazzi coverage and 67 X posts.',
      },
      {
        q: 'How did the team handle the mid-season controversy?',
        a: 'We shared her side of the story quickly through media pages, meme pages and X, so audiences heard her version while the conversation was still happening.',
      },
    ],
    gallery: [],
    featured: true,
    datePublished: '2026-11-19',
    updatedAt: '2026-11-25',
  },
  {
    slug: 'the-alliance-prime-video-x-campaign',
    title: 'A show-wide X campaign for Prime Video’s first daily reality show',
    metaTitle: 'The Alliance Prime Video X Campaign | PXR Infinity',
    metaDescription:
      'OTT reality show promotion case study: a six-week X campaign covering all 42 episodes of Prime Video’s The Alliance, ending in a #1 finale-day trend.',
    mainKeyword: 'OTT reality show promotion case study',
    client: 'The Alliance (Prime Video)',
    category: 'OTT show',
    services: ['x-twitter-trends', 'movie-web-series-promotion'],
    cover: '/clients/the-alliance.jpg',
    coverAlt: 'The Alliance — PXR Infinity client, Prime Video reality show',
    summary: 'An X PR campaign across the six-week season, ending in a planned finale-day trend.',
    glance: [
      { label: 'Client', value: 'Prime Video' },
      { label: 'Show', value: 'The Alliance' },
      { label: 'Period', value: 'Six-week season' },
      { label: 'Outcome', value: '#1 finale-day trend in India' },
      { label: 'Services', value: 'X trends, OTT show promotion' },
    ],
    problem: 'A brand-new format with no fanbase, and a rival reality show launched the very next day.',
    approach: [
      'Ran an X PR campaign covering the show across its six-week season.',
      'Covered all 42 daily episodes to build a conversation from scratch.',
      'Planned and executed a finale-day trend that reached #1 in India.',
    ],
    deliverables: [
      { item: 'X PR campaign', detail: 'Six weeks, the full season' },
      { item: 'Episode coverage', detail: 'All 42 daily episodes' },
      { item: 'Finale-day trend', detail: 'Planned hashtag push on finale day' },
    ],
    results: [
      { value: '42', label: 'Daily episodes covered' },
      { value: '#1', label: 'Finale-day trend in India' },
      { value: 'Season 2', label: 'Renewed by Prime Video' },
    ],
    faqs: [
      {
        q: 'What did PXR Infinity do for The Alliance?',
        a: 'We ran an X PR campaign across the six-week season, covering all 42 daily episodes and ending with a planned finale-day trend.',
      },
      {
        q: 'How did the finale-day trend perform?',
        a: 'The finale-day trend reached #1 in India, and Prime Video renewed the show for Season 2.',
      },
    ],
    gallery: [],
    featured: true,
    datePublished: '2026-11-19',
    updatedAt: '2026-11-25',
  },
  {
    slug: 'rajat-dalal-bigg-boss-18-pr-campaign',
    title: 'Bigg Boss contestant PR for Rajat Dalal: one message, every fan club',
    metaTitle: 'Rajat Dalal Bigg Boss 18 PR Case Study | PXR Infinity',
    metaDescription:
      'Bigg Boss contestant PR case study: how we helped organise Rajat Dalal’s fan clubs around one message in Bigg Boss 18 — 210K mentions for #RajatIsTheBoss.',
    mainKeyword: 'Bigg Boss contestant PR',
    client: 'Rajat Dalal',
    category: 'Reality TV',
    services: ['bigg-boss-pr', 'x-twitter-trends', 'reality-show-pr'],
    cover: '/clients/rajat-dalal.jpg',
    coverAlt: 'Rajat Dalal — PXR Infinity client, Bigg Boss 18',
    summary:
      'As part of the core digital team, we organised fan clubs around one message — shared hashtags, daily posting and live X Spaces — and ran the finale push.',
    glance: [
      { label: 'Client', value: 'Rajat Dalal' },
      { label: 'Show', value: 'Bigg Boss 18' },
      // TODO(Sid): add the exact campaign dates
      { label: 'Period', value: 'TODO(Sid): campaign dates', pending: true },
      { label: 'Our role', value: 'Part of the core digital team' },
      // TODO(Sid): add final position
      { label: 'Outcome', value: 'TODO(Sid): final position', pending: true },
      { label: 'Services', value: 'Bigg Boss PR, X trends, fan club management, X Spaces' },
    ],
    problem:
      'Rajat entered Bigg Boss 18 with a strong, polarising image. Many viewers had made up their minds before the first week, and his supporters were spread across many separate fan clubs, each saying something different.',
    approach: [
      'Showed another side of him: his respect for elders and his family moments, including his mother’s visit to the house.',
      'Brought his fan clubs together around one message, with shared hashtags for every key moment.',
      'Set a daily posting rhythm, so supporters showed up at the same time with the same story.',
      'Hosted live X Spaces where fans could follow the week’s episodes and plan together.',
      'Ran a finale push built on one idea: he deserved the trophy.',
    ],
    deliverables: [
      { item: 'Narrative content', detail: 'Clips and posts around respect for elders and family moments, including his mother’s visit' },
      { item: 'Fan club organisation', detail: 'One message and shared hashtags across his fan clubs' },
      { item: 'Daily posting plan', detail: 'A shared daily schedule for fan clubs on X and Instagram' },
      { item: 'Live X Spaces', detail: 'Including “BB TROPHY HAKDAAR RAJAT” on 7 January 2025' },
      { item: 'Finale campaign', detail: 'Hashtags and posts around the message that he deserved the trophy' },
    ],
    results: [
      { value: '1M', label: '#RajatDalal mentions, every 3 days' },
      { value: '77K', label: 'Tuned in to the “BB TROPHY HAKDAAR RAJAT” X Space' },
      { value: '500+', label: 'Meme pages in the campaign' },
    ],
    resultText: [
      '#RajatDalal reached 1 million mentions every 3 days. In the run-up to the finale, #RajatIsTheBoss logged 210K mentions between 13 and 17 January 2025, measured on Talkwalker. The “BB TROPHY HAKDAAR RAJAT” X Space on 7 January 2025 ran for 2 hours 18 minutes, with 77K people tuned in.',
    ],
    trends: [
      // TODO(Sid): verify these counts before showing them
      { tag: 'BB TROPHY HAKDAAR RAJAT', posts: '500K+', pending: true },
      { tag: 'INDIA SUPPORTS RAJAT DALAL', posts: '250K+', pending: true },
    ],
    faqs: [
      {
        q: 'What did PXR Infinity do for Rajat Dalal in Bigg Boss 18?',
        a: 'We were part of his core digital team. We organised his fan clubs around one message with shared hashtags, daily posting and live X Spaces, highlighted his family moments, and ran the finale push around the message that he deserved the trophy.',
      },
      {
        q: 'What results did the Rajat Dalal campaign deliver?',
        a: '#RajatDalal reached 1 million mentions every 3 days. #RajatIsTheBoss logged 210K mentions between 13 and 17 January 2025 (Talkwalker), and the “BB TROPHY HAKDAAR RAJAT” X Space on 7 January 2025 ran 2 hours 18 minutes with 77K people tuned in.',
      },
    ],
    gallery: [],
    datePublished: '2026-11-25',
    updatedAt: '2026-11-25',
  },
  {
    slug: 'mridul-tiwari-bigg-boss-19-x-trends',
    title: 'A Bigg Boss X trend campaign for Mridul Tiwari, one message a week',
    metaTitle: 'Mridul Tiwari Bigg Boss 19 X Trends Case Study | PXR Infinity',
    metaDescription:
      'Bigg Boss X trend campaign case study: weekly trends for Mridul Tiwari in Bigg Boss 19, including BIGGBOSS USE MRIDUL — 187.9K+ posts and #1 in India.',
    mainKeyword: 'Bigg Boss X trend campaign',
    client: 'Mridul Tiwari',
    category: 'Reality TV',
    services: ['bigg-boss-pr', 'x-twitter-trends', 'meme-marketing'],
    cover: '/clients/mridul-tiwari.jpg',
    coverAlt: 'Mridul Tiwari — PXR Infinity client, Bigg Boss 19',
    summary:
      'One message per week, fan clubs posting together and key moments like his captaincy turned into X trends, with meme and media pages carrying the same message on Instagram.',
    glance: [
      { label: 'Client', value: 'Mridul Tiwari' },
      { label: 'Show', value: 'Bigg Boss 19' },
      // TODO(Sid): add the exact campaign dates
      { label: 'Period', value: 'TODO(Sid): campaign dates', pending: true },
      { label: 'Outcome', value: 'Three trends at #1 in India' },
      { label: 'Services', value: 'X trend campaigns, Bigg Boss PR, meme and media pages' },
    ],
    problem:
      'Mridul came into Bigg Boss 19 with a large YouTube audience. His fans felt he wasn’t getting enough screen time or credit for his game, and that frustration needed somewhere useful to go.',
    approach: [
      'Picked one clear message for each week of the season.',
      'Briefed his fan clubs to post together at a set time, around that week’s message.',
      'Turned moments from the house — like his captaincy — into X trends.',
      'Had meme and media pages carry the same message on Instagram, so it reached people beyond X.',
    ],
    deliverables: [
      { item: 'Weekly message', detail: 'One theme per week, shared with every fan club' },
      { item: 'X trend campaigns', detail: 'Hashtags, timing and a content bank for each trend' },
      { item: 'Moment trends', detail: 'Fast trends around moments such as his captaincy' },
      { item: 'Instagram amplification', detail: 'Meme and media pages carrying the week’s message' },
    ],
    results: [
      { value: '187.9K+', label: 'Posts on BIGGBOSS USE MRIDUL, #1 in India' },
      { value: '#1', label: 'BEST CAPTAIN MRIDUL, 42K+ posts' },
      { value: '80K+', label: 'Posts on MRIDUL ALWAYS ON FIRE, #3' },
    ],
    resultText: [
      'Week after week, his fans showed up in one direction. Three of the trends reached #1 in India, and the captaincy moment became a trend of its own.',
    ],
    trends: [
      { tag: 'BIGGBOSS USE MRIDUL', posts: '187.9K+', rank: '#1' },
      { tag: 'MRIDUL ALWAYS ON FIRE', posts: '80K+', rank: '#3' },
      { tag: 'BEST CAPTAIN MRIDUL', posts: '42K+', rank: '#1' },
      // TODO(Sid): verify the 300K+ post count (rank #1 is shown; count stays hidden until verified)
      { tag: 'NO MRIDUL NO BIGGBOSS', posts: '300K+', rank: '#1', postsPending: true },
      // TODO(Sid): add post counts and ranks, then remove `pending`
      { tag: 'JANTA KA LADLA MRIDUL', pending: true },
      { tag: '#KingMakerMridulTiwari', pending: true },
    ],
    faqs: [
      {
        q: 'How did the Mridul Tiwari X trend campaign work?',
        a: 'We picked one message per week, briefed his fan clubs to post together, turned moments such as his captaincy into trends, and had meme and media pages carry the same message on Instagram.',
      },
      {
        q: 'Which Mridul Tiwari trends reached #1?',
        a: 'BIGGBOSS USE MRIDUL (187.9K+ posts), BEST CAPTAIN MRIDUL (42K+ posts) and NO MRIDUL NO BIGGBOSS all reached #1 in India. MRIDUL ALWAYS ON FIRE reached #3 with 80K+ posts.',
      },
    ],
    gallery: [],
    datePublished: '2026-11-25',
    updatedAt: '2026-11-25',
  },

  /* ---------------- Drafts: noindex, not in sitemap or lists until filled in ---------------- */
  {
    slug: 'qazi-touqeer-bigg-boss-20-pr-campaign',
    title: 'Qazi Touqeer, Bigg Boss 20 — case study coming soon',
    metaTitle: 'Qazi Touqeer Bigg Boss 20 PR Case Study | PXR Infinity',
    // TODO(Sid): write metaDescription, summary, problem, approach, deliverables, results, FAQs
    metaDescription: 'Bigg Boss 20 PR case study for Qazi Touqeer by PXR Infinity. Full case study coming soon.',
    mainKeyword: 'Bigg Boss 20 PR case study',
    client: 'Qazi Touqeer',
    category: 'Reality TV',
    services: ['bigg-boss-pr'],
    cover: '/clients/qazi-touqeer.jpg',
    coverAlt: 'Qazi Touqeer — PXR Infinity client, Bigg Boss 20',
    summary: 'We’re putting this case study together. In the meantime, ask us about our Bigg Boss 20 work on WhatsApp.',
    glance: [
      { label: 'Client', value: 'Qazi Touqeer' },
      { label: 'Show', value: 'Bigg Boss 20' },
    ],
    problem: 'TODO(Sid): the challenge',
    approach: [],
    results: [],
    gallery: [],
    draft: true,
    datePublished: '2026-11-25',
    updatedAt: '2026-11-25',
  },
  {
    slug: 'yogesh-rawat-lock-upp-season-2-pr-campaign',
    title: 'Yogesh Rawat, Lock Upp Season 2 — case study coming soon',
    metaTitle: 'Yogesh Rawat Lock Upp Season 2 PR Case Study | PXR Infinity',
    // TODO(Sid): write metaDescription, summary, problem, approach, deliverables, results, FAQs
    metaDescription: 'Lock Upp Season 2 PR case study for Yogesh Rawat by PXR Infinity. Full case study coming soon.',
    mainKeyword: 'Lock Upp PR case study',
    client: 'Yogesh Rawat',
    category: 'Reality TV',
    services: ['reality-show-pr'],
    cover: '/clients/yogesh-rawat.jpg',
    coverAlt: 'Yogesh Rawat — PXR Infinity client, Lock Upp Season 2',
    summary: 'We’re putting this case study together. In the meantime, ask us about our Lock Upp work on WhatsApp.',
    glance: [
      { label: 'Client', value: 'Yogesh Rawat' },
      { label: 'Show', value: 'Lock Upp Season 2' },
    ],
    problem: 'TODO(Sid): the challenge',
    approach: [],
    results: [],
    gallery: [],
    draft: true,
    datePublished: '2026-11-25',
    updatedAt: '2026-11-25',
  },
  {
    slug: 'munawar-faruqui-pr-campaign',
    title: 'Munawar Faruqui — case study coming soon',
    metaTitle: 'Munawar Faruqui PR Case Study | PXR Infinity',
    // TODO(Sid): write metaDescription, summary, problem, approach, deliverables, results, FAQs
    metaDescription: 'Reality show PR case study for Munawar Faruqui by PXR Infinity. Full case study coming soon.',
    mainKeyword: 'Munawar Faruqui PR case study',
    client: 'Munawar Faruqui',
    category: 'Reality TV',
    services: ['bigg-boss-pr', 'reality-show-pr'],
    cover: '/clients/munawar-faruqui.jpg',
    coverAlt: 'Munawar Faruqui — PXR Infinity client, Lock Upp S1 & Bigg Boss 17',
    summary: 'We’re putting this case study together. In the meantime, ask us about our reality show work on WhatsApp.',
    glance: [
      { label: 'Client', value: 'Munawar Faruqui' },
      { label: 'Shows', value: 'Lock Upp Season 1 & Bigg Boss 17' },
    ],
    problem: 'TODO(Sid): the challenge',
    approach: [],
    results: [],
    gallery: [],
    draft: true,
    datePublished: '2026-11-25',
    updatedAt: '2026-11-25',
  },
]

/** Case studies shown on the site (drafts excluded) */
export const publishedCaseStudies = caseStudies.filter((c) => !c.draft)
/** Case studies that belong in the sitemap */
export const indexableCaseStudies = publishedCaseStudies.filter((c) => !c.noindex)

/** Filter chips: only categories that currently have case studies */
export const workCategories = allWorkCategories.filter((c) => publishedCaseStudies.some((s) => s.category === c))

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
export const featuredWork = publishedCaseStudies.filter((c) => c.featured)

/** Only verified values are ever rendered */
export const visible = <T extends { pending?: boolean }>(xs: T[] = []) => xs.filter((x) => !x.pending)
