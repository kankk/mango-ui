import Vue from 'vue';
import VueRouter from 'vue-router';
import Demo from './Demo';
import Api from './Api';

import DemoList from './components/demo-list/index.js';

import './assets/styles/reset.scss';

import MangoUI from 'main/index.js';

// local-test
// import MangoUI from '../lib/mango-ui.common.js';

import NavConfig from './nav.demo';
Vue.use(MangoUI);
Vue.use(VueRouter);

Vue.use(DemoList);

// 屏幕宽度
const SCREEN_WIDTH = window.screen.width;
const DEMO_OR_API_WIDTH = 720;

let routes = [];
let targetRootVue = null;

if (SCREEN_WIDTH > DEMO_OR_API_WIDTH) { // web-api
  routes.unshift({
    name: 'home',
    path: '/',
    component: resolve => require.ensure([], () => resolve(require('./pages_api/home.vue')), 'home'),
    redirect: '/button',
    children: NavConfig.reduce((arr, cur) => arr.concat(cur.items), []).map(nav => {
      return {
        name: nav.name,
        path: `/${nav.name}`,
        component: resolve => require.ensure([], () => resolve(require(`./docs/${nav.name}.md`)))
      };
    })
  });

  targetRootVue = Api;
} else { // demos
  // 路由配置
  routes = NavConfig.reduce((arr, cur) => arr.concat(cur.items), []).map(nav => {
    return {
      name: nav.name,
      path: `/${nav.name}`,
      component: resolve => require.ensure([], () => resolve(require(`./pages_demo/${nav.name}.vue`)))
    };
  });
  routes.unshift({
    name: 'home',
    path: '/',
    component: resolve => require.ensure([], () => resolve(require('./pages_demo/home.vue')), 'home')
  });

  targetRootVue = Demo;
}

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({  // eslint-disable-line
  el: '#app',
  router,
  render: h => h(targetRootVue)
});
