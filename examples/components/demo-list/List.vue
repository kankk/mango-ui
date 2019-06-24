<template>
  <div class="demo-list">
    <div class="title-wrap" :class="{ 'hide': !isItemsVisible, 'show': isItemsVisible }" @click="isItemsVisible = !isItemsVisible">
      <div class="title">{{ title }}</div>
      <img class="title-arrow" src="../../assets/images/list-item-arrow.svg" alt="">
    </div>
    <div class="demo-list-items" v-show="isItemsVisible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoList',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isItemsVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
.demo-list {
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 2px;
  box-shadow:0px 4px 8px 0px rgba(51,51,52,0.08);
  margin-bottom: 12px;
  .title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px 12px 18px;
    .title {
      font-size: 16px;
      transition: color 0.2s linear;
    }
    .title-arrow {
      width: 16px;
      height: 16px;
      transition: transform 0.2s linear;
    }

    &.hide {
      .title {
        color: #999;
      }
      .title-arrow {
        transform: rotate(180deg);
      }
    }
    &.show {
      .title {
        color: #333;
      }
      .title-arrow {
        transform: rotate(0deg);
      }
    }
  }
}
</style>
