import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/': [
    {
      text: 'JavaScript 基础知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/fe/javascript/types' },
        { text: '引用类型的拷贝', link: '/fe/javascript/clone' },
        { text: '类型转换', link: '/fe/javascript/conversions' },
        { text: '原型和原型链', link: '/fe/javascript/prototype' },
        { text: '继承', link: '/fe/javascript/inherit' }
      ]
    },
    {
      text: 'ES6 常用知识点',
      link: '/fe/es6/'
    },
    {
      text: 'TypeScript',
      link: '/fe/typescript/base'
    },
    {
      text: 'HTML / CSS',
      collapsed: false,
      items: [
        { text: 'HTML 理论知识点', link: '/fe/html/' },
        { text: 'CSS 理论知识点', link: '/fe/css/' }
      ]
    },
    {
      text: '浏览器与网络',
      collapsed: false,
      items: [
        { text: '浏览器相关知识点', link: '/fe/browser/' },
        { text: 'TCP', link: '/fe/network/tcp' },
        { text: 'HTTP', link: '/fe/network/http' }
      ]
    },
    {
      text: '概念知识点',
      collapsed: false,
      items: [
        { text: '模块化', link: '/fe/concept/module' },
        { text: '前端页面渲染方式', link: '/fe/concept/page-rendering' }
      ]
    },
    {
      text: '编程题',
      link: '/fe/coding/'
    }
  ],
  '/analysis/utils': [
    {
      text: '工具库',
      // collapsed: false,
      items: [
        { text: 'only-allow', link: '/analysis/utils/only-allow' },
        { text: 'clsx', link: '/analysis/utils/clsx' }
      ]
    }
  ],
  '/analysis/vue3': [
    {
      text: 'Vue3 源码阅读',
      // collapsed: false,
      items: [
        {
          text: '前置知识',
          collapsed: true,
          items: [
            {
              text: 'Vue3 源码学习指南',
              link: '/analysis/vue3/base/guide'
            },
            {
              text: 'pnpm 包管理工具',
              link: '/analysis/vue3/base/pnpm'
            },
            {
              text: 'monorepo 代码管理',
              link: '/analysis/vue3/base/monorepo'
            }
            // {
            //   text: 'package.json 解读',
            //   link: '/analysis/vue3/base/package'
            // },
            // {
            //   text: 'script 工作流',
            //   link: '/analysis/vue3/base/script'
            // },
            // {
            //   text: '构建工具',
            //   link: '/analysis/vue3/base/build'
            // },
            // {
            //   text: '测试工具',
            //   link: '/analysis/vue3/base/test'
            // },
            // {
            //   text: 'TypeScript',
            //   link: '/analysis/vue3/base/typescript'
            // }
          ]
        },
        {
          text: '全局概览',
          collapsed: true,
          items: [
            {
              text: 'Vue3 源码学习和调试',
              link: '/analysis/vue3/global/debug'
            },
            {
              text: 'Vue3 优化',
              link: '/analysis/vue3/global/optimize'
            },
            {
              text: 'Vue3 目录结构',
              link: '/analysis/vue3/global/directory'
            }
            // {
            //   text: 'createApp',
            //   link: '/analysis/vue3/global/createApp'
            // },
            // {
            //   text: 'mount',
            //   link: '/analysis/vue3/global/mount'
            // },
            // {
            //   text: 'API 分析',
            //   link: '/analysis/vue3/global/api'
            // }
          ]
        },
        {
          text: '响应式原理',
          collapsed: true,
          items: [
            {
              text: 'effect副作用函数',
              link: '/analysis/vue3/reactive/effect'
            },
            {
              text: 'reactive',
              link: '/analysis/vue3/reactive/reactive'
            },
            {
              text: 'ref',
              link: '/analysis/vue3/reactive/ref'
            },
            {
              text: 'computed',
              link: '/analysis/vue3/reactive/computed'
            },
            {
              text: 'watch',
              link: '/analysis/vue3/reactive/watch'
            },
            {
              text: '扩展工具方法',
              link: '/analysis/vue3/reactive/api'
            }
          ]
        },
        {
          text: '生命周期',
          collapsed: true,
          items: [
            {
              text: 'setup 函数',
              link: '/analysis/vue3/lifecycle/setup'
            },
            {
              text: '生命周期函数',
              link: '/analysis/vue3/lifecycle/hooks'
            }
          ]
        },
        {
          text: '事件',
          collapsed: true,
          items: [
            {
              text: 'DOM事件',
              link: '/analysis/vue3/event/dom'
            },
            {
              text: '组件自定义事件',
              link: '/analysis/vue3/event/customer'
            }
          ]
        },
        {
          text: '组件',
          collapsed: true,
          items: [
            {
              text: '组件注册',
              link: '/analysis/vue3/component/register'
            },
            {
              text: '组件渲染',
              link: '/analysis/vue3/component/render'
            },
            {
              text: '组件更新及diff',
              link: '/analysis/vue3/component/update'
            },
            {
              text: '组件props',
              link: '/analysis/vue3/component/props'
            },
            {
              text: '组件slot插槽',
              link: '/analysis/vue3/component/slots'
            }
          ]
        },
        {
          text: '内置组件',
          collapsed: true,
          items: [
            {
              text: 'keep-alive',
              link: '/analysis/vue3/component/keep-alive'
            },
            {
              text: 'suspense',
              link: '/analysis/vue3/component/suspense'
            },
            {
              text: 'frament',
              link: '/analysis/vue3/component/frament'
            },
            {
              text: 'teleport',
              link: '/analysis/vue3/component/teleport'
            }
          ]
        },
        {
          text: '模版编译',
          collapsed: true,
          items: [
            {
              text: '生成AST对象',
              link: '/analysis/vue3/compiler/ast'
            },
            {
              text: 'AST对象优化',
              link: '/analysis/vue3/compiler/optimize'
            },
            {
              text: '生成代码字符串',
              link: '/analysis/vue3/compiler/generate'
            },
            {
              text: '生成render函数',
              link: '/analysis/vue3/compiler/render'
            }
          ]
        },
        {
          text: 'directive指令',
          collapsed: true,
          items: [
            {
              text: '指令渲染',
              link: '/analysis/vue3/directive/render'
            },
            {
              text: '指令生命周期',
              link: '/analysis/vue3/directive/lifecycle'
            },
            {
              text: 'v-model',
              link: '/analysis/vue3/directive/model'
            },
            {
              text: '自定义指令',
              link: '/analysis/vue3/directive/customer'
            }
          ]
        }
      ]
    }
  ],
  '/editor/': [
    {
      text: '富文本编辑器',
      items: [
        // {
        //   text: 'tiptap 编辑器',
        //   items: [{ text: '开发指南', link: '/editor/tiptap/guide' }]
        // },
        {
          text: 'wangeditor 编辑器',
          collapsed: false,
          items: [
            { text: 'wangeditor 源码阅读', link: '/editor/wangeditor/guide' },
            { text: 'wangeditor 源码调试', link: '/editor/wangeditor/debug' }
          ]
        },
        {
          text: 'editor.js 编辑器',
          collapsed: false,
          items: [
            { text: 'Editor.js 开发指南', link: '/editor/editorjs/guide' },
            { text: 'Editor.js 封装组件', link: '/editor/editorjs/component' },
            { text: 'Editor.js 段落插件源码解读', link: '/editor/editorjs/paragraph' }
          ]
        }
      ]
    }
  ],
  '/workflow/': [
    {
      text: '常用工具/方法',
      collapsed: false,
      items: [
        { text: '工具库整理', link: '/workflow/utils/library' },
        { text: '常用正则整理', link: '/workflow/utils/regexp' },
        { text: '常用方法整理', link: '/workflow/utils/function' }
      ]
    },
    {
      text: 'CSS 相关',
      collapsed: false,
      items: [
        { text: 'CSS 语法', link: '/workflow/css/spec' },
        { text: 'CSS 奇淫技巧', link: '/workflow/css/tricks' },
        { text: 'Sass 常用技巧', link: '/workflow/sass/' }
      ]
    },
    {
      text: 'Vue 相关',
      link: '/workflow/vue/'
    },
    {
      text: 'Node 相关',
      // collapsed: false,
      items: [{ text: 'npm 常用命令', link: '/workflow/node/npm' }]
    },
    {
      text: '终端相关',
      collapsed: false,
      items: [
        { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
        { text: '命令行工具', link: '/workflow/terminal/toolkit' },
        { text: 'Shell 命令', link: '/workflow/terminal/shell' }
      ]
    },
    {
      text: 'Git 相关',
      collapsed: false,
      items: [
        { text: 'Git 相关技巧', link: '/workflow/git/' },
        { text: 'Git 命令清单', link: '/workflow/git/command' }
      ]
    }
  ],
  '/efficiency/': [
    {
      text: '软件推荐与配置',
      // collapsed: false,
      items: [
        { text: '多平台软件', link: '/efficiency/software/cross-platform' },
        { text: 'Mac 平台', link: '/efficiency/software/mac' },
        { text: 'Windows 平台', link: '/efficiency/software/windows' },
        { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
        { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
        { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
      ]
    },
    { text: '在线工具', link: '/efficiency/online-tools' },
    { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
  ],
  '/pit/': [
    {
      text: '踩坑记录',
      // collapsed: false,
      items: [
        { text: 'npm 踩坑记录', link: '/pit/npm' },
        { text: 'PC 踩坑记录', link: '/pit/pc' },
        { text: 'H5 踩坑记录', link: '/pit/h5' }
      ]
    }
  ]
}
