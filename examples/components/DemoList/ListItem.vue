<template>
  <div class="demo-list-item" @click="$emit('click')" @touchstart="">
    <div class="item-title-wrap">
      <div class="item-title">
        <slot></slot>
      </div>
      <img class="item-title-arrow" src="../../assets/images/list-item-arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoListItem'
  // props: {
  // title: {
  //   type: String,
  //   required: true
  // }
  // }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/border.scss';
.demo-list-item {
  padding-left: 20px;
  .item-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px 12px 2px;
  }
  &:active {
    background-color: #eee;
  }
  .item-title {
    font-size: 14px;
    color: #666666;
  }
  .item-title-arrow {
    width: 14px;
    height: 14px;
    transform: rotate(90deg);
  }
  &:not(:last-child) {
    .item-title-wrap {
      @include border-bottom($color: rgba(0, 0, 0, 0.15));
    }
  }
}
</style>
