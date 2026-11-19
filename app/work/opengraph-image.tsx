import { ogContentType, ogSize, renderOg } from '@/lib/og'

export const alt = 'Work that got people talking — PXR Infinity'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg({ title: 'Work that got people talking', eyebrow: 'Case studies' })
}
