# 实现new

```js{4}
function myNew(fn, ...args) {
  let obj = {}
  // 方法1 直接改变指向
  obj.__proto__ = fn.prototype
  // 方法2 Object.create
  obj = Object.create(fn.prototype)
  const result = fn.call(obj, ...args)
  if ((reslut && typeof result === 'object') || typeof result === 'function') {
    return result
  }
  return obj
}
```
