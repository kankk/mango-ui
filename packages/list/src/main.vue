<template>
  <div class="m-list">
    <div v-if="header" class="m-list-header">{{ header }}</div>
    <div class="m-list-items">
      <slot></slot>
    </div>
    <div v-if="footer" class="m-list-footer">{{ footer }}</div>
  </div>
</template>

<script>
export default {
  name: 'MList',
  props: {
    header: String,
    footer: String
  }
};
</script>

<style lang="scss" scoped>
@import 'packages/assets/styles/color.scss';
@import 'packages/assets/styles/border.scss';
$list-padding-left: 15px;
$list-hf-fontsize: 14px;
$list-hf-color: #888;
$list-hf-padding-top: 15px;
$list-hf-padding-bottom: 9px;
.m-list {
  width: 100%;
  box-sizing: border-box;
  .m-list-header {
    font-size: $list-hf-fontsize;
    color: $list-hf-color;
    padding: $list-hf-padding-top $list-padding-left $list-hf-padding-bottom $list-padding-left;
  }

  .m-list-items {
    width: 100%;
    box-sizing: border-box;
    @include border-top($color: $border-color);
    @include border-bottom($color: $border-color);
    background-color: #fff;
  }

  .m-list-footer {
    font-size: $list-hf-fontsize;
    color: $list-hf-color;
    padding: $list-hf-padding-bottom $list-padding-left $list-hf-padding-top $list-padding-left;
  }
}
</style>

<style lang="scss">
@import 'packages/assets/styles/base.scss';
</style>
