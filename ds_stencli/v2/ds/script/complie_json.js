const fs = require('fs');
const fsExtra = require('fs-extra')
const path = require('path')

if (!fs.existsSync('./dist_gitee')) {
    fs.mkdirSync('./dist_gitee');
}

const jsonPath = 'dist/docs.json'
const distJsonIsExist = fs.existsSync(jsonPath);

if (!distJsonIsExist) {
    throw "json文件未生成"
}


const packageJsonPath = './package.json'
const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath).toString());
const name = packageJsonData.name;
const version = packageJsonData.version;

const stencliJsonData = JSON.parse(fs.readFileSync(jsonPath).toString());


// 生成可请求的组件js列表
let outputJs = `
if (!window.ds) {
    window.dsWebComponent = {}
}
if(!window.dsWebComponent.${name}) {
    window.dsWebComponent.${name} = {};
}
window.dsWebComponent.${name}['${version}'] = {{components}};
`;
const componentArr = stencliJsonData.components;
outputJs = outputJs.replace('{{components}}', JSON.stringify(componentArr));
fs.writeFileSync('./dist_gitee/data.js', outputJs)
console.log('生成data.js')

// 生成组件的文档
const mdPath = './dist/docs';
if (fs.existsSync(mdPath)) {
    const marked = require('marked');
    const rendererMD = new marked.Renderer();

    // 生成文档的index.html

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{Document}}</title>
    </head>
    <body>
        {{content}}
    </body>
    x</html>`

    function getMdToHtml(path) {
        const pathStat = fs.statSync(path);
        if (pathStat.isDirectory()) {
            fs.readdirSync(path).forEach(dir => {
                getMdToHtml(path + '/' + dir)
            })
        } else {
            if (!path.endsWith('.md')) {
                return;
            }
            // 将html文件写入
            const mdContent = fs.readFileSync(path).toString();
            const htmlContent = htmlTemplate.replace('{{content}}', marked(mdContent));
            const htmlpath = path.replace('.md', '.html');
            fs.writeFileSync(htmlpath, htmlContent);
            fsExtra.copy(htmlpath, htmlpath.replace(mdPath, './dist_gitee/docs'))
        }
    }
    getMdToHtml(mdPath)
}

// 将一些其他文件复制进入上传文件夹
// 主要需要引入的文件夹
// package的name必须要和stencil.config.ts的相同
const distComponentsPath = './dist/dist/'+name;
if(!fs.existsSync(distComponentsPath)) {
    throw "package的name必须要和stencil.config.ts的必须相同,必须全小写"
}
fsExtra.copy(distComponentsPath, './dist_gitee/component')

