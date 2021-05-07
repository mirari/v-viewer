import { createApp } from 'vue'
import App from './App.vue'
import Viewer from '../src/main'

export const app = createApp(App)
app.use(Viewer)
app.mount('#app')
