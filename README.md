# webpack学习笔记

webpack的作用：

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（less，TypeScript等），
并将其转换和打包为合适的格式供浏览器使用。


* 打包：可以把多个Javascript文件打包成一个文件，减少服务器压力和下载带宽。
* 转换：把拓展语言转换成为普通的JavaScript，让浏览器顺利运行。
* 优化：前端变的越来越复杂后，性能也会遇到问题，而WebPack也开始肩负起了优化和提升性能的责任。

### demo01 webpack起步

```
  demo01 --- webpack起步
  |- package.json
  |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

### demo02 管理资源

- 加载css
- 加载图片
- 加载字体
- 加载数据

### demo03 管理输出

- 多个打包文件
- 插件HtmlWebpackPlugin
  HtmlWebpackPlugin 会默认生成 index.html 文件
- CleanWebpackPlugin
  在每次构建前清理 /dist 文件夹

### demo04 开发

> 工具仅用于开发环境，请不要在生产环境中使用它们。

- 使用```source map``` 
- 使用观察模式(需要重新刷新浏览器)
- 使用 webpack-dev-server
- 使用 webpack-dev-middleware（webpack-dev-server 在内部使用了它）

### demo05 模块热替换

- 启用 HMR（Hot Module Replacement）
- 通过 Node.js API(printMe绑定问题)
- HMR 修改样式表

### demo06 tree shaking

> 用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。
> 你可以将应用程序想象成一棵树。绿色表示实际用到的源码和 library，
> 是树上活的树叶。灰色表示无用的代码，是秋天树上枯萎的树叶。
> 为了除去死去的树叶，你必须摇动这棵树，使它们落下。

```
//package.json
  "sideEffects": false,
  "sideEffects": [
    "./src/some-side-effectful-file.js",
    "*.css"
  ]
//webpack.config.js
  mode: "development"
```

### demo07 生产环境构建

```
 |- webpack.common.js
 |- webpack.dev.js
 |- webpack.prod.js
```
> 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。

- 指定环境(process.env.NODE_ENV)

> NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量。

### demo08 代码分离

> 把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

- 入口起点：使用 entry 配置手动地分离代码。

  lodash，这样就在两个 bundle 中造成重复引用

- 防止重复(demo08A)：使用 CommonsChunkPlugin 去重和分离 chunk。

  一些对于代码分离很有帮助的插件和 loaders：

    1. ExtractTextPlugin: 用于将 CSS 从主应用程序中分离。
    2. bundle-loader: 用于分离代码和延迟加载生成的 bundle。
    3. promise-loader: 类似于 bundle-loader ，但是使用的是 promises。
    
- 动态导入(demo08B)：通过模块的内联函数调用来分离代码。

- bundle 分析

### demo09 懒加载

> 代码分离存在的问题: 每次加载页面的时候都会请求它。这样做并没有对我们有很多帮助，还会对性能产生负面影响。

- 增加一个交互 (绑定点击加载)

[Lazy Load in Vue using Webpack's code splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)

1. Components, also known as async components
2. Router
3. Vuex modules

### demo10 缓存

> 确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。

- 输出文件的文件名(Output Filenames)
- 提取模板(Extracting Boilerplate)
  1. manifest(webpack)
  2. vendor(第三方库(library))
- 模块标识符(Module Identifiers)
 > webpack3 还需要加一个插件才能保持只有main打包文件变化
  > 
