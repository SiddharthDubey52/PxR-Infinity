import { getService, services } from '@/lib/data/services'
import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'PXR Infinity service'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug)
  return renderOg({ title: s?.metaTitle ?? 'PXR Infinity', eyebrow: s ? `Services · ${s.name}` : 'Services' })
}
