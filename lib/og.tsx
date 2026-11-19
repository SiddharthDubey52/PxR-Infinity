import { ImageResponse } from 'next/og'
import { INFINITY_PATH } from '@/lib/brand'
import { SITE_URL, site } from './site'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

/** Shared branded Open Graph image used by every route's opengraph-image.tsx */
export function renderOg({ title, eyebrow = 'PR · Memes · Trends' }: { title: string; eyebrow?: string }) {
  const host = new URL(SITE_URL).host
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#07070C',
          backgroundImage:
            'radial-gradient(circle at 15% 10%, rgba(139,92,246,0.55), transparent 45%), radial-gradient(circle at 90% 85%, rgba(59,130,246,0.45), transparent 45%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 52, fontWeight: 800, letterSpacing: -2 }}>
            PXR
            <svg width="70" height="35" viewBox="0 0 100 50" fill="none" style={{ marginLeft: 8 }}>
              <path d={INFINITY_PATH} stroke="#A78BFA" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, letterSpacing: 4, color: '#B197FC', textTransform: 'uppercase', marginBottom: 20 }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 60 ? 54 : 66, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#A6A6BD' }}>
          <span>{site.tagline}</span>
          <span>{host}</span>
        </div>
      </div>
    ),
    ogSize,
  )
}
