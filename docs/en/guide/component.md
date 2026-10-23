# Component

Suitable for complex scenarios involving custom toolbars or images in dynamically rendered Markdown or HTML whose content is not known in advance. By default, it watches additions, removals and attribute changes of `<img>` elements inside the component and automatically updates the gallery.

::: warning Upgrading from an older major version
The Vue 3 (5.x) line is a rewrite with breaking changes. You can now use Viewer.js props, events and methods directly on the component. **The legacy options prop is retained for compatibility, but is deprecated.** Existing options-based galleries can migrate gradually.
:::

[Playground](/en/playground?example=component)

<ClientOnly><ViewerDemo mode="component" /></ClientOnly>

```viewer-example
component vue3 en
```

## Migration examples {#migration}

```vue
<!-- Legacy: supported, but deprecated -->
<Viewer :options="{ toolbar: false, viewed: onViewed }">
  <img src="/photo.jpg" />
</Viewer>

<!-- Recommended -->
<Viewer :toolbar="false" @viewed="onViewed">
  <img src="/photo.jpg" />
</Viewer>
```

## Props {#props}

### Viewer.js props {#viewerjs-props}

These props map to [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options); click a name for its full documentation. Availability and defaults follow the installed Viewer.js version. Changes, including nested values, rebuild the instance after DOM updates.

