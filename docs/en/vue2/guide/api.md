# API

Open a gallery from image URLs, or control an existing gallery.

[Playground](/en/vue2/playground?example=api)

<ClientOnly><ViewerDemo vue2 mode="api" /></ClientOnly>

```viewer-example
api vue2 en
```

## Parameters and return values {#reference}

`this.$viewerApi({ images, options })` / `viewerApi({ images, options })` returns a Viewer.js instance. Closing or destroying it removes the temporary gallery.

## Temporary galleries

Import `viewerApi` directly to open a gallery without registering the global plugin. It returns a Viewer.js instance; call destroy() if its owner is removed before it closes. This API always uses modal mode.

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

Access all Viewer.js methods on the instance. [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)
