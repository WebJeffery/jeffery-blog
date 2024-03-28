# Reactive 响应式学习指南

reactivity 包的单元测试阅读顺序
ref.spec.ts -> reactive.spec.ts -> readonly.spec.ts -> reactiveArray.spec.ts -> shallowReactive.spec.ts -> effect\_\_.spec.ts -> computed.spec.ts -> collections(Map Set weekMap weekSet 的处理)

runtime-core 包的单元测试阅读顺序
vnode.spec.ts -> h.spec.ts -> vnodeHooks.spec.ts -> scheduler.spec.ts -> rendererElement.spec.ts -> rendererFragment.spec.ts -> rendererComponent.spec.ts -> rendererChildren.spec.ts(了解 diff 算法) -> rendererAttrsFallthrough.spec.ts

https://kingbultsea.github.io/vue3-analysis/book/Packages/BUGS/iframe-bug.html
