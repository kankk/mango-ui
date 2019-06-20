<template>
  <div id="home">
    <div class="nav-title">
      组件导航栏
    </div>
    <div class="nav-list">
      <div
        v-for="nav in navList"
        :key="nav.name"
        class="nav-item"
        @click="handleNavTo(nav)"
      >
        <div class="nav-item-content">
          <div class="nav-item-content-label">
            {{ nav.label }}
          </div>
          <img
            class="nav-item-content-arrow"
            src="../assets/images/list-item-arrow.svg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavConfig from '../nav.demo';
export default {
  name: 'PageHome',
  data () {
    return {
      navList: NavConfig
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
  .nav-title {
    padding: 12px 15px;
    color: rgba(0, 0, 0, 0.45);
  }
  .nav-list {
    @include border-top($color: rgba(0, 0, 0, 0.15));
    @include border-bottom($color: rgba(0, 0, 0, 0.15));
    background-color: rgba(255, 255, 255, 1);
    .nav-item {
      min-height: 44px;
      padding-left: 15px;
      .nav-item-content {
        min-height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;
        .nav-item-content-label {
          font-size: 17px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.85);
        }
        .nav-item-content-arrow {
          width: 30px;
          height: 30px;
        }
      }

      &:not(:last-child) {
        .nav-item-content {
          @include border-bottom($color: rgba(0, 0, 0, 0.15));
        }
      }
    }
  }
}
</style>
