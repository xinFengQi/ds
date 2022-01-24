module.exports = {
    outputDir: 'chorme_extention/src',
    publicPath: './',
    filenameHashing: false,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        },
        background: {
            entry: 'src/pages/background/main.js',
            template: 'public/background.html'
        },
        devtools: {
            entry: 'src/pages/devtools/main.js',
            template: 'public/devtools.html'
        },
        home: {
            entry: 'src/pages/home/main.js',
            template: 'public/home.html'
        },
        popup: {
            entry: 'src/pages/popup/main.js',
            template: 'public/popup.html'
        },
        setting: {
            entry: 'src/pages/setting/main.js',
            template: 'public/setting.html'
        },
        homepage: {
            entry: 'src/pages/homepage/main.js',
            template: 'public/homepage.html'
        }
    } 
}