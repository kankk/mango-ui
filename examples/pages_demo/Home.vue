<template>
  <div id="home">
    <div class="information">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div class="name">Mango-UI</div>
      <div class="title">🍻一个基于Vue的移动端UI组件库</div>
    </div>
    <div class="demos">
      <demo-list
        v-for="category in navList"
        :title="category.label"
        :key="category.name">
        <demo-list-item
          v-for="item in category.items"
          :key="item.name"
          @click="handleNavTo(item)">
          {{ item.label }}
        </demo-list-item>
      </demo-list>
    </div>
  </div>
</template>

<script>
import NavConfig from '../nav.demo';
export default {
  name: 'PageHome',
  data () {
    return {
      // 过滤掉没有 items 的项
      navList: NavConfig.filter(_item => _item.items)
    };
  },
  methods: {
    handleNavTo (nav) {
      this.$router.push({
        name: nav.name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/border.scss';
#home {
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;
    .logo {
      width: 64px;
      height: 64px;
    }
    .name {
      margin-top: 12px;
      font-size: 15px;
      color: #333;
    }
    .title {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
  .demos {
    overflow: hidden;
    padding: 0 16px 12px;
    box-sizing: border-box;
  }
}
</style>
