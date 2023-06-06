# call apply bind

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
    // 如果把bind返回的函数当做构造函数（new result()）使用
    // 那么目标函数继承自绑定函数
    if (this instanceof _this) {
      this[fn] = _this
      this[fn]([...args, ...innerArgs])
    } else {
      context[fn]([...args, ...innerArgs])
    }
  }
  result.property = Object.create(this.prototype)
  return result
}
```
