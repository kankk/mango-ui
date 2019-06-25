import Button from 'packages/button/index.js';
import Switch from 'packages/switch/index.js';
import Toast from 'packages/Toast/index.js';

// 所有组件
const components = [
  Button,
  Switch
];

const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$toast = Toast;
};

export default {
  install,
  Button,
  Toast
};
