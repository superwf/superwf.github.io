var webpack = require('webpack')

module.exports = {
  entry: {
    index: './app/js/index.js',
    impress: './app/js/impress.js',
  },
  output: {
    // path: __dirname + '/public/js',
    path: './',
    filename: '[name].js',
    publicPath: '/',
  },

  // 定位到行与列
  // devtool: 'source-map',
  // 定位到行,但是编译会快，适合开发用
  devtool: 'eval-source-map',

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint',
    }],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.html$/, loader: 'html'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {
        test: /\.jade$/,
        loader: 'jade-loader',
      },
      {test: /\.(eot|woff|ttf|svg|woff2)$/, loader: 'url-loader'},
      {test: /\.png$/, loader: 'url-loader',
        query: {mimetype: 'image/png'}
      },
    ]
  },
  // postcss: [autoprefixer({browsers: ['last 2 versions']})],

  plugins: [
    new webpack.WatchIgnorePlugin([/node_modules/]),
  ],
}
