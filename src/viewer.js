import ViewerJs from 'viewerjs'

const viewer = Vue => (options = {}) => {
  options.images = options.images || []
  options.options = options.options || {}

  // init el
  const Instance = Vue.extend({
    render (h) {
      return h(
        'div',
        {
          style: {
            display: 'none'
          },
          class: ['__viewer__viewer']
        },
        options.images.map((attr) => {
          return h(
            'img',
            {
              attrs: typeof attr === 'string' ? { src: attr } : attr
            }
          )
        })
      )
    }
  })
  const component = new Instance()
  component.$mount()
  document.body.appendChild(component.$el)

  // init viewer
  const $viewer = new ViewerJs(component.$el, options.options)
  const $destroy = $viewer.destroy.bind($viewer)
  $viewer.destroy = function () {
    $destroy()
    component.$destroy()
    document.body.removeChild(component.$el)
    return $viewer
  }
  $viewer.show()

  // listener event
  component.$el.addEventListener('hidden', function () {
    if (this.viewer === $viewer) {
      $viewer.destroy()
    }
  })

  return $viewer
}

export default viewer
