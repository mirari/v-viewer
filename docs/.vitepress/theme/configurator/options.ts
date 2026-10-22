export type Setting = boolean | number | string
export type Settings = Record<string, Setting>
type Choice = { value: Setting; zh: string; en: string }
export interface Control {
  key: string
  zh: string
  en: string
  value: Setting
  type: 'boolean' | 'number' | 'select' | 'radio'
  min?: number
  max?: number
  step?: number
  choices?: Choice[]
}
const choice = (value: Setting, zh: string, en = zh): Choice => ({
  value,
  zh,
  en,
})
const bool = (key: string, zh: string, en: string, value = true): Control => ({
  key,
  zh,
  en,
  value,
  type: 'boolean',
})
const num = (
  key: string,
  zh: string,
  en: string,
  value: number,
  min: number,
  max: number,
  step = 1,
): Control => ({ key, zh, en, value, type: 'number', min, max, step })
const select = (
  key: string,
  zh: string,
  en: string,
  value: Setting,
  choices: Choice[],
): Control => ({ key, zh, en, value, type: 'select', choices })
const radio = (
  key: string,
  zh: string,
  en: string,
  value: Setting,
  choices: Choice[],
): Control => ({ key, zh, en, value, type: 'radio', choices })
const visibility = [
  choice(true, '显示', 'Show'),
  choice(false, '隐藏', 'Hide'),
  choice(2, '≥ 768px'),
  choice(3, '≥ 992px'),
  choice(4, '≥ 1200px'),
]
const wheel = [
  choice(true, '开启', 'Enabled'),
  choice(false, '关闭', 'Disabled'),
  choice('ctrl', 'Ctrl + 滚轮', 'Ctrl + wheel'),
  choice('shift', 'Shift + 滚轮', 'Shift + wheel'),
]
export const eventNames = [
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
]
export const groups = [
  {
    id: 'appearance',
    zh: '界面',
    en: 'Appearance',
    controls: [
      radio(
        'inline',
        '内嵌模式：容器内显示；弹窗模式：点击图片后全屏显示。',
        'Inline mode: display within the container. Modal mode: click an image to fill the viewport.',
        true,
        [choice(true, 'inline'), choice(false, 'modal')],
      ),
      bool('button', '右上角按钮', 'Top-right button'),
      select('navbar', '缩略图导航', 'Thumbnail navigation', true, [
        ...visibility,
        choice('left', '左侧缩略图', 'Thumbnails on the left'),
        choice('compact', '3 张小缩略图', 'Three small thumbnails'),
      ]),
      select('navigation', '左右导航按钮', 'Navigation arrows', false, [
        ...visibility,
        choice('large', '大号按钮', 'Large buttons'),
      ]),
      select('title', '图片标题', 'Image title', true, [
        ...visibility,
        choice('custom', '自定义标题函数', 'Custom title function'),
      ]),
      select('toolbar', '工具栏', 'Toolbar', true, [
        ...visibility,
        choice('compact', '仅缩放与翻页', 'Zoom and navigation only'),
        choice('left', '左侧工具栏', 'Toolbar on the left'),
      ]),
      select('backdrop', '遮罩（弹窗模式）', 'Backdrop (modal mode)', true, [
        choice(true, '点击关闭', 'Click to close'),
        choice(false, '无遮罩', 'None'),
        choice('static', '点击不关闭', 'Static'),
      ]),
      select('transition', '过渡动画', 'Transitions', true, [
        choice(true, '全部开启', 'All enabled'),
        choice(false, '全部关闭', 'All disabled'),
        choice('zoomOnly', '仅缩放动画', 'Zoom only'),
      ]),
      bool('tooltip', '缩放比例提示', 'Zoom percentage tooltip'),
      bool('loading', '图片加载提示', 'Loading indicator'),
      select('className', '自定义样式类', 'Custom class', '', [
        choice('', '默认', 'Default'),
        choice('warm-viewer', '暖色背景', 'Warm backdrop'),
      ]),
    ],
  },
  {
    id: 'interaction',
    zh: '交互',
    en: 'Interaction',
    controls: [
      bool('movable', '拖动图片', 'Drag images'),
      bool('rotatable', '旋转', 'Rotate'),
      bool('scalable', '水平 / 垂直翻转', 'Flip images'),
      bool('zoomable', '缩放', 'Zoom'),
      select(
        'magnifier',
        '放大镜（展开预览后悬停）',
        'Magnifier (hover after expanding)',
        false,
        [
          choice(false, '关闭', 'Disabled'),
          choice(true, '开启', 'Enabled'),
          choice('large', '大号 3× 放大镜', 'Large 3× magnifier'),
        ],
      ),
      bool('keyboard', '键盘操作', 'Keyboard controls'),
      bool(
        'focus',
        '聚焦预览（需开启 keyboard）',
        'Focus viewer (requires keyboard)',
      ),
      bool('loop', '循环浏览', 'Loop images'),
      bool('preload', '预加载相邻图片', 'Preload adjacent images'),
      bool('toggleOnDblclick', '双击切换原始尺寸', 'Double-click actual size'),
      bool('rotateOnGesture', '手势旋转（触屏）', 'Gesture rotation (touch)'),
      bool('rotateOnTouch', '拖动旋转（触屏）', 'Drag rotation (touch)'),
      bool('zoomOnTouch', '拖动缩放（触屏）', 'Drag zoom (touch)'),
      bool('zoomOnGesture', '手势缩放（触屏）', 'Gesture zoom (touch)'),
      select('zoomOnWheel', '滚轮缩放', 'Wheel zoom', true, wheel),
      bool('slideOnTouch', '滑动切换（触屏）', 'Swipe navigation (touch)'),
      select('slideOnWheel', '滚轮切换', 'Wheel navigation', true, wheel),
    ],
  },
  {
    id: 'geometry',
    zh: '尺寸',
    en: 'Geometry',
    controls: [
      num(
        'initialCoverage',
        '初始图片覆盖率',
        'Initial image coverage',
        0.9,
        0.1,
        1,
        0.05,
      ),
      num('initialViewIndex', '初始图片索引', 'Initial image index', 0, 0, 2),
      num(
        'minWidth',
        '内嵌最小宽度 / px',
        'Minimum inline width / px',
        200,
        100,
        1200,
        10,
      ),
      num(
        'minHeight',
        '内嵌最小高度 / px',
        'Minimum inline height / px',
        100,
        100,
        800,
        10,
      ),
      num('zoomRatio', '每次缩放步长', 'Zoom step', 0.1, 0.01, 1, 0.01),
      num(
        'minZoomRatio',
        '最小缩放比例',
        'Minimum zoom ratio',
        0.01,
        0.01,
        1,
        0.01,
      ),
      num('maxZoomRatio', '最大缩放比例', 'Maximum zoom ratio', 100, 1, 100, 1),
      num('zIndex', '弹窗层级', 'Modal z-index', 2015, 0, 10000),
      num('zIndexInline', '内嵌层级', 'Inline z-index', 0, 0, 10000),
    ],
  },
  {
    id: 'playback',
    zh: '播放',
    en: 'Playback',
    controls: [
      bool(
        'fullscreen',
        '播放时请求浏览器全屏',
        'Request fullscreen when playing',
      ),
      bool('autoplay', '播放模式自动切图', 'Advance images during playback'),
      num(
        'interval',
        '播放间隔 / ms',
        'Slideshow interval / ms',
        5000,
        500,
        10000,
        500,
      ),
    ],
  },
  {
    id: 'data',
    zh: '图片来源',
    en: 'Sources',
    controls: [
      select('container', '弹窗挂载位置', 'Modal container', 'body', [
        choice('body', 'body'),
        choice('#preview-container', '#preview-container'),
      ]),
      select('filter', '筛选可预览图片', 'Filter viewable images', 'all', [
        choice('all', '全部图片', 'All images'),
        choice('first', '仅第一张', 'First image only'),
        choice('lastTwo', '后两张', 'Last two images'),
      ]),
      select('url', '原图地址', 'Original image URL', 'src', [
        choice('src', 'src'),
        choice(
          'data-source',
          'data-source（不同图片）',
          'data-source (different image)',
        ),
        choice(
          'resolver',
          '函数读取 data-source',
          'Function reading data-source',
        ),
      ]),
      select(
        'inheritedAttributes',
        '继承图片属性',
        'Inherited image attributes',
        'default',
        [
          choice('default', 'Viewer.js 默认属性', 'Viewer.js defaults'),
          choice('none', '不继承', 'None'),
          choice('custom', '继承 data-credit', 'Inherit data-credit'),
        ],
      ),
    ],
  },
  {
    id: 'events',
    zh: '事件',
    en: 'Events',
    controls: eventNames.map((name) =>
      bool(
        name,
        `记录 ${name}`,
        `Log ${name}`,
        ['viewed', 'zoomed'].includes(name),
      ),
    ),
  },
]

