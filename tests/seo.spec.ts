import { expect, test } from '@playwright/test'
import { HOME_URL, SITE_URL, allPages, skipIntro } from './helpers'
import { homeFaqs } from '../lib/data/home'

const jsonLd = async (page: import('@playwright/test').Page) =>
  (await page.$$eval('script[type="application/ld+json"]', (s) => s.map((x) => x.textContent ?? ''))).map((t) => JSON.parse(t))

test.describe('home page SEO', () => {
  test.beforeEach(async ({ page }) => {
    await skipIntro(page)
    await page.goto('/', { waitUntil: 'load' })
  })

  test('canonical, og:url and JSON-LD url are the Vercel URL', async ({ page }) => {
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', HOME_URL)
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', HOME_URL)
    const ld = await jsonLd(page)
    const org = ld.find((d) => d['@type'] === 'Organization')
    const site = ld.find((d) => d['@type'] === 'WebSite')
    expect(org?.url).toBe(HOME_URL)
    expect(site?.url).toBe(HOME_URL)
    expect(org?.name).toBe('PXR Infinity')
    expect(org?.alternateName).toEqual(expect.arrayContaining(['pxrinfinity', 'PXR']))
    expect(org?.email).toBe('TeamLcu06@gmail.com')
  })

  test('title, description, social tags', async ({ page }) => {
    await expect(page).toHaveTitle('PXR Infinity (pxrinfinity) — PR, Meme Marketing & Social Media Agency in India')
    const desc = await page.locator('meta[name="description"]').getAttribute('content')
    expect(desc).toBe(
      'PXR Infinity is a PR, meme marketing and X trends agency in India. 63+ campaigns, 25,000+ meme pages, 650+ trends. Get a free proposal on WhatsApp.',
    )
    expect(desc!.length).toBeLessThan(160)
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /PXR Infinity/)
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /PXR Infinity/)
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute('content', `${SITE_URL}/og-image.jpg`)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
    await expect(page.locator('meta[name="google-site-verification"]')).toHaveCount(1)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en-IN')
  })

  test('brand name in H1, first paragraph and footer (incl. "pxrinfinity")', async ({ page }) => {
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toContainText('PXR Infinity')
    await expect(page.locator('main p').first()).toContainText('PXR Infinity')
    await expect(page.locator('footer')).toContainText('PXR Infinity (pxrinfinity)')
  })

  test('FAQPage JSON-LD matches the 8 FAQs on the page', async ({ page }) => {
    const faq = (await jsonLd(page)).find((d) => d['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(8)
    for (const [i, f] of homeFaqs.entries()) {
      expect(faq.mainEntity[i].name).toBe(f.q)
      expect(faq.mainEntity[i].acceptedAnswer.text).toBe(f.a)
      await expect(page.getByText(f.q, { exact: true })).toHaveCount(1)
    }
    // the button sits inside the (closed) first FAQ answer
    const pricingBtn = page.locator('a', { hasText: 'Get pricing on WhatsApp' }).first()
    await expect(pricingBtn).toHaveAttribute('href', /^https:\/\/wa\.me\/918929932208\?text=Hi%20PXR%20Infinity%2C%20I%E2%80%99d%20like%20to%20know%20your%20pricing\./)
  })
})

test('every page has one H1 and a canonical on the Vercel domain', async ({ page }) => {
  await skipIntro(page)
  for (const path of allPages) {
    await page.goto(path, { waitUntil: 'load' })
    await expect(page.locator('h1'), path).toHaveCount(1)
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    expect(canonical, path).toBe(path === '/' ? HOME_URL : `${SITE_URL}${path}`)
  }
})

test('robots.txt, sitemap.xml, og-image and icons', async ({ request }) => {
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).toMatch(/Allow: \//)
  expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`)

  const sitemap = await (await request.get('/sitemap.xml')).text()
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  expect(locs.length).toBe(allPages.length)
  for (const p of allPages) expect(locs).toContain(p === '/' ? HOME_URL : `${SITE_URL}${p}`)
  expect(sitemap.match(/<lastmod>/g)?.length).toBe(allPages.length)

  const og = await request.get('/og-image.jpg')
  expect(og.status()).toBe(200)
  expect(og.headers()['content-type']).toContain('image/jpeg')
  for (const icon of ['/favicon.ico', '/icon.svg', '/apple-icon']) expect((await request.get(icon)).status(), icon).toBe(200)
})
