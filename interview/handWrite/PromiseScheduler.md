# promise 并发限制调度器

```js{4}
class Scheduler {
  constructor(limit) {
    this.queue = []
    this.maxCount = limit
    this.runningCount = 0
  }
  add(time, order) {
    const creator = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(order)
          resolve()
        }, time)
      })
    }
    this.queue.push(creator)
  }
  taskStart() {
    for(let i = 0; i < this.maxCount; i++) {
      this.request()
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runnningCount >= this.maxCount) {
      return
    }
    this.runningCount++
    this.queue.shift()()
    .then(res => {
      this.runningCount--
      this.request()
    })
  }
}
```