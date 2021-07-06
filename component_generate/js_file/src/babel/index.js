const fs = require('fs-extra')
const parser = require('@babel/parser').parse;
const generate = require('@babel/generator')
const traverse = require('@babel/traverse');
const codeFrameColumns = require('@babel/code-frame');

let i = 0;

// 通过文件生成AST
function getCodeTreeByfile(filePath) {
    const str = fs.readFileSync(filePath).toString();
    const outstr = parser(str, {
        sourceType: "module",
        plugins: [
            "typescript",
            "decorators-legacy",
            "classProperties"
        ]
    });

    traverse.default(outstr, {
        // 是否存在导出
        ClassMethod: (path) => {
            const pathI =  `./dist/${i++}.json`;
            fs.ensureFileSync(pathI)
            fs.writeFileSync(pathI, JSON.stringify(path.node))
            path.node.body.body = []
        },
    })
    const pathI =  `./dist/${i++}.ts`;
    fs.ensureFileSync(pathI)
    fs.writeFileSync(pathI, generate.default(outstr).code.replace(/(\n)+/g, '\n').replace(/\{\}/g, '{}\n'))
    return outstr;
}



const path = './src/mock/util.ts';

fs.writeFileSync(`./dist/${i++}.json`, JSON.stringify(getCodeTreeByfile(path)))

