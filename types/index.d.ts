import type Vue from 'vue'
import ViewerJs from 'viewerjs'
import type { DirectiveOptions, Component } from 'vue'

declare namespace VueViewer {
  export interface InstallationOptions {
    name?: string
    debug?: boolean
    defaultOptions?: ViewerJs.Options
  }

  export interface ViewerApiOptions {
    images: Array<string | object>
    options?: ViewerJs.Options
  }

  export function install(app: typeof Vue, options?: InstallationOptions): void

  export function setDefaults(defaultOptions: ViewerJs.Options): void
}

export declare const Viewer: typeof ViewerJs

export declare const api: (options: VueViewer.ViewerApiOptions) => ViewerJs

export declare const directive: (options?: VueViewer.InstallationOptions) => DirectiveOptions

export declare const component: Component

export default VueViewer

declare module "vue/types/vue" {
  interface Vue {
    $viewerApi: typeof api;
  }
}
