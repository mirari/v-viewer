import { defineConfig, postcssIsolateStyles } from 'vitepress'
import { fileURLToPath } from 'node:url'
import { format } from 'prettier'
import { sample, type Example } from './theme/playground/samples'

// Share the runnable SFC, omitting presentation styles from documentation code.
// Documentation uses /images/... paths; sandbox previews need an origin.
const exampleSources = new Map<string, string>()
for (const version of ['vue2', 'vue3']) {
  for (const language of ['zh', 'en']) {
    for (const mode of ['component', 'directive', 'api'] as Example[]) {
      exampleSources.set(
        `${mode} ${version} ${language}`,
        await format(
          sample(mode, version === 'vue2', language === 'en').replace(
            /\n<style>[\s\S]*<\/style>\s*$/,
            '',
          ),
          {
            parser: 'vue',
            semi: false,
            singleQuote: true,
          },
        ),
      )
    }
  }
}

function navigation(english: boolean, vue2 = false) {
  const prefix = (english ? '/en' : '') + (vue2 ? '/vue2' : '')
  const link = (path: string) =>
    vue2 && path === '/guide/getting-started'
      ? `${prefix}/`
      : `${prefix}${path}`
  return {
    nav: [
      {
        text: english ? 'Getting started' : '开始使用',
        link: link('/guide/getting-started'),
      },
      { text: english ? 'Usage' : '使用方法', link: link('/guide/component') },
      {
        text: english ? 'Reference' : '参考',
        link: link('/guide/faq'),
      },
      { text: 'Vue 2', link: english ? '/en/vue2/' : '/vue2/' },
    ],
    sidebar: [
      {
        text: english ? 'Getting started' : '开始使用',
        items: [
          {
            text: english ? 'Quick start' : '快速上手',
            link: link('/guide/getting-started'),
          },
          {
            text: english ? 'Compatibility' : '兼容性',
            link: link('/guide/compatibility'),
          },
        ],
      },
      {
        text: english ? 'Usage' : '使用方法',
        items: [
          {
            text: english ? 'Component' : '组件',
            link: link('/guide/component'),
          },
          {
            text: english ? 'Directive' : '指令',
            link: link('/guide/directive'),
          },
          { text: 'API', link: link('/guide/api') },
          {
            text: english ? 'Playground' : '演练场',
            link: link('/playground'),
          },
          {
            text: english ? 'More examples' : '更多示例',
            link: link('/guide/examples'),
          },
        ],
      },
      {
        text: english ? 'Reference' : '参考',
        items: [
          { text: english ? 'FAQ' : '常见问题', link: link('/guide/faq') },
          {
            text: english ? 'Feedback' : '问题反馈',
            link: link('/contributing'),
          },
        ],
      },
    ],
  }
}

export default defineConfig({
  title: 'v-viewer',
  base: process.env.DOCS_BASE || '/',
  cleanUrls: true,
  markdown: {
    config(md) {
      md.core.ruler.after('block', 'viewer-examples', (state) => {
        for (const token of state.tokens) {
          if (token.type !== 'fence' || token.info !== 'viewer-example')
            continue
          const source = exampleSources.get(token.content.trim())
          if (!source)
            throw new Error(`Unknown viewer example: ${token.content}`)
          token.info = 'vue'
          token.content = source
        }
      })
    },
  },
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#254f3f' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${process.env.DOCS_BASE || '/'}favicon.svg`,
      },
    ],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'Vue 的图片预览组件、指令与 API。',
      themeConfig: {
        ...navigation(false),
        sidebar: {
          '/vue2/': navigation(false, true).sidebar,
          '/': navigation(false).sidebar,
        },
        langMenuLabel: '切换语言',
        outline: { label: '本页内容', level: [2, 3] },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新' },
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到深色主题',
        skipToContentLabel: '跳转到内容',
        notFound: {
          title: '页面不存在',
          quote: '请检查地址，或返回首页查看文档。',
          linkLabel: '返回首页',
          linkText: '返回首页',
        },
        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'v-viewer · mirari',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description:
        'Image viewer components, directives and composables for Vue.',
      themeConfig: {
        ...navigation(true),
        sidebar: {
          '/en/vue2/': navigation(true, true).sidebar,
          '/en/': navigation(true).sidebar,
        },
        langMenuLabel: 'Change language',
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        lastUpdated: { text: 'Last updated' },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'v-viewer · mirari',
        },
      },
    },
  },
  themeConfig: {
    siteTitle: 'v-viewer',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mirari/v-viewer' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '没有找到相关内容',
                resetButtonTitle: '清除搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },
  vite: {
    css: {
      postcss: {
        plugins: [postcssIsolateStyles({ includeFiles: [/vp-doc\.css$/] })],
      },
    },
    resolve: {
      alias: {
        'v-viewer': fileURLToPath(
          new URL('../../packages/vue3/src/index.ts', import.meta.url),
        ),
      },
      dedupe: ['vue'],
    },
  },
})
