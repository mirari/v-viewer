# API

Suitable for scenarios such as opening a specified image array after a button click.

## Playground {#playground}

[Playground](/en/playground?example=api)

<ClientOnly><ViewerDemo mode="api" /></ClientOnly>

```viewer-example
api vue3 en
```

## Parameters and return values {#reference}

`useViewer({ images?, options? })`

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| images    | Image array, ref or getter for temporary galleries. |
| options   | Viewer.js options, ref or getter.                   |

| Return value | Description                                   |
| ------------ | --------------------------------------------- |
| viewer       | ShallowRef<ViewerJs \| undefined>             |
| isShown      | Reactive modal visibility.                    |
| show(index?) | Open at an optional image index.              |
| hide()       | Close the preview.                            |
| destroy()    | Release the instance; show() can recreate it. |

Call useViewer inside setup. It cleans up on scope disposal.

## Temporary galleries

`show()` creates a modal gallery from the current `images` and `options`. Closing or destroying it removes the temporary DOM. It is also cleaned up when its owning component unmounts.

Changes to images or options do not affect an open preview; they apply the next time it opens. Calling `show(index)` again switches images within the current gallery.

```vue
<script setup>
import { useViewer } from 'v-viewer'

const { show } = useViewer({
  images: [
    { src: '/thumb.jpg', 'data-source': '/large.jpg', alt: 'Landscape' },
  ],
  options: { url: 'data-source', initialViewIndex: 0 },
})
</script>

<template>
  <button @click="show()">Show viewer</button>
</template>
```

Use `viewer.value` to call all Viewer.js methods. [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)
