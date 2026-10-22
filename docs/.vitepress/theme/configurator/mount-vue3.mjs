import { createApp } from 'vue'
import { Viewer } from '../../../../packages/vue3/src/index.ts'

export function mount(host, component, report) {
  const app = createApp({ ...component, components: { Viewer } }, { report })
  const instance = app.mount(host)
  return {
    send: (command) => instance.receive(command),
    dispose: () => app.unmount(),
  }
}
