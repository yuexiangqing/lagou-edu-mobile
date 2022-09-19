// webpack的配置文件 

const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const StylelintPlugin = require('stylelint-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require("eslint-webpack-plugin")


module.exports = {
    // 打包模式
    mode: 'development',
    // mode:'production',

    // 入口文件
    entry: './src/index.js',

    // 出口配置
    output: {
        // 指定输出目录（输出目录必须是绝对路径）
        // path:resolve(__dirname,'dist'),//不想打包到’dist'下了
        path: resolve(__dirname, 'output'),
        // 输出文件名称
        // filename:'main.js'  //输出文件名也更改
        filename: 'bundle.js'
    },

    // module模块配置
    module: {
        rules: [
            //指定多个配置规则
            {
                test: /\.css$/i,
                // use中loader的加载顺序：先下后上
                use: [
                    // 2.将js中的样式，挂载到<style>标签中
                    // 'style-loader',

                    // 2.将css打包到独立的文件中
                    MiniCssExtractPlugin.loader,

                    //1.1 css-loader按照CommonJS规范，将样式文件，输出到JS中
                    'css-loader',

                    // 1.通过postcss-loader 给样式属性添加浏览器前缀
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/i,
                // use中loader的加载顺序：先下后上
                use: [
                    // 3.将js中的样式，挂载到<style>标签中
                    // 'style-loader',

                    // 3.将css打包到独立的文件中
                    MiniCssExtractPlugin.loader,

                    // 2.css-loader按照CommonJS规范，将样式文件，输出到JS中
                    'css-loader',

                    // 1.通过postcss-loader 给样式属性添加浏览器前缀
                    'postcss-loader',


                    //1. 将less转成普通的css
                    'less-loader'

                ]
            },

            // 配置JS
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                {
                                    // 按需加载
                                    useBuiltIns: 'usage',
                                    // corejs 的版本
                                    corejs: 3,
                                    // targets: "defaults" }]
                                    // 如果是运行在浏览器下面，还可以指定具体的浏览器
 
                                    targets: {
                                        chrome: '58',
                                        ie: '9',
                                        firefox: '60',
                                        safari: '10',
                                        edge: '17'
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },

    // 开发服务器
    devServer: {

    },

    // 插件配置
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css' //原来叫什么现在就叫什么
        }),
        // new StylelintPlugin({
        //     // 指定需要进行格式校验的文件
        //     files: ['src/css/*.{css,less,sass,scss}']
        //   }),
        //压缩css
        new OptimizeCssAssetsPlugin(),


        // Html的配置
        new HtmlWebpackPlugin({
            // 指定打包后的文件名称
            filename: 'index.html',
            // template 用来指定生成html的模版 ,模板的名称
            template: './src/index.html',
            // 指定HTML中使用的变量
            title: "Webpack Demo"
        }),

        // 可以打包多个html文件

        new HtmlWebpackPlugin({
            // 指定打包后的文件名称
            filename: 'about.html',
            // template 用来指定生成html的模版 ,模板的名称
            template: './src/index.html',
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
        new ESLintPlugin({
            // 自动解决常规的代码格式报错
            fix: true
        })
    ]
}