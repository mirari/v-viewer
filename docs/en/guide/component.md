# Component

The component owns a Viewer.js instance and releases it on unmount.

[Playground](/en/playground?example=component)

<ClientOnly><ViewerDemo mode="component" /></ClientOnly>

```viewer-example
component vue3 en
```

## Props {#props}

| Prop    | Type            | Default     | Behavior                                                                                                                                          |
| ------- | --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| images  | `ViewerImage[]` | `[]`        | Data passed to the default slot. Deep changes refresh the gallery after Vue updates the DOM.                                                      |
| options | `ViewerOptions` | `{}`        | Viewer.js options. Deep changes destroy the previous instance and create a new one with the latest options.                                       |
| rebuild | `boolean`       | `false`     | Determines how image changes are handled: update the existing instance when false, or recreate it when true.                                      |
| trigger | `unknown`       | `undefined` | Changing this value requests a refresh after the DOM update, following the `rebuild` setting. Useful when gallery content depends on other state. |

`ViewerImage` accepts a URL string or an attribute object such as `{ src: '/thumb.jpg', 'data-source': '/large.jpg' }`. The component reads actual `<img>` elements inside its slot; passing `images` alone does not render them. Bind the attributes you need in the slot.

Image additions, removals and attribute changes are also observed automatically. Use `trigger` or `updateViewer()` when an external update needs an explicit refresh. Changing `options` always recreates the instance, regardless of `rebuild`.

Pass settings such as `inline`, `toolbar` and `url` through `options`. See [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options) for their values and defaults.

## Events {#events}

### Component event: inited

| Event    | Argument           | When it fires                                                                               |
| -------- | ------------------ | ------------------------------------------------------------------------------------------- |
| `inited` | `viewer: ViewerJs` | After an instance is created, refreshed or recreated. Listen with `@inited="handleInited"`. |

`inited` can fire repeatedly. A refresh may pass the same instance; a rebuild passes a new one. If you store the argument, replace the previous reference each time. It means the component has an instance; it does not mean an image has finished loading or the viewer is visible. Use `ready`, `viewed` or `shown` for those stages.

### Viewer.js callbacks

Pass these callbacks through `options`. They receive a DOM event, with operation data in `event.detail`.

| Callback             | When it fires / useful data                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ready`              | The viewer UI is initialized. In modal mode this can happen on the first opening.                                                                     |
| `show` / `shown`     | Before opening / after the opening transition completes in modal mode.                                                                                |
| `hide` / `hidden`    | Before closing / after the closing transition completes in modal mode.                                                                                |
| `view` / `viewed`    | Before displaying an image / after it is displayed. `detail.index` is zero-based; `image` and `originalImage` identify the preview and source images. |
| `move` / `moved`     | Before / after moving. `detail.x`, `y`, `oldX` and `oldY` describe the position change.                                                               |
| `rotate` / `rotated` | Before / after rotation. `detail.degree` and `oldDegree` describe the angle change.                                                                   |
| `scale` / `scaled`   | Before / after scaling or flipping. `detail.scaleX`, `scaleY`, `oldScaleX` and `oldScaleY` describe the change.                                       |
| `zoom` / `zoomed`    | Before / after zooming. `detail.ratio` and `oldRatio` contain the zoom ratios.                                                                        |
| `play` / `stop`      | Before starting / stopping a slideshow.                                                                                                               |

```vue
<script setup>
import { Viewer } from 'v-viewer'

const images = ['/photo-1.jpg', '/photo-2.jpg']
const options = {
  viewed(event) {
    console.log('viewed', event.detail.index)
  },
}
function handleInited(viewer) {
  console.log('inited', viewer)
}
</script>

<template>
  <Viewer :images="images" :options="options" @inited="handleInited">
    <img v-for="src in images" :key="src" :src="src" />
  </Viewer>
</template>
```

Call `event.preventDefault()` to cancel an operation only when `event.cancelable` is true. Use these callbacks through `options`; the component does not declare them individually as Vue events. See [Viewer.js events](https://github.com/fengyuanchen/viewerjs#events) for the complete event details.

## Methods {#methods}

### Manage the component instance

Set `ref="gallery"` on the component. Declare `const gallery = ref(null)` in `<script setup>` and access `gallery.value` after mounting.

| Method            | Behavior                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `createViewer()`  | Create an instance if none exists. If one already exists, leave it unchanged. Useful after manual destruction.                        |
| `updateViewer()`  | Refresh the image list using the current DOM without forcing a rebuild, even when `rebuild` is true. Create an instance if necessary. |
| `rebuildViewer()` | Destroy the current instance and create a new one with the current `options`. Create one if necessary.                                |
| `destroyViewer()` | Destroy the instance, disconnect observation and clear `viewer`. Does not remove the source images.                                   |

These methods take no arguments. The component creates its instance on mount and destroys it on unmount. Ordinary image and option changes are handled automatically. If you change Vue state and then refresh manually, wait for `nextTick()` so the DOM contains the new images.

### Operate the viewer

`gallery.value.viewer` exposes the current Viewer.js instance, or `undefined` before creation and after destruction. The component ref unwraps the exposed ref, so no additional `.value` is needed. Read it again after a rebuild instead of keeping a stale instance.

| Viewer.js method                      | Purpose                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `show()` / `hide()`                   | Open / close the viewer in modal mode.                                                                           |
| `view(index)`                         | Display the image at a zero-based index.                                                                         |
| `prev()` / `next()`                   | Display the previous / next image.                                                                               |
| `zoom(ratio)` / `zoomTo(ratio)`       | Adjust the current zoom / set an absolute zoom. `zoom(0.1)` zooms in; `zoomTo(1)` uses the image's natural size. |
| `rotate(degree)` / `rotateTo(degree)` | Rotate by an angle / set an absolute angle in degrees.                                                           |
| `move(x, y)` / `moveTo(x, y)`         | Move by an offset / move to a position in pixels.                                                                |
| `scaleX(value)` / `scaleY(value)`     | Scale on one axis; `-1` flips that axis and `1` restores it.                                                     |
| `play()` / `stop()`                   | Start / stop a slideshow.                                                                                        |
| `full()` / `exit()`                   | Expand / restore an inline viewer.                                                                               |
| `reset()`                             | Restore the displayed image to its initial state.                                                                |

Image manipulation methods require a displayed image; wait for `viewed` when calling them programmatically on first opening. These Viewer.js methods return the instance for chaining. Their optional parameters and remaining methods are listed in [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods).

In the example at the top of this page, use the component ref to display an image or manage the instance:

```js
function showSecondImage() {
  gallery.value.viewer?.view(1)
}

function recreateViewer() {
  gallery.value.destroyViewer()
  gallery.value.createViewer()
}
```

For manual instance cleanup, use the component's `destroyViewer()` so its internal instance reference is cleared as well.

## Default slot {#slot}

| Slot value | Description                                   |
| ---------- | --------------------------------------------- |
| `images`   | The array passed through the `images` prop.   |
| `options`  | The object passed through the `options` prop. |

Render the image elements inside the slot. You can also use data from the parent directly, as in the example at the top of this page.

```vue
<Viewer :images="images" :options="options" v-slot="{ images, options }">
  <img v-for="src in images" :key="src" :src="src" />
  <p>toolbar: {{ options.toolbar }}</p>
</Viewer>
```
