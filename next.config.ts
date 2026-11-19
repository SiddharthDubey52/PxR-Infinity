import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  poweredByHeader: false,
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
