/**
 * Static pages that belong in the sitemap, with the date their content last really changed.
 * Update `updatedAt` whenever you change a page's content (it becomes the sitemap's lastModified).
 */
export const staticPages = [
  { path: '/', updatedAt: '2026-11-25', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', updatedAt: '2026-11-25', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', updatedAt: '2026-11-25', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', updatedAt: '2026-11-25', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', updatedAt: '2026-11-25', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/blog', updatedAt: '2026-11-25', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', updatedAt: '2026-11-26', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/guides', updatedAt: '2026-11-26', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/network', updatedAt: '2026-11-26', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/join-network', updatedAt: '2026-11-26', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/about/facts', updatedAt: '2026-11-26', priority: 0.5, changeFrequency: 'monthly' },
] as const
