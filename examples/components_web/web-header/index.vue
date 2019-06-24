<template>
  <div class="header-wrap">
    <div class="header-left">
      <img class="logo" src="../../assets/images/logo.png" alt="">
      <div class="name">Mango-UI</div>
    </div>
    <div class="header-right">

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(51,51,52,0.1);
  box-shadow:0px 1px 4px 0px rgba(51,51,52,0.08);
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  .header-left {
    display: flex;
    align-items: center;
    .logo {
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
    .name {
      font-size: 18x;
      color: #333;
    }
  }
}
</style>
