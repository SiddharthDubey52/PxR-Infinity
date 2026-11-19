import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { services } from '@/lib/data/services'
import { caseStudies } from '@/lib/data/work'
import { getAllPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const posts = await getAllPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  ].map((p) => ({ url: absoluteUrl(p.path), lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority }))

  return [
    ...staticPages,
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...caseStudies.map((c) => ({
      url: absoluteUrl(`/work/${c.slug}`),
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
