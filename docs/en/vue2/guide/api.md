# API

Suitable for opening a specified image array after a button click.

## Playground {#playground}

[Playground](/en/vue2/playground?example=api)

<ClientOnly><ViewerDemo vue2 mode="api" /></ClientOnly>

```viewer-example
api vue2 en
```

## Parameters and return values {#reference}

`this.$viewerApi({ images, options })` / `viewerApi({ images, options })` returns a Viewer.js instance. Closing or destroying it removes the temporary gallery.

## Temporary galleries

You can also import `viewerApi` directly. Call `destroy()` on page unmount to clean up an open gallery.

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
