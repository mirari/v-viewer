import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue'
import ViewerDemo from './ViewerDemo.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ViewerDemo', ViewerDemo)
    app.component(
      'ViewerConfigurator',
      defineAsyncComponent(() => import('./ViewerConfigurator.vue')),
    )
    app.component(
      'ViewerPlayground',
      defineAsyncComponent(() => import('./playground/ViewerPlayground.vue')),
    )
  },
}
