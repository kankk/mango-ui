import Text from '../packages/text/index.js';

// 所有组件
const components = [
  Text
];

const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

export default {
  install,
  Text
}