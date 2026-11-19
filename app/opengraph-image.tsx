import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'PXR Infinity — PR, meme marketing & social media agency in India'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'Infinite Reach. Real Hype.', eyebrow: 'PR & meme marketing agency · India' })
}
