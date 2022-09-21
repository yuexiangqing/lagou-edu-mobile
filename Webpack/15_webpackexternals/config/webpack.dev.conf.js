// 开发配置文件

const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const devWebpackConfig = merge(baseWebpackConfig, {
  // 这里是开发模式对应的配置
  mode: 'development',

  plugins: [
    new webpack.DefinePlugin({
      // 开发环境下的接口地址
      // 变量后面的值，是一段代码片段
      API_BASE_URL: JSON.stringify('http://apidev.example.com')
    }),

    // Html 的配置
    new HtmlWebpackPlugin({
      // 指定打包后的文件名称
      filename: 'index.html',

      // 用来指定，生成 HTML 的模板
      template: './src/index.ejs',
      // 指定 HTML 中使用的变量
      title: "Webpack Demo"
    }),
    new HtmlWebpackPlugin({
      // 指定打包后的文件名称
      filename: 'about.html',
      // 用来指定，生成 HTML 的模板
      template: './src/index.ejs',
      // 指定 HTML 中使用的变量
      title: "关于我们"
    }),
  ]
})

module.exports = devWebpackConfig