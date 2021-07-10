const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { createWebpackConfig } = require('../webpack.base');

module.exports = createWebpackConfig({
  entry: path.resolve('server/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: 'server.index.js'
  }
});
