# Button 按钮

## 基本用法
```html
<m-button>Button</m-button>
```

### 尺寸

支持`large`、`normal`、`small`三种尺寸，默认为`normal`

```html
<m-button size="large" inline>large</m-button>
<m-button inline>normal</m-button>
<m-button size="small" inline>small</m-button>
```

### 类型

支持`default`、`primary`、`error`三种类型，默认为`default`

```html
<m-button>default</m-button>
<m-button type="primary">primary</m-button>
<m-button type="error">error</m-button>
```

### 行内/块状

支持行内块级按钮(`inline`)和块级按钮(`block`)，默认为块级按钮(`block`), 通过`inline`属性定义行内块级按钮

```html
<m-button inline>inline</m-button>
<m-button>block</m-button>
```

### 禁用

通过`disabled`属性定义按钮禁用

```html
<m-button disabled>disabled</m-button>
```

## API

### 属性
| 参数  | 说明  | 类型  | 可选值  | 默认值  |
|-----|-----|-----|-----|-----|
|size|按钮尺寸|string|`large` `normal` `small`|`normal`|
|type|按钮类型|string|`default` `primary` `error`|`default`|
|inline|是否行内块级按钮|boolean|-|`false`|
|disabled|是否禁用|string|-|`false`|

### 事件

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | 无 |