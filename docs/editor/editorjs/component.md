# 基于 Editor.js 开发富文本编辑器库

## 开始

Editor.js 提供了简单而直观的用户界面，根据需求可以灵活添加自定义的编辑工具，通过插件扩展功能

`Editorjs` 使用 js 开发，脱离框架依赖，因此可以基于它封装富文本编辑器，用于 Vue 和 React 项目

[editor-js-component](https://github.com/WebJeffery/editor-js-component) 是基于 Editorjs 封装的库，通过 monorepo 管理项目，不局限框架

[Demo 示例](https://vue-p4wjes.stackblitz.io/)

![](https://files.mdnice.com/user/26477/a935d78c-b92a-4f4b-bd25-ed1aa6e5ad8d.png)

## editor-js-component

[editorjs-js-component](https://github.com/WebJeffery/editor-js-component/blob/master/packages/editorjs/README.md) 是基于 Editor.js 封装的库，不局限框架，可以用于 Vue 和 React 项目

安装

```shell
# NPM
npm install --save editor-js-component

# or Yarn
yarn add editor-js-component

# or Pnpm
pnpm add editor-js-component
```

[查看文档](https://webjeffery.github.io/editor-js-component/develop/editor-js-component.html)，使用

```js
import { useEditorjs } from 'editor-js-component'

// 执行函数
const editorInstance = useEditorjs({
  ...
})


// 实例化编辑器，开启执行
editorInstance.start()
```

## editorjs-component-vue

[editorjs-component-vue](https://github.com/WebJeffery/editor-js-component/blob/master/packages/editorjs-vue/README.md) 是基于 editor-js-component 封装 Vue3 组件

[文档](https://webjeffery.github.io/editor-js-component/develop/editorjs-component-vue.html) 查看使用

```shell
# NPM
npm install --save editorjs-component-vue

# or Yarn
yarn add editorjs-component-vue

# or Pnpm
pnpm add editorjs-component-vue
```

组件注册

```js
import { EditorJsVue, EditorJsParser } from 'editorjs-component-vue'

// or 全局注册组件

const app = createApp()

app.use(EditorJsVue)
```

组件使用

```html
<EditorJsVue
  class="editor-left"
  ref="editor"
  :data="data"
  :messages="i18nMessage"
  :initialized="onInitialized"
  :tool-config="toolConfig"
  @changeData="editorChange"
/>
```

## 插件

Editorjs 以模块化的方式开发，通过插件方式扩展功能，如标题、段落、列表、表格等

根据 Editorjs 提供的 API 开发富文本插件功能

[插件列表](https://github.com/WebJeffery/editor-js-component/tree/master/packages)，可以开发满足于自己的插件

- header
- list
- code
- inlineCode
- personality
- embed
- linkTool
- marker
- table
- raw
- delimiter
- quote
- image
- warning
- paragraph
- checklist

如果对富文本编辑器感兴趣，欢迎[加入](https://github.com/WebJeffery/editor-js-component)
