import { getPost, getPostSlugs } from '@/lib/blog'
import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'PXR Infinity blog article'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug)
  return renderOg({ title: post?.title ?? 'PXR Infinity Blog', eyebrow: post ? `Blog · ${post.category}` : 'Blog' })
}
