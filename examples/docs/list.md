# List 列表

## 基本用法

```html
<m-list>
  <m-list-item>Item 1</m-list-item>
  <m-list-item>Item 2</m-list-item>
  <m-list-item>Item 3</m-list-item>
</m-list>
```

### 头部和尾部
`List`的`header`和`footer`属性可以分别设置头部和尾部内容

```html
<m-list header="Header" footer="Footer">
  <m-list-item>Item 1</m-list-item>
  <m-list-item>Item 2</m-list-item>
  <m-list-item>Item 3</m-list-item>
</m-list>
```

### 箭头方向
`ListItem`支持`up`、`down`、`horizontal`三种方向和`empty`不显示箭头，默认为`horizontal`

```html
<m-list>
  <m-list-item>Default - Horizontal</m-list-item>
  <m-list-item arrow="up">Up</m-list-item>
  <m-list-item arrow="down">Down</m-list-item>
  <m-list-item arrow="empty">Empty</m-list-item>
</m-list>
```

### 右边内容
`ListItem`支持`extra`属性设置右边内容，设置了该值，`arrow`属性不生效

```html
<m-list>
  <m-list-item extra="Right">Left</m-list-item>
</m-list>
```

## API

### List属性

| 参数  | 说明  | 类型  | 默认值  |
|-----|-----|-----|-----|-----|
|header|列表头部信息|string|-|
|footer|列表尾部信息|string|-|

### List.Item属性

| 参数  | 说明  | 类型  | 默认值  |
|-----|-----|-----|-----|-----|
|arrow|右侧箭头方向(上`up`，下`down`，右`horizontal`, 空`empty`)|string|`horizontal`|
|extra|右边内容，设置了该值，arrow属性不生效|string|-|

### List.Item事件

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | 无 |