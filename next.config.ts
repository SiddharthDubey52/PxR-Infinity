import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  poweredByHeader: false,
  // Short, keyword-rich URLs → the real pages (301). Safe to share on social / in bios.
  async redirects() {
    const r = (source: string, destination: string) => ({ source, destination, permanent: true })
    // Bare domain → the one official address, same path + query (308 permanent).
    // Matches this exact host only, so Vercel preview deployments are never redirected.
    const toWww = (host: string) => ({
      source: '/:path*',
      has: [{ type: 'host' as const, value: host }],
      destination: 'https://www.pxrinfinity.com/:path*',
      permanent: true,
    })
    return [
      toWww('pxrinfinity.com'),
      r('/bigg-boss-pr', '/services/bigg-boss-pr'),
      r('/reality-show-pr', '/services/reality-show-pr'),
      r('/meme-marketing', '/services/meme-marketing'),
      r('/twitter-x-trends', '/services/x-twitter-trends'),
      r('/twitter-trends', '/services/x-twitter-trends'),
      r('/celebrity-pr', '/services/celebrity-pr'),
      r('/pr-media-coverage', '/services/pr-media-coverage'),
      r('/movie-music-promotion', '/services/movie-web-series-promotion'),
      r('/brand-launch', '/services/brand-launch-campaigns'),
      r('/crisis-pr', '/services/crisis-pr-reputation-management'),
      r('/work/shehzad-poonawalla', '/work/shehzad-poonawalla-rise-and-fall-winner'),
      r('/work/niharika-tiwari', '/work/niharika-tiwari-rise-and-fall-finalist'),
      r('/work/the-alliance', '/work/the-alliance-prime-video-x-campaign'),
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

const withMDX = createMDX({
  options: {
    // string form keeps the plugin serialisable for Turbopack
    remarkPlugins: [['remark-gfm']],
  },
})

export default withMDX(nextConfig)
