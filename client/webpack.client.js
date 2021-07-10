const path = require('path');

const { createWebpackConfig } = require('../webpack.base');

module.exports = createWebpackConfig({
  entry: './client/index.jsx',
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'client.index.js'
  }
});
