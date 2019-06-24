# Toast 轻提示

## 基本用法

```html
<template>
  <div class="demo-page_toast">
    <m-button @click="handleDefaultToast">默认Toast</m-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleDefaultToast () {
      const option = {
        content: '默认Toast',
        duration: 3,
        onClose: null,
        mask: true,
      };
      this.$toast(option);
    },
  }
};
</script>
```

## API
### 属性(option)
| 参数  | 说明  | 类型  | 默认值  |
|-----|-----|-----|-----|-----|
|content|提示内容|string|-|
|duration|提示持续时间|number|`3`(单位/秒)|
|mask|是否有透明蒙层|boolean|`true`|

### 事件(option)
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onClose  | 关闭后调用的回调函数    | 无 |