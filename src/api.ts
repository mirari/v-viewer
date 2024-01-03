import { h, render } from 'vue'
import Viewer from 'viewerjs'
import { assign } from 'lodash-es'

export interface ViewerApiOptions {
  images: Array<string | object>
  options?: Viewer.Options
}

const api = ({ images = [], options }: ViewerApiOptions) => {
  options = assign(options, {
    inline: false, // 只能使用modal模式
  })
  // 创建存放viewerjs加载所需图片的占位元素，无需实际展现
  const token = document.createElement('div')
  const ViewerToken = h(
    'div',
    {
      style: {
        display: 'none',
      },
      class: ['__viewer-token'],
    },
    images.map((attr) => {
      return h(
        'img',
        typeof attr === 'string' ? { src: attr } : attr,
      )
    }),
  )

  render(ViewerToken, token)
  const tokenElement = token.firstElementChild as HTMLElement
  document.body.appendChild(tokenElement)

  // init viewer
  const $viewerJs = new Viewer(tokenElement, options)
  const $destroy = $viewerJs.destroy.bind($viewerJs)
  $viewerJs.destroy = function (): Viewer {
    $destroy()
    render(null, token)
    return $viewerJs
  }
  $viewerJs.show()

  // 关闭Viewer模态窗口时，销毁token
  tokenElement.addEventListener('hidden', function (this: HTMLElement) {
    if (this.viewer === $viewerJs) {
      $viewerJs.destroy()
    }
  })

  return $viewerJs
}

export default api
