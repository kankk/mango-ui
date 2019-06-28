<template>
  <div class="demo-page_list wrap">
    <div class="main-title">列表 List</div>
    <div class="content">
      <div class="sub-title">默认</div>
      <div class="list-default">
        <m-list header="Header" footer="Footer">
          <m-list-item>Item 1</m-list-item>
          <m-list-item>Item 2</m-list-item>
          <m-list-item>Item 3</m-list-item>
        </m-list>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">箭头方向</div>
      <div class="list-arrow">
        <m-list>
          <m-list-item>Default - Horizontal</m-list-item>
          <m-list-item arrow="up">Up</m-list-item>
          <m-list-item arrow="down">Down</m-list-item>
          <m-list-item arrow="empty">Empty</m-list-item>
        </m-list>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">右边内容</div>
      <div class="list-extra">
        <m-list>
          <m-list-item extra="Right">Left</m-list-item>
        </m-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageList'
};
</script>

<style lang="scss" scoped>
.demo-page_list {
  padding: 0 0 8px 0;
  .main-title {
    padding: 8px 12px 0px 12px;
  }
  .sub-title {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
