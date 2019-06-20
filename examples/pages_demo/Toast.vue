<template>
  <div class="demo-page_toast wrap">
    <div class="main-title">轻提示 Toast</div>
    <div class="content">
      <div class="sub-title">默认</div>
      <div class="toast-default">
        <m-button inline @click="handleDefaultToast">默认Toast</m-button>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">持续时间</div>
      <div class="duration">
        <m-button inline @click="handleDefaultToast">默认3秒</m-button>
        <m-button inline @click="handleDurationToast(1)">设置1秒</m-button>
        <m-button inline @click="handleDurationToast(5)">设置5秒</m-button>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">透明蒙层</div>
      <div class="mask">
        <m-button inline @click="handleMaskToast(false)">无透明蒙层</m-button>
        <m-button inline @click="handleMaskToast(true)">有透明蒙层</m-button>
      </div>
    </div>
    <div class="content">
      <div class="sub-title">持续时间</div>
      <div class="callback">
        <m-button inline @click="handleCloseCbToast">{{ closeCbMessage }}</m-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageToast',
  data () {
    return {
      closeCbMessage: 'onClose关闭回调'
    };
  },
  methods: {
    handleDefaultToast () {
      this.$toast('默认');
    },
    handleDurationToast (timeout) {
      this.$toast({
        content: `持续${timeout}秒`,
        duration: timeout
      });
    },
    handleCloseCbToast () {
      this.closeCbMessage = 'onClose关闭回调';
      this.$toast({
        content: '关闭回调',
        onClose: () => {
          this.closeCbMessage = 'Toast已关闭';
        }
      });
    },
    handleMaskToast (withMask) {
      this.$toast({
        content: `${withMask ? '有' : '无'}透明蒙层`,
        mask: withMask
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-page_toast {
  .toast-default > * {
    margin: 4px;
  }
  .duration > * {
    margin: 4px;
  }
  .callback > * {
    margin: 4px;
  }
  .mask > * {
    margin: 4px;
  }
}
</style>
