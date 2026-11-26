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

const columns: { key: keyof TrendRow; label: string }[] = [
  { key: 'tag', label: 'Hashtag / campaign' },
  { key: 'client', label: 'Show or brand' },
  { key: 'date', label: 'Date' },
  { key: 'peak', label: 'Peak in India' },
  { key: 'posts', label: 'Posts' },
  { key: 'hours', label: 'Hours trending' },
]
// A column only shows once at least one row has a value for it (no columns full of dashes)
const shown = columns.filter((c) => c.key === 'tag' || c.key === 'client' || trendRows.some((r) => r[c.key]))

export const trendTable = {
  caption: 'Recent X trends run by PXR Infinity',
  head: shown.map((c) => c.label),
  rows: trendRows.map((r) => shown.map((c) => r[c.key] || '—')),
}
