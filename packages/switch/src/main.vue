<template>
  <div class="m-switch"
    :class="{ 'active': checked, 'inactive': !checked, 'disabled': disabled }">
    <input class="m-switch-input"
      :name="name"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="$emit('change', $event.target.checked)">
    <div class="m-switch-wrap" :style="activeStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'MSwitch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false,
      default: () => '#52c41a'
    },
    checked: Boolean,
    disabled: Boolean
  },
  computed: {
    activeStyle () {
      if (this.checked) {
        return {
          backgroundColor: this.color
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.m-switch {
  position: relative;
  width: 50px;
  height: 30px;
  &.disabled {
    opacity: 0.45;
  }
  .m-switch-input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .m-switch-wrap {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 28px;
      background-color: #fff;
      border-radius: 14px;
      transition: left 0.2s ease-out;
    }
  }
  &.active {
    .m-switch-wrap::after {
      content: '';
      top: 1px;
      left: 21px;
      bottom: 1px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.21);
    }
  }
  &.inactive {
    .m-switch-wrap {
      background-color: #fff;
      border: 1px solid #e5e5e5;
    }
    .m-switch-wrap::after {
      content: '';
      top: 1px;
      left: 0;
      bottom: 1px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.21);
    }
  }
}
</style>

<style lang="scss">
@import 'packages/assets/styles/base.scss';
</style>
