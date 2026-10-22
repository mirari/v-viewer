import Vue from 'vue'
import { Viewer } from '../../../../packages/vue2/src/index.ts'

export function mount(host, component, report) {
  const target = document.createElement('div')
  host.appendChild(target)
  const app = new Vue({
    ...component,
    components: { Viewer },
    propsData: { report },
  }).$mount(target)
  return {
    send: (command) => app.receive(command),
    dispose() {
      app.$destroy()
      app.$el.remove()
    },
  }
}
