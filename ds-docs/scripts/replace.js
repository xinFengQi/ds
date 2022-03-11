

const fs = require('fs-extra')

// 将html自动生成
const allPath = [
    {
        path: './all_docs',
        title: 'ds-个人系列',
        docsify_custom_path:  './'
    },
    {
        path: './all_docs/docs/ds-series/dsn_npm',
        title: 'dsn脚手架工具',
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

allPath.forEach(path => {
    const newIndexStr = indexTemplate.replace(/\{\{title\}\}/g, path.title)
                                     .replace('\{\{docsify_custom_path\}\}', path.docsify_custom_path);
    fs.writeFileSync(path.path+'/index.html', newIndexStr)
})
