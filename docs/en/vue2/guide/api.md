# API

Suitable for scenarios such as opening a specified image array after a button click.

## Playground {#playground}

[Playground](/en/vue2/playground?example=api)

<ClientOnly><ViewerDemo vue2 mode="api" /></ClientOnly>

```viewer-example
api vue2 en
```

`url: 'data-source'` uses the image’s `data-source` attribute as the preview URL; `initialViewIndex` sets the starting image index (from 0).

## Parameters and return values {#reference}

`this.$viewerApi({ images, options })` / `viewerApi({ images, options })` returns a Viewer.js instance. Closing or destroying it removes the temporary gallery.

Call `destroy()` on page unmount to clean up an open gallery.

Access all Viewer.js methods on the instance. [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)
