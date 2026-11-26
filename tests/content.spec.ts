import { expect, test } from '@playwright/test'
import { WHATSAPP, allPages, clientPhotoExists, skipIntro } from './helpers'
import { clients } from '../lib/data/home'

/**
 * Content checks on every page:
 *  - no [placeholder] text, no Gmail address, no old pxrinfinity.vercel.app domain
 *  - every WhatsApp link goes to the right number
 *  - every <img> has non-empty alt text
 *  - no console errors
 */

for (const path of allPages) {
  test(`content ${path}`, async ({ page }) => {
    const errors: string[] = []
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    page.on('pageerror', (e) => errors.push(e.message))

    await skipIntro(page)
    const res = await page.goto(path, { waitUntil: 'networkidle' })
    expect(res?.status(), 'HTTP status').toBe(200)

    // 1. Placeholders in visible text
    const text = await page.evaluate(() => document.body.innerText)
    const placeholders = text.match(/\[[^\]\n]{1,60}\]/g) ?? []
    expect(placeholders, 'square-bracket placeholders in page text').toEqual([])
    expect(text).not.toMatch(/@gmail\.com/i)

    // 2. Old domain or Gmail anywhere in the HTML
    const html = await page.content()
    expect(html.match(/pxrinfinity\.vercel\.app/gi) ?? [], 'mentions of the old vercel.app domain').toEqual([])
    expect(html).not.toMatch(/@gmail\.com/i)

    // 3. WhatsApp links
    const waLinks = await page.$$eval('a[href*="wa.me"], a[href*="whatsapp"]', (as) => as.map((a) => a.getAttribute('href') ?? ''))
    expect(waLinks.length, 'page has at least one WhatsApp link').toBeGreaterThan(0)
    for (const href of waLinks) expect(href.startsWith(`https://wa.me/${WHATSAPP}`), href).toBe(true)

    // 4. Images need alt text
    const badImgs = await page.$$eval('img', (imgs) =>
      imgs.filter((i) => !(i.getAttribute('alt') ?? '').trim()).map((i) => i.getAttribute('src')),
    )
    expect(badImgs, 'images without alt text').toEqual([])

    // 5. Console errors
    expect(errors, 'console errors').toEqual([])
  })
}

test('client photos: real image when the file exists, initials fallback when missing', async ({ page }) => {
  await skipIntro(page)
  await page.goto('/', { waitUntil: 'networkidle' })
  for (const c of clients) {
    const card = page.locator('#clients-title ~ ul > li').filter({ hasText: c.name }).first()
    await expect(card, c.name).toBeVisible()
    if (clientPhotoExists(c.photo)) {
      await expect(card.locator('img'), `${c.name} photo`).toHaveAttribute('alt', new RegExp(`${c.name}.*PXR Infinity client`))
    } else {
      const fallback = card.locator(`[data-photo-fallback="${c.photo}"]`)
      await expect(fallback, `${c.name} initials fallback`).toBeVisible()
      await expect(fallback).toHaveAttribute('aria-label', new RegExp(`${c.name}.*PXR Infinity client`))
      expect((await fallback.innerText()).trim().length, `${c.name} initials`).toBeGreaterThan(0)
    }
  }
})

test('404 page is on-brand and has no console errors besides the 404 itself', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await skipIntro(page)
  const res = await page.goto('/this-page-does-not-exist')
  expect(res?.status()).toBe(404)
  await expect(page.getByRole('link', { name: /back to home/i })).toBeVisible()
  expect(errors).toEqual([])
})
