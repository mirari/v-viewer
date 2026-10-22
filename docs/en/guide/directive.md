# Directive

Enhance an existing image or container, including dynamic DOM from rendered Markdown or HTML fragments.

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

| Binding                         | Description                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| v-viewer="options"              | Accepts Viewer.js options. Deep changes rebuild the instance.                                         |
| `v-viewer="{ observe: false }"` | Disable automatic image DOM updates.                                                                  |
| `v-viewer="{ observe: 100 }"`   | Batch image DOM changes in a 100ms window; default `true` uses 50ms, `0` batches until the next task. |
| .rebuild                        | Recreate the instance when images change.                                                             |

By default, adding, removing and changing image attributes automatically updates the gallery. Access the instance as `element.$viewer`. Unmounting disconnects the observer and destroys the instance.

The window starts at the first image mutation; subsequent changes do not postpone the update. `observe` accepts `true`, `false` or a non-negative number. Configuration changes and explicit `update()` calls still apply when observation is disabled. The `.static` modifier has been removed; replace it with `{ observe: false }`.

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```
