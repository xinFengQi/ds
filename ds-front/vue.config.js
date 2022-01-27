
module.exports = {
    outputDir: 'dist',
    publicPath: './',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'src/pages/index/main.ts',
            template: 'public/html/index.html'
        },
        'extension-home': {
            entry: 'src/pages/extension-home/main.ts',
            template: 'public/html/extension-home.html'
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