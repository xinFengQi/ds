module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        },
        backgroud: {
            entry: 'src/pages/backgroud/main.js',
            template: 'public/backgroud.html'
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
        }
    } 
}