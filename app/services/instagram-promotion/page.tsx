import type { Metadata } from 'next'
import { LandingServicePage } from '@/components/sections/LandingServicePage'
import { landingServices } from '@/lib/data/landing-pages'
import { pageMetadata } from '@/lib/seo'

const page = landingServices.instagramPromotion

export const metadata: Metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
})

export default function Page() {
  return <LandingServicePage page={page} />
}
