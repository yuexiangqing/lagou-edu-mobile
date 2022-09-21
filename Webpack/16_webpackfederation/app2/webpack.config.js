// webpack的配置文件 

const {resolve}=require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
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
        port:3002 
    },

    // 插件配置
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new Mfp({
            // 导入模块
            remotes: {
              // 导入别名："远程应用名称@远程应用地址/远程导出文件的名称"
              appone: "app1@http://localhost:3001/app1.js"  //导出的文件名是app1中webpack.config.js种声明的filename
            }
          })
    ]
    
}