// webpack的配置文件 

const {resolve}=require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
// 引入模块联邦所需要的插件
const Mfp = require('webpack').container.ModuleFederationPlugin

module.exports={
    // 打包模式
    mode:'development',

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
        ]
    },

    // 开发服务器
    devServer:{
        contentBase:resolve(__dirname,'output'),
        port:3001
    },

    // 插件配置
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        // 模块提供方写的配置
        new Mfp({
            // 应用名称 (给调用方使用)
            name: 'app1',
            // 导出文件的名称(调用方引入的文件名称)
            filename: 'app1.js',
            // 暴露模块
            exposes: {
              // 模块名称：模块对应的代码路径
              './Sitename': './src/Sitename.js'
            }
          })
    ]
    
}