const { defineConfig } = require("@vue/cli-service");
const { name } = require('./package');
// module.exports = defineConfig({
    module.exports = {
        transpileDependencies: true,
        devServer: {
            port: 8081,
            host: "localhost",
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          proxy: {
            '/outpNurse': {
                target: 'http://localhost:8081',
            }
          }
        },
        configureWebpack: {
          output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            // jsonpFunction: `webpackJsonp_${name}`,
            chunkLoadingGlobal: `webpackJsonp_${name}`,
          },
        }
      };