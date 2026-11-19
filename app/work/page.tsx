import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { WorkCard } from '@/components/sections/WorkCard'
import { WorkFilter } from '@/components/sections/WorkFilter'
import { CtaSection } from '@/components/sections/CtaSection'
import { caseStudies, workCategories } from '@/lib/data/work'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Our Work — PR, Meme Marketing & Reality Show PR Case Studies',
  description:
    'Case studies from PXR Infinity: brand launches, meme marketing, X trends, celebrity PR, movie and music promotion, and Bigg Boss / reality show PR campaigns.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Work', path: '/work' }]}
        eyebrow="Case studies"
        title={
          <>
            Work that got people <span className="text-gradient">talking</span>.
          </>
        }
        intro="Brands, celebrities, reality TV and entertainment. Each case study shows the problem, what we did and the result."
      />
      <section className="pb-24" aria-label="Case studies">
        <div className="container-x">
          <WorkFilter categories={workCategories}>
            {caseStudies.map((c, i) => (
              <div key={c.slug} data-category={c.category}>
                <WorkCard c={c} i={i} headingLevel="h2" priority={i === 0} />
              </div>
            ))}
          </WorkFilter>
        </div>
      </section>
      <CtaSection title={<>Your brand could be the next case study.</>} />
    </>
  )
}
