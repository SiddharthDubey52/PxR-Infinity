import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'Trend karwana hai? Baat karte hain. — PXR Infinity'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'Trend karwana hai? Baat karte hain.', eyebrow: 'Contact' })
}
