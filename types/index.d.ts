import { App } from 'vue'
import type ViewerType from 'viewerjs'
import type { Directive, DefineComponent } from 'vue'

declare namespace VueViewer {
  export interface InstallationOptions {
    name?: string
    debug?: boolean
    defaultOptions?: ViewerType.Options
  }

  export interface ViewerApiOptions {
    images: Array<string | object>
    options?: ViewerType.Options
  }

  export function install(app: App, options?: InstallationOptions): void

  export function setDefaults(defaultOptions: ViewerType.Options): void
}

export type ViewerJs = ViewerType

export type viewerApi = (options: VueViewer.ViewerApiOptions) => ViewerType

export type directive = (options?: VueViewer.InstallationOptions) => Directive

export type component = DefineComponent<{}, {}, any>

export default VueViewer
