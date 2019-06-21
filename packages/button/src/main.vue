<template>
  <!-- ios系统需要定义touchstart才会触发伪元素active -->
  <a
    class="m-button"
    :class="[
      'm-button__' + size,
      'm-button__' + type, {
        'm-button__inline': inline,
        'm-button__disabled': disabled
      }]"
    @click="handleClick"
    @touchstart=""
  >
    <!-- <span class="m-button-text"> -->
      <slot />
    <!-- </span> -->
  </a>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    size: {
      type: String,
      default: 'normal',
      required: false,
      validator (value) {
        return ['large', 'normal', 'small'].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: 'default',
      required: false,
      validator (value) {
        return ['default', 'primary', 'error'].indexOf(value) !== -1;
      }
    },
    inline: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'packages/assets/styles/size.scss';
@import 'packages/assets/styles/border.scss';
@import 'packages/assets/styles/color.scss';
.m-button {
  display: block;
  padding: 0px 15px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 400;
  font-family: system-ui;
  &:not(.m-button__disabled):active {
    &.m-button__default {
      background-color: #ddd;
    }

    &.m-button__primary, &.m-button__error {
      opacity: 0.75;
    }
  }
  // inline / block
  &.m-button__inline {
    display: inline-block;
  }

  &.m-button__default {
    // @include border($color: $border-color, $border-radius: 4px);
    border: 1px solid $border-color;
    color: $font-color-black;
  }

  &.m-button__primary {
    // @include border($color: $color-primary, $border-radius: 10px);
    border: 1px solid $border-color;
    background-color: $color-primary;
    color: $font-color-white;
  }

  &.m-button__error {
    // @include border($color: $color-error, $border-radius: 10px);
    border: 1px solid $border-color;
    background-color: $color-error;
    color: $font-color-white;
  }

  // size
  &.m-button__large {
    height: $large;
    line-height: $large;
    font-size: $fontsize_large;
  }
  &.m-button__normal {
    height: $normal;
    line-height: $normal;
    font-size: $fontsize_normal;
  }
  &.m-button__small {
    height: $small;
    line-height: $small;
    font-size: $fontsize_small;
  }

  // diabled
  &.m-button__disabled {
    opacity: 0.35;
  }
}
</style>

<style lang="scss">
@import 'packages/assets/styles/base.scss';
</style>
