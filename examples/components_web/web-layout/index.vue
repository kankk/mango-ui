<template>
  <div class="web-layout">
    <header class="web-header">
      <slot name="header"></slot>
    </header>
    <div class="web-wrap">
      <div class="web-sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="web-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
$header-height: 60px;
$sidebar-width: 250px;
.web-layout {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow-x: hidden;
  .web-header {
    width: 100vw;
    height: $header-height;
    flex-basis: $header-height;
  }
  .web-wrap {
    width: 100vw;
    flex: 1;
    display: flex;
    align-items: stretch;
    .web-sidebar {
      width: $sidebar-width;
      flex-basis: $sidebar-width;
      overflow-y: auto;
      max-height: calc(100vh - 60px);
    }
    .web-content {
      flex: 1;
      box-sizing: border-box;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.03);
      overflow-y: auto;
      max-height: calc(100vh - 60px);
      & > * {
        width: 100%;
        min-height: 100%;
      }
    }
  }
}
</style>
