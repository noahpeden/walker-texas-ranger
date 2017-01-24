// webpack.config.js

module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  externals: {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  }
}
