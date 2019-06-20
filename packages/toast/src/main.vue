<template>
  <transition name="m-toast" @after-leave="handleAfterLeave">
    <div class="m-toast-wrap" :class="{
      'm-toast__mask': mask,
      'm-toast__nomask': !mask
    }" v-show="visible">
      <div class="m-toast">
        <span class="m-toast-content">{{ content }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MToast',
  data () {
    return {
      visible: false,
      content: '',
      duration: 3,
      onClose: null,
      mask: true
    };
  },
  methods: {
    handleAfterLeave () {
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close () {
      this.handleAfterLeave();
    }
  },
  mounted () {
    setTimeout(() => {
      this.visible = false;
    }, this.duration * 1000);
  }
};
</script>

<style lang="scss" scoped>
$toast-content-color: #fff;
$toast-content-bg: rgba(58, 58, 58, 0.9);
$toast-content-padding: 9px 15px;
$toast-content-radius: 4px;
.m-toast-wrap {
  font-family: system-ui;
  &.m-toast__mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.m-toast__nomask {
    position: fixed;
    width: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .m-toast {
    box-sizing: border-box;
    max-width: 80vw;
    padding: $toast-content-padding;
    background-color: $toast-content-bg;
    border-radius: $toast-content-radius;
    .m-toast-content {
      color: $toast-content-color;
    }
  }
}

// 轻提示冬瓜
.m-toast-enter-active, .m-toast-leave-active {
  transition: opacity .1s ;
}
.m-toast-enter, .m-toast-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
@import 'packages/assets/styles/base.scss';
</style>

