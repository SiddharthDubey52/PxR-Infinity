import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'

/**
 * BLOG — add a post by creating content/blog/<slug>.mdx with an exported `metadata` object.
 * The listing, sitemap, OG images and /blog/<slug> page pick it up automatically.
 * `faqs` are rendered as a visible FAQ at the end of the post AND as FAQPage JSON-LD,
 * so the two always match.
 */

export const blogCategories = ['PR', 'Meme Marketing', 'X Trends', 'Reality TV', 'Influencer', 'Entertainment'] as const
export type BlogCategory = (typeof blogCategories)[number]

export type PostMeta = {
  /** H1 (and <title> unless seoTitle is set) */
  title: string
  /** Shorter <title> (before "| PXR Infinity") when the H1 is long */
  seoTitle?: string
  description: string
  date: string // YYYY-MM-DD, date first published
  updated?: string // YYYY-MM-DD, date the content last really changed
  category: BlogCategory
  /** Planning only — one main keyword per page, never reused */
  mainKeyword?: string
  relatedServices: string[]
  /** Hand-picked related posts (slugs) for "Keep reading" */
  relatedPosts?: string[]
  faqs?: { q: string; a: string }[]
}

export type Post = PostMeta & { slug: string; readingMinutes: number; words: number }

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

function countWords(slug: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8')
  const body = raw.replace(/export const metadata = \{[\s\S]*?\n\}\n/, '')
  return body.split(/\s+/).filter(Boolean).length
}

export async function getPost(slug: string): Promise<(Post & { Content: ComponentType }) | null> {
  if (!getPostSlugs().includes(slug)) return null
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: ComponentType
    metadata: PostMeta
  }
  const faqWords = (mod.metadata.faqs ?? []).reduce((n, f) => n + `${f.q} ${f.a}`.split(/\s+/).length, 0)
  const words = countWords(slug) + faqWords
  return { ...mod.metadata, slug, words, readingMinutes: Math.max(1, Math.round(words / 220)), Content: mod.default }
}

/** All posts, newest first (ties broken by title so the order is stable). */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map((s) => getPost(s)))
  return posts
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map(({ Content: _c, ...meta }) => meta) // eslint-disable-line @typescript-eslint/no-unused-vars
    .sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : a.date < b.date ? 1 : -1))
}

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
