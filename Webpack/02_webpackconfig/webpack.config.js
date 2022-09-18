// webpack的配置文件 

const {resolve}=require('path')

module.exports={
    // 打包模式
    // mode:'development',
    mode:'production',

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

    },

    // 插件配置
    plugins:[

    ]
    
}