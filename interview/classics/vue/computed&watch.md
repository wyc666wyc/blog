# computed 实现原理

1.effect 函数支持
effect 函数内部会声明一个函数 effectFn，该函数把当前 activeEffect 变为传入的 fn，
并把 activeEffect 推入副作用函数栈 effectStacks 中，执行 fn，并把 fn 执行结果用 res 变量保存
执行完后，弹出 effectStacks 最顶层元素，并把 actievEffect 指向更新后的 effectStacks 最顶层
最后返回 res

effect 函数的 options 参数中加入 lazy，
如果 lazy 的值为 true, 表示副作用函数不立即执行，
最后，effect 函数返回 effectFn，交出 effectFn 控制权

声明一个名为 computed 的函数，接收一个 getter 函数
函数内部： 1.声明一个 value 变量，用来缓存计算结果 2.声明一个 dirty 变量，表示是否需要重新获取值，true 为脏，表示需要重新计算值 3.声明一个 effectFn 变量，接收 effect 的函数调用，将 getter 函数和 { lazy: true, scheduler() { dirty = true } }的配置项传入函数
这里在 options 上声明一个 scheduler 属性的目的，当需要重新计算时，将标识置为 true，表示需要重新计算 4.声明一个 obj 对象，对象上有一个 value 属性，value 的 get 属性，当 dirty 为 true 时，调用 effectFn，并把结果赋值给 value，dirty 变量变为 false

```js{4}
const computed = (fn) => {
  let value
  let dirty
  const effectFn = effect(fn, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        dirty = true
        trigger(obj, 'value')
      }
    }
  })
  const obj = {
    get value() {
      if (dirty) {
        value = effectFn()
        dirty = false
      }
      track(obj, 'value')
      return value
    }
  }
  return obj
}
```

# watch 原理
```js{4}
const watch = (source, cb, options) => {
  let getter
  if (typeof source === 'functuon') {
    getter = source
  } else {
    getter = () => traverse(source)
  }
  let newValue, oldValue, cleanup
  function onValidate(fn) {
    cleanup = fn
  }
  const job = () => {
    if (cleanup) {
      cleanup()
    }
    newValue = effectFn()
    cb(newValue, oldValue, onValidate)
    oldValue = newValue
  }
  const effectFn = effect(() => getter, {
    lazy: true,
    scheduler() {
      if (options?.flush === 'post') {
        const p = Promise.resolve()
        p.then(res => {
          job()
        })
      } else {
        job()
      }
    }
  })
  if (options?.immediate === true) {
    job()
  } else {
    oldValue = effectFn()
  }

}
```