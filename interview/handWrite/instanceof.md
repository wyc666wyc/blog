# 实现instanceof

```js{4}
function instanceof(left, right) {
  while(true) {
    if (left === null) {
      return false
    }
    if (left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__
  }
}
```