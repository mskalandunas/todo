module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist/', 'node_modules/'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
