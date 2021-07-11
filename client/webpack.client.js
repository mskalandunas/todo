const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const { extendConfigFromBase } = require('../webpack.base');

module.exports = extendConfigFromBase({
  entry: {
    client: [path.resolve('client/index.jsx'), path.resolve('client/style/base.scss')]
  },
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'client.index.js'
  },
  plugins: [new MiniCSSExtractPlugin({ filename: '[name].css' })]
});
