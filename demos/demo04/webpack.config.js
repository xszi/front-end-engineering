const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
    // JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。
    // 如果一个错误来自于 b.js，source map 就会明确的告诉你。
    // inline-source-map仅在开发环境中使用，生产环境中inline-*非常消耗性能。
  devtool: 'inline-source-map',
    // webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。
    // 如果现在修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码。
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 
    // publicPath: '/'
  }
};