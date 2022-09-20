// webpack的配置文件 

const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const StylelintPlugin = require('stylelint-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require("eslint-webpack-plugin")
const { __esModule } = require('mini-css-extract-plugin/dist')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = (env, argv) => {
    const config = {
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
                        // MiniCssExtractPlugin.loader,
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "../"
                            }
                        },

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
                        // MiniCssExtractPlugin.loader,

                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "../"
                            }
                        },

                        // 2.css-loader按照CommonJS规范，将样式文件，输出到JS中
                        'css-loader',

                        // 1.通过postcss-loader 给样式属性添加浏览器前缀
                        'postcss-loader',


                        //1. 将less转成普通的css
                        'less-loader'

                    ]
                },

                // 处理图片
                {
                    test: /\.(png|gif|jpe?g)$/i,
                    // use: {
                    //     // loader:"file-loader"
                    //     loader: "url-loader",
                    //     options: {
                    //         // 指定图片大小，小于该数值的图片会被转成base64 
                    //         limit: 8 * 1024, //8kb
                    //         // [name]是图片原来的名称，[ext]是原来的后缀名
                    //         name: "image/[name].[ext]",
                    //         // url-loader默认采用ES MODULes 规范进行解析，但是html-loader 引入图片使用的是commonjs 规范，所以导致
                    //         // 解决：关闭url-loader 默认的ES MOdules规范，强制url使用commonjs规范进行打包
                    //         esModule: false
                    //     }
                    // }

                    // 使用资源模块对图片进行处理
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024
                        }
                    },
                    generator: {
                        //打包构建后的字体文件名和路径
                        filename: "image/[name][ext]"
                    }
                },

                // 处理html

                // {
                //     test: /\.(htm|html)$/i,
                //     use: {
                //     loader: 'html-loader',
                //     options:{
                //         // webpack4中只需要在url-loader 配置esModule:false
                //         // webpack5中需要html-loader中，也配置esModule:false
                //         esModule:false
                //     }

                // }
                // },

                // 配置字体文件
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/i,
                    // use: {
                    //     loader: 'file-loader',
                    //     options: {
                    //         // 打包构建后的字体文件名和路径
                    //         name: 'fonts/[name].[ext]'
                    //     }
                    // }

                    // 使用资源模块处理字体文件
                    // asset可以在 asset/resource 和 asset/inline 之间进行选择
                    // 如果文件小于8kb，则使用asset/inline，如果大雨8kb，则使用asset/resource处理
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024
                        }
                    },
                    generator: {
                        //打包构建后的字体文件名和路径
                        filename: "fonts/[name][ext]"
                    }
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
            // 指定发布内容的路径
            contentBase: resolve(__dirname, 'dist'), // 必须是绝对路径 // 新版本的 webpack-server 已经没有这个参数了，使用 static
            // static: {
            //    directory: resolve(__dirname, 'dist'),
            // },
            // 启用 gzip 压缩 
            compress: true,
            // 指定发布端口号
            port: 9200,
            // 启动自动更新（禁用hot）
            liveReload: true,

            // 配置代理：解决接口跨域问题
            proxy: {
                // http://localhost:9200/api
                '/api': {
                    // 当我们访问 http://localhost:9200/api/users =>https//api.github.com/api/users
                    target: 'https://api.github.com',
                    // http://localhost:9200/api/users =>https//api.github.com/users
                    pathRewrite: {
                        '^/api': "" //当配置到以api开头的，就会省略到api
                    },
                    // 不能使用Localhost:9200 作为 github的主机名
                    changeOrigin: true
                }
            }
        },

        // 配置目标
        target: "web",


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
                template: './src/index.ejs',
                // 指定HTML中使用的变量
                title: "Webpack Demo"
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
            new ESLintPlugin({
                // 自动解决常规的代码格式报错
                fix: true
            }),


            // 直接将 src 下不需要特殊处理的文件，直接复制到输出目录中
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: "src/public",
                        to: "public"
                    }
                ]
            }),

            // 打包之前先清除历史文件
            new CleanWebpackPlugin()

        ]
    }

    // 判断当前是否是生产环境打包
    if(env.production){
        config.mode="production"
        config.plugins= [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css' //原来叫什么现在就叫什么
            }),
            // new StylelintPlugin({
            //     // 指定需要进行格式校验的文件
            //     files: ['src/css/*.{css,less,sass,scss}']
            //   }),
            

            // 开发环境下，不需要代码压缩
            //压缩css
            new OptimizeCssAssetsPlugin(),


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


            new ESLintPlugin({
                // 自动解决常规的代码格式报错
                fix: true
            }),


            // 直接将 src 下不需要特殊处理的文件，直接复制到输出目录中
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: "src/public",
                        to: "public"
                    }
                ]
            }),

            // 打包之前先清除历史文件
            new CleanWebpackPlugin()

        ]
    }
    return config
}
