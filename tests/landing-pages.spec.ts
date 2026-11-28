import { expect, test } from '@playwright/test'
import { SITE_URL, skipIntro } from './helpers'
import { allLandingPages } from '../lib/data/landing-pages'

/** New service + sub-service pages from lib/data/landing-pages.ts */
for (const l of allLandingPages) {
  test(`landing page ${l.path}: title, canonical, one H1, JSON-LD`, async ({ page }) => {
    await skipIntro(page)
    const res = await page.goto(l.path, { waitUntil: 'load' })
    expect(res?.status()).toBe(200)
    await expect(page).toHaveTitle(`${l.metaTitle} | PXR Infinity`)
    expect(`${l.metaTitle} | PXR Infinity`.length).toBeLessThanOrEqual(60)
    expect(l.metaDescription.length).toBeLessThanOrEqual(155)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${SITE_URL}${l.path}`)
    await expect(page.locator('h1')).toHaveCount(1)
    const types = (await page.$$eval('script[type="application/ld+json"]', (s) => s.map((x) => JSON.parse(x.textContent ?? '{}')['@type'])))
    expect(types).toEqual(expect.arrayContaining(['Service', 'BreadcrumbList', 'FAQPage']))
    if (l.parent) await expect(page.locator(`main a[href="${l.parent.path}"]`).first()).toBeAttached()
  })
}

const newPosts = [
  '/blog/instagram-promotion-cost-india',
  '/blog/movie-promotion-cost-india',
  '/blog/instagram-promotion-kaise-kare',
  '/blog/instagram-promotion-kya-hota-hai',
  '/blog/personal-branding-kya-hai',
  '/blog/brand-promotion-kya-hota-hai',
  '/blog/viral-marketing-kya-hai',
]

for (const path of [...allLandingPages.map((l) => l.path), ...newPosts]) {
  test(`no horizontal scroll at 360px: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 })
    await skipIntro(page)
    await page.goto(path, { waitUntil: 'load' })
    const [scroll, inner] = await page.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth])
    expect(scroll).toBeLessThanOrEqual(inner)
  })
}

test('landing pages are in the sitemap', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const l of allLandingPages) expect(sitemap).toContain(`<loc>${SITE_URL}${l.path}</loc>`)
})
