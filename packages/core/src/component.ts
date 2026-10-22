import type ViewerJs from 'viewerjs'
import type { ViewerOptions } from './index.js'

export const viewerEvents = [
  'ready',
  'show',
  'shown',
  'hide',
  'hidden',
  'view',
  'viewed',
  'move',
  'moved',
  'rotate',
  'rotated',
  'scale',
  'scaled',
  'zoom',
  'zoomed',
  'play',
  'playing',
  'stop',
] as const
export type ViewerEventName = (typeof viewerEvents)[number]
export type ViewerEventMap = {
  [K in ViewerEventName]: K extends keyof ViewerOptions
    ? NonNullable<ViewerOptions[K]> extends (event: infer E) => void
      ? E
      : CustomEvent
    : CustomEvent
}
export type ViewerOptionProps = Omit<ViewerOptions, ViewerEventName>
export type ViewerEventListeners = {
  [K in ViewerEventName as `on${Capitalize<K>}`]?: (
    event: ViewerEventMap[K],
  ) => void
}

// Undefined leaves Viewer.js defaults (including setDefaults) in control.
// Boolean must come first so bare Vue attributes such as `inline` become true.
export const viewerOptionProps = {
  backdrop: { type: [Boolean, String], default: undefined },
  button: { type: Boolean, default: undefined },
  className: { type: String, default: undefined },
  container: { type: [String, Object], default: undefined },
  filter: { type: Function, default: undefined },
  fullscreen: { type: [Boolean, Object], default: undefined },
  focus: { type: Boolean, default: undefined },
  inheritedAttributes: { type: Array, default: undefined },
  initialCoverage: { type: Number, default: undefined },
  initialViewIndex: { type: Number, default: undefined },
  inline: { type: Boolean, default: undefined },
  autoplay: { type: Boolean, default: undefined },
  interval: { type: Number, default: undefined },
  keyboard: { type: Boolean, default: undefined },
  loading: { type: Boolean, default: undefined },
  loop: { type: Boolean, default: undefined },
  magnifier: { type: [Boolean, Object], default: undefined },
  maxZoomRatio: { type: [Number, Function], default: undefined },
  minHeight: { type: Number, default: undefined },
  minWidth: { type: Number, default: undefined },
  minZoomRatio: { type: [Number, Function], default: undefined },
  movable: { type: Boolean, default: undefined },
  navbar: { type: [Boolean, Number, String, Object], default: undefined },
  navigation: { type: [Boolean, Number, Object], default: undefined },
  preload: { type: Boolean, default: undefined },
  rotatable: { type: Boolean, default: undefined },
  rotateOnGesture: { type: Boolean, default: undefined },
  rotateOnTouch: { type: Boolean, default: undefined },
  scalable: { type: Boolean, default: undefined },
  slideOnTouch: { type: Boolean, default: undefined },
  slideOnWheel: { type: [Boolean, String], default: undefined },
  title: { type: [Boolean, Number, Function, Array], default: undefined },
  toggleOnDblclick: { type: Boolean, default: undefined },
  toolbar: { type: [Boolean, Number, Object], default: undefined },
  tooltip: { type: Boolean, default: undefined },
  transition: { type: [Boolean, Object], default: undefined },
  url: { type: [String, Function], default: undefined },
  zIndex: { type: Number, default: undefined },
  zIndexInline: { type: Number, default: undefined },
  zoomOnGesture: { type: Boolean, default: undefined },
  zoomOnTouch: { type: Boolean, default: undefined },
  zoomOnWheel: { type: [Boolean, String], default: undefined },
  zoomRatio: { type: Number, default: undefined },
  zoomable: { type: Boolean, default: undefined },
}

export function collectViewerOptions(
  props: Record<string, unknown>,
): ViewerOptions {
  // Legacy options are the base; explicitly bound props take precedence.
  const options: Record<string, unknown> = {
    ...(props.options as ViewerOptions | undefined),
  }
  for (const key of Object.keys(viewerOptionProps)) {
    if (props[key] !== undefined) options[key] = props[key]
  }
  return options
}

export function forwardViewerEvents(
  element: HTMLElement,
  emit: (name: ViewerEventName, event: CustomEvent) => void,
) {
  const listeners = viewerEvents.map((name) => {
    const handler = (event: Event) => {
      if (event.target === element) emit(name, event as CustomEvent)
    }
    element.addEventListener(name, handler)
    return () => element.removeEventListener(name, handler)
  })
  return () => listeners.forEach((remove) => remove())
}

export const viewerMethods = [
  'show',
  'hide',
  'view',
  'prev',
  'next',
  'move',
  'moveTo',
  'zoom',
  'zoomTo',
  'rotate',
  'rotateTo',
  'scale',
  'scaleX',
  'scaleY',
  'play',
  'stop',
  'full',
  'exit',
  'reset',
  'toggle',
] as const
export type ViewerMethodName = (typeof viewerMethods)[number]
export type ViewerMethods = {
  [K in ViewerMethodName]: (
    ...args: Parameters<ViewerJs[K]>
  ) => ViewerJs | undefined
} & {
  showTooltip: () => ViewerJs | undefined
  update: () => void
  destroy: () => void
}

export function bindViewerMethods(getViewer: () => ViewerJs | undefined) {
  const methods = Object.fromEntries(
    viewerMethods.map((name) => [
      name,
      (...args: unknown[]) => {
        const viewer = getViewer()
        return (
          viewer?.[name] as ((...args: unknown[]) => ViewerJs) | undefined
        )?.apply(viewer, args)
      },
    ]),
  ) as Pick<ViewerMethods, ViewerMethodName>
  return { ...methods, showTooltip: () => getViewer()?.tooltip() }
}
