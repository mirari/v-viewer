import { h, render } from 'vue'
import ViewerJs from 'viewerjs'

export interface ViewerOptions {
  images: Array<string | object>
  options?: ViewerJs.Options
}

const viewer = (options: ViewerOptions) => {
  options.images = options.images || []
  options.options = options.options || {}

  // init el
  const container = document.createElement('div')
  const vnode = h(
    'div',
    {
      style: {
        display: 'none',
      },
      class: ['__viewer__viewer'],
    },
    options.images.map((attr) => {
      return h(
        'img',
        typeof attr === 'string' ? { src: attr } : attr,
      )
    }),
  )

  render(vnode, container)
  const component = container.firstElementChild as HTMLElement
  document.body.appendChild(component)

  // init viewer
  const $viewer = new ViewerJs(component, options.options)
  const $destroy = $viewer.destroy.bind($viewer)
  $viewer.destroy = function(): ViewerJs {
    $destroy()
    render(null, container)
    return $viewer
  }
  $viewer.show()

  // listener event
  component.addEventListener('hidden', function(this: HTMLElement) {
    if (this.viewer === $viewer) {
      $viewer.destroy()
    }
  })

  return $viewer
}

export default viewer
