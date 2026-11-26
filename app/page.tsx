import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { WhyPxr, ServicesGrid, FeaturedWork, HowItWorks } from '@/components/sections/HomeSections'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { ClientsGrid } from '@/components/sections/ClientsGrid'
import { PressStrip } from '@/components/sections/PressStrip'
import { JsonLd } from '@/components/ui/JsonLd'
import { homeFaqs } from '@/lib/data/home'
import { homeTestimonials } from '@/lib/data/testimonials'
import { HOME_URL, organizationLd, pageMetadata, professionalServiceLd, websiteLd } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PXR Infinity | PR and Meme Marketing Agency India',
  absoluteTitle: true,
  description:
    'PXR Infinity is a PR and meme marketing agency in India — a viral, Gen Z marketing agency with 25,000+ meme pages and 650+ X trends. Free proposal.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* React hoists these into <head>; exact URL with trailing slash */}
      <link rel="canonical" href={HOME_URL} />
      <meta property="og:url" content={HOME_URL} />
      <JsonLd data={[organizationLd(), professionalServiceLd(), websiteLd()]} />
      <Hero />

      <ClientsGrid />
      <PressStrip />

      <WhyPxr />
      <ServicesGrid />

      <section aria-hidden="true" className="border-y border-line py-10">
        <Marquee items={['Infinite reach', 'Real hype', 'Memes', 'Trends', 'PR']} label="PXR Infinity" variant="text" duration={30} />
      </section>

      <FeaturedWork />
      <HowItWorks />
      <Testimonials items={homeTestimonials()} />
      <Faq
        faqs={homeFaqs}
        title="Sab kuch poocho. We’ll answer."
        intro="Pricing, timelines, reporting, reality-show PR and confidentiality — the questions we get most."
      />
      <CtaSection />
    </>
  )
}
