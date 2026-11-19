import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'PR, memes, trends & influencers — one team — PXR Infinity'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'PR, memes, trends & influencers — one team', eyebrow: 'Services' })
}
