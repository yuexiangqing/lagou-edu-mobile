const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,

  css: {
    extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          globalVars: {
            color1: 'orange'
          }
        }
      }
    }
  },

  chainWebpack: config => {
    // 图片压缩 loader 配置
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },

  configureWebpack: {
    externals: {
      vue: 'Vue',
      vant: 'vant'
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/style/demo.less')
      ]
    }
  }
})
