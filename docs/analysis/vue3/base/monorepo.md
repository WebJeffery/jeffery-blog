# monorepo 代码管理策略

Vue3 采用了 `monorepo` 的方式来对项目代码进行管理，带着以下几个问题去学习

- `monorepo` 代码管理策略是什么？ ——》 了解技术背景和痛点，用它能做什么，解决什么问题
- `monorepo`有哪些优劣势？——》 理解应用场景，避免踩坑
- 它在 Vue3 源码是如何实现的？——》真实案例，学习优秀设计，可以在项目造轮子

明白以上几个问题，就理解了 monorepo 代码管理策略和使用，下面一一分析。

## monorepo 是什么？

Monorepo（单一代码仓库）是一种代码管理策略，用于将多个相关项目存储在一个共享的代码仓库中。相比于传统的多个独立代码仓库，Monorepo 的目标是提高代码的可共享性、可重用性和协作效率

简单来说，之前要创建多个项目，需要建多个独立的仓库，代码之间物理隔离，每一个仓库都要重复安装依赖，占用过多内存，代码不能共享，存在种种问题，所以设计出了将多个项目可以集中到一个仓库中

## monorepo 优劣势？

通过 monorepo 策略组织代码，代码仓库的目录结构看起来会是这样：

```
.
├── package.json
└── packages/ # 这里将存放所有子 repo 目录
    ├── project_1/
    │   ├── index.js
    │   ├── node_modules/
    │   └── package.json
    ├── project_2/
    │   ├── index.js
    │   ├── node_module/
    │   └── package.json
    ...
```

monorepo 策略就是将不同项目的目录汇集到一个目录之下，但实际上操作起来所要考虑的事情则远比看起来要复杂得多。通过分析使用 monorepo 策略的优劣，我们可以更直观的感受到这里面所隐晦涉及的知识点。

### monorepo 优势

monorepo 在代码管理上优势：

1. **代码重用将变得非常容易**：由于所有的项目代码都集中于一个代码仓库，我们将很容易抽离出各个项目共用的业务组件或工具，并通过 TypeScript，Lerna 或其他工具进行代码内引用；
2. **依赖管理将变得非常简单**：同理，由于项目之间的引用路径内化在同一个仓库之中，我们很容易追踪当某个项目的代码修改后，会影响到其他哪些项目。通过使用一些工具，我们将很容易地做到版本依赖管理和版本号自动升级；
3. **统一构建和测试**：可以使用统一的构建配置和流程，减少配置和维护的工作量。此外，可以在整个 Monorepo 中执行统一的测试流程，确保所有项目质量和稳定性。
4. **便于协作和开发**：在一个代码仓库中，可以更容易地浏览、搜索和理解整个项目的代码，便于团队成员之间的协作。Monorepo 还可以促进跨项目的合作和知识共享，提高团队的整体效率和协同能力。
5. **更少的内存**：多个项目引用相同的依赖，只需要安装一份依赖即可，减少重复安装节省内存空间

### monorepo 劣势

其实，优势和劣势都是相对的，在一定程度上，如果不遵循约束和规范，优势也会转换为劣势，所以在设计上要更加严谨，这也是学习源码优秀设计的原因之一。

1. **新员工的学习成本变高**：不同于一个项目一个代码仓库这种模式下，组织新人只要熟悉特定代码仓库下的代码逻辑，在 monorepo 策略下，新人可能不得不花更多精力来理清各个代码仓库之间的相互逻辑，当然这个成本可以通过新人文档的方式来解决，但维护文档的新鲜又需要消耗额外的人力；
2. **团队协作和权限管理变复杂**：在 Monorepo 中，团队成员需要共享同一个代码仓库，并且对所有模块都具有相同的权限级别。这可能会导致一些团队成员对整个项目的代码和资源具有过多的访问权限，增加了潜在的安全风险。
3. **代码耦合和影响范围**：在 Monorepo 中，一个模块的更改可能会对其他模块产生意外的影响，增加了代码耦合性，并可能导致意外的副作用。

