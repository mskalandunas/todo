const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const extendConfigFromBase = overwrites => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'main.css'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@client': path.resolve('client'),
      '@fixtures': path.resolve('lib/__fixtures__')
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  ...overwrites
});

module.exports = [
  extendConfigFromBase({
    entry: {
      client: [
        path.resolve('client/index.jsx'),
        path.resolve('client/style/base.scss')
      ]
    },
    target: 'web',
    output: {
      path: path.resolve('dist'),
      filename: 'client.index.js'
    },
    plugins: [new MiniCSSExtractPlugin({ filename: '[name].css' })]
  }),
  extendConfigFromBase({
    entry: path.resolve('server/index.js'),
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve('dist'),
      filename: 'server.index.js'
    }
  })
];
