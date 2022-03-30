
module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production' ? './homefile' : '',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'src/pages/blog/main.ts',
            template: 'public/blog.html'
        },
        'extension-home': {
            entry: 'src/pages/extension-home/main.ts',
            template: 'public/extension-home.html'
        },
        'extension-setting': {
            entry: 'src/pages/extension-setting/main.ts',
            template: 'public/extension-setting.html'
        },
        'extension-backgroud': {
            entry: 'src/pages/extension-backgroud/main.ts',
            template: 'public/extension-backgroud.html'
        },
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                // modify the options...
                options.compilerOptions = {};
                options.compilerOptions.isCustomElement = tag => (tag.startsWith('dsb5') || tag.startsWith('ds'))

                return options
            })
    }
}