### 如何取舍？

看了之后是不是在犹豫要不要使用 monorepo 管理代码了，请别灰心，软件开发领域从来没有完美一说，需要根据组织和特定的项目来选择。可以把 monorepo 策略实践在「项目」这个级别，即从逻辑上确定项目与项目之间的关联性，然后把相关联的项目整合在同一个仓库下，通常情况下，我们不会有太多相互关联的项目，这意味着我们能够免费得到 monorepo 策略的所有好处，好好利用放大它的优点，同时通过制定规范、培训项目管理补齐它的短板。

## monorepo 实现方案

monorepo 常见实现方案

- Lerna
- yarn workspace + Lerna
- Lerna + pnpm + workspace

## Lerna

[Lerna](https://lerna.js.org/) **是什么？**

- Lerna 是 Babel 为实现 Monorepo 开发的工具；最擅长管理依赖关系和发布
- Lerna 优化了多包工作流，解决了**多包依赖**、**发版手动维护版本**等问题
- Lerna 不提供构建、测试等任务，工程能力较弱，项目中往往需要基于它进行顶层能力的封装

详细

- lerna bootstrap：等同于 lerna link + yarn install，用于创建符合链接并安装依赖包；
- lerna run：会像执行一个 for 循环一样，在所有子项目中执行 npm script 脚本，并且，它会非常智能的识别依赖关系，并从根依赖开始执行命令；
- lerna exec：像 lerna run 一样，会按照依赖顺序执行命令，不同的是，它可以执行任何命令，例如 shell 脚本；
- lerna publish：发布代码有变动的 package，因此首先您需要在使用 Lerna 前使用 git commit 命令提交代码，好让 Lerna 有一个 baseline；
- lerna add：将本地或远程的包作为依赖添加至当前的 monorepo 仓库中，该命令让 Lerna 可以识别并追踪包之间的依赖关系，因此非常重要；
- --concurrency `<number>`：参数可以使 Lerna 利用计算机上的多个核心，并发运行，从而提升构建速度；
- --scope '@mono/{pkg1,pkg2}'：--scope 参数可以指定 Lerna 命令的运行环境，通过使用该参数，Lerna 将不再是一把梭的在所有仓库中执行命令，而是可以精准地在我们所指定的仓库中执行命令，并且还支持示例中的模版语法；
- --stream：该参数可使我们查看 Lerna 运行时的命令执行信息

## pnpm workspace

Pnpm 是新一代的 nodejs 包管理工具。第一个 “P”意为 Performance，代表着更佳的性能。

它的主要优点有两个，一是采用了 hard-link 机制，避免了包的重复安装，节省了空间，同时能提高项目依赖的安装速度。二是对 monorepo 的支持非常友好，只需要一条配置就能实现。

**Vue3 源码采用 monorepo 方式进行管理，将众多模块拆分到 packages 目录中**

配置 monorepo

在项目根目录下新建 pnpm-workspace.yaml 文件

```
  packages:
  - 'packages/*'
```

意思是，将 packages 目录下所有的目录都作为单独的包进行管理。

通过这样一个简单的配置，Monorepo 开发环境搭建好了。

![](https://files.mdnice.com/user/26477/9c77b56c-04d2-4086-b630-deabe6c933d0.png)

这带来的最直观的好处，就是方便管理和维护。而且，它不像 Vue2 那样将源码整体打包对外暴露。Vue3 的这种组织形式，方便的实现了 Tree-shaking，需要哪个功能就引入对应的模块，能大大减少打包后项目的体积

## monorepo 方案实践

[Volta](https://volta.sh/) 是一个 JavaScript 工具管理器，它可以让我们轻松地在项目中锁定 node，npm 和 yarn 的版本。你只需在安装完 Volta 后，在项目的根目录中执行 `volta pin` 命令，那么无论您当前使用的 node 或 npm（yarn）版本是什么，volta 都会自动切换为您指定的版本。

因此，除了使用 Docker 和显示在文档中声明 node 和 npm（yarn）的版本之外，您就有了另一个锁定环境的强力工具。

而且相较于 nvm，Volta 还具有一个诱人的特性：当您项目的 CLI 工具与全局 CLI 工具不一致时，Volta 可以做到在项目根目录下自动识别，切换到项目指定的版本，这一切都是由 Volta 默默做到的，开发者不必关心任何事情。

### 锁定环境 Volta

![volta](./images/volta.png)

### 复用 packages: workspace

使用 monorepo 策略后，收益最大的两点是：

1. 避免重复安装包，因此减少了磁盘空间的占用，并降低了构建时间；
2. 内部代码可以彼此相互引用；
3. 这两项好处全部都可以由一个成熟的包管理工具来完成，对前端开发而言，即是 yarn（1.0 以上）或 npm（7.0 以上）通过名为 `workspaces` 的特性实现的（⚠️ 注意，支持 workspaces 特性的 npm 目前依旧不是 TLS 版本）。

为了实现前面提到的两点收益，您需要在代码中做三件事：

1. 调整目录结构，将相互关联的项目放置在同一个目录，推荐命名为 `packages`；
2. 在项目根目录里的 `package.json` 文件中，设置 `workspaces` 属性，属性值为之前创建的目录；
3. 同样，在 `package.json` 文件中，设置 `private` 属性为 true（为了避免我们误操作将仓库发布）；

经过修改，项目目录结构如下：

```
.
├── package.json
└── packages/
    ├── @mono/project_1/ # 推荐使用 `@<项目名>/<子项目名>` 的方式命名
    │   ├── index.js
    │   └── package.json
    └── @mono/project_2/
        ├── index.js
        └── package.json
```

在项目根目录中执行 `npm install` 或 `yarn install` 后，在项目根目录中出现了 `node_modules` 目录，并且该目录不仅拥有所有子项目共用的 npm 包，还包含了本身子项目。因此，可以在子项目中通过各种模块引入机制，像引入一般的 npm 模块一样引入其他子项目的代码。

请注意对子项目的命名，统一以 `@<repo_name>/` 开头，这是一种社区最佳实践，不仅可以让用户更容易了解整个应用的架构，也方便在项目中更快捷的找到所需的子项目。

### 统一配置：合并同类项 - Eslint，Typescript 与 Babel

编写代码要遵循 DRY 不重复原则（Don't Repeat Yourself 的缩写）。应该尽量避免在多个子项目中放置重复的 eslintrc，tsconfig 等配置文件。幸运的是，Babel，Eslint 和 Typescript 都提供了相应的功能让我们减少自我重复

1、TypeScript

在 `packages` 目录中放置 `tsconfig.settting.json` 文件，并在文件中定义通用的 ts 配置，然后，在每个子项目中，可以通过 `extends` 属性，引入通用配置，并设置 `compilerOptions.composite` 的值为 true，理想情况下，子项目中的 tsconfig 文件应该仅包含下述内容：

```json
{
  "extends": "../tsconfig.setting.json", // 继承 packages 目录下通用配置
  "compilerOptions": {
    "composite": true, // 用于帮助 TypeScript 快速确定引用工程的输出文件位置
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

2、Eslint

对于 `Eslint 配置文件`，使用同样的方法，可以这样定义子项目的 `.eslintrc` 文件内容：

```json
{
  "extends": "../../.eslintrc", // 注意这里的不同
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

对于通用的 eslint 配置，并没有将其放置在 `packages` 目录中，而是放在整个项目的根目录下，这样做是因为一些编辑器插件只会在项目根目录寻找 `.eslintrc` 文件

3、Babel

Babel 配置文件合并的方式与 TypeScript 如出一辙，甚至更加简单，只需在子项目中的 `.babelrc` 文件中这样声明即可：

```json
{
  "extends": "../.babelrc"
}
```

### 统一命令脚本：scripty

子项目间复用脚本命令, 在项目根目录创建 `scripts` 管理 monorepo 应用脚本，目录结构看起来将会是这样：

```
.
├── package.json
├── .eslintrc
├── scirpts/ # 这里存放所有的脚本
│   │   ├── packages/ # 包级别脚本
│   │   │   ├── build.sh
│   │   │   └── test.sh
│   └───└── workspaces/ # 全局脚本
│           ├── build.sh
│           └── test.sh
└── packages/
    │   ├── tsconfig.settings.json
    │   ├── .babelrc
    ├── @mono/project_1/
    │   ├── index.js
    │   ├── .eslintrc
    │   ├── .babelrc
    │   ├── tsconfig.json
    │   └── package.json
    └── @mono/project_2/
        ├── index.js
        ├── .eslintrc
        ├── .babelrc
        ├── tsconfig.json
        └── package.json
```

脚本分为两类「package 级别」与「workspace 级别」，并且分别放在两个文件夹内。这样做的好处在于，我们既可以在项目根目录执行全局脚本，也可以针对单个项目执行特定的脚本。

通过使用 `scripty`，子项目的 `package.json` 文件中的 `scripts` 属性将变得非常精简：

```json
{
  // ...
  "scripts": {
    "test": "scripty",
    "lint": "scripty",
    "build": "scripty"
  },
  "scripty": {
    "path": "../../scripts/packages" // 注意这里我们指定了 scripty 的路径
  }
  // ...
}
```

> 注意：使用 `chmod -R u+x scripts` 命令使所有的 `shell` 脚本具备可执行权限，将其写在 `README.md` 文件中！

### 格式化 commit 信息

使用 [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint) 工具作为格式化 commit 信息的不二之选。

`commitlint` 可以帮助我们检查提交的 commit 信息，它强制约束我们的 commit 信息必须在开头附加指定类型，用于标示本次提交的大致意图，支持的类型关键字有：

- feat：表示添加一个新特性；
- chore：表示做了一些与特性和修复无关的「家务事」；
- fix：表示修复了一个 Bug；
- refactor：表示本次提交是因为重构了代码；
- style：表示代码美化或格式化；
- ...

除了限定 commit 信息类型外，commitlint 还支持（虽然不是必须的）显示指定我们本次提交所对应的子项目名称。假如我们有一个名为 @mono/project1 的子项目，我们针对该项目提交的 commit 信息可以写为：

```
git commit -m "feat(project1): add a attractive button" # 注意，我们省略了 @mono 的项目前缀
```

通过下面的命令安装 commitlint 以及周边依赖：

```shell
npm i -D @commitlint/cli @commitlint/config-conventional @commitlint/config-lerna-scopes commitlint husky lerna-changelog
```

安装了 [husky](https://www.npmjs.com/package/husky)，在根目录下的 `package.json` 文件

```json
{
  //  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
  //  ...
}
```

为了能够让 commitlint 感知我们的子项目名称，我们还需在项目根目录中增加 `commitlint.config.js` 文件，并设置文件内容为：

```js
module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes']
}
```

通过在命令行执行 `echo "build(project1): change something" | npx commitlint` 命令即可验证 `commit` 信息是否通过 `commitlint` 的检查

## 如何从 multirepo 迁移至使用 monorepo 策略

如果想要导入远程仓库，或是要获取某个分支或标签该怎么做呢？答案是使用 [tomono](https://github.com/hraban/tomono)，其内容是一个 shell 脚本。

使用 tomono 导入远程仓库，您所需要做的只有两件事：

1. 创建一个包含所有需要导入 repo 地址的文本文件；
2. 执行 shell 命令：`cat repos.txt | ~/tomono/tomono.sh`（这里我们假定您的文本文件名为 repos.txt，且将 tomono 下载在用户根目录；

repo 文件内容示例如下：

```
// 1. Git仓库地址  2. 子项目名称  3. 迁移后的路径
git@github.com/backend.git @mono/backend packages/backend
git@github.com/frontend.git @mono/frontend packages/frontend
git@github.com/mobile.git @mono/mobile packages/mobile
```

## 扩展阅读

- 介绍实践 monorepo 生态：[awesome-monorepo](https://github.com/korfuri/awesome-monorepo)
