# Directive

Suitable for simple image browsing without complex customization, while also supporting images in dynamically rendered Markdown or HTML whose content is not known in advance. By default, it watches additions, removals and attribute changes of `<img>` elements inside the element the directive is bound to and automatically updates the gallery.

## Playground {#playground}

[Playground](/en/playground?example=directive)

<ClientOnly><ViewerDemo mode="directive" /></ClientOnly>

```viewer-example
directive vue3 en
```

Rendered HTML works the same way:

```vue
<article v-viewer v-html="html" />
```

## Binding and modifiers {#reference}

| Binding                         | Description                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| v-viewer="options"              | Accepts Viewer.js options. Deep changes rebuild the instance.                                    |
| `v-viewer="{ observe: false }"` | Disable automatic image DOM updates.                                                             |
| `v-viewer="{ observe: 100 }"`   | Batch image DOM changes in a 100ms window; default `true` uses 50ms, `0` adds no batching delay. |
| `v-viewer="{ rebuild: true }"`  | Recreate the instance when images change; defaults to `false` and supports reactive changes.     |
| `.rebuild`                      | Shorthand for `rebuild: true`.                                                                   |

`rebuild` in the binding takes precedence over `.rebuild`, including an explicit `false`. When omitted or `undefined`, the modifier applies. `rebuild` and `observe` are v-viewer settings and are not passed to Viewer.js.

By default, additions, removals and attribute changes of `<img>` elements inside the element the directive is bound to automatically update the gallery. Access the instance as `element.$viewer`. Unmounting disconnects the observer and destroys the instance.

See [automatic updates with observe](/en/guide/observe) for values, update timing and usage guidance.

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```

## Options {#options}

Pass these settings directly in the object bound to `v-viewer="options"`. Deep changes rebuild the instance; `observe` and `rebuild` are v-viewer settings described above.

These match [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options). Each name links to its original documentation; available settings and defaults depend on the installed Viewer.js version.

<!--@include: ../../.vitepress/fragments/viewer-options.en.md-->

## Callbacks {#callbacks}

Set callback functions such as `viewed(event)` in `options`. They correspond to [Viewer.js events](https://github.com/fengyuanchen/viewerjs#events) and receive the original DOM event, with operation data in `event.detail`. Click a name for its original documentation.

<!--@include: ../../.vitepress/fragments/viewer-events.en.md-->

## Migrating from older versions {#migration}

The `.static` modifier has been removed; replace it with `{ observe: false }`.
