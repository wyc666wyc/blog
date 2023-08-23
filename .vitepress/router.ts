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
            text: 'currying',
            link: '/interview/handWrite/currying'
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
            text: 'PromiseScheduler',
            link: '/interview/handWrite/PromiseScheduler'
          },
          {
            text: 'queryData',
            link: '/interview/handWrite/queryData'
          },
          {
            text: 'dfs&bfs',
            link: '/interview/handWrite/dfs&bfs'
          }
        ]
      },
      {
        text: '性能优化',
        collapsed: false,
        items: [
          {
            text: '网络优化',
            link: '/interview/performance/network'
          },
          {
            text: '资源优化',
            link: '/interview/performance/source'
          },
          {
            text: 'css优化',
            link: '/interview/performance/css'
          },
          {
            text: 'js代码优化',
            link: '/interview/performance/js'
          },
          {
            text: '构建优化',
            link: '/interview/performance/build'
          },
          {
            text: '框架优化',
            link: '/interview/performance/framework'
          },
        ]
      },
      {
        text: '面试经典题',
        collapsed: false,
        items: [
          {
            text: 'base',
            collapsed: false,
            items: [
              {
                text: '基础api',
                link: '/interview/classics/base/api'
              },
              {
                text: '..',
                link: '/interview/classics/base/fiber'
              },
              {
                text: '..',
                link: '/interview/classics/base/diff'
              },
              {
                text: '..',
                link: '/interview/classics/base/hooks'
              },
            ]
          },
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
      {
        text: 'css',
        collapsed: false,
        items: [
          {
            text: '基本css',
            link: '/interview/css/base'
          },
          {
            text: 'css预处理器',
            link: '/interview/css/preprocessor'
          },
          {
            text: '原子化css',
            link: '/interview/css/atom'
          },
        ]
      }
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