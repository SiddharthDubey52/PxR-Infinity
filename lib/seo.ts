import type { Metadata } from 'next'
import { SITE_URL, absoluteUrl, sameAs, site } from './site'

export const HOME_URL = absoluteUrl('/') // 'https://www.pxrinfinity.com/'
export const OG_IMAGE = absoluteUrl('/og-image.jpg')
export const LOGO_URL = absoluteUrl('/apple-icon')

export const ORG_ID = `${SITE_URL}/#organization`
export const BUSINESS_ID = `${SITE_URL}/#business`
export const WEBSITE_ID = `${SITE_URL}/#website`

/** Author / byline used on every blog post and case study. */
export const AUTHOR_NAME = 'PXR Infinity Team'

type PageMetaInput = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  /** Use the title as-is instead of applying the "| PXR Infinity" template */
  absoluteTitle?: boolean
  /** false → `noindex, follow` (page stays reachable, links are still followed) */
  index?: boolean
}

/** Builds per-page metadata with a self-referencing canonical, Open Graph and Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  absoluteTitle,
  index = true,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  // For the home page Next.js would strip the trailing slash ("…pxrinfinity.com"), so the
  // canonical + og:url tags are rendered directly in app/page.tsx as "…pxrinfinity.com/".
  const isHome = path === '/'
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(isHome ? {} : { alternates: { canonical: url } }),
    ...(index ? {} : { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }),
    openGraph: {
      type,
      ...(isHome ? {} : { url }),
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      // Default share image; routes with their own opengraph-image.tsx override this
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PXR Infinity — Infinite reach. Real hype.' }],
      ...(type === 'article' ? { publishedTime, modifiedTime, authors: [AUTHOR_NAME] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

/* ------------------------------ JSON-LD ------------------------------ */

/** Compact Organization reference, safe to embed on any page (provider / publisher / author). */
export const orgRef = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: site.name,
  url: HOME_URL,
  logo: { '@type': 'ImageObject', url: LOGO_URL },
})

// Country only: no city or street address is published until the company is registered.
const address = () => ({
  '@type': 'PostalAddress',
  addressCountry: site.country,
})

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: site.name,
  alternateName: [...site.alternateNames],
  url: HOME_URL,
  logo: { '@type': 'ImageObject', url: LOGO_URL },
  image: OG_IMAGE,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  telephone: site.telephone,
  areaServed: 'IN',
  address: address(),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: site.telephone,
    email: site.email,
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  ...(sameAs.length ? { sameAs } : {}),
})

/** ProfessionalService (a LocalBusiness type). Used on the home page. */
export const professionalServiceLd = ({
  id = BUSINESS_ID,
  name = site.name,
  description = site.description,
  url = HOME_URL,
  areaServed = 'IN' as string | object,
}: { id?: string; name?: string; description?: string; url?: string; areaServed?: string | object } = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': id,
  name,
  description,
  url,
  logo: LOGO_URL,
  image: OG_IMAGE,
  telephone: site.telephone,
  email: site.email,
  areaServed,
  address: address(),
  parentOrganization: { '@id': ORG_ID },
  knowsAbout: [
    'Public relations',
    'Meme marketing',
    'Twitter / X trend campaigns',
    'Bigg Boss PR',
    'Reality show PR',
    'Celebrity PR',
    'Influencer marketing',
    'Movie and OTT promotion',
    'Music promotion',
  ],
  ...(sameAs.length ? { sameAs } : {}),
})

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: HOME_URL,
  name: site.name,
  alternateName: [...site.alternateNames],
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-IN',
})

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
})

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const serviceLd = (s: { name: string; description: string; path: string; serviceType: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: absoluteUrl(s.path),
  provider: orgRef(),
  areaServed: 'IN',
})

/** Article markup for blog posts and case studies. Author + publisher = the PXR Infinity organization. */
export const articleLd = (a: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  image?: string
  type?: 'Article' | 'BlogPosting'
}) => ({
  '@context': 'https://schema.org',
  '@type': a.type ?? 'Article',
  headline: a.title,
  description: a.description,
  mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(a.path) },
  url: absoluteUrl(a.path),
  image: a.image ? absoluteUrl(a.image) : absoluteUrl(`${a.path}/opengraph-image`),
  datePublished: a.datePublished,
  dateModified: a.dateModified ?? a.datePublished,
  author: { '@type': 'Organization', name: AUTHOR_NAME, url: absoluteUrl('/about') },
  publisher: orgRef(),
  inLanguage: 'en-IN',
})
