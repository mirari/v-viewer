# API

Suitable for scenarios such as opening a specified image array after a button click.

## Playground {#playground}

[Playground](/en/playground?example=api)

<ClientOnly><ViewerDemo mode="api" /></ClientOnly>

```viewer-example
api vue3 en
```

`url: 'data-source'` uses the image’s `data-source` attribute as the preview URL; `initialViewIndex` sets the starting image index (from 0).

## Parameters and return values {#reference}

`useViewer({ images?, options? })`

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| images    | Image array, ref or getter for temporary galleries. |
| options   | Viewer.js options, ref or getter.                   |

| Return value | Description                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| viewer       | ShallowRef<ViewerJs \| undefined>                                                                                                                |
| isShown      | Reactive modal visibility.                                                                                                                       |
| show(index?) | Open at an optional image index.                                                                                                                 |
| hide()       | Close normally with the configured exit transition and `hide` / `hidden` callbacks; destroy the instance and remove temporary DOM after closing. |
| destroy()    | Immediately destroy the instance and remove temporary DOM, without an exit transition or `hide` / `hidden` callbacks; `show()` can recreate it.  |

Call useViewer inside setup. It cleans up on scope disposal.

Closing or destroying the preview removes its temporary DOM. Changes to images or options during a preview apply the next time it opens. Calling `show(index)` again switches images within the current gallery.

Use `viewer.value` to call all Viewer.js methods. [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)

## Options {#options}

Pass these settings through `options` in `useViewer({ images, options })`. **The API always opens in modal mode. `inline` is fixed to `false` and cannot be overridden.** Inline-only settings are omitted from the table below.

These match [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options). Each name links to its original documentation; available settings and defaults depend on the installed Viewer.js version.

<!-- viewer-options:modal -->
<!--@include: ../../.vitepress/fragments/viewer-options.en.md-->
<!-- /viewer-options:modal -->

## Callbacks {#callbacks}

Set callback functions such as `viewed(event)` in `options`. They correspond to [Viewer.js events](https://github.com/fengyuanchen/viewerjs#events) and receive the original DOM event, with operation data in `event.detail`. Click a name for its original documentation.

<!--@include: ../../.vitepress/fragments/viewer-events.en.md-->
