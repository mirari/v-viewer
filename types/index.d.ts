import type Vue from 'vue'
import type ViewerType from 'viewerjs'
import type { DirectiveOptions, Component } from 'vue'

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

  export function install(vue: Vue, options?: InstallationOptions): void

  export function setDefaults(defaultOptions: ViewerType.Options): void
}

export type Viewer = ViewerType

export type api = (options: VueViewer.ViewerApiOptions) => ViewerType

export type directive = (options?: VueViewer.InstallationOptions) => DirectiveOptions

export type component = Component

export default VueViewer
