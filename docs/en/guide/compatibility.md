# Compatibility

| Environment | Support                                                 |
| ----------- | ------------------------------------------------------- |
| Vue         | 3.0+                                                    |
| Viewer.js   | 1.11.7+ (1.x)                                           |
| SSR         | Safe to import; DOM operations run only in the browser. |

Vue 3 requires modern browsers. `<script setup>` examples require Vue 3.2+; Vue 3.0/3.1 can use ordinary setup and local registration.

## SSR / Nuxt

The component initializes after mounting. SSR applications can use the component or call useViewer inside setup; call its returned show() method only in browser event handlers.

Browser builds select an entry that imports CSS automatically; Node.js / SSR selects the same runtime without CSS imports. In Nuxt, the client build includes the styles while server imports remain safe.
