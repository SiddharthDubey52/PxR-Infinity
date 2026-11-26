/**
 * FILMS & SHOWS WE'VE PROMOTED — the list on /services/movie-web-series-promotion.
 * Only real titles we worked on, with the client's OK to name them. Never add a title we didn't promote.
 *
 * `regionalLanguages`: only languages we have really run campaigns in. The regional section stays
 * hidden while this is empty.
 * `campaignsStartFrom`: optional, e.g. '₹50,000'. The line stays hidden while it is ''.
 */
export type PromotedTitle = { title: string; type: 'Film' | 'Web series' | 'OTT show'; platform: string; year: string; work: string; caseStudy?: string }

export const promotedTitles: PromotedTitle[] = [
  {
    title: 'The Alliance',
    type: 'OTT show',
    platform: 'Prime Video',
    year: '', // TODO(Sid): year
    work: 'Six-week X campaign, all 42 episodes, #1 finale-day trend',
    caseStudy: 'the-alliance-prime-video-x-campaign',
  },
  // TODO(Sid): add other films and shows we've promoted (with permission to name them)
]

// TODO(Sid): confirm languages — e.g. ['Hindi', 'English', 'Punjabi']
export const regionalLanguages: string[] = []

// TODO(Sid): optional starting figure for film campaigns
export const campaignsStartFrom = ''
