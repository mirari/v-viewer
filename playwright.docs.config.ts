import { defineConfig } from '@playwright/test'

const base = process.env.DOCS_BASE || '/'
export default defineConfig({
  testDir: './tests/docs',
  outputDir: 'test-results/docs',
  reporter: process.env.CI
    ? [
        ['list'],
        ['html', { outputFolder: 'playwright-report/docs', open: 'never' }],
      ]
    : 'list',
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  use: {
    baseURL: `http://127.0.0.1:5191${base}`,
    browserName: 'chromium',
    channel: 'chromium',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    },
  },
  webServer: {
    command:
      'pnpm run docs:build && pnpm exec vitepress preview docs --host 127.0.0.1 --port 5191',
    url: `http://127.0.0.1:5191${base}`,
    timeout: 120000,
    reuseExistingServer: false,
  },
})
