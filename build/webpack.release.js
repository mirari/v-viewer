var path = require('path')
// var config = require('../config')
// var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
// const webpack = require('webpack')
// const merge = require('webpack-merge')

module.exports = {
  entry: {
    'v-viewer': './src/index.js'
  },
  output: {
    filename: './dist/[name].js',
    library: 'VueViewer',
    libraryTarget: 'umd'
    // src/index.js文件采用export default语法抛出，因此需要设置libraryExport
    // 否则引入的UI组件库需要使用.default才能引用到抛出的对象
    // if your entry has a default export of `MyDefaultModule`
    // var MyDefaultModule = _entry_return_.default;
    // 这里踩过坑，所以说明一下，不配置的话遇到的问题是引入的UI组件库没法解构
    // libraryExport: 'default'
  },
  externals: [
    {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue'
      }
    },
    {
      viewerjs: {
        commonjs: 'viewerjs',
        commonjs2: 'viewerjs',
        amd: 'viewerjs',
        root: 'Viewer'
      }
    },
    /^viewerjs\/.+$/
  ],
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: require('./vue-loader.conf')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot
      }
    ]
  }
}
