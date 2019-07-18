module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'amd': false,
  },

  'extends': [
    'plugin:vue/base',
    'mangokk'
  ],

  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'parser': 'babel-eslint',
  },

  'plugins': ['html', 'json'],

  'rules': {

  }
};