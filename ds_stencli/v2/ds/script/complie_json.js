const fs = require('fs');
const fsExtra = require('fs-extra')
const path = require('path')

fsExtra.emptyDirSync('./dist_gitee')

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
    </html>`

    // 扩展stencli的文档生成功能
    // 1. 读取根文件中的md文件
    fs.readdirSync('./').forEach(dir => {
        if (dir.endsWith('.md')) {
            fsExtra.copyFileSync('./' + dir, mdPath + '/' + dir);
        }
    })
    // 2. 读取src下面的非components的md文件
    const srcPath = './src';
    const noReader = ['./src/components'];
    function copySrcMd(path) {
        if (noReader.includes(path)) {
            return;
        }
        const pathStat = fs.statSync(path);
        if (pathStat.isDirectory()) {
            fs.readdirSync(path).forEach(dir => {
                copySrcMd(path + '/' + dir)
            })
        } else {
            if (!path.endsWith('.md')) {
                return;
            }
            const toPath = path.replace(srcPath, mdPath);
            fsExtra.ensureFileSync(toPath)
            fsExtra.copyFileSync(path, toPath);
        }
    }
    copySrcMd(srcPath);

    const allMdPath = [];
    // 组件的md文件处理
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
            const toPaths = htmlpath.replace(mdPath, './dist_gitee/docs').split('/');
            let toPath = toPaths.join('/')
            if (toPaths.includes('components')) {
                toPaths.pop();
                toPath = toPaths.join('/') + '.html';
            }

            fsExtra.ensureFileSync(toPath)
            allMdPath.push(toPath.replace('./dist_gitee/docs', '.'));
            fsExtra.copy(htmlpath, toPath)
        }
    }
    getMdToHtml(mdPath)

    // 生成doc的首页
    const indexTemplate = `
            <!DOCTYPE html>
            <html lang="en" style="height: 100%;">      
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>文档</title>
            </head>
            <style>
            .main {
                display: flex;
                height: 100%;
            }
            .menu {
                width: 400px;
                height: 100%;
                min-height: 400px;
                margin-right: 30px;
            }
            .nav {
                margin: 4px;
            }
            .ifram_main {
                flex: 1;
                border: 0;
                overflow: auto;
            }
            </style>
            <body style="height: 100%;">
            <div class="main">
                <div class="menu">
                    {{content}}
                </div>
               <iframe id="aaa" class="ifram_main" src=""></iframe>
            </div>
            </body>
            <script>function show(src) {document.getElementById("aaa").src = src;}</script>
            </html>`
    fs.writeFileSync('./dist_gitee/docs/index.html',
        indexTemplate.replace('{{content}}', allMdPath.map(v => {
                return `<div class="nav" onclick="show('${v}')">${v}</div>`
            }).join('')
        )
    )
    console.log('组件的readme.html生成完毕')
}

// 将一些其他文件复制进入上传文件夹
// 主要需要引入的文件夹
// package的name必须要和stencil.config.ts的相同
const distComponentsPath = './dist/dist/' + name;
if (!fs.existsSync(distComponentsPath)) {
    throw "package的name必须要和stencil.config.ts的必须相同,必须全小写"
}
fsExtra.copy(distComponentsPath, './dist_gitee/component')

