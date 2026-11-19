import fs from 'node:fs'
import path from 'node:path'
import type { Page } from '@playwright/test'
import { services } from '../lib/data/services'
import { caseStudies } from '../lib/data/work'

export const SITE_URL = 'https://pxrinfinity.vercel.app'
export const HOME_URL = `${SITE_URL}/`
export const WHATSAPP = '918929932208'

/** Widths from the brief (portrait) plus landscape phone/tablet sizes. */
export const viewports = [
  { name: '320', width: 320, height: 640 },
  { name: '360', width: 360, height: 740 },
  { name: '375', width: 375, height: 812 },
  { name: '390', width: 390, height: 844 },
  { name: '414', width: 414, height: 896 },
  { name: '768', width: 768, height: 1024 },
  { name: '820', width: 820, height: 1180 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1440', width: 1440, height: 900 },
  { name: '1920', width: 1920, height: 1080 },
  { name: '667-landscape', width: 667, height: 375 },
  { name: '844-landscape', width: 844, height: 390 },
  { name: '1180-landscape', width: 1180, height: 820 },
]

const blogSlugs = fs
  .readdirSync(path.join(__dirname, '..', 'content', 'blog'))
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => f.replace(/\.mdx$/, ''))

/** Every page on the site (same list the sitemap uses). */
export const allPages = [
  '/',
  '/about',
  '/services',
  '/work',
  '/pricing',
  '/blog',
  '/contact',
  ...services.map((s) => `/services/${s.slug}`),
  ...caseStudies.map((c) => `/work/${c.slug}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
]

/** Scroll through the page so every scroll-reveal fires, then return to the top. */
export async function revealAll(page: Page) {
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(window.innerHeight * 0.6))
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 40))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(1100) // let reveal transitions finish
}

/** Skip the once-per-session intro so tests start on the page content. */
export async function skipIntro(page: Page) {
  await page.addInitScript(() => {
    try {
      sessionStorage.setItem('pxr-intro', '1')
    } catch {}
  })
}

export const clientPhotoExists = (src: string) => fs.existsSync(path.join(__dirname, '..', 'public', src))
