// Node
const path = require('path');

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'mango-ui': path.resolve(__dirname, '../')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;