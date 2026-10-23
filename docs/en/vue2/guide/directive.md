# Directive

Suitable for simple image browsing without complex customization, while also supporting images in dynamically rendered Markdown or HTML whose content is not known in advance. By default, it watches additions, removals and attribute changes of `<img>` elements inside the element the directive is bound to and automatically updates the gallery.

[Playground](/en/vue2/playground?example=directive)

<ClientOnly><ViewerDemo vue2 mode="directive" /></ClientOnly>

```viewer-example
directive vue2 en
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

## Automatic updates with observe {#observe}

`observe` controls automatic image DOM observation and how often the gallery updates. It watches additions, removals, reordering and attribute changes (such as `src` and `alt`) of `<img>` elements inside the container, including images replaced by rendered Markdown or HTML. Unrelated text, container styling and Viewer.js-generated UI do not trigger gallery updates.

| Value                            | Behavior                                                                                                                 | Suitable for                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| `true` (default)                 | Start a 50ms window at the first image mutation and update once for changes within that window.                          | Markdown, HTML or images rendered in successive batches. |
| `0`                              | Add no batching delay, but still update asynchronously. Mutations received before that update runs are combined.         | Infrequent changes that should appear promptly.          |
| A positive number, such as `100` | Batch mutations within the specified number of milliseconds.                                                             | Frequent changes, especially with `rebuild` enabled.     |
| `false`                          | Disable automatic image DOM observation. Initial creation, configuration changes and manual `update()` calls still work. | Fixed content or manually controlled updates.            |

For example, adding 10 `<img>` elements in one synchronous operation can produce a single update even with `0`. Adding them in separate asynchronous operations may produce multiple updates with `0`, while `50` combines mutations within the same 50ms window.

The window starts at the first image mutation and is not restarted by later mutations. Content that keeps changing can therefore update periodically without waiting for all changes to stop. The delay applies only to subsequent automatic image DOM updates; it does not delay initial creation or control image downloads.

By default, each batch reuses the instance and calls `update()`. With `rebuild` enabled, it destroys and recreates the instance instead. `observe` can change reactively; setting it to `false` cancels any pending automatic update.

The `.static` modifier has been removed; replace it with `{ observe: false }`.

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```
