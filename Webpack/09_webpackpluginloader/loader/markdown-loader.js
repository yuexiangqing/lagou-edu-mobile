const marked = require('marked')
const {getOptions} = require('loader-utils')


// 导出函数(建议使用普通函数，不要用箭头函数)

module.exports=function(source){
    //获取Loader 的配置项
    const options =  getOptions(this)
    console.log('my loader',options);



    // return 'my loader'
    // 返回的必须是js代码，否则会报错
    // return 'console.log("my loader")'

    const html = marked(source)
    // "<h1 id="关于">关于</h1><p>我是张三</p>"
    // 直接返回，可能因为引号的问题，导致报错
    // return `module.exports="${html}"`

    // return `module.exports=${JSON.stringify(html)}`

    // 直接返回html,交给下一个loader进行处理
    return html
}
 