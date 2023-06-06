# 实现 QueryData

## 提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组，query 方法内部有 过滤、排序、分组 等操作，并且支持链式调用，调用最终的 execute 方法返回结果

```js{4}
//exg:
const result = query(list)
  .where(item => item.age > 18)
  .sortBy('id')
  .groupBy('name')
  .execute();
```

```js{4}
function query(list) {
  this.newList = [...list]
  this.filter = callback => {
    this.newList = this.newList.filter(callback)
    return this
  }
  this.sortBy = field => {
    this.newList = this.newList.sort((x, y) => {
      return x[field] - y[field]
    })
    return this
  }
  this.groupBy = function(field) {

  }
  this.execute = () => this.newList
  return this
}
```