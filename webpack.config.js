const path = require('path');

module.exports = {
  entry: './client/index.js',
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        exclude: [path.resolve('node_modules')],
        test: /\.(js|jsx|mjs)$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};