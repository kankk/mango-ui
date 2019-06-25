import Switch from './src/main';

// eslint-disable-line
Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;
