import { defineConfig, devices } from '@playwright/test'

const PORT = 3100

/**
 * Playwright tests for the production build.
 *   npm run test:e2e            → builds, starts `next start` on :3100, runs every test
 *   npx playwright show-report  → open the HTML report
 * Full-page screenshots are written to tests/screenshots/.
 */
export default defineConfig({
  testDir: './tests',
  outputDir: './tests/results',
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  retries: 0,
  timeout: 90_000,
  reporter: [['list'], ['html', { outputFolder: 'tests/report', open: 'never' }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    ...devices['Desktop Chrome'],
    // Uses your installed Google Chrome. To use Playwright's own Chromium instead:
    //   npx playwright install chromium   and remove the line below
    channel: 'chrome',
  },
  projects: [
    { name: 'site', testIgnore: /reduced-motion\.spec\.ts/ },
    {
      name: 'reduced-motion',
      testMatch: /reduced-motion\.spec\.ts/,
      use: { contextOptions: { reducedMotion: 'reduce' } },
    },
  ],
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
  },
})
