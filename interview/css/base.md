# 基础 css

## BFF

## 滚动条样式

```css{4}
/* 滚动条基本样式， 高、宽 */
::-webkit-scrollbar {
  width: 10px;
  height: 20px;
}
::-webkit-scrollbar-track {
  background-color: blue;
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: green;
}
/* 滚动条悬停 */
::-webkit-scrollbar-thumb:hover {
  background-color: blue;
}
```

## aspect-ratio
### 保持横纵比 
```css{4}
.box {
  aspect-ratio: 1 / 1
}
```
设置之后元素会保持横纵比
设置宽度后，高度会自动设置， 反之亦然

## Box Reflect
### 在元素下方创建其反射效果
```css{4}
.box {
  /**反射将显示在下方。其他可能的值有 above（上方） | left（左侧） | right（右侧） */
  -webkit-box-reflect: below;
}
```

## @supports
### 用于检查css属性是否支持

```css{4}
@supports (display: flex) {
  /* 如果支持 */
  /* 在这里放置针对支持该属性的样式规则 */
}

@supports not (display: flex) {
  /* 如果不支持 */
  /* 在这里放置针对不支持该属性的备用样式规则 */
}
```