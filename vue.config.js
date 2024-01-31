const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    webSocketServer:false,
    proxy: 'http://localhost:9527'
  }
})
