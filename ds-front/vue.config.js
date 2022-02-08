
module.exports = {
    outputDir: 'dist',
    publicPath: './',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'src/pages/blog/main.ts',
            template: 'public/html/blog.html'
        },
        test: {
            entry: 'src/pages/index/main.ts',
            template: 'public/html/index.html'
        },
        'extension-home': {
            entry: 'src/pages/extension-home/main.ts',
            template: 'public/html/extension-home.html'
        },
        'extension-setting': {
            entry: 'src/pages/extension-setting/main.ts',
            template: 'public/html/extension-setting.html'
        },
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },

}