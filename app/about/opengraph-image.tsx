import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'Meet the team behind the hype — PXR Infinity'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'Meet the team behind the hype', eyebrow: 'About PXR Infinity' })
}
