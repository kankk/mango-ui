<template>
  <div class="demo-page_button wrap">
    <div class="main-title">按钮 Button</div>
    <div class="content">
      <div class="sub-title">尺寸</div>
      <div class="size">
        <m-button size="large" inline>large</m-button>
        <m-button inline>normal</m-button>
        <m-button size="small" inline>small</m-button>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">行内/块状</div>
      <div class="is-inline">
        <m-button inline>inline</m-button>
        <m-button>block</m-button>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">类型</div>
      <div class="type">
        <m-button inline>default</m-button>
        <m-button inline type="primary">primary</m-button>
        <m-button inline type="error">error</m-button>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">禁用</div>
      <div class="is-disabled">
        <div>
          <m-button inline>default</m-button>
          <m-button inline disabled>default-disabled</m-button>
        </div>
        <div>
          <m-button inline type="primary">default</m-button>
          <m-button inline disabled type="primary">default-disabled</m-button>
        </div>
        <div>
          <m-button inline type="error">default</m-button>
          <m-button inline disabled type="error">default-disabled</m-button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">点击事件</div>
      <div class="event-click">
        <m-button @click="handleClickEvent">Click! {{ clickEventCount }}</m-button>
        <m-button @click="handleClickEvent" disabled>Don't Click! {{ clickEventCount }}</m-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageButon',
  data () {
    return {
      clickEventCount: 0
    };
  },
  methods: {
    handleClickEvent () {
      this.clickEventCount++;
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-page_button {
  .size > * {
    margin: 4px;
  }
  .is-inline > * {
    margin: 4px;
  }
  .type > * {
    margin: 4px;
  }
  .is-disabled > div > * {
    margin: 4px;
  }
  .event-click > * {
    margin: 4px;
  }
}
</style>
