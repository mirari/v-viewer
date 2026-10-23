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
