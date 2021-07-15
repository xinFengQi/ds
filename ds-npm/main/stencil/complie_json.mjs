
import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path'
import marked from 'marked'


function stencilDistComplie(distGiteePath, jsonPath, outputDist) {
    const distJsonIsExist = fs.existsSync(jsonPath);
    if (!distJsonIsExist) {
        throw "组件json信息未生成"
    }
    fsExtra.emptyDirSync(distGiteePath);

    // 读取组件的json信息
    const packageJsonPath = './package.json'
    const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath).toString());
    const name = packageJsonData.name;
    const version = packageJsonData.version;
    const stencilJsonData = JSON.parse(fs.readFileSync(jsonPath).toString());


    // 将一些其他文件复制进入上传文件夹
    // 主要需要引入的文件夹
    // package的name必须要和stencil.config.ts的相同
    const distComponentsPath = path.resolve(outputDist, 'dist', name);
    if (!fs.existsSync(distComponentsPath)) {
        throw "package的name必须要和stencil.config.ts的必须相同,必须全小写"
    }
    fsExtra.copy(distComponentsPath, distGiteePath + '/component')

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
    const componentArr = stencilJsonData.components;
    outputJs = outputJs.replace('{{components}}', JSON.stringify(componentArr));
    fs.writeFileSync(distGiteePath + '/data.js', outputJs)
    console.log('生成data.js')

    // 生成组件的文档
    const mdPath = path.resolve(outputDist, 'docs');
    if (fs.existsSync(mdPath)) {
        const rendererMD = new marked.Renderer();

        // 生成文档的index.html
        // bug: 请求script的路径在生产环境无法处理
        const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' file:///; object-src 'self'">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{Document}}</title>
   
    <link rel="stylesheet" href="http://dongfubao.gitee.io/ct/css_md/purple/purple.css">
    <link rel="stylesheet" href="{{script}}component/${name}.css">
    <script type="module" src="{{script}}component/${name}.esm.js"></script>
    </head>
    <body>
        {{content}}
    </body>
    </html>`

        // 扩展stencil的文档生成功能
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
                return;
            }
            if (!path.endsWith('.md')) {
                return;
            }
            // 将html文件写入
            const mdContent = fs.readFileSync(path).toString();
            let htmlContent = htmlTemplate.replace('{{content}}', marked(mdContent));
            const htmlpath = path.replace('.md', '.html');
            const toPaths = htmlpath.replace(mdPath, distGiteePath + '/docs').split('/');
            // 处理调用scripts的路径
            const docsLength = toPaths.length - toPaths.findIndex(v => v === 'docs') - 2;
            const getScripts = new Array(docsLength).fill('../').join('');
            htmlContent = htmlContent.replace(/{{script}}/g, getScripts);
            // 写入内容
            fs.writeFileSync(htmlpath, htmlContent);
            let toPath = toPaths.join('/')
            if (toPaths.includes('components')) {
                toPaths.pop();
                toPath = toPaths.join('/') + '.html';
            }

            fsExtra.ensureFileSync(toPath)
            allMdPath.push(toPath.replace(distGiteePath + '/docs', '.'));
            fsExtra.copy(htmlpath, toPath)
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
            <!-- 自定义组件 -->
            <link rel="stylesheet" href="http://dongfubao.gitee.io/ct/component/js_util_stencli/0.0.1/component/js_util_stencli.css">
            <script type="module" src="http://dongfubao.gitee.io/ct/component/js_util_stencli/0.0.1/component/js_util_stencli.esm.js"></script>
            <link rel="stylesheet" href="http://dongfubao.gitee.io/ct/component/bootstrap_4_stencli/0.0.1/component/bootstrap_4_stencli.css">
            <script type="module" src="http://dongfubao.gitee.io/ct/component/bootstrap_4_stencli/0.0.1/component/bootstrap_4_stencli.esm.js"></script>

            <link rel="stylesheet" href="../component/${name}.css">
            <script type="module" src="../component/${name}.esm.js"></script>
            <style>
            .main {
                display: flex;
                height: 100%;
            }
            .menu {

                width: 300px;
                height: 100%;
                min-height: 400px;
                margin-right: 30px;
                margin-top: 30px;
            }
            .nav {
                margin: 4px;
            }
            .ifram_main {
                flex: 1;
                border: 0;
                overflow: auto;
                margin: 20px;
            }
            </style>
            <body style="height: 100%;">
            <div class="main">
                <div class="menu">
                    <dsb4-menu id="dsb4_menu"></dsb4-menu>
                </div>
               <iframe id="aaa" class="ifram_main" src=""></iframe>
            </div>
            </body>
            <script>
                window.onload = () => {
                    document.getElementById('dsb4_menu').menuTree = {{content}};
                    document.getElementById('dsb4_menu').addEventListener('clickNav', (ev) => {
                        console.log(ev)
                        const data = ev.detail;
                        if (data.childrens && data.childrens.length > 0) {
                            return;
                        }
                        if (data && data.path) {
                            document.getElementById("aaa").src =  data.path;
                        }
                    })
                }
            </script>
            </html>`
        const reContent = [];
        allMdPath.forEach(v => {
            const names = v.replace('./', '').split('/');
            const index = names.findIndex(n => n === 'components');
            const name = names.slice(index + 1, names.length);
            reContent.push({ name: name.join('/'), path: v })
        })
        fs.writeFileSync(distGiteePath + '/docs/index.html',
            indexTemplate.replace('{{content}}', JSON.stringify(reContent))
        )
        console.log('组件的readme.html生成完毕')
    }


}

export { stencilDistComplie }






