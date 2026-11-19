/**
 * ============================================================
 *  PXR INFINITY — SITE CONFIG (single source of truth)
 *  Used for: metadataBase, canonicals, Open Graph, sitemap,
 *  robots, JSON-LD, footer, contact links and WhatsApp.
 *
 *  When you connect a custom domain, change SITE_URL only.
 * ============================================================
 */

export const SITE_URL = 'https://pxrinfinity.vercel.app'

export const site = {
  name: 'PXR Infinity',
  legalName: 'PXR Infinity',
  tagline: 'Infinite Reach. Real Hype.',
  description:
    'PXR Infinity is a PR, meme marketing and social media agency in India. We promote brands, celebrities, creators, movies, music and reality-show contestants with meme pages, X trends, influencers and media coverage.',
  founder: 'Siddharth (Sid)',
  locale: 'en_IN',
  city: 'Mumbai',
  country: 'IN',

  email: 'TeamLcu06@gmail.com',

  // WhatsApp number, international format, digits only (91 = India)
  whatsapp: '918929932208',
  whatsappDisplay: '+91 89299 32208',
  whatsappDefaultMessage: 'Hi PXR Infinity! I want to discuss a campaign.',

  // Social profiles (also used in Organization JSON-LD "sameAs"). Leave '' to hide one.
  socials: {
    instagram: 'https://www.instagram.com/pxrinfinity',
    x: 'https://x.com/pxrinfinity',
    linkedin: '',
    youtube: '',
  },

  // Google Search Console → URL-prefix property → HTML tag → paste ONLY the content="..." value here
  googleSiteVerification: '',

  keywords: [
    'PR agency India',
    'meme marketing agency India',
    'celebrity PR agency',
    'Bigg Boss PR team',
    'X Twitter trend agency',
    'influencer marketing agency India',
    'movie promotion agency',
    'reality show PR',
    'PXR Infinity',
  ],
} as const

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString()

export const waLink = (text: string = site.whatsappDefaultMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const sameAs = Object.values(site.socials).filter(Boolean)

export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const
