/*
 * @Date: 2021-01-22 16:05:41
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-22 17:29:59
 */
const path = require('path');
const nameMap = {
    angular: {
        buildShell: 'npm run ngbuild',
        watchPath: path.resolve(__dirname, '../../../src-ng')
    },
    vue: {
        buildShell: 'npm run vuebuild',
        watchPath: path.resolve(__dirname, '../../../src-vue')
    },
    react: {
        buildShell: 'npm run reactbuild',
        watchPath: path.resolve(__dirname, '../../../src-react')

    }
}

const staticTemplatePath = path.resolve(__dirname, '../../../template_all');

const staticPath = path.resolve(__dirname, '../../../dist');

module.exports = {
    nameMap,
    staticTemplatePath,
    staticPath
}