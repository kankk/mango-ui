<template>
  <div class="m-list-item" @touchstart="" @click="$emit('click')">
    <div class="m-list-item__content">
      <div class="m-list-item__left">
        <slot></slot>
      </div>
      <div v-if="extra" class="m-list-item__right_extra">{{ extra }}</div>
      <div v-else class="m-list-item__right__arrow" :class="[arrow]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MListItem',
  props: {
    arrow: {
      type: String,
      default: 'horizontal',
      required: false,
      validator (value) {
        return ['up', 'down', 'horizontal', 'empty'].indexOf(value) !== -1;
      }
    },
    extra: {
      type: String,
      default: '',
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'packages/assets/styles/color.scss';
@import 'packages/assets/styles/border.scss';
$list-padding-left: 15px;
.m-list-item {
  box-sizing: border-box;
  padding-left: $list-padding-left;
  &:not(:last-child) {
    .m-list-item__content {
      @include border-bottom($color: $border-color);
    }
  }
  &:active {
    background-color: #eee;
  }
  .m-list-item__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 12px;
    .m-list-item__left {
      font-size: 17px;
      line-height: 1.5;
    }
    .m-list-item__right_extra {
      font-size: 15px;
      line-height: 1.5;
      color: #999;
    }
    .m-list-item__right__arrow {
      width: 15px;
      height: 15px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url('./list-item-arrow.svg');
      &.down {
        transform: rotate(180deg)
      }
      &.horizontal {
        transform: rotate(90deg)
      }
      &.up {
        transform: rotate(0deg)
      }
      &.empty {
        background: none;
      }
    }
  }
}
</style>

<style lang="scss">
@import 'packages/assets/styles/base.scss';
</style>
