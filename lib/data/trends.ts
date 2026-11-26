/**
 * "TRENDS WE'VE RUN" — the table on /services/x-twitter-trends.
 *
 * Rows come from two places:
 *  1. Every verified trend in a published case study (lib/data/work.ts → `trends`). Anything
 *     marked `pending` there stays hidden here too, so the numbers always match.
 *  2. `extraTrends` below, for trends without a case study. Only add trends you can show
 *     screenshots for. Leave a field '' if you don't have it; it shows as "—".
 */
import { publishedCaseStudies } from './work'

export type TrendRow = {
  tag: string
  client: string // show or brand
  date: string // e.g. 'Jan 2025'
  peak: string // peak position in India, e.g. '#1'
  posts: string
  hours: string // hours trending
}

// TODO(Sid): add trends with screenshots — e.g. The Alliance finale-day hashtag (name, date, posts, hours)
export const extraTrends: TrendRow[] = [
  {
    tag: 'The Alliance finale-day trend', // TODO(Sid): exact hashtag
    client: 'The Alliance (Prime Video)',
    date: '', // TODO(Sid)
    peak: '#1',
    posts: '', // TODO(Sid)
    hours: '', // TODO(Sid)
  },
]

const show = (slug: string) => {
  const c = publishedCaseStudies.find((x) => x.slug === slug)
  const s = c?.glance?.find((g) => g.label === 'Show' && !g.pending)?.value
  return c ? `${c.client}${s ? ` (${s})` : ''}` : ''
}

export const trendRows: TrendRow[] = [
  ...publishedCaseStudies.flatMap((c) =>
    (c.trends ?? [])
      .filter((t) => !t.pending)
      .map((t) => ({
        tag: t.tag,
        client: show(c.slug),
        date: '',
        peak: t.rank ?? '',
        posts: t.postsPending ? '' : (t.posts ?? ''),
        hours: '',
      })),
  ),
  ...extraTrends,
]

export const trendTable = {
  caption: 'X trends run by PXR Infinity',
  head: ['Hashtag / campaign', 'Show or brand', 'Date', 'Peak in India', 'Posts', 'Hours trending'],
  rows: trendRows.map((r) => [r.tag, r.client, r.date || '—', r.peak || '—', r.posts || '—', r.hours || '—']),
}
