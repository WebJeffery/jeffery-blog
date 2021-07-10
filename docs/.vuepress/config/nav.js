module.exports = [
  {
    text: '首页', link: '/'
  },
  {
    text: 'HTML&CSS', 
    link: '/ui/',
    items: [
      {
        text: 'HTML', link: '/pages/8309a5b876fc95e3/'
      },
      {
        text: 'CSS', link: '/pages/0a83b083bdf257cb/'
      },
    ]
  },
  {
    text: 'JavaScript',
    link: '/web/javascript/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: 'JavaScript 基础', 
        link: '/pages/23a3errwdasweew/',
      },
      {
        text: 'JavaScript 进阶',
        link: '/pages/adewebd/',
      },
      {
        text: 'JavaScript 高级', 
        link: '/pages/weweadse/',
      },
      {
        text: 'JavaScript 手写实践', 
        link: '/pages/wewefss/',
      },
      {
        text: 'JavaScript 设计模式', 
        link: '/pages/faee3see/',
      }
    ]
  },
  {
    text: '前端框架',
    link: '/frame/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: 'Vue 系列', 
        items:[
          {text: '组件化', link: '/pages/802a1ca6f7b71c59/'},
          {text: 'Vue 性能优化', link: '/note/vue/'},
          {text: 'Vue 实践', link: '/note/vue1/'},
          {text: 'Vue 源码', link: '/note/vue2/'}
        ]
      }
    ]
  },

  {
    text: '前端进阶',
    link: '/advanced/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: 'TypeScript', 
        items: [
          {text: 'TypeScript 笔记', link: '/note/typescript-axios/'}
        ]
      },
      {
        text: '浏览器系列', 
        items: [
          {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
          {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
        ]
      },
      {
        text: '性能优化系列', 
        items: [
          {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
          {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
        ]
      }
    ]
  },

  {
    text: '前端工程',
    link: '/engineer/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '前端工程系列', 
        items:[
          {text: '《JavaScript教程》笔记', link: '/note/javascript/'}
        ]
      }
    ]
  },

  {
    text: '计算机基础',
    link: '/technology/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '数据结构和算法', 
        items: [
          {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
          {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
        ]
      },
      {
        text: '计算机网络', 
        items: [
          {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
          {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
        ]
      },
      {
        text: '编译原理', 
        items:[
          {text: '《JavaScript教程》笔记', link: '/note/javascript/'}
        ]
      }
    ]
  },

  {
    text: '项目',
    link: '/project/',
    items: [
      {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '面试',
    link: '/interview/',
    items: [
      {text: '面试题库', items: [
        {text: 'HTML', link: '/pages/58734d/'},
        {text: 'CSS', link: '/pages/26864d/'},
        {text: 'jQuery', link: '/pages/ceea45/'},
        {text: 'Vue', link: '/pages/4547e6/'},
        {text: '零碎', link: '/pages/a134b2/'}
      ]}
      ,
      {text: '面试心得', items: [
        {text: '杂言碎语', link: '/pages/331dbf/'},
      ]}
    ]
  },
  // {
  //   text: '读书派', 
  //   link: '/bookssent/',
  //   items: [
  //     {text: '摘抄收录', items: [
  //       {text: '☆ 励志鸡汤', link: '/ChickenSoup/'},
  //       {text: '❀ 人间烟火', link: '/PassionLife/'},
  //       {text: '☣ 万物沦丧', link: '/ThingsLost/'},
  //       {text: '✌ 关掉烦恼', link: '/NoTrouble/'},
  //       {text: '✲ 小酒馆', link: '/Bistro/'}
  //     ]}, //link: '/pages/wordsof/'}
  //     {text: '读书笔记', items: [
  //       {text: '《小狗钱钱》', link: '/note/xgqq/'},
  //       {text: '《穷爸爸富爸爸》', link: '/note/qbbfbb/'},
  //       {text: '《聪明人使用方格笔记本》', link: '/note/cmrsyfgbjb/'}
  //     ]}
  //   ]
  // },
  {
    text: '更多', 
    link: '/more/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '学习资源', link: '/pages/eee83a9211a70f9d/'},
      // {text: '工具', link: '/pages/beb6cwe0bd8a66cea6/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]