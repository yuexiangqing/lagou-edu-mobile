// 声明自定义插件
class MyPlugin {
    constructor(options) {
        console.log("插件配置选项", options)
        this.userOptions=options||{}
    }
    // 必须声明 apply 方法
    apply(compiler) {
        // 在钩子上挂载功能
        // 删除注释
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation是此次打包的上下文，我们可以通过它访问打包过程中的一些变量
            for (const name in compilation.assets) {
                console.log(name)
                // 针对css文件，执行相关操作
                // if(name.endsWith('.css')){   //判断是否以css为后缀
                if(name.endsWith(this.userOptions.target)){  
                    // 获取处理之前的内容 声明一个变量来接收
                    const contents= compilation.assets[name].source()   //可以通过name属性，来拿取里面的内容
                    // 将原来的内容，通过正则表达式，删除注释
                    const noComments = contents.replace(/\/\*[\s\S]*?\*\//g,'')
                    // 将处理后的结果，替换掉
                    compilation.assets[name]={
                        source:()=>noComments,
                        size:()=>noComments.length  //文件处理后的大小
                    }
                }
            }
        })
    }
}
module.exports = MyPlugin

