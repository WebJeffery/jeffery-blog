# monorepo 代码管理策略

## 前言

Vue3 采用 `monorepo` 的方式进行项目代码管理。在本文中，会从以下几个方面介绍

- `monorepo` 是什么，有哪些优缺点？了解其技术应用背景、解决技术痛点
- 探讨几种实现 `monorepo` 策略的具体方案？根据项目场景选择适合的技术方案
- `Vue3` 源代码 monrepo 实现，了解其实现细节。
- 搭建 monorepo 真实项目

## monorepo 是什么？

Monorepo（单一代码仓库）是一种代码管理策略，用于将多个相关项目存储在同一个代码仓库中。相比于传统的多个独立代码仓库，Monorepo 的目标是提高代码的可共享性、可重用性和协作效率

那么，采取一种新的策略，肯定是因为该策略具备一些优点。从下面这张图中，可以看出，项目代码的管理策略是在实践中不断发展变化的。

![monorepo](./images/monorepo.png)

- 第一阶段 monolith：一开始不管多少代码都放在一个项目中进行管理，随着时间推移，代码量越来越多，每一次构建都会花费很长时间，代码耦合度强，可维护性差，代码冲突频繁等各种问题逐渐显现且愈加严重。
- 第二阶段 multi repo：将业务相对独立的功能拆分不同的项目进行维护，这样确实解决了一些问题，比如项目自治，可维护性变强。不过也存在一些问题，例如代码不能共享，联调困难，每个项目都要重复安装，版本管理等问题
- 第三阶段 monorepo：由于存在以上种种问题，聪明的工程师想出的一种代码管理策略，接下来就分析 monorepo 有什么优势和劣势。

## monorepo 优劣势？

通过 monorepo 策略管理的代码，目录结构看起来会是下面这样，将不同项目的目录汇集到一个目录之下

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

### monorepo 优势

monorepo 在代码管理上优势：

1. **代码重用变得容易**：由于所有的项目代码都集中于一个代码仓库，很容易抽离出各个项目共用的业务组件或工具，在代码内引用；
2. **依赖管理变得简单**：由于项目之间的引用路径内化在同一个仓库之中，容易追踪当某个项目的代码修改后，会影响到其他哪些项目。通过使用 lerna 一些工具，可以做到版本依赖管理和版本号自动升级；
3. **统一构建和测试**：使用统一的构建配置和流程，减少配置和维护的工作量。此外，可以在整个 Monorepo 中执行统一的测试流程，确保所有项目质量和稳定性。
4. **便于协作和开发**：在一个代码仓库中，更容易地浏览、搜索和理解整个项目的代码，便于团队成员之间的协作。Monorepo 还可以促进跨项目的合作和知识共享，提高团队的整体效率和协同能力。
5. **更少的内存**：多个项目引用相同的依赖，只需要安装一份依赖即可，减少重复安装节省内存空间

### monorepo 劣势

其实，优势和劣势都是相对的，在一定程度上，如果不遵循约束和规范，优势也会转换为劣势，所以在设计上要更加严谨，这也是学习源码优秀设计的原因之一。

1. **新员工的学习成本变高**：不同于一个项目一个代码仓库这种模式下，在 monorepo 策略下，新人可能不得不花更多精力来理清各个代码仓库之间的相互逻辑，当然这个成本可以通过新人文档的方式来解决，但编写和维护文档也需要精力成本；
2. **团队协作和权限管理变复杂**：在 Monorepo 中，团队成员需要共享同一个代码仓库，并且对所有模块都具有相同的权限级别。这可能会导致一些团队成员对整个项目的代码和资源具有过多的访问权限，增加了潜在的安全风险。
3. **代码耦合和影响范围**：在 Monorepo 中，一个模块的更改可能会对其他模块产生意外的影响，增加了代码耦合性，并可能导致意外的副作用。

### 如何取舍？

看了之后是不是在犹豫要不要使用 monorepo 管理代码了，别灰心，软件开发领域从来没有完美一说，需要根据组织和特定的项目来选择。可以把 monorepo 策略实践在「项目」这个级别，即从逻辑上确定项目与项目之间的关联性，然后把相关联的项目整合在同一个仓库下。

通常情况下，我们不会有太多相互关联的项目，这意味着我们能够免费得到 monorepo 策略的所有好处，好好利用放大它的优点，同时通过制定规范、项目文档管理规范补齐它的短板。

## monorepo 实现方案

重新强调一下，`monorepo` 它是一个策略，是一种思想，而不是一个具体的工具，不要将它和 `lenrn`、 `yarn workspace` 划上等号，实现这个策略可以有多种方案，那么介绍以下 3 种方案。

### lerna

