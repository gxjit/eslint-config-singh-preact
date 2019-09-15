const { env, parserOptions } = require('eslint-config-singh')

module.exports = {
  extends: [
    'eslint-config-singh',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks.js',
    './react-overwrites'
  ].map(require.resolve),
  settings: {
    react: {
      pragma: 'h',
      version: 'preact'
    }
  },
  parserOptions,
  env
}
