import { createApp } from 'vue'
import examples from 'virtual:viewer-examples'

export function mount(host, mode, english) {
  const app = createApp(examples[`${mode}-${english ? 'en' : 'zh'}`])
  app.mount(host)
  return () => app.unmount()
}
