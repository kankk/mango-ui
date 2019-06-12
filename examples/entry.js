import Vue from 'vue';
import App from './App';

import MangoUI from 'main/index.js';

// local-test
// import MangoUI from '../lib/mango-ui.common.js';

Vue.use(MangoUI);

new Vue({
  el: '#app',
  render: h => h(App)
})