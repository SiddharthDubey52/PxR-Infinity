import { ImageResponse } from 'next/og'
import { INFINITY_PATH } from '@/lib/brand'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#07070C',
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(139,92,246,0.6), transparent 60%)',
        }}
      >
        <svg width="130" height="65" viewBox="0 0 100 50" fill="none">
          <path d={INFINITY_PATH} stroke="#A78BFA" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  )
}
