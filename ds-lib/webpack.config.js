
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // clean插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 指定打包文件的目录
        filename: '[name].js' // 打包后文件的名称
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定loader加载的规则
        rules: [{
            test: /\.ts$/, // 指定规则生效的文件：以ts结尾的文件
            // use: 'ts-loader', // 要使用的loader
            // ts先由ts-loader转换成js文件，再由babel中target指定的浏览器版本，将js转成对应的语法。配置了babel后不需要考虑使用es5还是es6的版本了，在target中指定了需要兼容的浏览器版本，babel会自动帮我们转
            use: [{
                loader: 'babel-loader', // 指定加载器
                // 设置babel
                options: {
                    // 设置预定义的环境
                    presets: [
                        [
                            '@babel/preset-env', // 指定环境的插件
                            // 配置信息
                            {
                                targets: { chrome: 58, ie: 11 }, // 要兼容的目标浏览器及版本（ie11不支持es6语法，写上 ie: 11 打包时就会编译成支持到ie11）
                                corejs: 3, // 指定corejs的版本（根据package.json中的版本，只写整数）
                                useBuiltIns: 'usage' // 使用corejs的方式，'usage'表示按需加载
                            }
                        ]
                    ]
                }
            },
                'ts-loader'
            ],
            exclude: /node-modules/ // 要排除的文件
        }]
    }, // 设置哪些文件类型可以作为模块被引用
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 复制出来的html文件，会默认引入js代码
            filename: "index.html",
            // 要处理的html文件地址
            template: "./src/index.html",
            chunks: ['index']
        }),
        new copyWebpackPlugin(
            {
                patterns: [
                    {
                        from: './docsify',
                        to:  './docsify',
                    },
                    {
                        from: './src/_sidebar.md',
                        to: './_sidebar.md',
                    },
                    {
                        from: './docs',
                        to: './docs',
                    },
                    {
                        from: './README.md',
                        to: './README.md',
                    }
                ]
            }
        )
    ]
};