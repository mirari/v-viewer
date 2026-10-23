import { expect, test } from '@playwright/test'

for (const vue2 of [false, true]) {
  const prefix = vue2 ? 'vue2/' : ''
  for (const direct of [false, true]) {
    test(`${vue2 ? 'Vue 2' : 'Vue 3'} migration anchor survives inline preview loading (${direct ? 'direct' : 'link'})`, async ({
      page,
    }) => {
      let releaseImages!: () => void
      const imagesReady = new Promise<void>((resolve) => {
        releaseImages = resolve
      })
      // Let anchor navigation finish before the inline viewer can initialize.
      await page.route('**/images/**', async (route) => {
        await imagesReady
        await route.continue()
      })
      if (direct) {
        await page.goto(`${prefix}guide/component#migration`, {
          waitUntil: 'domcontentloaded',
        })
      } else {
        await page.setViewportSize({ width: 1680, height: 900 })
        await page.goto(`${prefix}guide/component`, {
          waitUntil: 'domcontentloaded',
        })
        await page.locator('.VPDocAside a[href="#migration"]').click()
      }
      try {
        await expect(page.locator('.toolbar-example')).toBeAttached()
        await expect(page.locator('#migration')).toBeInViewport()
      } finally {
        releaseImages()
      }
      await expect(
        page.locator('.toolbar-example .viewer-canvas img'),
      ).toBeVisible()
      await expect(
        page.locator('.toolbar-example .viewer-list > li'),
      ).toHaveCount(5)
      await expect(page.locator('#migration')).toBeInViewport()
      await expect(page.locator('.toolbar-example :focus')).toHaveCount(0)
    })
  }
}
