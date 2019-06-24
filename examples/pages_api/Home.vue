<template>
  <div id="home">
    <web-layout>
      <template v-slot:header>
        <web-header></web-header>
      </template>
      <template v-slot:sidebar>
        <side-bar :navs="navList"></side-bar>
      </template>
      <template>
        <slot>
          <router-view></router-view>
        </slot>
      </template>
    </web-layout>
  </div>
</template>

<script>
import WebLayout from '../components_web/web-layout/index';
import WebHeader from '../components_web/web-header/index.vue';
import SideBar from '../components_web/side-bar/index.vue';
import NavConfig from '../nav.demo';
import 'highlight.js/styles/atom-one-dark.css';
export default {
  name: 'ApiHome',
  data () {
    return {
      navList: NavConfig
    };
  },
  methods: {

  },
  components: {
    WebLayout,
    WebHeader,
    SideBar
  }
};
</script>

<style lang="scss">
@import './doc.scss';
</style>
