# vue3 如何实现 ref 和 reactive

## ref

```ts{4}
function toRaw(value) {
  const raw = value && value.__v_raw
  return raw ? toRaw(raw) : value
}
function toReactive(value) {
  return isObject(value) ? reactive(value) : value
}
class RefImpl {
  constructor(value, isShallow) {
    this._rawValue = isShallow ? value : toRaw(value)
    this._value = isShallow ? value : toReactive(value)
  }
  private _value // 操作值
  private _rawValue // 原始值
  get value() {
    trackRefValue(this) // 收集依赖
    return this._value
  }
  set value(newVal) {
    if (hasChanged(newVal, _rawValue)) { // 对比更新值是否等于原始值，不是则更新_value ,并进行派发更新
      const useDirectValue = this.isShallow || isShallow(this._value) || isReadonly(this._value)
      this._rawValue = newVal
      this._value = useDirectValue ? newVal : toReactive(newVal)
      triggerRefValue(this, newVal)
    }
  }
}
```
