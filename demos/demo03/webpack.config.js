
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // 在每次构建前清理 /dist 文件夹
        new CleanWebpackPlugin(),
        // HtmlWebpackPlugin 会默认生成 index.html 文件
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
  };