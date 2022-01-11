import Vue from 'vue'
import VueViewer from '../src'
import App from './App.vue'

import 'bulma/bulma.sass'
import 'viewerjs/dist/viewer.css'

VueViewer.setDefaults({
  zIndexInline: 2017,
  focus: false,
})
// Vue.use(VueViewer, {
//   debug: true,
// })
const app = new Vue({
  el: '#app',
  ...App,
})
