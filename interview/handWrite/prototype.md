# 原型

## prototype & __proto__
一个对象的__proto__ 指向它构造函数的prototype,
因此也可以说成：一个对象的__proto__属性指向了它的创造者
```js{4}
function F = () {}
const f = new F()
f.__proto__ === F.prototype
```
## 对象

1. Object 本身是一个函数 是所有对象的构造函数
对于通过字面量({})或者new Object()方法创建的对象，它们的原型指向Object.property，
假设这个对象声明为 obj , 即 obj.__proto__ = Object.prototype


```js{4}
// exg:
const obj1 = {
  a: 1,
  b: 2
}
const obj2 = new Object({ c: 3, d: 4 })
const obj3 = Object.create({ e: 5, f: 6 })
obj1.__proto__ === obj2.__proto__  === Object.prototype // ✔️
obj3.__proto__ === Object.prototype // ❌

```

2. 因为 Object 是一个函数， 所以它是由 Funtion 创建的，因此 
```js{4}
Object.__proto__ === Funtion.prototype
```