# pnpm 包管理工具

Pnpm 是新一代的 nodejs 包管理工具。第一个 “P”意为 Performance，代表着更佳的性能。

它的主要优点有两个，一是采用了 hard-link 机制，避免了包的重复安装，节省了空间，同时能提高项目依赖的安装速度。二是对 monorepo 的支持非常友好，只需要一条配置就能实现。

**Vue3 源码采用 monorepo 方式进行管理，将众多模块拆分到 packages 目录中**
