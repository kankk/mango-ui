<template>
  <div class="demo-page_switch wrap">
    <div class="main-title">开关 Switch</div>
    <div class="content">
      <div class="sub-title">默认</div>
      <div class="default-button">
        <span class="default-value">当前开关的值：{{ switchValue1 }}</span>
        <m-switch v-model="switchValue1" name="default-switch"/>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">禁用</div>
      <div class="disabled-button">
        <span class="disabled-value">当前开关的值：{{ switchValue2 }}</span>
        <m-switch v-model="switchValue2" disabled/>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">自定义颜色</div>
      <div class="color-button">
        <span class="color-value">当前开关的值：{{ switchValue3 }}</span>
        <m-switch v-model="switchValue3" color="#f8b50a"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSwitch',
  data () {
    return {
      switchValue1: false,
      switchValue2: true,
      switchValue3: true
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.demo-page_switch {
  .default-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .disabled-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .color-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
