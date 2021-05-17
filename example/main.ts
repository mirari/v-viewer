import { createApp } from 'vue'
import Viewer from '../src/main'
import App from './App.vue'

import 'bulma/bulma.sass'
import 'viewerjs/dist/viewer.css'

export const app = createApp(App)
app.use(Viewer)
app.mount('#app')
