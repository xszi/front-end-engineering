const path = require('path');
// const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
      vendor: [
        'lodash'
      ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
          commons: {
              name: "vendor",
              chunks: "initial",
              minChunks: 2
          }
      }
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
          commons: {
              name: "manifest",
              chunks: "initial",
              minChunks: 2
          }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    // CommonsChunkPlugin 的 'vendor' 实例，必须在 'manifest' 实例之前引入。
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    // 能够在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来。
    // 通过指定 entry 配置中未用到的名称，此插件会自动将我们需要的内容提取到单独的包中.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // }),

  ],
  mode: "development",
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};