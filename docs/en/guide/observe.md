# Automatic updates with observe

Applies to components, directives and `useViewer` with a `target`.

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
