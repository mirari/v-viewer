var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = {
  entry: {
    'v-viewer': './src/index.js'
  },
  output: {
    filename: './dist/[name].js',
    library: 'VueViewer',
    libraryTarget: 'umd'
  },
  externals: [
    'viewerjs',
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
