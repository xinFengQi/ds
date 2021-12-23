
const templete = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>项目列表</title>
</head>
<body>
{{templete}}
</body>
</html>
`
const linkBtu = `
    <a href="{{templete}}" target="_blank">{{name}}</a><br />
`

import fs from 'fs-extra'
import path from 'path'
import config from '../config'

function initStaticServe() {
    const a: string = '123'
    config.nodeConfig.forEach(
        (v: any) => {
            if(v.type === 'nginx') {
                checkListWatch(path.resolve(v.path, 'html',), v.web)
            }
        });
}


function checkListWatch(address: string, host: string) {
    host = host.startsWith('http')? host: 'http://' + host
    productHtml(address, host);
    let fileChangeTimer: NodeJS.Timeout | null = null;
    fs.watch(address, (event, filename) => {
        if (fileChangeTimer) {
            clearTimeout(fileChangeTimer);
            fileChangeTimer = null;
          }
          fileChangeTimer = setTimeout(() => {
            if (event === 'change') {
                productHtml(address, host);
            }
          }, 2000)
    })
}

function productHtml(address: string, host: string) {
    let btustr = '';
    const dirs = fs.readdirSync(address);
    dirs.forEach(dir => {
        btustr = btustr + linkBtu.replace('{{templete}}', host + dir).replace('{{name}}', dir)
    });
    fs.writeFileSync(path.resolve(address, 'list.html'), templete.replace('{{templete}}', btustr))
    fs.emptyDirSync(path.resolve(address, 'list'))
    fs.writeFileSync(path.resolve(address, 'list/index.html'), templete.replace('{{templete}}', btustr))
}


export {
    initStaticServe
}