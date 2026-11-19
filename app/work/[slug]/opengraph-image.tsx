import { caseStudies, getCaseStudy } from '@/lib/data/work'
import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'PXR Infinity case study'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug)
  return renderOg({ title: c?.title ?? 'Case study', eyebrow: c ? `Case study · ${c.category}` : 'Case study' })
}