[Lerna](https://lerna.js.org/) 是为 monorepo 而生的工具，在项目中配置 lerna

1、项目根目录安装 `lenrna` 包 `npm install lerna -D`，使用 `npx lerna init` 初始化，于是根目录新增一个 `lerna.json` 文件，默认内容为：

```json
{
  "packages": ["packages/*"],
  // 默认 npm 省略
  "npmClient": "npm"
}
```

lerna 默认工作目录是 `packages`，lerna 默认使用的是 `npm`，省略了配置项 `"npmClient": "npm"`

2、在 packages 目录创建多个独立的子包，分别初始化 `package.json` 文件，如下

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

3、在根项目 `package.json` 配置 `scripts` 运行命令，然后执行 `npm install`，安装 packages 各个子包依赖

```json
{
  "scripts": {
    "bootstrap": "lerna bootstrap"
  }
}
```

#### lerna 如何工作

1、`lerna` 有两种工作模式：模式固定模式(Fixed)、独立模式(Independent)，使用 `version` 关键字表示

```json
{
  "packages": ["packages/*"],
  "npmClient": "npm",
  "version": "independent"
}
```

- `independent` 独立模式：将每个子项目的版本号看作是相互独立的。当某个子项目代码更新后，运行 `lerna publish` 时，关联的子项目版本号**不会自动升级**

- `Fixed` 固定模式：相反，使用固定模式时，任一子项目的代码变动，都会导致所有子项目的版本号基于当前指定的版本号升级。

2、Lerna 自动检测发布，判断逻辑

1. 校验本地是否有没有被 commit 内容？
2. 判断当前的分支是否正常？
3. 判断当前分支是否在 remote 存在？
4. 判断当前分支是否在 lerna.json 允许的 allowBranch 设置之中？
5. 判断当前分支提交是否落后于 remote

#### lerna 常用命令

Lerna 提供了很多 CLI 命令以满足我们的各种需求，但根据 2/8 法则，应该首先关注以下这些命令

- lerna run：会像执行一个 for 循环一样，在所有子项目中执行 npm script 脚本，并且，它会非常智能的识别依赖关系，并从根依赖开始执行命令；
- lerna exec：像 lerna run 一样，会按照依赖顺序执行命令，不同的是，它可以执行任何命令，例如 shell 脚本；
- lerna publish：发布代码有变动的 package，因此首先需要在使用 Lerna 前使用 git commit 命令提交代码，好让 Lerna 有一个 baseline；
- lerna add：将本地或远程的包作为依赖添加至当前的 monorepo 仓库中，该命令让 Lerna 可以识别并追踪包之间的依赖关系，因此非常重要；
- `--concurrency <number>`：参数可以使 Lerna 利用计算机上的多个核心，并发运行，从而提升构建速度；
- `--scope '@mono/{pkg1,pkg2}'`：--scope 参数可以指定 Lerna 命令的运行环境，通过使用该参数，Lerna 将不再是一把梭的在所有仓库中执行命令，而是可以精准地在我们所指定的仓库中执行命令，并且还支持示例中的模版语法；
- `--stream`：该参数可使我们查看 Lerna 运行时的命令执行信息

### yarn workspaces

`yarn workspaces` 天然自带 `monorepo` 能力。虽然没有专用的配置文件，但需要在项目根路径下 `package.json` 文件中做些配置，例如

```json
{
  "workspaces": ["packages/*"]
}
```

执行 `yarn install`，各个子项目会安装各自的依赖项，配置相对简单

**将 lerna + yarn workspace 结合实现 monorepo**

在这里 `lerna` 和 `yarn workspace` 角色分明，依赖管理的工作交给 `yarn worksapces`，利用 `lerna` 提供的一些工具命令来优化对 monorepo 类型项目的管理，比如启动不同的项目，利用 lerna 选择性的执行某些命令。同时 lerna 还提供了诸如版本发布等可以优化开发体验的工具

### pnpm workspace

`pnpm` 作为一个比较新的工具，相比于 `yarn` 安装速度更快，占用内存更少，它也和 yarn 一样，提供了工作空间实现 `monorepo`

`pnpm` 配置 monorepo，在项目根目录下新建 `pnpm-workspace.yaml` 文件

```
  packages:
  - 'packages/*'
```

通过上面简单的配置，pnpm 就搭建了 `monorepo` 环境，实现起来相当简单。总的来说，小项目不需要 monorepo，在大项目中也许需要将业务和组件库代码抽离，需要考虑利用这种手段，实现多个项目的代码和配置共享

跟 `yarn` 一样，`pnpm` 可以和 `lerna` 一起工作
。接下来介绍 Vue3 中 pnpm 实现 monorpo

## Vue3 实现 monorepo

在 Vue3 项目 `package.json` 写明包管理器使用 `pnpm`，node 版本 `18+`，推荐全局安装 `npm i -g pnpm`

```json
{
  "packageManager": "pnpm@8.15.0",
  "engines": {
    "node": ">=18.12.0"
  }
}
```

`pnpm-workspace.yaml` 配置文件告诉 pnpm 包管理目录是 `packages`

```json
packages:
  - 'packages/*'
```

安装项目依赖 `pnpm install`，在根目录和 packages 子目录下分别安装依赖包，运行 `pnpm dev` 打包 vue 代码

可以看到 在 `packages` 目录有十几个项目，Vue3 将内部实现的部分抽象成了一个个模块，每个模块都有自己的类型声明、单元测试、构建测试流程， 打包独立 `npm` 发布，这样设计便于维护、发版和扩展。

同时，独立的子项目模块不仅仅可以在 vue3 中使用，例如 `reactivity` 响应式这个模块，安装 `npm i @vue/reactivity` 可以在 js、react 其他项目中使用

## 大型应用构建 Monorepo 方案

构建大型应用的方案有 [Turborepo](https://turbo.build/)、[Rush](https://rushstack.io/)、[Nx](https://nx.app/company)

### Turborepo

[Turborepo](https://turbo.build/) 是 Vercel 团队开源的高性能构建代码仓库系统，允许开发者使用不同的构建系统。

构建加速思路：

- Multiple Running Task：构建任务并行进行，构建顺序交给开发者配置
- Cache、Remote Cache：通过缓存 及 远程缓存，减少构建时间

### Rush

- 解决了幽灵依赖：将项目所有依赖都安装到 Repo 根目录的 `common/temp` 下，通过软链接到各项目，保证了 `node_modules` 下依赖与 `package.json` 一致

- 并行构建：Rush 支持并行构建多个项目，提高了构建效率

- 插件系统：Rush 提供了丰富的插件系统，可以扩展其功能，满足不同的需求，[具体参考](https://rushstack.io/zh-cn/pages/heft/core_plugins/)

- 项目发布，ChangeLog 支持友好：自动修改项目版本号，自动生成 ChangeLog

### Nx

[Nx](https://nx.app/company) 是 Nrwl 团队开发的，同时在维护 Lerna，目前 Nx 可以与 Learn 5.1 及以上集成使用
构建加速思路（比 Turborepo 更丰富）

- 缓存： 通过缓存 及 远程缓存，减少构建时间（远程缓存：Nx 公开了一个公共 API，它允许您提供自己的远程缓存实现，Turborepo 必须使用内置的远程缓存）
- 增量构建： 最小范围构建，非全量构建
- 并行构建： Nx 自动分析项目的关联关系，对这些任务进行排序以最大化并行性
- 分布式构建： 结合 Nx Cloud，您的任务将自动分布在 CI 代理中（多台远程构建机器），同时考虑构建顺序、最大化并行化和代理利用率

用 Nx 强大的任务调度器加速 Lerna：Lerna 擅长管理依赖关系和发布，但扩展基于 Lerna 的 Monorepos 很快就会变得很痛苦，因为 Lerna 很慢。这就是 Nx 的闪光点，也是它可以真正加速你的 monorepo 的地方。

## monorepo 方案概览

| 工具              | 优点                                                                    | 缺点                                                       | 官网链接                          |
| ----------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------- |
| Bazel             | 构建速度快；支持多种编程语言                                            | 配置和学习曲线较陡峭                                       | https://bazel.build/              |
| Gradle Build Tool | 支持多种编程语言；易于使用                                              | 对大型项目的支持不够好                                     | https://gradle.org/               |
| Lage              | 支持多种语言和框架；易于使用                                            | 相对较新，文档和社区支持相对较少                           | https://github.com/lage-tech/lage |
| Lerna             | 非常适合管理 npm 包；可以为子包设置依赖关系，并且可以在子包之间共享代码 | 依赖关系管理不太灵活，需要手动管理依赖关系等               | https://lerna.js.org/             |
| Nx                | 支持多种前端框架；提供了许多有用的命令和插件                            | 需要学习 Nx 的语法和命令，对于新手来说可能有一定的学习曲线 | https://nx.dev/                   |
| Pants             | 构建速度快；可以跨多个语言和框架构建                                    | 配置和学习曲线较陡峭                                       | https://www.pantsbuild.org/       |
| Rush              | 支持多个 npm 包；可以自动处理依赖关系                                   | 对大型项目的支持不够好                                     | https://rushjs.io/                |
| Turborepo         | 构建速度快；可以自动处理依赖关系                                        | 相对较新，文档和社区支持相对较少                           | https://turborepo.com/            |

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
- [使用 NX+PNPM 搭建 Monorepo 项目](https://juejin.cn/post/7242623686900482108)
- http://1.13.188.124/today/20230225.html

- https://www.pipipi.net/26124.html
- https://www.yangyitao.com/vue3/01.%E4%BB%A3%E7%A0%81%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5-monorepo.html
- https://notes.fe-mm.com/fe/monorepo/
