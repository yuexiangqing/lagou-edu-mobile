// 生产配置文件
const {merge}=require("webpack-merge")
const baseWebpackConfig =require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

const prodWebpackConfig = merge(baseWebpackConfig,{

    // 这里是生成模式对应的配置
    mode:'production',
    plugins:[
        new webpack.DefinePlugin({
            // 变量后面的值，是一个代码片段 (程序不会把他当成一个字符串)
            // 环境下的接口地址
            // API_BASE_URL: 'http://apiprod.example.com' // 如果要最后输出为字符串，需要用如下形式：
            API_BASE_URL: JSON.stringify('http://apidev.example.com')
          }),

         // Html的配置
         new HtmlWebpackPlugin({
            // 指定打包后的文件名称
            filename: 'index.html',
            // template 用来指定生成html的模版 ,模板的名称
            template: './src/index.ejs',
            // 指定HTML中使用的变量
            title: "Webpack Demo",
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }

        }),

        // 可以打包多个html文件

        new HtmlWebpackPlugin({
            // 指定打包后的文件名称
            filename: 'about.html',
            // template 用来指定生成html的模版 ,模板的名称
            template: './src/index.ejs',
            // 指定HTML中使用的变量
            title: "关于我们",
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }), 

        //压缩css
        new OptimizeCssAssetsPlugin(),
    ]

}) 
module.exports=prodWebpackConfig