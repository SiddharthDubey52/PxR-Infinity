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
  foundingYear: '[YEAR]', // e.g. '2021'
  locale: 'en_IN',
  city: 'Mumbai', // REPLACE if different
  country: 'IN',

  // REPLACE: your Gmail address
  email: 'your-email@gmail.com',

  // REPLACE: WhatsApp number, international format, digits only (91 = India). e.g. '919876543210'
  whatsapp: '918929932208',
  whatsappDisplay: '+91 89299 32208',
  whatsappDefaultMessage: 'Hi PXR Infinity! I want to discuss a campaign.',

  // REPLACE with your real profiles (also used in Organization JSON-LD "sameAs")
  socials: {
    instagram: 'https://www.instagram.com/[YOUR_HANDLE]',
    x: 'https://x.com/[YOUR_HANDLE]',
    linkedin: 'https://www.linkedin.com/company/[YOUR_PAGE]',
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

export const sameAs = Object.values(site.socials).filter(
  (u) => u && !u.includes('['),
)

export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const
