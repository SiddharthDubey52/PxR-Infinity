import type { Metadata } from 'next'
import { SITE_URL, absoluteUrl, sameAs, site } from './site'

type PageMetaInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  /** Use the title as-is instead of applying the "| PXR Infinity" template */
  absoluteTitle?: boolean
}

/** Builds per-page metadata with canonical, Open Graph and Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  publishedTime,
  modifiedTime,
  absoluteTitle,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...site.keywords],
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      ...(type === 'article' ? { publishedTime, modifiedTime, authors: [site.founder] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

/* ------------------------------ JSON-LD ------------------------------ */

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: site.name,
  url: SITE_URL,
  logo: absoluteUrl('/icon.svg'),
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  founder: { '@type': 'Person', name: site.founder },
  areaServed: { '@type': 'Country', name: 'India' },
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  ...(sameAs.length ? { sameAs } : {}),
})

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  publisher: { '@id': `${SITE_URL}/#organization` },
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
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'India' },
})

export const articleLd = (a: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  mainEntityOfPage: absoluteUrl(a.path),
  url: absoluteUrl(a.path),
  image: absoluteUrl(`${a.path}/opengraph-image`),
  datePublished: a.datePublished,
  dateModified: a.dateModified ?? a.datePublished,
  author: { '@type': 'Person', name: site.founder },
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
})
