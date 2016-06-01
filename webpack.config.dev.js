var webpack = require('webpack')
var config = require('./webpack.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackShellPlugin = require('webpack-shell-plugin')


var plugins = [
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
  new webpack.SourceMapDevToolPlugin({
    exclude: /node_modules/,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new WebpackShellPlugin({
    onBuildEnd: [
      'gulp dev',
    ]
  })
]

config.devServer = {
  hot: false,
  contentBase: './public/',
  inline: true,
  colors: true,
  // 将所有不存在文件的请求都重新定位到/index.html
  // 单页应用配置路由功能必备
  historyApiFallback: {
    index: '/'
  },
  host: '0.0.0.0',
  port: 9000,
}
config.plugins = config.plugins.concat(plugins)

module.exports = config
