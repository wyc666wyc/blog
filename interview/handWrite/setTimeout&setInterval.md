# 使用setTimeout模拟setInterval

## 为什么要用setTimeout模拟setInterval？setInterval的缺点是什么

setInterval 并不是一到时间就立即执行第一个参数fn，而是将fn放入任务队列中，
根据js事件循环机制，fn函数就会等待上一个任务执行完成之后再执行，
此时如果任务队列中有比较耗时的操作，那么就会发生延迟，造成setInterval执行间隔时间不符合预期

```js{4}
function myInterval(fn, time) {
  let timer = null
  function interval() {
    fn()
    timer = setTimeout(interval, time)
  }
  interval()
  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}
```