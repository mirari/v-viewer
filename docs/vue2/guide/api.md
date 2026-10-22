# API

从图片数组创建弹窗图库，无需在页面渲染源图片。

[演练场](/vue2/playground?example=api)

<ClientOnly><ViewerDemo vue2 mode="api" /></ClientOnly>

```viewer-example
api vue2 zh
```

## 参数和返回值 {#reference}

`this.$viewerApi({ images, options })` / `viewerApi({ images, options })` 返回 Viewer.js 实例。关闭或销毁后会自动删除临时图库。

## 临时图库

也可直接导入 `viewerApi`。页面卸载时调用 `destroy()` 清理未关闭的图库。

```ts
import { viewerApi } from 'v-viewer'
const viewer = viewerApi({
  images: [
    { src: '/thumb.jpg', 'data-source': '/large.jpg', alt: 'Landscape' },
  ],
  options: { url: 'data-source', initialViewIndex: 0 },
})
// viewer.destroy()
```

通过实例调用 Viewer.js 的全部方法。 [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)
