import { expect, test } from '@playwright/test'

for (const english of [false, true]) {
  test(`${english ? 'English' : 'Chinese'} home has an inline image viewer`, async ({
    page,
  }) => {
    await page.goto(english ? 'en/' : './')
    const example = page.getByRole('region', {
      name: english ? 'Image viewer' : '图片浏览',
    })
    const viewer = example.locator('.viewer-container')
    const image = viewer.locator('.viewer-canvas img')
    await expect(image).toBeVisible()
    await expect(image).toHaveAttribute('src', /valley/)
    await expect(example.locator('pre, code, h2')).toHaveCount(0)
    await expect(page.locator('body > .viewer-container')).toHaveCount(0)
    await expect(viewer.locator('.viewer-list > li')).toHaveCount(3)
    await viewer.getByRole('button', { name: 'Next', exact: true }).click()
    await expect(image).toHaveAttribute('src', /river/)
    await viewer.getByRole('button', { name: 'Previous', exact: true }).click()
    await expect(image).toHaveAttribute('src', /valley/)
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(image).toBeVisible()
    await expect
      .poll(async () => {
        const container = await example.locator('.demo-card').boundingBox()
        const preview = await viewer.boundingBox()
        return Math.abs(container!.width - preview!.width)
      })
      .toBeLessThanOrEqual(1)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false)
    await expect(page.locator('body')).not.toHaveClass(/viewer-open/)
    await page
      .getByRole('link', {
        name: english ? 'Get started' : '快速上手',
        exact: true,
      })
      .first()
      .click()
    await expect(page.locator('.home-demo')).toHaveCount(0)
    await expect(page.locator('body > .viewer-container')).toHaveCount(0)
    await expect(page.locator('body')).not.toHaveClass(/viewer-open/)
  })
}

for (const vue2 of [false, true]) {
  test(`${vue2 ? 'Vue 2' : 'Vue 3'} configurable quick start updates the preview`, async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(vue2 ? 'vue2/' : 'guide/getting-started')
    const panel = page.getByRole('region', { name: '图片预览配置' })
    const frame = page
    const image = frame.locator('.viewer-canvas img')
    const search = panel.getByRole('searchbox', { name: '搜索配置项' })
    await expect(image).toBeVisible()
    await expect(panel.getByRole('status')).toHaveText('已应用')
    await expect(image).toHaveAttribute('src', /valley/)
    const navbar = await page.locator('.viewer-navbar').boundingBox()
    const toolbarBottom = await page
      .locator('.viewer-toolbar [role="button"]')
      .evaluateAll((buttons) =>
        Math.max(
          ...buttons.map((button) => button.getBoundingClientRect().bottom),
        ),
      )
    expect(toolbarBottom).toBeLessThanOrEqual(navbar!.y)
    await page.getByRole('button', { name: 'Next', exact: true }).click()
    await expect(image).toHaveAttribute('src', /river/)
    await page.getByRole('button', { name: 'Previous', exact: true }).click()
    await expect(image).toHaveAttribute('src', /valley/)

    await search.fill('toolbar')
    await panel
      .getByRole('combobox', { name: 'toolbar', exact: true })
      .selectOption({ label: '隐藏' })
    await expect(frame.locator('.viewer-toolbar')).toBeHidden()
    await panel
      .getByRole('combobox', { name: 'toolbar', exact: true })
      .selectOption({ label: '仅缩放与翻页' })
    await expect(
      frame.getByRole('button', { name: 'Zoom In', exact: true }),
    ).toBeVisible()
    await expect(
      frame.getByRole('button', { name: 'Rotate Left', exact: true }),
    ).toHaveCount(0)

    await search.fill('initialViewIndex')
    await panel
      .getByRole('spinbutton', { name: 'initialViewIndex', exact: true })
      .fill('1')
    await panel
      .getByRole('spinbutton', { name: 'initialViewIndex', exact: true })
      .press('Tab')
    await expect(image).toHaveAttribute('src', /river/)
    await search.fill('url')
    await panel
      .getByRole('combobox', { name: 'url', exact: true })
      .selectOption({ label: 'data-source（不同图片）' })
    await expect(image).toHaveAttribute('src', /ridge/)
    await search.fill('inheritedAttributes')
    await panel
      .getByRole('combobox', { name: 'inheritedAttributes', exact: true })
      .selectOption({ label: '继承 data-credit' })
    await expect(image).toHaveAttribute('data-credit', 'Lorem Picsum')

    await panel.getByRole('button', { name: '重置示例' }).click()
    await search.fill('inline')
    await panel.getByRole('radio', { name: 'modal', exact: true }).check()
    await expect(panel.getByRole('status')).toHaveText('已应用')
    await expect(page.getByRole('dialog')).toBeHidden()
    const photos = panel.locator('.photos')
    const firstPhoto = photos.getByRole('img', {
      name: 'Landscape 1',
      exact: true,
    })
    // Let Playwright move the image clear of VitePress's sticky header first.
    await firstPhoto.click({ trial: true })
    const scrollBefore = await page.evaluate(() => scrollY)
    const previewSize = await panel.locator('.preview-host').boundingBox()
    await firstPhoto.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toHaveAccessibleName(/960 × 640/)
    await expect(page.locator('body > .viewer-config-viewer')).toBeVisible()
    await expect
      .poll(() => dialog.boundingBox())
      .toEqual({ x: 0, y: 0, ...page.viewportSize()! })
    // Only Viewer.js is a page overlay; the original gallery stays in place.
    await expect(photos).toBeVisible()
    expect(await panel.locator('.preview-host').boundingBox()).toEqual(
      previewSize,
    )
    await expect(panel.locator('iframe')).toHaveCount(0)
    await dialog.press('Escape')
    await expect(dialog).toBeHidden()
    expect(await page.evaluate(() => scrollY)).toBeCloseTo(scrollBefore, 0)
    await search.fill('navbar')
    await panel
      .getByRole('combobox', { name: 'navbar', exact: true })
      .selectOption({ label: '隐藏' })
    await expect(panel.getByRole('status')).toHaveText('已应用')
    await expect(dialog).toBeHidden()
    await firstPhoto.click()
    await expect(dialog).toHaveAccessibleName(/960 × 640/)
    await expect(page.locator('.viewer-navbar')).toBeHidden()
    await page.locator('.viewer-button').click()
    await expect(dialog).toBeHidden()
    expect(
      await page.evaluate(() =>
        document.body.classList.contains('viewer-open'),
      ),
    ).toBe(false)
    await panel.locator('.event-log summary').click()
    await expect(panel.getByRole('log')).toContainText('viewed')
    await panel.getByText('查看组件配置代码', { exact: true }).click()
    await expect(panel.locator('.option-code code')).toContainText(
      'inline: false',
    )
    expect(errors).toEqual([])
    await expect(panel.getByRole('alert')).toHaveCount(0)
  })
}

