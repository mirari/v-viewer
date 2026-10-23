# API

适合按钮触发后打开指定图片数组等场景。

## 演练场 {#playground}

[演练场](/vue2/playground?example=api)

<ClientOnly><ViewerDemo vue2 mode="api" /></ClientOnly>

```viewer-example
api vue2 zh
```

`url: 'data-source'` 使用图片的 `data-source` 属性作为预览地址；`initialViewIndex` 指定首次显示的图片下标（从 0 开始）。

## 参数和返回值 {#reference}

`this.$viewerApi({ images, options })` / `viewerApi({ images, options })` 返回 Viewer.js 实例。关闭或销毁后会自动删除临时图库。

页面卸载时调用 `destroy()` 清理未关闭的图库。

通过实例调用 Viewer.js 的全部方法。 [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)

## Viewer.js 配置项 {#options}

通过 `viewerApi({ images, options })` 的 `options` 传入。API 固定使用弹窗模式，`inline` 会被设为 `false`，仅用于内嵌模式的配置不生效。

对应 [Viewer.js 配置项](https://github.com/fengyuanchen/viewerjs#options)，点击属性名可查看原文档。可用配置和默认值以安装的 Viewer.js 版本为准。

<!--@include: ../../.vitepress/fragments/viewer-options.zh.md-->

### 事件回调 {#callbacks}

在同一个 `options` 对象中设置 `viewed(event)` 等回调。参数为原始 DOM 事件，操作数据位于 `event.detail`；点击事件名可查看 [Viewer.js 原文档](https://github.com/fengyuanchen/viewerjs#events)。

<!--@include: ../../.vitepress/fragments/viewer-events.zh.md-->
