# 响应式原理
## vue2
## vue3
```js{4}
const bucket = new WeakMap()
let activeEffect
function effect(fn) {
  activeEffect = fn
  fn()
}
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, val) {
      target[key] = val
      trigger(target, key)
    }
  })
}
function track(target, key) {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, depsMap = new Map())
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, deps = new Set())
  }
  deps.add(activeEffect)
}
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = despMap.get(key)
  deps && deps.forEach(fn => fn && fn())
}
```
## 相同点
## 优势