for (const vue2 of [false, true]) {
  const prefix = vue2 ? 'vue2/' : ''
  for (const mode of ['component', 'directive', 'api']) {
    test(`${vue2 ? 'Vue 2' : 'Vue 3'} ${mode}: images, show, toolbar and cleanup`, async ({
      page,
    }) => {
      const errors: string[] = []
      page.on('pageerror', (error) => errors.push(error.message))
      await page.emulateMedia({ colorScheme: 'dark' })
      await page.goto(`${prefix}guide/${mode}`)
      const frame = page
      const preview = page.locator('.viewer-demo')
      await expect(preview.locator('iframe')).toHaveCount(0)
      await expect(frame.locator('.viewer-example')).toHaveCSS(
        'background-color',
        'rgb(32, 33, 39)',
      )
      const expectContentHeight = async () => {
        await expect
          .poll(async () => {
            const outer = await preview.boundingBox()
            const content = await preview.locator('main').boundingBox()
            return Math.abs(outer!.height - content!.height - 2)
          })
          .toBeLessThanOrEqual(1)
      }
      await expectContentHeight()
      await page.getByRole('switch', { name: '切换到浅色主题' }).click()
      await expect(frame.locator('.viewer-example')).toHaveCSS(
        'background-color',
        'rgb(246, 246, 247)',
      )
      await page.getByRole('switch', { name: '切换到深色主题' }).click()
      await expect(frame.locator('.viewer-example')).toHaveCSS(
        'background-color',
        'rgb(32, 33, 39)',
      )
      const open = async (withButton = false) => {
        if (mode === 'api' || withButton)
          await frame
            .getByRole('button', { name: '显示viewer', exact: true })
            .click()
        else
          await frame
            .getByRole('img', { name: 'Landscape 1', exact: true })
            .click()
        // Viewer.js binds controls after the entrance animation completes.
        await expect(frame.getByRole('dialog')).toHaveAccessibleName(
          /960 × 640/,
        )
      }
      const close = async () => {
        await frame.getByRole('dialog').press('Escape')
        await expect(frame.getByRole('dialog')).toBeHidden()
        if (mode === 'api')
          await expect(frame.locator('.v-viewer-token')).toHaveCount(0)
      }
      await open()
      await expect(page.locator('body > .viewer-container')).toBeVisible()
      await expect
        .poll(() => page.getByRole('dialog').boundingBox())
        .toEqual({ x: 0, y: 0, ...page.viewportSize()! })
      await frame.getByRole('button', { name: 'Zoom In', exact: true }).click()
      await frame.getByRole('button', { name: 'Next', exact: true }).click()
      // URL-only API images use their filenames as the default title.
      await expect(frame.getByRole('dialog')).toHaveAccessibleName(
        mode === 'api' ? /river/ : /Landscape 2/,
      )
      await close()
      const add = frame.getByRole('button', { name: '添加图片', exact: true })
      const remove = frame.getByRole('button', {
        name: '删除图片',
        exact: true,
      })
      const show = frame.getByRole('button', {
        name: '显示viewer',
        exact: true,
      })
      await add.click()
      await expect(add).toBeDisabled()
      await open(true)
      await expect(frame.locator('.viewer-list > li')).toHaveCount(3)
      await close()
      for (let i = 0; i < 3; i++) await remove.click()
      await expect(remove).toBeDisabled()
      await expect(show).toBeDisabled()
      await expectContentHeight()
      await add.click()
      const toolbar = frame.getByRole('group', { name: '切换工具栏' })
      const toolbarOn = toolbar.getByRole('button', { name: '开启' })
      const toolbarOff = toolbar.getByRole('button', { name: '关闭' })
      await expect(toolbarOn).toHaveAttribute('aria-pressed', 'true')
      await toolbarOff.click()
      await expect(toolbarOn).toHaveAttribute('aria-pressed', 'false')
      await expect(toolbarOff).toHaveAttribute('aria-pressed', 'true')
      await open(true)
      await expect(frame.locator('.viewer-list > li')).toHaveCount(1)
      await expect(
        frame.getByRole('button', { name: 'Zoom In', exact: true }),
      ).toBeHidden()
      await close()
      await toolbarOn.click()
      await expect(toolbarOn).toHaveAttribute('aria-pressed', 'true')
      await expect(toolbarOff).toHaveAttribute('aria-pressed', 'false')
      await open(true)
      await expect(
        frame.getByRole('button', { name: 'Zoom In', exact: true }),
      ).toBeVisible()
      await close()
      await page.setViewportSize({ width: 390, height: 844 })
      await expectContentHeight()
      expect(
        await frame
          .locator('body')
          .evaluate(() => document.documentElement.scrollWidth > innerWidth),
      ).toBe(false)
      await open(true)
      await page
        .locator('.vp-doc')
        .getByRole('link', { name: '演练场', exact: true })
        .evaluate((link) => (link as HTMLAnchorElement).click())
      await expect(page.locator('.viewer-demo')).toHaveCount(0)
      await expect(page.getByRole('dialog')).toBeHidden()
      await expect(page.locator('.v-viewer-token')).toHaveCount(0)
      await expect(page.locator('body')).not.toHaveClass(/viewer-open/)
      expect(errors).toEqual([])
    })
  }

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} playground: edit, run, logs, error and reset`, async ({
    page,
  }) => {
    await page.goto(`${prefix}playground`)
    const status = page.getByRole('status')
    await expect(status).toHaveText('已就绪')
    const editor = page.getByLabel('App.vue 代码编辑器')
    const run = page.getByRole('button', { name: '运行', exact: true })
    await editor.fill(
      '<template><h1>编辑运行成功</h1></template><script>console.log("editor-ok");export default {}</script>',
    )
    await run.click()
    await expect(
      page
        .frameLocator('iframe')
        .getByRole('heading', { name: '编辑运行成功' }),
    ).toBeVisible()
    await expect(page.getByRole('log')).toContainText('editor-ok')
    await editor.fill(
      `<script>import { Viewer } from 'v-viewer/unstyled'; console.log('unstyled-ready', !!Viewer); export default {}</script>
