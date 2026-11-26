import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

/**
 * Every crawler is allowed everywhere, including AI search crawlers
 * (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot).
 * Pages that shouldn't be indexed use a per-page `noindex, follow` meta tag instead.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
