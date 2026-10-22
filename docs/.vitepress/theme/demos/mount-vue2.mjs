import Vue from 'vue'
import examples from 'virtual:viewer-examples'

export function mount(host, mode, english) {
  const target = document.createElement('div')
  host.appendChild(target)
  const app = new Vue(examples[`${mode}-${english ? 'en' : 'zh'}`]).$mount(
    target,
  )
  return () => {
    app.$destroy()
    app.$el.remove()
  }
}