// Fixed executable presets: no user-authored code is evaluated by the configurator.
export const presets: Record<string, Record<string, string>> = {
  navbar: {
    left: "{ position: 'left', show: true }",
    compact: "{ visibleItemCount: 3, size: 'small', show: true }",
  },
  navigation: {
    large:
      "{ prev: { show: true, size: 'large' }, next: { show: true, size: 'large' } }",
  },
  title: {
    custom:
      '(image, data) => `${image.alt} · ${data.naturalWidth} × ${data.naturalHeight}`',
  },
  toolbar: {
    compact: '{ zoomIn: true, zoomOut: true, prev: true, next: true }',
    left: "{ position: 'left', zoomIn: true, zoomOut: true, rotateLeft: true, rotateRight: true, prev: true, next: true }",
  },
  transition: {
    zoomOnly:
      '{ show: false, hide: false, view: false, move: false, rotate: false, scale: false, play: false, tooltip: false, zoom: true }',
  },
  magnifier: { large: '{ size: 180, zoomRatio: 3, opacity: 1 }' },
  filter: {
    all: 'null',
    first: "image => image.dataset.index === '0'",
    lastTwo: "image => image.dataset.index !== '0'",
  },
  url: { resolver: "image => image.getAttribute('data-source')" },
  inheritedAttributes: {
    default:
      "['crossOrigin', 'decoding', 'isMap', 'loading', 'referrerPolicy', 'sizes', 'srcset', 'useMap']",
    none: '[]',
    custom: "['data-credit']",
  },
}
export function defaults(): Settings {
  return Object.fromEntries(
    groups.flatMap((group) =>
      group.controls.map((control) => [control.key, control.value]),
    ),
  )
}
export function optionsCode(settings: Settings) {
  return (
    '{\n' +
    Object.entries(settings)
      .map(([key, value]) => {
        const code = eventNames.includes(key)
          ? value
            ? `event => console.log('${key}', event.detail)`
            : 'null'
          : (presets[key]?.[String(value)] ?? JSON.stringify(value))
        return `  ${key}: ${code}`
      })
      .join(',\n') +
    '\n}'
  )
}
