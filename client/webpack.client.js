const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'client.index.js'
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
