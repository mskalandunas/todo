const path = require('path');

const createWebpackConfig = overwrites => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve('lib/components'),
      '@fixtures': path.resolve('lib/__fixtures__')
    },
    extensions: ['.js', '.jsx']
  },
  ...overwrites
});

module.exports = {
  createWebpackConfig
};
