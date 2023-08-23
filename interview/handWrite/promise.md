# 实现promise
```js{4}
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    try {
      excutor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }
  status = PENDING
  value = null
  reason = null
  onFulfilledCallback = []
  onRejectedCallback = []

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }
  reject = (reason) =>  {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }
  then(onFulfilled, onRejected) {
    const realOnFulfilled = onFulfilled ? onFulfilled : value => value
    const realOnRejected = onRejected ? onRejected : reason => { throw new Error(reason) }
    const p2 = new MyPromise((resolve, rejected) => {
      const fulfilledMicroTask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value)
            resolvePromise(p2, x, resolve, reject)
          } catch (err)
          reject(err)
        })
      }
      const rejectedMicroTask = () => {
        queueMicortask(() => {
          try {
            const x = realOnRejected(this.reason)
            resolvePromise(p2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.status === FULFILLED) {
        fulfilledMicroTask()
      } else if (this.status === REJCTED) {
        rejectedMicroTask()
      } else {
        this.onFulfilledCallback.push(fulfilledMicroTask)
        this.onRejectedCallback.push(rejectedMicroTask)
      }
    })
    return p2
  }
}
function resolvePromise () {

}
```