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

## 配置项 {#options}

通过 `viewerApi({ images, options })` 的 `options` 传入。**API 固定使用弹窗模式，`inline` 始终为 `false`，不可改写。**

对应 [Viewer.js 配置项](https://github.com/fengyuanchen/viewerjs#options)，点击属性名可查看原文档。可用配置和默认值以安装的 Viewer.js 版本为准。

<!-- viewer-options:modal -->
<!--@include: ../../.vitepress/fragments/viewer-options.zh.md-->
<!-- /viewer-options:modal -->

## 回调 {#callbacks}

在 `options` 中设置 `viewed(event)` 等回调函数，对应 [Viewer.js 原生事件](https://github.com/fengyuanchen/viewerjs#events)。回调参数为原始 DOM 事件，操作数据位于 `event.detail`；点击名称可查看原文档。

<!--@include: ../../.vitepress/fragments/viewer-events.zh.md-->
