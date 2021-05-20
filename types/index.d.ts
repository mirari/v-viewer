import { App } from 'vue'
import ViewerJs from 'viewerjs'

declare namespace VueViewer {
  export interface InstallationOptions {
    name: string
    debug: boolean
    defaultOptions: ViewerJs.Options
  }

  export function install(app: App, options?: InstallationOptions): void

  export function setDefaults(defaultOptions: ViewerJs.Options): void

  export {
    ViewerJs,
  }
}

export default VueViewer
