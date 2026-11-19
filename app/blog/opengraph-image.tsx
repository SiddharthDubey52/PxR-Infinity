import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'Notes from the timeline — PXR Infinity'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'Notes from the timeline', eyebrow: 'Blog' })
}
