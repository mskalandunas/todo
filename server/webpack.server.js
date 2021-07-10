const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { extendConfigFromBase } = require('../webpack.base');

module.exports = extendConfigFromBase({
  entry: path.resolve('server/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: 'server.index.js'
  }
});
