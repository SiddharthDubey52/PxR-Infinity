import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { WhyPxr, ServicesGrid, FeaturedWork, HowItWorks } from '@/components/sections/HomeSections'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { ClientsGrid } from '@/components/sections/ClientsGrid'
import { homeFaqs } from '@/lib/data/home'
import { HOME_URL, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PXR Infinity (pxrinfinity) — PR, Meme Marketing & Social Media Agency in India',
  absoluteTitle: true,
  description:
    'PXR Infinity is a PR, meme marketing and X trends agency in India. 63+ campaigns, 25,000+ meme pages, 650+ trends. Get a free proposal on WhatsApp.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* React hoists these into <head>; exact URL with trailing slash */}
      <link rel="canonical" href={HOME_URL} />
      <meta property="og:url" content={HOME_URL} />
      <Hero />

      <ClientsGrid />

      <WhyPxr />
      <ServicesGrid />

      <section aria-hidden="true" className="border-y border-line py-10">
        <Marquee items={['Infinite reach', 'Real hype', 'Memes', 'Trends', 'PR']} label="PXR Infinity" variant="text" duration={30} />
      </section>

      <FeaturedWork />
      <HowItWorks />
      <Testimonials />
      <Faq
        faqs={homeFaqs}
        title="Sab kuch poocho. We’ll answer."
        intro="Pricing, timelines, reporting, reality-show PR and confidentiality — the questions we get most."
      />
      <CtaSection />
    </>
  )
}
