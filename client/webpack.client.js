const path = require('path');

const { extendConfigFromBase } = require('../webpack.base');

module.exports = extendConfigFromBase({
  entry: './client/index.jsx',
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'client.index.js'
  }
});
