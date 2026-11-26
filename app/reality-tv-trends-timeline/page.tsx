import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { CtaSection } from '@/components/sections/CtaSection'
import { TrendTimeline } from '@/components/sections/TrendTimeline'
import { timeline, timelineIndexable, timelineUpdatedAt } from '@/lib/data/timeline'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Reality TV Trends Timeline India',
  description:
    'A timeline of notable reality TV fan campaigns and X trends in India, season by season: Bigg Boss, Rise and Fall, The Alliance and more, with sources.',
  path: '/reality-tv-trends-timeline',
  // noindex until the timeline has enough entries to be useful
  index: timelineIndexable,
})

export default function TimelinePage() {
  const updated = new Date(`${timelineUpdatedAt}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Reality TV trends timeline', path: '/reality-tv-trends-timeline' }]}
        eyebrow="Timeline"
        title={
          <>
            Reality TV trends timeline: <span className="text-gradient">fan campaigns and X trends</span>.
          </>
        }
        intro={
          <p>
            Notable fan campaigns and X trends from Indian reality shows, season by season. Real events only, with a case study or a source
            for each. Last updated {updated}.
          </p>
        }
      />
      <section className="pb-24 sm:pb-32" aria-label="Timeline">
        <div className="container-x max-w-4xl">
          <TrendTimeline entries={timeline} />
          <p className="mt-14 text-muted">
            Want to know how these campaigns are planned? Read{' '}
            <Link href="/blog/x-trends-for-reality-show-contestants" className="text-accent-light underline underline-offset-4">
              X trends for reality show contestants
            </Link>{' '}
            or see our <Link href="/services/bigg-boss-pr" className="text-accent-light underline underline-offset-4">Bigg Boss PR</Link> page.
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
