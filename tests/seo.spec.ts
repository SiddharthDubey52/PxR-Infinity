import { expect, test } from '@playwright/test'
import { HOME_URL, SITE_URL, allPages, noindexPages, sitemapPages, skipIntro } from './helpers'
import { homeFaqs } from '../lib/data/home'
import { site } from '../lib/site'

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
    expect(org?.email).toBe('contact@pxrinfinity.com')
    expect(org?.telephone).toBe('+91-89299-32208')
    expect(org?.founder).toBeUndefined()
    const biz = ld.find((d) => d['@type'] === 'ProfessionalService')
    expect(biz?.areaServed).toBe('IN')
    expect(biz?.address?.addressCountry).toBe('IN')
    expect(ld.some((d) => d['@type'] === 'Review' || d['@type'] === 'AggregateRating')).toBe(false)
  })

  test('title, description, social tags', async ({ page }) => {
    await expect(page).toHaveTitle('PXR Infinity | PR and Meme Marketing Agency India')
    const desc = await page.locator('meta[name="description"]').getAttribute('content')
    expect(desc).toContain('PR and meme marketing agency in India')
    expect(desc!.length).toBeLessThan(160)
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /PXR Infinity/)
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /PXR Infinity/)
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute('content', `${SITE_URL}/og-image.jpg`)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
    // only rendered once a real Search Console code is set in lib/site.ts
    await expect(page.locator('meta[name="google-site-verification"]')).toHaveCount(site.googleSiteVerification ? 1 : 0)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en-IN')
  })

  test('brand name in H1, first paragraph and footer (incl. "pxrinfinity")', async ({ page }) => {
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toContainText('PXR Infinity')
    await expect(page.locator('main p').first()).toContainText('PXR Infinity')
    await expect(page.locator('footer')).toContainText('PXR Infinity (pxrinfinity)')
  })

  test('FAQPage JSON-LD matches the FAQs on the page', async ({ page }) => {
    const faq = (await jsonLd(page)).find((d) => d['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(homeFaqs.length)
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
  expect(locs.length).toBe(sitemapPages.length)
  for (const p of sitemapPages) expect(locs).toContain(p === '/' ? HOME_URL : `${SITE_URL}${p}`)
  for (const p of noindexPages) expect(locs).not.toContain(`${SITE_URL}${p}`)
  expect(sitemap.match(/<lastmod>/g)?.length).toBe(sitemapPages.length)
  expect(robots).not.toMatch(/^Host:/m)

  const og = await request.get('/og-image.jpg')
  expect(og.status()).toBe(200)
  expect(og.headers()['content-type']).toContain('image/jpeg')
  for (const icon of ['/favicon.ico', '/icon.svg', '/apple-icon']) expect((await request.get(icon)).status(), icon).toBe(200)
})

test('meta robots, keywords and unique titles/descriptions', async ({ page }) => {
  await skipIntro(page)
  const titles = new Map<string, string>()
  const descs = new Map<string, string>()
  for (const path of allPages) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('meta[name="keywords"]'), path).toHaveCount(0)
    const robots = (await page.locator('meta[name="robots"]').getAttribute('content')) ?? ''
    if (noindexPages.includes(path)) expect(robots, path).toContain('noindex')
    else expect(robots, path).not.toContain('noindex')
    const title = await page.title()
    const desc = (await page.locator('meta[name="description"]').getAttribute('content')) ?? ''
    expect(titles.get(title), `duplicate title on ${path}`).toBeUndefined()
    expect(descs.get(desc), `duplicate description on ${path}`).toBeUndefined()
    expect(desc.length, `description length ${path}`).toBeLessThanOrEqual(160)
    titles.set(title, path)
    descs.set(desc, path)
    const html = await page.content()
    expect(html, `founder name on ${path}`).not.toMatch(/siddharth|\bSid\b/i)
  }
})

test('blog posts: Organization author + BlogPosting + FAQPage', async ({ page }) => {
  await skipIntro(page)
  await page.goto('/blog/pr-agency-charges-in-india', { waitUntil: 'load' })
  const ld = await jsonLd(page)
  const post = ld.find((d) => d['@type'] === 'BlogPosting')
  expect(post.author['@type']).toBe('Organization')
  expect(post.author.name).toBe('PXR Infinity Team')
  expect(post.publisher.name).toBe('PXR Infinity')
  expect(ld.some((d) => d['@type'] === 'FAQPage')).toBe(true)
  expect(ld.some((d) => d['@type'] === 'BreadcrumbList')).toBe(true)
  await expect(page.getByText('By PXR Infinity Team')).toBeVisible()
})
