function myNew(fn, ...args) {
  let obj = {}
  // 方法1 直接改变指向
  obj.__proto__ = fn.prototype
  // 方法2 Object.create
  obj = Object.create(fn.prototype)
  const result = fn.call(obj, ...args)
  console.log(result)
  if ((result && typeof result === 'object') || typeof result === 'function') {
    return result
  }
  return obj
}

const Vue = function(options) {
  const vm = this
  function initData(vm, options) {
    Object.keys(options.data).forEach(key => {
      vm[key] = options.data[key]
    })
  }
  function initMethod(vm, options) {
    Object.keys(options.methods).forEach(key => {
      vm[key] = options.methods[key].bind(vm)
    })
  }
  initData(vm, options)
  initMethod(vm, options)
  options.created.call(vm)
}

const el1 = new Vue({
  data: {
    name: 1
  },
  created() {
    this.getName()
  },
  methods: {
    getName() {
      console.log('getName', this)
    }
  }
})

const el2 = myNew(Vue, {
  data: {
    name: 1
  },
  created() {
    this.getName()
  },
  methods: {
    getName() {
      console.log('getName', this)
    }
  }
})
console.log('el1', el1)
console.log('el2', el2)