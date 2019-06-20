import Vue from 'vue';
import Main from './main.vue';

let ToastConstructor = Vue.extend(Main);

let instance;
let seed = 1;

const defaultOptions = {
  content: '',
  duration: 3,
  onClose: null,
  mask: true,
  zIndex: 2000
};

const Toast = function (options) {
  options = options || {};
  if (typeof options === 'string') {
    options = Object.assign(defaultOptions, {
      content: options
    });
  }

  let id = `m-toast-${seed++}`;

  // 确保只有一个Toast显示
  if (instance && instance.visible) {
    instance.close();
  }

  instance = new ToastConstructor({
    data: options
  });

  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instance.$el.style.zIndex = options.zIndex;
  return instance;
};

export default Toast;
