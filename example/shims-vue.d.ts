declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  WebKitMutationObserver: MutationObserver
  MozMutationObserver: MutationObserver
}

declare interface HTMLElement {
  [key: string]: any
}
