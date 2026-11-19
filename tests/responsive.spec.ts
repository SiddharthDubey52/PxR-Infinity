import { expect, test } from '@playwright/test'
import { allPages, revealAll, skipIntro, viewports } from './helpers'

/**
 * Responsive checks:
 *  - full-page screenshot of the home page at every width → tests/screenshots/home-<width>.png
 *  - no horizontal overflow on ANY page at ANY width
 */

for (const vp of viewports) {
  test.describe(`viewport ${vp.name}`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } })

    test(`home screenshot @ ${vp.name}`, async ({ page }) => {
      await skipIntro(page)
      await page.goto('/', { waitUntil: 'networkidle' })
      await revealAll(page)
      await page.screenshot({ path: `tests/screenshots/home-${vp.name}.png`, fullPage: true })
    })

    test(`no horizontal overflow on any page @ ${vp.name}`, async ({ page }) => {
      await skipIntro(page)
      const offenders: string[] = []
      for (const path of allPages) {
        await page.goto(path, { waitUntil: 'load' })
        await page.waitForTimeout(150)
        const { scrollWidth, innerWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
        }))
        if (scrollWidth > innerWidth) offenders.push(`${path} (scrollWidth ${scrollWidth} > ${innerWidth})`)
      }
      expect(offenders, `pages that scroll sideways at ${vp.name}px`).toEqual([])
    })
  })
}
