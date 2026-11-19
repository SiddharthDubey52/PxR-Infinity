import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'

/**
 * BLOG — add a post by creating content/blog/<slug>.mdx with an exported `metadata` object.
 * The listing, sitemap, OG images and /blog/<slug> page pick it up automatically.
 */

export type PostMeta = {
  title: string
  description: string
  date: string // YYYY-MM-DD
  updated?: string
  category: string
  keywords: string[]
  relatedServices: string[]
}

export type Post = PostMeta & { slug: string; readingMinutes: number }

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

function readingMinutes(slug: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8')
  const body = raw.replace(/export const metadata = \{[\s\S]*?\n\}\n/, '')
  return Math.max(1, Math.round(body.split(/\s+/).length / 220))
}

export async function getPost(slug: string): Promise<(Post & { Content: ComponentType }) | null> {
  if (!getPostSlugs().includes(slug)) return null
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: ComponentType
    metadata: PostMeta
  }
  return { ...mod.metadata, slug, readingMinutes: readingMinutes(slug), Content: mod.default }
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map((s) => getPost(s)))
  return posts
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map(({ Content: _c, ...meta }) => meta) // eslint-disable-line @typescript-eslint/no-unused-vars
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
