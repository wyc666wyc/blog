# 手写call apply bind
## call ✔️
```js{4}
Function.prototype.myCall = function(context, ...args) {
  if (!context) {
    context = window
  }
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

```
## apply ✔️
```js{4}
Function.prototype.myApply = function(context, args) {
  if (!context) {
    context = window
  }
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
```
## bind
```js{4}
Function.prototype.myBind = function(context, ...args) {
  if (!context) {
    context = window
  }
  const fn = Symbol()
  context[fn] = this
  const _this = this
  const result = function(...innerArgs) {
    if (_this instanceof this) {
      
    }
  }
}
```