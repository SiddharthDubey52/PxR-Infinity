import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { WorkCard } from '@/components/sections/WorkCard'
import { WorkFilter } from '@/components/sections/WorkFilter'
import { CtaSection } from '@/components/sections/CtaSection'
import { ClientList } from '@/components/sections/ClientsGrid'
import { publishedCaseStudies, workCategories } from '@/lib/data/work'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PR Case Studies India: Reality Show Campaigns',
  description:
    'PR case studies from India: reality show campaign case studies for Bigg Boss, Rise & Fall and Prime Video’s The Alliance — X trends, meme pages and media.',
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
            PR case studies that got India <span className="text-gradient">talking</span>.
          </>
        }
        intro="Reality show campaign case studies and more: Bigg Boss, Rise & Fall and Prime Video’s The Alliance. Each one shows the challenge, our strategy and the result."
      />
      <section className="pb-24" aria-label="Case studies">
        <div className="container-x">
          <WorkFilter categories={workCategories}>
            {publishedCaseStudies.map((c, i) => (
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
