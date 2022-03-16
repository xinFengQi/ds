

const fs = require('fs-extra')

// 将html自动生成
const allPath = [
    {
        path: './all_docs',
        title: 'ds-个人系列',
        docsify_custom_path:  './docs/'
    },
    {
        path: './all_docs/docs/ds-series/dsn',
        title: 'dsn脚手架工具',
        docsify_custom_path:  '../../'
    },
    {
        path: './all_docs/docs/ds-series/dsb5',
        title: '基于bootstrap5的标准web组件',
        docsify_custom_path:  '../../'
    },
    {
        path: './all_docs/docs/front_end_knowledge',
        title: '前端知识及面试',
        docsify_custom_path:  '../'
    }, {
        path: './all_docs/docs/stencil/zh_cn',
        title: 'stencil翻译文档',
        docsify_custom_path:  '../../'
    },
]

const indexTemplate = fs.readFileSync('./scripts/template/index.html').toString();

const version = JSON.parse(fs.readFileSync('./package.json').toString()).version;

allPath.forEach(path => {
    const newIndexStr = indexTemplate.replace(/\{\{title\}\}/g, path.title)
                                     .replace(/\{\{docsify_custom_path\}\}/g, path.docsify_custom_path)
                                     .replace(/\{\{version\}\}/g, version);
    fs.writeFileSync(path.path+'/index.html', newIndexStr)
})
