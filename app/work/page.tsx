import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { WorkCard } from '@/components/sections/WorkCard'
import { WorkFilter } from '@/components/sections/WorkFilter'
import { CtaSection } from '@/components/sections/CtaSection'
import { ClientList } from '@/components/sections/ClientsGrid'
import { caseStudies, workCategories } from '@/lib/data/work'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Our Work — 63+ Campaigns & Case Studies',
  description:
    'PXR Infinity case studies and clients: 63+ campaigns for Bigg Boss, Rise & Fall, Lock Upp and Prime Video’s The Alliance — X trends, meme pages and reality show PR.',
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
      <ClientList />
      <CtaSection title={<>Your brand could be the next case study.</>} />
    </>
  )
}
