import { createApp } from 'vue'
import VueViewer, { ViewerJs } from '../src'
import App from './App.vue'

import 'bulma/bulma.sass'
import 'viewerjs/dist/viewer.css'
VueViewer.setDefaults({
  zIndexInline: 2021,
  focus: false,
})
export const app = createApp(App)
app.use(VueViewer, {
  debug: true,
})
app.mount('#app')