| Prop                                                                                  | Type                                | Purpose                                                                                                                            |
| ------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`backdrop`](https://github.com/fengyuanchen/viewerjs#backdrop)                       | boolean / string                    | Control the modal backdrop; `static` keeps clicks on it from closing the viewer.                                                   |
| [`button`](https://github.com/fengyuanchen/viewerjs#button)                           | boolean                             | Show the button in the upper-right corner.                                                                                         |
| [`className`](https://github.com/fengyuanchen/viewerjs#classname)                     | string                              | Add custom classes to the viewer root.                                                                                             |
| [`container`](https://github.com/fengyuanchen/viewerjs#container)                     | string / Element                    | Choose the modal container using an element or CSS selector.                                                                       |
| [`filter`](https://github.com/fengyuanchen/viewerjs#filter)                           | function                            | Include images for which the filter returns `true`; exclude the others.                                                            |
| [`fullscreen`](https://github.com/fengyuanchen/viewerjs#fullscreen)                   | boolean / FullscreenOptions         | Request browser fullscreen during playback, optionally with Fullscreen API settings.                                               |
| [`focus`](https://github.com/fengyuanchen/viewerjs#focus)                             | boolean                             | Focus the active thumbnail on initialization; requires `keyboard`.                                                                 |
| [`inheritedAttributes`](https://github.com/fengyuanchen/viewerjs#inheritedattributes) | array                               | Choose additional source-image attributes to copy; `src` and `alt` are always copied.                                              |
| [`initialCoverage`](https://github.com/fengyuanchen/viewerjs#initialcoverage)         | number                              | Set the initial image coverage, greater than 0 and at most 1.                                                                      |
| [`initialViewIndex`](https://github.com/fengyuanchen/viewerjs#initialviewindex)       | number                              | Choose the starting image index, also used when `view()` receives no index.                                                        |
| [`inline`](https://github.com/fengyuanchen/viewerjs#inline)                           | boolean                             | Display the viewer inline when enabled, or in modal mode when disabled.                                                            |
| [`autoplay`](https://github.com/fengyuanchen/viewerjs#autoplay)                       | boolean                             | Advance slides automatically during playback.                                                                                      |
| [`interval`](https://github.com/fengyuanchen/viewerjs#interval)                       | number                              | Set the delay between slides in milliseconds.                                                                                      |
| [`keyboard`](https://github.com/fengyuanchen/viewerjs#keyboard)                       | boolean                             | Allow keyboard controls.                                                                                                           |
| [`loading`](https://github.com/fengyuanchen/viewerjs#loading)                         | boolean                             | Display a loading indicator while fetching an image.                                                                               |
| [`loop`](https://github.com/fengyuanchen/viewerjs#loop)                               | boolean                             | Wrap image navigation between the first and last images.                                                                           |
| [`magnifier`](https://github.com/fengyuanchen/viewerjs#magnifier)                     | boolean / object                    | Show a hover magnifier in fullscreen view, with configurable size, ratio and opacity; unavailable on touch screens.                |
| [`maxZoomRatio`](https://github.com/fengyuanchen/viewerjs#maxzoomratio)               | number / function                   | Limit magnification with a ratio or a function of the image and its data.                                                          |
| [`minHeight`](https://github.com/fengyuanchen/viewerjs#minheight)                     | number                              | Set the minimum inline viewer height in pixels.                                                                                    |
| [`minWidth`](https://github.com/fengyuanchen/viewerjs#minwidth)                       | number                              | Set the minimum inline viewer width in pixels.                                                                                     |
| [`minZoomRatio`](https://github.com/fengyuanchen/viewerjs#minzoomratio)               | number / function                   | Limit reduction with a ratio or a function of the image and its data.                                                              |
| [`movable`](https://github.com/fengyuanchen/viewerjs#movable)                         | boolean                             | Allow image movement.                                                                                                              |
| [`navbar`](https://github.com/fengyuanchen/viewerjs#navbar)                           | boolean / number / string / object  | Configure thumbnail visibility, size and position, with further layout settings in object form.                                    |
| [`navigation`](https://github.com/fengyuanchen/viewerjs#navigation)                   | boolean / number / object           | Configure the side navigation buttons, including individual visibility and size.                                                   |
| [`preload`](https://github.com/fengyuanchen/viewerjs#preload)                         | boolean                             | Load adjacent images before they are viewed.                                                                                       |
| [`rotatable`](https://github.com/fengyuanchen/viewerjs#rotatable)                     | boolean                             | Allow image rotation.                                                                                                              |
| [`rotateOnGesture`](https://github.com/fengyuanchen/viewerjs#rotateongesture)         | boolean                             | Rotate through gesture events, such as two-finger gestures in Mac Safari.                                                          |
| [`rotateOnTouch`](https://github.com/fengyuanchen/viewerjs#rotateontouch)             | boolean                             | Rotate with two fingers on a touch screen.                                                                                         |
| [`scalable`](https://github.com/fengyuanchen/viewerjs#scalable)                       | boolean                             | Allow axis scaling, including horizontal and vertical flips.                                                                       |
| [`slideOnTouch`](https://github.com/fengyuanchen/viewerjs#slideontouch)               | boolean                             | Navigate between images with touch swipes.                                                                                         |
| [`slideOnWheel`](https://github.com/fengyuanchen/viewerjs#slideonwheel)               | boolean / string                    | Navigate with the wheel, optionally requiring modifier keys; applies over thumbnails or when wheel zoom does not handle the event. |
| [`title`](https://github.com/fengyuanchen/viewerjs#title)                             | boolean / number / function / array | Configure title visibility and content; the default uses `alt` or the filename from the URL.                                       |
| [`toggleOnDblclick`](https://github.com/fengyuanchen/viewerjs#toggleondblclick)       | boolean                             | Switch between natural and initial image sizes on double-click.                                                                    |
| [`toolbar`](https://github.com/fengyuanchen/viewerjs#toolbar)                         | boolean / number / object           | Configure toolbar placement and button visibility, size and click behavior.                                                        |
| [`tooltip`](https://github.com/fengyuanchen/viewerjs#tooltip)                         | boolean                             | Display the current zoom percentage while zooming.                                                                                 |
| [`transition`](https://github.com/fengyuanchen/viewerjs#transition)                   | boolean / object                    | Enable CSS transitions, or disable selected action transitions using an object.                                                    |
| [`url`](https://github.com/fengyuanchen/viewerjs#url)                                 | string / function                   | Read the full image URL from a named image attribute or a function result.                                                         |
| [`zIndex`](https://github.com/fengyuanchen/viewerjs#zindex)                           | number                              | Set the modal viewer’s CSS stacking order.                                                                                         |
| [`zIndexInline`](https://github.com/fengyuanchen/viewerjs#zindexinline)               | number                              | Set the inline viewer’s CSS stacking order.                                                                                        |
| [`zoomOnGesture`](https://github.com/fengyuanchen/viewerjs#zoomongesture)             | boolean                             | Zoom through gesture events, such as pinch gestures in Mac Safari.                                                                 |
| [`zoomOnTouch`](https://github.com/fengyuanchen/viewerjs#zoomontouch)                 | boolean                             | Zoom through dragging gestures on a touch screen.                                                                                  |
| [`zoomOnWheel`](https://github.com/fengyuanchen/viewerjs#zoomonwheel)                 | boolean / string                    | Zoom with the wheel, optionally requiring one or more modifier keys.                                                               |
| [`zoomRatio`](https://github.com/fengyuanchen/viewerjs#zoomratio)                     | number                              | Set the ratio increment for wheel zoom.                                                                                            |
| [`zoomable`](https://github.com/fengyuanchen/viewerjs#zoomable)                       | boolean                             | Allow image zooming.                                                                                                               |

### v-viewer-specific props {#v-viewer-props}

| Prop      | Type             | Purpose                                                                                                              |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `options` | `ViewerOptions`  | Default `{}`. Deprecated compatibility entry; prefer direct props and Vue events.                                    |
| `rebuild` | boolean          | `false`; rebuild instead of updating when images change.                                                             |
| `observe` | boolean / number | Default `true` (50ms); `false` disables observation; a non-negative number sets the batching window in milliseconds. |

The component observes additions, removals and attribute changes of `<img>` elements inside it, including whole HTML subtree replacements. It calls `update()` by default, or recreates the instance when `rebuild` is enabled.

`observe` batches changes in a fixed window starting at the first image mutation; further mutations do not postpone the update. Set `:observe="100"` for a 100ms window, or `:observe="0"` to batch only until the next task. Disabling observation does not prevent configuration changes or explicit `update()` calls.

## Events {#events}

These are [Viewer.js events](https://github.com/fengyuanchen/viewerjs#events) exposed as Vue events. Click an event name for its original documentation.

Events forward the original DOM event synchronously, with operation data in `event.detail`. Use `@show.prevent` or `event.preventDefault()` to cancel a cancelable operation.

| Event                                                                                                                           | When it fires / useful data                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ready`](https://github.com/fengyuanchen/viewerjs#ready-1)                                                                     | The viewer UI is initialized. In modal mode this can happen on the first opening.                                                                     |
| [`show`](https://github.com/fengyuanchen/viewerjs#show-1) / [`shown`](https://github.com/fengyuanchen/viewerjs#shown-1)         | Before opening / after the opening transition completes in modal mode.                                                                                |
| [`hide`](https://github.com/fengyuanchen/viewerjs#hide-1) / [`hidden`](https://github.com/fengyuanchen/viewerjs#hidden-1)       | Before closing / after the closing transition completes in modal mode.                                                                                |
| [`view`](https://github.com/fengyuanchen/viewerjs#view-1) / [`viewed`](https://github.com/fengyuanchen/viewerjs#viewed-1)       | Before displaying an image / after it is displayed. `detail.index` is zero-based; `image` and `originalImage` identify the preview and source images. |
| [`move`](https://github.com/fengyuanchen/viewerjs#move-1) / [`moved`](https://github.com/fengyuanchen/viewerjs#moved-1)         | Before / after moving. `detail.x`, `y`, `oldX` and `oldY` describe the position change.                                                               |
| [`rotate`](https://github.com/fengyuanchen/viewerjs#rotate-1) / [`rotated`](https://github.com/fengyuanchen/viewerjs#rotated-1) | Before / after rotation. `detail.degree` and `oldDegree` describe the angle change.                                                                   |
| [`scale`](https://github.com/fengyuanchen/viewerjs#scale-1) / [`scaled`](https://github.com/fengyuanchen/viewerjs#scaled-1)     | Before / after scaling or flipping. `detail.scaleX`, `scaleY`, `oldScaleX` and `oldScaleY` describe the change.                                       |
| [`zoom`](https://github.com/fengyuanchen/viewerjs#zoom-1) / [`zoomed`](https://github.com/fengyuanchen/viewerjs#zoomed-1)       | Before / after zooming. `detail.ratio` and `oldRatio` contain the zoom ratios.                                                                        |
| [`play`](https://github.com/fengyuanchen/viewerjs#play-1) / [`stop`](https://github.com/fengyuanchen/viewerjs#stop-2)           | Before starting / stopping a slideshow.                                                                                                               |
| [`playing`](https://github.com/fengyuanchen/viewerjs#playing-1)                                                                 | Before showing each slide during playback.                                                                                                            |

## Methods {#methods}

### Viewer.js methods {#viewerjs-methods}

Call these through the component ref. Each name links to the corresponding [Viewer.js method](https://github.com/fengyuanchen/viewerjs#methods).

| Method                                                                                                          | Purpose                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [`show(immediate?)`](https://github.com/fengyuanchen/viewerjs#showimmediate)                                    | Open the modal, immediately when passed `true`; modal mode only.                                                            |
| [`hide(immediate?)`](https://github.com/fengyuanchen/viewerjs#hideimmediate)                                    | Close the modal, immediately when passed `true`; modal mode only.                                                           |
| [`view(index?)`](https://github.com/fengyuanchen/viewerjs#viewindex)                                            | View the indexed image, defaulting to `initialViewIndex`; open the viewer first if hidden.                                  |
| [`prev(loop?)`](https://github.com/fengyuanchen/viewerjs#prevloopfalse)                                         | View the previous image; `loop` allows wrapping to the last image and defaults to `false`.                                  |
| [`next(loop?)`](https://github.com/fengyuanchen/viewerjs#nextloopfalse)                                         | View the next image; `loop` allows wrapping to the first image and defaults to `false`.                                     |
| [`move(x, y?)`](https://github.com/fengyuanchen/viewerjs#movex-y--x)                                            | Move by relative offsets; omitted `y` uses `x`.                                                                             |
| [`moveTo(x, y?)`](https://github.com/fengyuanchen/viewerjs#movetox-y--x)                                        | Move to absolute coordinates; omitted `y` uses `x`.                                                                         |
| [`rotate(degree)`](https://github.com/fengyuanchen/viewerjs#rotatedegree)                                       | Rotate by a relative angle: positive turns right, negative turns left.                                                      |
| [`rotateTo(degree)`](https://github.com/fengyuanchen/viewerjs#rotatetodegree)                                   | Set an absolute rotation angle.                                                                                             |
| [`scale(scaleX, scaleY?)`](https://github.com/fengyuanchen/viewerjs#scalescalex-scaley)                         | Scale both axes; omitted `scaleY` uses `scaleX`, and negative factors flip the image.                                       |
| [`scaleX(scaleX)`](https://github.com/fengyuanchen/viewerjs#scalexscalex)                                       | Scale horizontally; `-1` flips the horizontal axis.                                                                         |
| [`scaleY(scaleY)`](https://github.com/fengyuanchen/viewerjs#scaleyscaley)                                       | Scale vertically; `-1` flips the vertical axis.                                                                             |
| [`zoom(ratio, showTooltip?, pivot?)`](https://github.com/fengyuanchen/viewerjs#zoomratio-showtooltip-pivot)     | Zoom by a relative ratio: positive enlarges, negative reduces; optionally specify a tooltip and pivot.                      |
| [`zoomTo(ratio, showTooltip?, pivot?)`](https://github.com/fengyuanchen/viewerjs#zoomtoratio-showtooltip-pivot) | Set an absolute zoom ratio, with `1` representing natural size; optionally specify a tooltip and pivot.                     |
| [`play(fullscreen?)`](https://github.com/fengyuanchen/viewerjs#playfullscreen)                                  | Start image playback, optionally requesting browser fullscreen.                                                             |
| [`stop()`](https://github.com/fengyuanchen/viewerjs#stop-1)                                                     | End image playback.                                                                                                         |
| [`full()`](https://github.com/fengyuanchen/viewerjs#full)                                                       | Switch an inline viewer into modal mode.                                                                                    |
| [`exit()`](https://github.com/fengyuanchen/viewerjs#exit)                                                       | Return an expanded inline viewer from modal mode to inline display.                                                         |
| [`showTooltip()`](https://github.com/fengyuanchen/viewerjs#tooltip-1)                                           | Display the current zoom percentage when `tooltip` is enabled; renamed from native `tooltip()` to avoid the prop collision. |
| [`toggle()`](https://github.com/fengyuanchen/viewerjs#toggle)                                                   | Switch between the current and natural image sizes.                                                                         |
| [`reset()`](https://github.com/fengyuanchen/viewerjs#reset)                                                     | Restore the image’s initial state.                                                                                          |
| [`update()`](https://github.com/fengyuanchen/viewerjs#updateoptions)                                            | Refresh the gallery after source images are added, removed or reordered.                                                    |
| [`destroy()`](https://github.com/fengyuanchen/viewerjs#destroy)                                                 | Dispose of the viewer instance.                                                                                             |

Wait for `@viewed` before manipulating an image. Forwarded methods return the current Viewer.js instance, or `undefined` when none exists.

The component wraps `update()` and `destroy()` to manage its lifecycle; both return nothing. `update()` creates a missing instance and takes no options—change props to configure the component. `destroy()` also disconnects observation and clears the component’s instance reference, retaining the source images.

### v-viewer-specific methods {#v-viewer-methods}

| Method            | Purpose                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| `createViewer()`  | Create an instance if none exists, using current props and image DOM.                                 |
| `rebuildViewer()` | Destroy the current instance and recreate it using current props and image DOM; create one if absent. |

For underlying instance data, read `gallery.value.viewer`.

## Slots {#slot}

### Default slot {#default-slot}

Render images and custom layouts in the default slot. Its only parameter is the legacy `options`, containing the original options prop.

```vue
<Viewer :toolbar="false">
  <img v-for="src in images" :key="src" :src="src" />
</Viewer>
```

Rendered HTML can also be used as the slot content:

```vue
<Viewer>
  <article v-html="html" />
</Viewer>
```

### Toolbar slots {#toolbar-slots}

Use Vue templates, icon components and event bindings to customize the toolbar. These slots belong to the component; directives and the API continue to use Viewer.js toolbar options.

| Slot             | Behavior                                                                         |
| ---------------- | -------------------------------------------------------------------------------- |
| `toolbar-append` | Add content after the toolbar, including after a custom `toolbar` slot.          |
| `toolbar`        | Replace all built-in toolbar buttons with custom icons, layout and interactions. |

Both slots receive `image` (the current preview's HTMLImageElement, or undefined before it is viewed), `index` (zero-based), and the component's Viewer.js methods, such as `zoom`, `rotate`, `reset` and `next`. Methods always target the current instance. State and slot content remain reactive without rebuilding the gallery.

`toolbar: false` hides the entire toolbar, including its slots. Without a replacement slot, the existing toolbar configuration still determines which buttons are present. Bind custom buttons to the methods provided by the slots, with your own icons, labels and styles.

<ClientOnly><ViewerDemo mode="toolbar" /></ClientOnly>

::: details Example code

```viewer-example
toolbar vue3 en
```

:::
