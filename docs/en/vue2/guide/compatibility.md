# Compatibility

| Environment | Support                                                 |
| ----------- | ------------------------------------------------------- |
| Vue         | 2.4+                                                    |
| Viewer.js   | 1.11.7+ (1.x)                                           |
| SSR         | Safe to import; DOM operations run only in the browser. |

The Vue 2 runtime is transpiled to ES5. For IE 11, load the optional polyfills before importing the plugin.

```js
import 'v-viewer/polyfills'
```

## SSR / Nuxt

The component initializes after mounting. Use the component in SSR applications; register directives in a client plugin. Call viewerApi or this.$viewerApi only in browser event handlers.

Browser builds select an entry that imports CSS automatically; Node.js / SSR selects the same runtime without CSS imports. In Nuxt, the client build includes the styles while server imports remain safe.
