import { landingServices } from '@/lib/data/landing-pages'
import { ogContentType, ogSize, renderOg } from '@/lib/og'

const page = landingServices.instagramPromotion

export const alt = `PXR Infinity: ${page.name}`
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: page.metaTitle, eyebrow: `Services · ${page.name}` })
}
