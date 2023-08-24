# ES5中实现继承

## 原型链继承
```js{4}
function Animal() {
  this.name = 'a'
  this.colors = ['green']
}
function Dog() {}
Dog.prototype = new Animal()

let dog1 = new Dog()
dog1.name = 'b'
dog1.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors, dog1.name, dog2.name)
```
*缺点 1：原型上所有引用类型会被共享 2：子类在实例化时不能给父类构造函数传参*

## 借用构造函数继承
```js{4}
functon Parent() {

}
function Children(...args) {
  Parent.call(this, ...args)
}
Children.prototype = new Parent()
```
*缺点 每次实例化，方法都会重新生成*

## 组合继承
```js{4}
function Parent(color) {
  this.color = color
}
Parent.prototype.getColor = function() {
  return this.color
}
function Children(...args) {
  Parent.call(this, ...args)
}
Children.prototype = new Parent()
Children.prototype.constructor = Children
```
*缺点 调用了两次父类的构造函数*
## 寄生式组合继承
解决了组合式继承两次调用父类构造函数的问题
原理：通过创建一个空函数获取父类原型的副本
```js{4}
function F() {}
F.prototype = Parent.prototype
const f = new F()
f.constructor = Children
Children.prototype = f

//进一步封装
function inherit(child, parent) {
  function object(o) {
    function F() {}
    F.prototype = o
    return new F()
  }
  const prototype = object(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}
```