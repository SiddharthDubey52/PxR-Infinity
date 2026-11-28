import { getSubServicePage, subServicePages } from '@/lib/data/landing-pages'
import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'PXR Infinity service'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return subServicePages.map((p) => {
    const [, , slug, sub] = p.path.split('/')
    return { slug, sub }
  })
}

export default async function Image({ params }: { params: Promise<{ slug: string; sub: string }> }) {
  const { slug, sub } = await params
  const page = getSubServicePage(slug, sub)
  return renderOg({
    title: page?.metaTitle ?? 'PXR Infinity',
    eyebrow: page?.parent ? `${page.parent.name} · ${page.name}` : 'Services',
  })
}
