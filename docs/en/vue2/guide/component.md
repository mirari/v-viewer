# Component

Suitable for complex scenarios involving custom toolbars or images in dynamically rendered Markdown or HTML whose content is not known in advance. By default, it watches additions, removals and attribute changes of `<img>` elements inside the component and automatically updates the gallery.

::: warning Upgrading from an older major version
The Vue 2 (4.x) line is a rewrite with breaking changes. You can now use Viewer.js props, events and methods directly on the component. **The legacy options prop is retained for compatibility, but is deprecated.** Existing options-based galleries can migrate gradually.
:::

## Playground {#playground}

[Playground](/en/vue2/playground?example=component)

<ClientOnly><ViewerDemo vue2 mode="component" /></ClientOnly>

```viewer-example
component vue2 en
```

## Props {#props}

### Viewer.js props {#viewerjs-props}

These props map to [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options); click a name for its full documentation. Availability and defaults follow the installed Viewer.js version. Changes, including nested values, rebuild the instance after DOM updates.

<!--@include: ../../../.vitepress/fragments/viewer-options.en.md-->

### v-viewer-specific props {#v-viewer-props}

| Prop      | Type             | Purpose                                                                                                              |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `options` | `ViewerOptions`  | Default `{}`. Deprecated compatibility entry; prefer direct props and Vue events.                                    |
| `rebuild` | boolean          | `false`; rebuild instead of updating when images change.                                                             |
| `observe` | boolean / number | Default `true` (50ms); `false` disables observation; a non-negative number sets the batching window in milliseconds. |

The component observes additions, removals and attribute changes of `<img>` elements inside it, including whole HTML subtree replacements. It calls `update()` by default, or recreates the instance when `rebuild` is enabled.

See [automatic updates with observe](/en/guide/observe) for values, update timing and usage guidance.

## Events {#events}

These are [Viewer.js events](https://github.com/fengyuanchen/viewerjs#events) exposed as Vue events. Click an event name for its original documentation.

Events forward the original DOM event synchronously, with operation data in `event.detail`. Use `@show.prevent` or `event.preventDefault()` to cancel a cancelable operation.

<!--@include: ../../../.vitepress/fragments/viewer-events.en.md-->

## Callbacks {#callbacks}

The legacy `options` prop still accepts Viewer.js callbacks such as `options.viewed`. This compatibility entry is deprecated; prefer Vue events such as `@viewed`. Callbacks receive the same original DOM event as the component event. When both are supplied, both run.

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

For underlying instance data, read `this.$refs.gallery.$viewer`.

## Slots {#slot}

### Default slot {#default-slot}

Render images and custom layouts in the default slot.

```vue
<viewer :toolbar="false">
  <img v-for="src in images" :key="src" :src="src" />
</viewer>
```

Rendered HTML can also be used as the slot content:

```vue
<viewer>
  <article v-html="html" />
</viewer>
```

### Toolbar slots {#toolbar-slots}

Use Vue templates, icon components and event bindings to customize the toolbar. These slots belong to the component; directives and the API continue to use Viewer.js toolbar options.

| Slot             | Behavior                                                                         |
| ---------------- | -------------------------------------------------------------------------------- |
| `toolbar-append` | Add content after the toolbar, including after a custom `toolbar` slot.          |
| `toolbar`        | Replace all built-in toolbar buttons with custom icons, layout and interactions. |

Both slots receive `image` (the current preview's HTMLImageElement, or undefined before it is viewed), `index` (zero-based), and the component's Viewer.js methods, such as `zoom`, `rotate`, `reset` and `next`. Methods always target the current instance. State and slot content remain reactive without rebuilding the gallery.

`toolbar: false` hides the entire toolbar, including its slots. Without a replacement slot, the existing toolbar configuration still determines which buttons are present. Bind custom buttons to the methods provided by the slots, with your own icons, labels and styles.

The example uses Vue 2.5+ `slot-scope` syntax. On Vue 2.4, use `scope` instead.

<ClientOnly><ViewerDemo vue2 mode="toolbar" /></ClientOnly>

::: details Example code

```viewer-example
toolbar vue2 en
```

:::

## Migrating from older versions {#migration}

```vue
<!-- Legacy: supported, but deprecated -->
<viewer :options="{ toolbar: false, viewed: onViewed }">
  <img src="/photo.jpg" />
</viewer>

<!-- Recommended -->
<viewer :toolbar="false" @viewed="onViewed">
  <img src="/photo.jpg" />
</viewer>
```
