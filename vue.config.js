const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    webSocketServer:false,
    proxy: 'http://192.168.23.129:9527'
  }
})
