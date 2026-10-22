import { expect, test } from '@playwright/test'

for (const vue2 of [false, true]) {
  test(`${vue2 ? 'Vue 2' : 'Vue 3'} toolbar slots work inline, in modals and across rebuilds`, async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(`${vue2 ? 'vue2/' : ''}guide/component`)
    const demo = page.locator('.toolbar-example')
    const inline = demo.locator('.viewer-container')
    const image = inline.locator('.viewer-canvas img')
    await expect(image).toBeVisible()
    const id = await inline.getAttribute('id')
    const toolbar = inline.locator('.viewer-toolbar')
    await expect(
      toolbar.getByRole('link', { name: '下载图片 1' }),
    ).toHaveAttribute('href', /valley/)
    const iconButton = toolbar.locator('.viewer-zoom-in')
    const nativeButton = (await iconButton.boundingBox())!
    const appendedButton = (await toolbar
      .getByRole('link', { name: '下载图片 1' })
      .boundingBox())!
    expect(
      Math.abs(
        nativeButton.y +
          nativeButton.height / 2 -
          appendedButton.y -
          appendedButton.height / 2,
      ),
    ).toBeLessThan(8)
    const width = (await image.boundingBox())!.width
    await iconButton.click()
    await expect
      .poll(async () => (await image.boundingBox())!.width)
      .toBeGreaterThan(width)
    await toolbar.locator('.viewer-next').click()
    await expect(
      toolbar.getByRole('link', { name: '下载图片 2' }),
    ).toHaveAttribute('href', /river/)
    await demo.getByRole('checkbox', { name: '替换整个工具栏' }).check()
    await expect(inline).toHaveAttribute('id', id!)
    await expect(toolbar.locator('ul')).toBeHidden()
    const customZoom = toolbar.getByRole('button', { name: '放大' })
    await expect(customZoom.locator('svg')).toHaveCSS(
      'color',
      'rgb(255, 255, 255)',
    )
    const customWidth = (await image.boundingBox())!.width
    await customZoom.locator('path').click()
    await expect
      .poll(async () => (await image.boundingBox())!.width)
      .toBeGreaterThan(customWidth)
    await expect(toolbar.getByRole('button', { name: '旋转' })).toBeVisible()
    await toolbar.getByRole('button', { name: '旋转' }).focus()
    await page.keyboard.press('Enter')
    await expect(image).toHaveAttribute('style', /rotate\(90deg\)/)
    await toolbar.getByRole('button', { name: '重置' }).click()
    await expect(image).toHaveCSS('transform', 'none')
    await demo
      .locator('.toolbar-stage')
      .screenshot({ path: test.info().outputPath('toolbar-inline.png') })
    await demo.getByRole('checkbox', { name: '替换整个工具栏' }).uncheck()
    await expect(toolbar.locator('ul')).toBeVisible()
    await expect(toolbar.locator('.viewer-zoom-in')).toBeVisible()
    await demo.getByRole('checkbox', { name: '内嵌模式' }).uncheck()
    await expect(inline).toHaveCount(0)
    await demo.locator('.gallery img').first().click()
    const modal = page.locator('body > .viewer-container')
    await expect(modal).toBeVisible()
    await expect(
      modal.getByRole('link', { name: '下载图片 1' }),
    ).toHaveAttribute('href', /valley/)
    await expect(modal.locator('.viewer-zoom-in')).toBeVisible()
    await modal.screenshot({
      path: test.info().outputPath('toolbar-modal.png'),
    })
    await modal.locator('.viewer-close').click()
    await expect(modal).toBeHidden()
    await demo.locator('.gallery img').nth(1).click()
    await expect(
      modal.getByRole('link', { name: '下载图片 2' }),
    ).toHaveAttribute('href', /river/)
    await modal.locator('.viewer-close').click()
    await demo.getByRole('checkbox', { name: '内嵌模式' }).check()
    await expect(modal).toHaveCount(0)
    await expect(inline.locator('.v-viewer-toolbar-append-slot')).toHaveCount(1)
    await expect(inline.locator('.viewer-canvas img')).toBeVisible()
    await page.getByRole('link', { name: '指令', exact: true }).first().click()
    await expect(
      page.locator('.toolbar-example, .v-viewer-toolbar-append-slot'),
    ).toHaveCount(0)
    expect(errors).toEqual([])
  })
}
