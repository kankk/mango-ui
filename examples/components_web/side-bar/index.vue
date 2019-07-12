<template>
  <div class="sidebar-nav">
    <div
      class="sidebar-category"
      v-for="nav in navs">
      <div
        class="sibebar-category-title"
        :class="{
          'clickable': !nav.items,
          'active': currentRouteName === nav.name
        }"
        @click="handleNavTo(nav)">
        {{ nav.label }}
      </div>
      <div class="sibebar-category-items">
        <div
          class="sibebar-category-subtitle"
          :class="{ 'active': currentRouteName === item.name }"
          v-for="item in nav.items"
          @click="handleNavTo(item)">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      currentRouteName: ''
    };
  },
  props: {
    navs: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    handleNavTo (nav) {
      // 有子项的导航栏不能跳转
      if (nav.items) return;
      this.$router.push({
        name: nav.name
      });
    }
  },
  created () {
    this.currentRouteName = this.$route.name || 'button';
    this.$router.afterEach((to) => {
      this.currentRouteName = to.name;
    });
  }
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  border-right: 1px solid #eee;
  padding: 20px 0px;
  .sidebar-category {
    .sibebar-category-title {
      color: #333;
      font-size: 16px;
      padding: 12px 20px;
      &.clickable {
        &:hover, &.active {
          color: #f8b50a;
          background-color: rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }
      }
    }
    .sibebar-category-items {
      .sibebar-category-subtitle {
        padding: 10px 20px 10px 40px;
        font-size: 14px;
        color: #666;
        &:hover, &.active {
          color: #f8b50a;
          background-color: rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
