# 深度优先遍历 DFS 和广度优先遍历 BFS

## 概念

### DFS

### BFS

## 代码实现

### DFS

```js{4}
//方法1
function DFS1(node, nodeList = []) {
  if (node !== null) {
    nodeList.push(node)
    const children = node.children
    for(let i = 0; len = children.length, i < len; i++) {
      DFS1(children[i], nodeList)
    }
  }
  return nodeList
}

//方法2
function DFS2(node) {
  let nodeList = []
  if(node !== null) {
    nodeList.push(node)
    const children = node.children
    for(let i = 0; len = children.length, i < len; i++) {
      nodeList = nodeList.concat(DFS2(children[i]))
    }
  }
  return nodeList
}

//方法3 非递归版本
function DFS3(node) {
  const stack = []
  const nodeList = []
  if (node) {
    stack.push(node)
    while(stack.length) {
      const item = stack.pop()
      nodeList.push(item)
      const children = item.children
      for(let i = children.length; i > 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return nodeList
}
```

### BFS

```js{4}
//方法1
```
