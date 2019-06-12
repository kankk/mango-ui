import Text from './src/main';

/* istanbul ignore next */
Text.install = function(Vue) {
  Vue.component(Text.name, Text);
};

export default Text;