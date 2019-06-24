# 实现的api
`option`
* option.content: 提示内容
* option.duration: 自动关闭的延迟, 秒/单位
* option.onClose: 关闭后回调
* option.mask: 是否显示透明蒙层, 防止触摸穿透
`method`
* close(): 关闭Toast

# 功能
* Toast出现和消失的动画

```css
.m-toast-enter-active, .m-toast-leave-active {
  transition: opacity .1s ;
}
.m-toast-enter, .m-toast-leave-to {
  opacity: 0;
}
```

* `v-enter-active`: 定义进入过渡生效时的状态
* `v-leave-active`: 定义离开过渡生效时的状态
* `v-enter`: 定义进入过渡的开始状态
* `v-leave-to`: 定义离开的结束状态