# Object 相关api

## Object.assign(target, ...source) 合并对象

::: tip
将一个或多个源对象中的 可枚举 的 自有属性 复制到目标对象中， 并返回修改后的目标属性
:::
::: warning
在源对象上调用 Get 目标对象上调用 Set, 因此 源对象上包含的getter的新属性(目标对象上不存在对应属性的setter)不会赋值给目标对象
:::

## Object.create(proto, propertiesObject?) 以一个现有的对象为原型，创建一个新对象

## Object.defineProperty()

## Object.defineProperties()

## Object.freeze()
```js{4}

```