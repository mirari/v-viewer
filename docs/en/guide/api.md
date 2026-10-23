# API

Suitable for opening a specified image array after a button click.

## Playground {#playground}

[Playground](/en/playground?example=api)

<ClientOnly><ViewerDemo mode="api" /></ClientOnly>

```viewer-example
api vue3 en
```

## Parameters and return values {#reference}

`useViewer({ images?, options?, target?, rebuild?, observe? })`

| Parameter | Description                                                                                                                                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| images    | Image array, ref or getter for temporary galleries.                                                                                                                                                                                          |
| options   | Viewer.js options, ref or getter.                                                                                                                                                                                                            |
| target    | HTML element, id, CSS selector, ref or getter. Omit for a temporary gallery.                                                                                                                                                                 |
| rebuild   | Recreate on image DOM changes; defaults to false.                                                                                                                                                                                            |
| observe   | Applies only to `target`. Supports a ref or getter; default `true` batches changes over 50ms, `0` adds no batching delay, and `false` disables observation. See [automatic updates](/en/guide/observe) for details and other numeric values. |

| Return value | Description                                   |
| ------------ | --------------------------------------------- |
| viewer       | ShallowRef<ViewerJs \| undefined>             |
| isShown      | Reactive modal visibility.                    |
| show(index?) | Open at an optional image index.              |
| hide()       | Close the preview.                            |
| update()     | Refresh an existing target.                   |
| destroy()    | Release the instance; show() can recreate it. |

Call useViewer inside setup. It cleans up on scope disposal. Selectors are resolved when mounted or shown; missing targets throw an error.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useViewer } from 'v-viewer'
const target = ref<HTMLElement | null>(null)
const { show } = useViewer({ target })
</script>
<template>
  <div ref="target"><img src="/photo.jpg" /></div>
  <button @click="show()">Open</button>
</template>
```

## Temporary galleries

Without `target`, `show()` creates a modal gallery from `images`. Closing or destroying it removes the temporary DOM. It is also cleaned up when its owning component unmounts.

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
