var webpack = require('webpack')
var config = require('./webpack.config.js')
var autoprefixer = require('autoprefixer')
// var WebpackShellPlugin = require('webpack-shell-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.plugins = config.plugins.concat([
  new HtmlWebpackPlugin({
    chunks: ['index'],
    filename: 'index.html',
    inject: 'head',
    template: './app/views/index.jade',
    minify: {
      removeComments: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
    }
  }),
  // 去除重复模块
  // new webpack.optimize.DedupePlugin(),
  // 将模块按序号顺序排列
  // new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
])


var distConfig = {
  output: {
    path: './',
    filename: '[name].js',
    publicPath: '/',
  },
  // 定位到行与列
  devtool: 'source-map',
  postcss: [autoprefixer({browsers: ['last 2 versions']})],
}
Object.assign(config, distConfig)

module.exports = config