<template><div class="custom-viewer">Custom viewer styles</div></template>
<style>.custom-viewer { color: rgb(30, 90, 60); }</style>`,
    )
    await run.click()
    await expect(page.getByRole('log')).toContainText('unstyled-ready true')
    await expect(
      page.frameLocator('iframe').locator('.custom-viewer'),
    ).toHaveCSS('color', 'rgb(30, 90, 60)')
    const styles = await page
      .frameLocator('iframe')
      .locator('style')
      .allTextContents()
    expect(styles.join('\n')).not.toContain('.viewer-container')
    await editor.fill('<script>export default {</script>')
    await run.click()
    await expect(status).toHaveText('出错')
    await expect(page.getByRole('log')).not.toBeEmpty()
    await page.getByRole('button', { name: '重置示例' }).click()
    await expect(status).toHaveText('已就绪')
    await expect(
      page
        .frameLocator('iframe')
        .getByRole('img', { name: 'Landscape 1', exact: true }),
    ).toBeVisible()
  })
}

for (const vue2 of [false, true]) {
  for (const english of [false, true]) {
    test(`${vue2 ? 'Vue 2' : 'Vue 3'} ${english ? 'English' : 'Chinese'} usage links select the playground example`, async ({
      page,
    }) => {
      const prefix = `${english ? 'en/' : ''}${vue2 ? 'vue2/' : ''}`
      for (const mode of ['component', 'directive', 'api']) {
        await page.goto(`${prefix}guide/${mode}`)
        await page
          .locator('.vp-doc')
          .getByRole('link', {
            name: english ? 'Playground' : '演练场',
            exact: true,
          })
          .click()
        await expect(page).toHaveURL(
          new RegExp(`/playground\\?example=${mode}$`),
        )
        await expect(page.getByRole('status')).toHaveText(
          english ? 'Ready' : '已就绪',
        )
        const label =
          mode === 'api'
            ? 'API'
            : mode === 'component'
              ? english
                ? 'Component'
                : '组件'
              : english
                ? 'Directive'
                : '指令'
        await expect(
          page
            .getByRole('group', {
              name: english ? 'Example' : '示例',
              exact: true,
            })
            .getByRole('button', { name: label, exact: true }),
        ).toHaveAttribute('aria-pressed', 'true')
        // CodeMirror only renders visible lines, so check the script at the top.
        const expectedCode =
          mode === 'api'
            ? vue2
              ? 'this.$viewerApi'
              : 'useViewer({'
            : vue2
              ? mode === 'component'
                ? 'this.$refs.gallery.show()'
                : 'this.$refs.gallery.$viewer.show()'
              : mode === 'component'
                ? 'import { Viewer }'
                : 'import { vViewer }'
        await expect(
          page.getByLabel(
            english ? 'App.vue code editor' : 'App.vue 代码编辑器',
          ),
        ).toContainText(expectedCode)
      }
      await page.reload()
      await expect(page.getByRole('status')).toHaveText(
        english ? 'Ready' : '已就绪',
      )
      await expect(
        page
          .getByRole('group', {
            name: english ? 'Example' : '示例',
            exact: true,
          })
          .getByRole('button', { name: 'API', exact: true }),
      ).toHaveAttribute('aria-pressed', 'true')
      await page.goto(`${prefix}playground?example=unknown`)
      await expect(page.getByRole('status')).toHaveText(
        english ? 'Ready' : '已就绪',
      )
      await expect(
        page
          .getByRole('group', {
            name: english ? 'Example' : '示例',
            exact: true,
          })
          .getByRole('button', {
            name: english ? 'Component' : '组件',
            exact: true,
          }),
      ).toHaveAttribute('aria-pressed', 'true')
    })
  }
}

test('English documentation and mobile layout', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('en/guide/getting-started')
  await expect(
    page.getByRole('heading', { name: /^Quick start/, level: 1 }),
  ).toBeVisible()
  await expect(page.locator('.viewer-config-viewer')).toBeVisible()
  const inline = page.getByRole('radio', { name: 'inline', exact: true })
  const modal = page.getByRole('radio', { name: 'modal', exact: true })
  await expect(inline).toBeChecked()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
  ).toBe(false)
  await modal.check()
  await expect(inline).not.toBeChecked()
  await expect(page.getByRole('dialog')).toBeHidden()
  await page.locator('.photos img').first().click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveAccessibleName(/960 × 640/)
  await expect
    .poll(() => dialog.boundingBox())
    .toEqual({ x: 0, y: 0, width: 390, height: 844 })
  await dialog.press('Escape')
  await expect(dialog).toBeHidden()
  await inline.check()
  await expect(page.locator('.viewer-config-viewer')).toBeVisible()
  expect(
    await page.evaluate(() => document.body.classList.contains('viewer-open')),
  ).toBe(false)
  await modal.check()
  await expect(inline).not.toBeChecked()
  await page.locator('.photos img').first().click()
  await expect(dialog).toHaveAccessibleName(/960 × 640/)
  // Navigating away must also release the host page scroll lock.
  await page
    .locator('a[href$="/guide/component"]')
    .first()
    .evaluate((link) => (link as HTMLAnchorElement).click())
  await expect(page.locator('.configurator')).toHaveCount(0)
  expect(
    await page.evaluate(() => document.body.classList.contains('viewer-open')),
  ).toBe(false)
})
