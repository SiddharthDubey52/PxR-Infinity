import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'Simple packages. Custom quotes. — PXR Infinity'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'Simple packages. Custom quotes.', eyebrow: 'Pricing' })
}
