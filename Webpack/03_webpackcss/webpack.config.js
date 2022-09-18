// webpack的配置文件 

const {resolve}=require('path')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports={
    // 打包模式
    mode:'development',
    // mode:'production',

    // 入口文件
    entry:'./src/index.js',

    // 出口配置
    output:{
        // 指定输出目录（输出目录必须是绝对路径）
        // path:resolve(__dirname,'dist'),//不想打包到’dist'下了
        path:resolve(__dirname,'output'),
        // 输出文件名称
        // filename:'main.js'  //输出文件名也更改
        filename:'bundle.js'
    },

    // module模块配置
    module:{
        rules:[
            //指定多个配置规则
            {
                test: /.css$/i,
                // use中loader的加载顺序：先下后上
                use:[
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
                use:[
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
            }
        ]
    },

    // 开发服务器
    devServer:{

    },

    // 插件配置
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].css' //原来叫什么现在就叫什么
        }),
        new StylelintPlugin({
            // 指定需要进行格式校验的文件
            files: ['src/css/*.{css,less,sass,scss}']
          }),
        //压缩css
        new OptimizeCssAssetsPlugin()
    ]
    
}