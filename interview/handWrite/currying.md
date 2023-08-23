# currying 函数柯里化

```js{4}
const currrying = (fn, ...args) => {
  const fnParamsLen = fn.length
  let allArgs = [...args]
  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs]
    if (allArgs.length === fnParamsLen) {
      return fn(...allArgs)
    } else {
      return res
    }
  }
  return res
}
```