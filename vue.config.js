const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const mode = process.env.mode
// || process.env.NODE_ENV === 'test'

const releaseConfig = {
  // css: { extract: true },

  lintOnSave: process.env.NODE_ENV !== 'production' ? 'error' : false,

  productionSourceMap: false,

  configureWebpack: {
    output: {
      // filename: './dist/[name].js',
      library: 'VueViewer',
      // libraryTarget: 'umd',
    },
    /*  将viewerjs及css文件一同打包
    externals: [
      {
        viewerjs: {
          commonjs: 'viewerjs',
          commonjs2: 'viewerjs',
          amd: 'viewerjs',
          root: 'Viewer',
        },
      },
      /^viewerjs\/.+$/,
    ],
    */
  },
}

const exampleConfig = {
  publicPath: './',

  outputDir: 'example-dist',

  pages: {
    index: {
      entry: 'example/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    // host: "localhost",
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
  },

  lintOnSave: process.env.NODE_ENV !== 'production' ? 'error' : false,

  productionSourceMap: false,

  chainWebpack: config => {
    // example目录需要加入编译
    /*
    config.module
      .rule('js')
      .include.add(/example/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    */
    // 支持载入md文件
    // config.module.rule('md')
    //   .test(/\.md/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    //   .options({
    //     html: true,
    //     preventExtract: true,
    //     raw: true,
    //   })
  },

  configureWebpack: {
    resolve: {
      alias: {
        package: resolve('package.json'),
      },
    },
  },
}

const defaultConfig = {
  // chainWebpack: config => {
  //   if (process.env.NODE_ENV === 'coverage') {
  //     config.module.rule('js')
  //       .use('istanbul')
  //       .loader('istanbul-instrumenter-loader')
  //       .options({ esModules: true })
  //       .before('babel-loader')
  //   }
  // },
}

let exportConfig = defaultConfig
switch (mode) {
  case 'release':
    exportConfig = releaseConfig
    break
  case 'example':
    exportConfig = exampleConfig
    break
}

module.exports = exportConfig
