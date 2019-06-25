# Switch 开关

## 基本用法

```html
<m-switch v-model="value"/>
```

### 禁用

通过`disabled`属性定义按钮禁用

```html
<m-switch v-model="value" disabled/>
```

### 自定义开关颜色

通过`color`属性自定义开关打开时的颜色, 格式为十六进制`#xxxxxx`

```html
<m-switch v-model="value" color="#f8b50a"/>
```

## API

### 属性
| 参数  | 说明  | 类型  | 可选值  | 默认值  |
|-----|-----|-----|-----|-----|
|value/v-model|绑定值|boolean|-|-|
|disabled|是否禁用|boolean|-|`false`|
|color|switch打开时的颜色|string|`#xxxxxx`|`#52c41a`|
|name|对应的name属性|string|-|-|

### 事件

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch值变化时的回到函数    | 新值 |