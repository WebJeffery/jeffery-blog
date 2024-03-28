import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.69210375.js";const m=JSON.parse('{"title":"基于 Editor.js 开发富文本编辑器库","description":"","frontmatter":{},"headers":[],"relativePath":"editor/editorjs/component.md","lastUpdated":1711638490000}'),l={name:"editor/editorjs/component.md"},p=e(`<h1 id="基于-editor-js-开发富文本编辑器库" tabindex="-1">基于 Editor.js 开发富文本编辑器库 <a class="header-anchor" href="#基于-editor-js-开发富文本编辑器库" aria-label="Permalink to &quot;基于 Editor.js 开发富文本编辑器库&quot;">​</a></h1><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h2><p>Editor.js 提供了简单而直观的用户界面，根据需求可以灵活添加自定义的编辑工具，通过插件扩展功能</p><p><code>Editorjs</code> 使用 js 开发，脱离框架依赖，因此可以基于它封装富文本编辑器，用于 Vue 和 React 项目</p><p><a href="https://github.com/WebJeffery/editor-js-component" target="_blank" rel="noreferrer">editor-js-component</a> 是基于 Editorjs 封装的库，通过 monorepo 管理项目，不局限框架</p><p><a href="https://vue-p4wjes.stackblitz.io/" target="_blank" rel="noreferrer">Demo 示例</a></p><p><img src="https://files.mdnice.com/user/26477/a935d78c-b92a-4f4b-bd25-ed1aa6e5ad8d.png" alt=""></p><h2 id="editor-js-component" tabindex="-1">editor-js-component <a class="header-anchor" href="#editor-js-component" aria-label="Permalink to &quot;editor-js-component&quot;">​</a></h2><p><a href="https://github.com/WebJeffery/editor-js-component/blob/master/packages/editorjs/README.md" target="_blank" rel="noreferrer">editorjs-js-component</a> 是基于 Editor.js 封装的库，不局限框架，可以用于 Vue 和 React 项目</p><p>安装</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># NPM</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">editor-js-component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or Yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">editor-js-component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or Pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">editor-js-component</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://webjeffery.github.io/editor-js-component/develop/editor-js-component.html" target="_blank" rel="noreferrer">查看文档</a>，使用</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">useEditorjs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">editor-js-component</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 执行函数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> editorInstance </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">useEditorjs</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实例化编辑器，开启执行</span></span>
<span class="line"><span style="color:#BABED8;">editorInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="editorjs-component-vue" tabindex="-1">editorjs-component-vue <a class="header-anchor" href="#editorjs-component-vue" aria-label="Permalink to &quot;editorjs-component-vue&quot;">​</a></h2><p><a href="https://github.com/WebJeffery/editor-js-component/blob/master/packages/editorjs-vue/README.md" target="_blank" rel="noreferrer">editorjs-component-vue</a> 是基于 editor-js-component 封装 Vue3 组件</p><p><a href="https://webjeffery.github.io/editor-js-component/develop/editorjs-component-vue.html" target="_blank" rel="noreferrer">文档</a> 查看使用</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># NPM</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">editorjs-component-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or Yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">editorjs-component-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or Pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">editorjs-component-vue</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>组件注册</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">EditorJsVue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">EditorJsParser</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">editorjs-component-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or 全局注册组件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(EditorJsVue)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>组件使用</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">EditorJsVue</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor-left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:messages</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i18nMessage</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:initialized</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onInitialized</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:tool-config</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toolConfig</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@changeData</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editorChange</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><p>Editorjs 以模块化的方式开发，通过插件方式扩展功能，如标题、段落、列表、表格等</p><p>根据 Editorjs 提供的 API 开发富文本插件功能</p><p><a href="https://github.com/WebJeffery/editor-js-component/tree/master/packages" target="_blank" rel="noreferrer">插件列表</a>，可以开发满足于自己的插件</p><ul><li>header</li><li>list</li><li>code</li><li>inlineCode</li><li>personality</li><li>embed</li><li>linkTool</li><li>marker</li><li>table</li><li>raw</li><li>delimiter</li><li>quote</li><li>image</li><li>warning</li><li>paragraph</li><li>checklist</li></ul><p>如果对富文本编辑器感兴趣，欢迎<a href="https://github.com/WebJeffery/editor-js-component" target="_blank" rel="noreferrer">加入</a></p>`,27),o=[p];function r(t,c,i,y,d,D){return n(),a("div",null,o)}const u=s(l,[["render",r]]);export{m as __pageData,u as default};