# 1px线/边框
解决方案: `transform: scale`
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
```