# API

从图片地址打开图库，或控制现有的图片容器。

[演练场](/vue2/playground?example=api)

<ClientOnly><ViewerDemo vue2 mode="api" /></ClientOnly>

```viewer-example
api vue2 zh
```

## 参数和返回值 {#reference}

`this.$viewerApi({ images, options })` / `viewerApi({ images, options })` 返回 Viewer.js 实例。关闭或销毁后会自动删除临时图库。

## 临时图库

也可以直接导入 `viewerApi`，无需注册全局插件。它返回 Viewer.js 实例；若所属页面在关闭前被移除，请调用 destroy()。此 API 始终使用弹层模式。

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
