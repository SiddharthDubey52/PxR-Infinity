import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LandingServicePage } from '@/components/sections/LandingServicePage'
import { getSubServicePage, subServicePages } from '@/lib/data/landing-pages'
import { pageMetadata } from '@/lib/seo'

/** Sub-service pages, e.g. /services/x-twitter-trends/hashtag-campaigns. Data: lib/data/landing-pages.ts */

type Props = { params: Promise<{ slug: string; sub: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return subServicePages.map((p) => {
    const [, , slug, sub] = p.path.split('/')
    return { slug, sub }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params
  const page = getSubServicePage(slug, sub)
  if (!page) return {}
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path })
}

export default async function SubServicePage({ params }: Props) {
  const { slug, sub } = await params
  const page = getSubServicePage(slug, sub)
  if (!page) notFound()
  return <LandingServicePage page={page} />
}
