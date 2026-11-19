import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { Preloader } from '@/components/motion/Preloader'
import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { Cursor } from '@/components/motion/Cursor'
import { MarqueeDirection } from '@/components/motion/MarqueeDirection'
import { JsonLd } from '@/components/ui/JsonLd'
import { SITE_URL, site } from '@/lib/site'
import { organizationLd, websiteLd } from '@/lib/seo'

// Self-hosted Fontshare fonts (/public/fonts). Clash Display = headings, Satoshi = body.
const clash = localFont({
  src: [
    { path: '../public/fonts/ClashDisplay-500.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-600.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-clash',
  display: 'swap',
  preload: true,
  fallback: ['Space Grotesk', 'system-ui', 'sans-serif'],
})

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Satoshi-500.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Satoshi-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  fallback: ['Inter', 'system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PXR Infinity (pxrinfinity) — PR, Meme Marketing & Social Media Agency in India',
    template: '%s | PXR Infinity',
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'PXR Infinity — Infinite reach. Real hype.' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Google Search Console: paste your code into googleSiteVerification in lib/site.ts
  ...(site.googleSiteVerification ? { verification: { google: site.googleSiteVerification } } : {}),
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#07070C',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

/**
 * Inline boot script (runs before first paint, no framework needed):
 * - adds `.js` so reveal animations can start hidden (no-JS & crawlers see everything)
 * - skips the preloader on repeat visits / reduced motion
 * - scroll reveals: one IntersectionObserver started as soon as the HTML is parsed,
 *   so above-the-fold content never waits for React to hydrate (good for LCP)
 * - failsafe: if something goes wrong, show everything after 4s
 */
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');
try{if(sessionStorage.getItem('pxr-intro')||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('skip-preload')}catch(e){d.classList.add('skip-preload')}
function init(){if(!('IntersectionObserver' in window)){d.classList.remove('js');return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
var vh=innerHeight;document.querySelectorAll('[data-reveal]').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<vh&&r.bottom>0)el.classList.add('is-in','reveal-instant')});
var q=0;function scan(){q=0;document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(function(el){io.observe(el)})}
scan();new MutationObserver(function(){if(!q)q=requestAnimationFrame(scan)}).observe(document.body,{childList:true,subtree:true});d.dataset.revealReady='1'}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
setTimeout(function(){if(!d.dataset.revealReady)d.classList.remove('js');d.classList.add('is-ready')},4000)})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${clash.variable} ${satoshi.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh text-ink antialiased">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-accent-strong px-5 py-3 font-semibold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Preloader />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SmoothScroll />
        <WhatsAppFloat />
        <Cursor />
        <MarqueeDirection />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </body>
    </html>
  )
}
