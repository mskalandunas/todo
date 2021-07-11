const path = require('path');

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

module.exports = {
  extendConfigFromBase
};
