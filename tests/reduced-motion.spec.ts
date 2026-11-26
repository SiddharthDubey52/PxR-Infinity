import { expect, test } from '@playwright/test'
import { allPages } from './helpers'

/**
 * Runs with prefers-reduced-motion: reduce (see playwright.config.ts).
 * No intro, and every piece of content must be fully visible without scrolling first.
 */
for (const path of allPages) {
  test(`reduced motion: all content visible ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' })

    // the intro never shows for reduced-motion users
    await expect(page.locator('.preloader')).toBeHidden()

    // every animated element is fully opaque and not offset, even below the fold
    const hidden = await page.$$eval('[data-reveal], [data-hero-fade], .split-word > span', (els) =>
      els
        .map((el) => {
          const cs = getComputedStyle(el)
          return { el: el.textContent?.trim().slice(0, 40), opacity: Number(cs.opacity), transform: cs.transform }
        })
        .filter((x) => x.opacity < 1 || (x.transform !== 'none' && x.transform !== 'matrix(1, 0, 0, 1, 0, 0)')),
    )
    expect(hidden, 'elements still hidden or offset with reduced motion').toEqual([])
  })
}
