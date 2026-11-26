/**
 * ============================================================
 *  PXR INFINITY — SITE CONFIG (single source of truth)
 *  Used for: metadataBase, canonicals, Open Graph, sitemap,
 *  robots, JSON-LD, footer, contact links and WhatsApp.
 *
 *  The live domain is set in SITE_URL only.
 * ============================================================
 */

// The ONE place the live domain is set (https, www, no trailing slash). Canonicals, sitemap,
// robots.txt, Open Graph and JSON-LD all follow it. NEXT_PUBLIC_SITE_URL can override it, but
// leave that env var unset in Vercel production so an old address never comes back.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pxrinfinity.com').replace(/\/$/, '')

/** The one contact address used across the site (mailto links, footer, contact page, JSON-LD). */
export const CONTACT_EMAIL = 'contact@pxrinfinity.com'

export const site = {
  name: 'PXR Infinity',
  legalName: 'PXR Infinity',
  tagline: 'Infinite Reach. Real Hype.',
  alternateNames: ['pxrinfinity', 'PXR', 'PxR Infinity', 'PXRInfinity', 'PXR Infinity Agency'],
  description:
    'PXR Infinity is a PR, meme marketing and X trends agency in India. 63+ campaigns, 25,000+ meme pages, 650+ trends. Get a free proposal on WhatsApp.',
  locale: 'en_IN',
  country: 'IN',

  email: CONTACT_EMAIL,

  // WhatsApp number, international format, digits only (91 = India)
  whatsapp: '918929932208',
  whatsappDisplay: '+91 89299 32208',
  telephone: '+91-89299-32208', // used in JSON-LD (phone + WhatsApp)
  whatsappDefaultMessage: 'Hi PXR Infinity! I want to discuss a campaign.',

  // Social profiles (also used in Organization JSON-LD "sameAs"). Leave '' to hide one.
  socials: {
    instagram: 'https://www.instagram.com/pxrinfinity',
    x: 'https://x.com/pxrinfinity',
    linkedin: '', // TODO: add your LinkedIn page URL, e.g. 'https://www.linkedin.com/company/pxrinfinity'
    youtube: '',
  },

  // Directory / review profiles. Shown as "Find us on" in the footer and on /about, and added to
  // Organization "sameAs", only once a URL is filled in. Never show a rating that isn't on the directory itself.
  directories: {
    clutch: '', // TODO(Sid): add profile URLs — e.g. 'https://clutch.co/profile/pxr-infinity'
    designrush: '',
    goodfirms: '',
    googleBusiness: '',
  },

  // TODO: Google Search Console → URL-prefix property → HTML tag method.
  // Paste ONLY the content="..." value here between the quotes below, then redeploy and click Verify.
  googleSiteVerification: '', // TODO_PASTE_CODE — the tag is only output once this is filled in

} as const

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString()

export const waLink = (text: string = site.whatsappDefaultMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const directoryLabels: Record<keyof typeof site.directories, string> = {
  clutch: 'Clutch',
  designrush: 'DesignRush',
  goodfirms: 'GoodFirms',
  googleBusiness: 'Google Business Profile',
}

/** Directory profiles that have a URL, in display order. Empty → the "Find us on" strip is hidden. */
export const directoryLinks = (Object.keys(directoryLabels) as (keyof typeof site.directories)[])
  .filter((k) => site.directories[k])
  .map((k) => ({ label: directoryLabels[k], href: site.directories[k] as string }))

export const sameAs = [...Object.values(site.socials), ...Object.values(site.directories)].filter(Boolean)

export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const
