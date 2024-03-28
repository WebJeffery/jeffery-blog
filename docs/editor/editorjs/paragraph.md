# editor.js 源码解析：paragraph 段落插件渲染流程

## 前言

[Editor.js](https://editorjs.io/) 是一个 Block-Styled 块编辑器，以 JSON 格式输出数据的富文本和媒体编辑器。它，由“块”组成，完全模块化，例如段落、标题、图片都是块，可以进一步地编写自己的插件来扩展编辑器功能。

下面介绍段落在富文本编辑器的渲染流程，了解 editor.js 是如何工作的，知道自己编写的插件是怎么运行的。

## 开始使用

阅读 [editor.js](https://editorjs.io/getting-started/) 官网文档，写的挺清晰，使用段落插件作为简单的示例，调试 editor.js 的工作过程

使用挺简单，实例化 `EditorJS`, 数据内容使用 `data` 存储，遍历 blocks 数组生成 DOM 内容，挂载在 `holder` id 上

```JS
import EditorJS from '@editorjs/editorjs';

const editor = new EditorJS({
  holder: 'editorjs',
  data: {
    blocks: [{
      type: "paragraph",
      data: {
        text: "Hello world"
      }
    }]
  }
});
```

## Editorjs 核心类

实例化 `EditorJS` 内部调用 `Core` 实例化富文本核心类

![](https://files.mdnice.com/user/26477/a121deb0-96ed-4b7c-86aa-eb9f3fa712fa.png)

在 Core 构造器 `constructor` 执行 `Promise.resolve`，从这里可以了解到 `editor.js` 采用的是异步渲染的方式

好处是：提升页面渲染性能，数据量大达到上千行万行，不会阻塞页面的渲染

需要注意点，在同步执行过程中，拿不到渲染的 DOM，需要在异步队列执行后访问，也就是 `onReady` 异步函数后

在异步函数，执行流程分为以下 4 步：

1. validate：校验挂载的 DOM 是否合法
2. init：注册内置模块，管理模块
3. start：模块 prepare 方法，做一些准备工作
4. render：渲染编辑器内容

```JS
export default class Core {
  constructor(config) {

    Promise.resolve()
      .then(async () => {
        this.configuration = config;

        this.validate();
        this.init();
        await this.start();
        await this.render();

        onReady();
      })
      .catch((error) => {
        _.log(`Editor.js is not ready because of ${error}`, 'error');

        /**
         * Reject this.isReady promise
         */
        onFail(error);
      });
  }
}
```

## 渲染流程

### 注册内置模块

执行 `init` 方法，主要做两件事件；

- 加载内置模块实例化
- 配置模块，实现模块间通信

```js
public init(): void {
  // 加载模块实例化
  this.constructModules();
  // 配置模块
  this.configureModules();
}
```

1、`constructModules` 方法加载内置的模块，遍历模块 `new` 实例化，添加到 `this.moduleInstances` 对象，`moduleInstances` 管理所有模块方法 API

![](https://files.mdnice.com/user/26477/0e81b531-0714-441f-adfd-840b766a476b.png)

2、`configureModules` 配置模块，实现不同模块间的数据通信

比如说，要在 `BlockManager` 模块调用 `EventsAPI` 模块的实例化方法，做法是在当前模块添加其他所有的模块到 `Editor` 对象上

```JS

private configureModules(): void {
  // 遍历 moduleInstances ，通过 getModulesDiff diff 对比，赋值其他模块的对象给 state
  for (const name in this.moduleInstances) {
    if (Object.prototype.hasOwnProperty.call(this.moduleInstances, name)) {
      this.moduleInstances[name].state = this.getModulesDiff(name);
    }
  }
}
// 对比获取非当前模块对象
private getModulesDiff(name: string): EditorModules {
  const diff = {};
  for (const moduleName in this.moduleInstances) {
    if (moduleName === name) {
      continue;
    }
    diff[moduleName] = this.moduleInstances[moduleName];
  }

  return diff;
}
```

所有的模块都继承于 `Module` 模块，它内部有个方法，设置 `state` 会添加模块对象在 `Editor` 属性上，这样 `Editor` 就存储了其他模块的数据

```js
public set state(Editor: EditorModules) {
  this.Editor = Editor;
}
```

### start 启动模块

有些模块需要做一些准备工作，比如 tools 行内工具 UI DOM 创建 ，创建编辑器的容器 DOM，需要提前执行，所以将这些模块列出来按照顺序执行。

使用 `reduce` 和 `async/await` 控制顺序执行 `prepare` 方法

![](https://files.mdnice.com/user/26477/d1694915-db5d-4636-abe2-1242324b336f.png)

### render 渲染内容

渲染内容使用实例化模块 `Renderer` 的 `render` 方法渲染

![](https://files.mdnice.com/user/26477/a0be0451-5659-42df-9b37-10198d100640.png)

**渲染流程**

1、 遍历 `blocksData` 数组，调用 `BlockManager` 模块 `composeBlock` 方法，它会为段落实例化一个 `Block`

![](https://files.mdnice.com/user/26477/99cda2da-6904-4e53-831d-1c152613487c.png)

![](https://files.mdnice.com/user/26477/d920e069-33eb-4439-88c1-8664b0144302.png)

段落 Block 实例化内部调用 `tool.create` 方法，此时就开始执行 **段落插件** 的 `constructor` 实例化逻辑，实例化对象添加到 `toolInstance` 属性

![](https://files.mdnice.com/user/26477/b8baed44-67ba-480c-aac9-0345a1cf20e2.png)

![](https://files.mdnice.com/user/26477/b9ffa8dd-120a-40e7-941b-bbfa55ef246d.png)

![](https://files.mdnice.com/user/26477/f56bf628-94dd-4c71-b75f-b47404acf2c0.png)

2、段落 DOM 渲染

段落插件必须提供一个 `render` 函数，在实例化 Block 会调用 `compose` 函数创建 DOM 赋值 `holder`

同时也会创建 tunes 转换模块，如上下移动、删除块

![](https://files.mdnice.com/user/26477/0a08aba1-03d8-4ee4-bbf2-e2724cbaa86d.png)

![](https://files.mdnice.com/user/26477/e7cf6d1d-9d57-47a8-81f9-76e1299ed103.png)

3、段落绑定事件

在 `composeBlock` 创建完 dom 后，会给 dom 绑定事件，这里使用了 `requestIdleCallback` API 在 2 秒后浏览器空闲时间执行

![](https://files.mdnice.com/user/26477/9f8c2d0c-6216-481c-82be-fe059a6a4617.png)

![](https://files.mdnice.com/user/26477/cfefcf2b-b5e4-4500-a126-74753a56be67.png)

### 挂载 DOM

初始化所有的 `blocks` 后，使用 `BlockManager` 来管理，执行 `BlockManager.insertMany(blocks)` ，遍历 blocks 取出段落的 DOM（在 holder） 添加到文档片段，挂载到页面上

![](https://files.mdnice.com/user/26477/1a01d5a3-bf36-4b0c-8622-1d2b4f970425.png)

![](https://files.mdnice.com/user/26477/dc3d68f1-2c95-4164-874f-5ace108555f3.png)

## 保存校验 json

editor.js 提供 `save` 方法获取编辑器的 JSON 数据

1、调用 Saver 模块的 `save` 方法

save 方法会遍历 `blocks` 所有的块，调用 getSavedData 获取块的数据，添加到 `chainData` 数组，getSavedData 方法处理保存和校验的逻辑

![](https://files.mdnice.com/user/26477/35de0b9d-d761-4849-932e-ac72b001def1.png)

![](https://files.mdnice.com/user/26477/c41226e2-130e-433c-a955-1901bb356d60.png)

2、保存逻辑

save 执行段落 block `save` 方法，调用段落插件的 `save` 方法，获取段落的数据

![](https://files.mdnice.com/user/26477/3dcb5ebb-258f-4696-84f8-38cc375fe3c0.png)

3、validate 校验

判断段落插件是否有定义 `validate` 方法，有则将 data 数据进行校验，同时 `sanitizeBlocks` 方法根据 `sanitizeConfig` 配置对数据做一层过滤

![](https://files.mdnice.com/user/26477/f6719f51-b730-430d-b002-bb2f2397be21.png)

![](https://files.mdnice.com/user/26477/dd8f94dd-dc1b-441b-af3b-348f08fb7272.png)

### 输出数据

最后调用 `makeOutput` ，根据校验条件 `isValid` 如果通过则添加到 `blocks` 数组返回

![](https://files.mdnice.com/user/26477/370754df-11a2-4b68-afef-7016fedfa262.png)

makeOutput 输出数据对象

![](https://files.mdnice.com/user/26477/ce328be5-8c28-4596-be0a-cf3ca4ac3584.png)

## 总结

`editor.js` 是一个 DOM 操作的富文本编辑器，每一个块是 `contenteditable` 编辑区域，用一个 Block 块定义表示，使用 `managerBlock` 模块管理所有的 Block 块。工作过程，会先加载内置模块，对一些模块执行 `prepare` 准备工作，调用 `render` 遍历 Block 渲染。

输出 JSON 数据，遍历所有的 Block，调用插件提供的 `save` 保存和 `validate` 方法进行过滤，输出 `data` 对象
