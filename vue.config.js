const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/demo-site/',
  devServer: {
    proxy: {
      '/myApi': {
        target: 'http://apis.juhe.cn/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/myApi': ''
        }
      }
    }
  }
})
