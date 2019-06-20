import Button from './src/main';

// eslint-disable-line
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
