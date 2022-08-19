const {
    defineConfig
} = require("@vue/cli-service");
const path = require('path')
const resolve = (p) => path.resolve(__dirname, p)
const packageName = require('./package.json').name;
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入模块联邦
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

// const AddEntryAttributeWebpackPlugin = require('./AddEntryAttributeWebpackPlugin')
// import webpack from 'webpack';
let remoteUrl = 'http://localhost:8083'
var AddEntryAttributeWebpackPlugin = /** @class */ (function () {
    function AddEntryAttributeWebpackPlugin(matchCallback) {
        this.entryMatchCallback = matchCallback;
    }
    AddEntryAttributeWebpackPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.compilation.tap('AddEntryAttributeWebpackPlugin', function (compilation) {
            // 通过最终的 webpack 配置的 plugins 属性，根据插件的 constructor.name 拿到 html-webpack-plugin 实例
            var HtmlWebpackPluginInstance = compiler.options.plugins
                .map(function (_a) {
                var constructor = _a.constructor;
                return constructor;
            })
                .find(function (constructor) { return constructor && constructor.name === 'HtmlWebpackPlugin'; });
            if (HtmlWebpackPluginInstance) {
                // 获取 html-webpack-plugin 所有的 hooks
                var hooks = HtmlWebpackPluginInstance.getHooks(compilation);
                // 在插入标签之前做些什么
                hooks.alterAssetTagGroups.tap('AddEntryAttributeWebpackPlugin', function (data) {
                    // 拿到所有的标签，如果是 script 标签，并且满足我们的匹配函数，则将其 attributes['entry'] 设为 true
                    data.headTags.forEach(function (tag) {
                        var _a;
                        if (tag.tagName === 'script' && _this.entryMatchCallback((_a = tag.attributes) === null || _a === void 0 ? void 0 : _a.src)) {
                            // eslint-disable-next-line no-param-reassign
                            tag.attributes.entry = true;
                        }
                    });
                    return data;
                });
            }
        });
    };
    return AddEntryAttributeWebpackPlugin;
}());

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/his/'
    : "http://localhost:8081",
    transpileDependencies: true,
    // external: {
    //     vue: 'Vue',
    //     'vue-router': 'VueRouter',
    //     vuex: 'Vuex',
    //     axios: 'axios',

    //   },
    lintOnSave: false,
    productionSourceMap: true,
    devServer: {
        hot: true,
        port: 8081,
        host: "localhost",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        
        //   proxy: {
        //     '/outpNurse': {
        //         target: 'http://localhost:8081',
        //     }
        //   }
    },
    configureWebpack: {
        // injectClient: false,
        mode: 'development', // production development
        entry: {
            main: './src/main.js'
        },
        // cache: {
        //     type: "memory" // filessystem memory
        // },
        resolve: {
            extensions: [".vue", ".js", "json"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                "@": resolve("src"),
                crypto: false,
                stream: false,
                assert: false,
                http: false
            }
        },
        // output: {
        //     path: resolve('./dist'),
        //     filename: "[name].js",
        //     chunkFilename: "[name].js",
        //     clean:true
        //     // publicPath: 'auto'
        // },
        output: {
            // library: `${packageName}-[name]`,
            library:'outpNurse',
            libraryTarget: 'umd',
            // jsonpFunction: `webpackJsonp_${packageName}`,
            chunkLoadingGlobal: `webpackJsonp_${packageName}`,
            clean:true
          },
        
        devtool: false,
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-env',
                                // 'es2015', 
                                // {modules: false}
                            ],
                            plugins: [
                                '@babel/plugin-syntax-top-level-await', // 此处为新增配置
                                "transform-remove-strict-mode", // 去除严格模式
                                // '@babel/plugin-transform-runtime',
                            ]
                        }
                    }]
                },
                // {
                //     test: /\.vue$/,
                //     use: [
                //         'vue-loader'
                //     ]
                // }
            ]
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'outpNurse1',
                filename: 'remoteEntry.js',
                remotes: {
                    lib_remote: `lib_remote@${remoteUrl}/remoteEntry.js`
                },
                shared: {
                    vue: {
                        eager: true,
                        singleton: true,
                    }
                }
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                templateParameters: {
                    BASE_URL: `./`
                },
                filename: 'entry1.html', // 此处新增
                inject: 'body', // true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中
                // url: BASE_URL,  //需要这里传参
                // chunksSortMode:'manual',
                // chunksSortMode: 'dependency'
                // chunksSortMode: 'auto'
            }),
            new AddEntryAttributeWebpackPlugin((src => {
                return !!(src.match(/main\.(.*)\.js$/) || src.match('main.js'));
              }))
        ],
        experiments: {
            topLevelAwait: true, // 此处为新增配置
          },
        optimization: {
            splitChunks: false
        },
    },
};