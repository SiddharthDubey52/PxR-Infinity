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
  alternateNames: ['pxrinfinity', 'PXR'],
  description:
    'PXR Infinity is a PR, meme marketing and X trends agency in India. 63+ campaigns, 25,000+ meme pages, 650+ trends. Get a free proposal on WhatsApp.',
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
    linkedin: '', // TODO: add your LinkedIn page URL, e.g. 'https://www.linkedin.com/company/pxrinfinity'
    youtube: '',
  },

  // TODO: Google Search Console → URL-prefix property → HTML tag method.
  // Paste ONLY the content="..." value here (replace TODO_PASTE_CODE), then redeploy and click Verify.
  googleSiteVerification: 'TODO_PASTE_CODE',

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
