import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { services } from '@/lib/data/services'
import { indexableCaseStudies } from '@/lib/data/work'
import { staticPages } from '@/lib/data/pages'
import { getAllPosts } from '@/lib/blog'
import { hasPress, pressUpdatedAt } from '@/lib/data/press'
import { audiences } from '@/lib/data/audiences'
import { timelineIndexable, timelineUpdatedAt } from '@/lib/data/timeline'

/**
 * Only pages meant to be indexed. `lastModified` comes from each page's `updatedAt`
 * (the date its content really changed), never the build time.
 * Left out on purpose: noindex case studies (Shehzad Poonawalla) and draft case studies.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const day = (d: string) => new Date(`${d}T00:00:00+05:30`)

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: day(p.updatedAt),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    // the timeline is noindex until it has enough entries
    ...(timelineIndexable
      ? [{ url: absoluteUrl('/reality-tv-trends-timeline'), lastModified: day(timelineUpdatedAt), changeFrequency: 'monthly' as const, priority: 0.6 }]
      : []),
    // /press is a 404 until it has a real entry
    ...(hasPress ? [{ url: absoluteUrl('/press'), lastModified: day(pressUpdatedAt), changeFrequency: 'monthly' as const, priority: 0.5 }] : []),
    ...audiences.map((a) => ({
      url: absoluteUrl(`/${a.slug}`),
      lastModified: day(a.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: day(s.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...indexableCaseStudies.map((c) => ({
      url: absoluteUrl(`/work/${c.slug}`),
      lastModified: day(c.updatedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: day(p.updated ?? p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
