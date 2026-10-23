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

## Options {#options}

Pass these settings through `options` in `viewerApi({ images, options })`. **The API always opens in modal mode. `inline` is fixed to `false` and cannot be overridden.** Inline-only settings are omitted from the table below.

These match [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options). Each name links to its original documentation; available settings and defaults depend on the installed Viewer.js version.

<!-- viewer-options:modal -->
<!--@include: ../../../.vitepress/fragments/viewer-options.en.md-->
<!-- /viewer-options:modal -->

## Events {#events}

Set callbacks such as `viewed(event)` on the same `options` object. They receive the original DOM event, with operation data in `event.detail`. Click an event name for its [Viewer.js documentation](https://github.com/fengyuanchen/viewerjs#events).

<!--@include: ../../../.vitepress/fragments/viewer-events.en.md-->
