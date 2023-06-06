export const sidebar = [
  {
    text: 'lowcode',
    collapsed: true,
    items: [
      {
        text: 'outline',
        link: '/lowcode/outline'
      },
      {
        text: 'editor',
        link: '/lowcode/editor'
      },
      {
        text: 'parser',
        link: '/lowcode/parser'
      },
      {
        text: 'combination',
        link: '/lowcode/combination'
      },
    ],
  },
  {
    text: 'interview',
    collapsed: false,
    items: [
      {
        text: '手写题',
        collapsed: false,
        // ❌ ✔️🤔
        items: [
          {
            text: 'new ✔️',
            link: '/interview/handWrite/new'
          },
          {
            text: 'call&apply&bind 🤔',
            link: '/interview/handWrite/call&apply&bind'
          },
          {
            text: 'prototype',
            link: '/interview/handWrite/prototype'
          },
          {
            text: 'array methods',
            link: '/interview/handWrite/array'
          },
          {
            text: 'class',
            link: '/interview/handWrite/class'
          },
          {
            text: 'copy',
            link: '/interview/handWrite/copy'
          },
          {
            text: 'extend',
            link: '/interview/handWrite/extend'
          },
          {
            text: 'promise',
            link: '/interview/handWrite/promise'
          },
          {
            text: 'queryData',
            link: '/interview/handWrite/queryData'
          },
        ]
      },
      {
        text: '面试经典题',
        collapsed: false,
        items: [
          {
            text: 'network',
            link: '/interview/classics/network'
          },
          {
            text: 'vue',
            collapsed: false,
            items: [
              {
                text: 'reactive响应式原理',
                link: '/interview/classics/vue/reactive'
              },
              {
                text: 'visual dom 虚拟dom',
                link: '/interview/classics/vue/vdom'
              },
              {
                text: 'diff算法',
                link: '/interview/classics/vue/diff'
              },
              {
                text: 'template 模板编译',
                link: '/interview/classics/vue/template'
              },
              {
                text: 'lifeCycle生命周期',
                link: '/interview/classics/vue/lifeCycle'
              },
            ]
          },
          {
            text: 'react',
            collapsed: false,
            items: [
              {
                text: 'visual dom 虚拟dom',
                link: '/interview/classics/react/vdom'
              },
              {
                text: 'fiber架构',
                link: '/interview/classics/react/fiber'
              },
              {
                text: 'diff算法',
                link: '/interview/classics/react/diff'
              },
              {
                text: 'hooks',
                link: '/interview/classics/react/hooks'
              },
            ]
          },
        ],
      },
    ]
  },
  {
    text: 'issues',
    items: [
      {
        text: '开始',
        link: '/issues/index'
      }
    ]
  }
]