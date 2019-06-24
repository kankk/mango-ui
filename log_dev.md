# Vue项目配置px2vw
1. npm i -S postcss-import postcss-url autoprefixer
2. npm i -S postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units
3. `postcssrc.js`
```JavaScript
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    },
    "postcss-viewport-units": {},
  }
}
```

# 移动端1px边框
`transform: scale`方案
```css
@mixin border($color: rgba(0, 0, 0, 1), $border-radius: 10px) {
  & {
    position: relative;
    overflow: hidden;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid $color;
    border-radius: $border-radius;
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    @media (-webkit-min-device-pixel-ratio: 1), (min-resolution: 1dppx) {
      transform: scale(1);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      transform: scale(0.5);
    }
    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
      transform: scale(0.33);
    }
  }
}

@mixin border-top($color: rgba(0, 0, 0, 1)) {
  & {
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: $color;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 1px;
    @media (-webkit-min-device-pixel-ratio: 1), (min-resolution: 1dppx) {
      transform: scaleY(1);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      transform: scaleY(0.5);
    }
    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
      transform: scaleY(0.33);
    }
  }
}

@mixin border-bottom($color: rgba(0, 0, 0, 1)) {
  & {
    position: relative;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: $color;
    display: block;
    z-index: 1;
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    @media (-webkit-min-device-pixel-ratio: 1), (min-resolution: 1dppx) {
      transform: scaleY(1);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      transform: scaleY(0.5);
    }
    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
      transform: scaleY(0.33);
    }
  }
}

@mixin border-left($color: rgba(0, 0, 0, 1)) {
  & {
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: $color;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 1px;
    height: 100%;
    transform: scaleY(1);
  }
}

@mixin border-right($color: rgba(0, 0, 0, 1)) {
  & {
    position: relative;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: $color;
    display: block;
    z-index: 1;
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
    width: 1px;
    height: 100%;
    transform: scaleY(1);
  }
}
```

# postcss-px-to-viewport
* `.postcssrc.js`配置`postcss-px-to-viewport`中的`exclude`属性定义忽略px2vw的文件/文件夹(reg值)

# markdown文件转页面
1. 定义`.md`文件的webpack-loader
2. 通过`markdown-it`把markdown内容转成html内容
3. 通过`highlightjs`把markdown内容的代码块格式化+css样式
4. 把html内容通过`v-html`标签嵌入到vue页面模板中
5. 通过`vue-loader`把模板编译成页面显示