
const path = require('path')
const fs = require('fs')
const testAPath = './template_test.ts';
const readline = require('readline');

// readDir(testAPath)

// 递归读取需读取的文件数据
function readDir(dirpath) {
    const fileInfo = fs.statSync(dirpath)
    if (!fileInfo.isDirectory) {
        return;
    }
    const dir = fs.readdirSync(dirpath);
    dir.forEach(item => {
        const fileInfo = fs.statSync(path.resolve(dirpath, item))
        if (fileInfo.isDirectory()) {
            readDir(path.resolve(dirpath, item))
        } else {
            console.log(path.resolve(dirpath, item))
        }
    })
}

// 按照行读取
function read_file(path, callback) {
    var fRead = fs.createReadStream(path);
    var objReadline = readline.createInterface({
        input: fRead
    });
    var arr = new Array();
    objReadline.on('line', function (line) {
        console.log(line)
        arr.push(line);
    });
    objReadline.on('close', function () {
        callback(arr.filter(s => s.length > 0).map(v => v.trim()));
    });
}



/*-----------babel研究并解析代码数据----------------*/
const parser = require('@babel/parser').parse;
const traverse = require('@babel/traverse');

// 解析接口数据
const insterFaceMap = []

const time = new Date().getTime() + '';
const str = fs.readFileSync(testAPath).toString();
const outstr = parser(str, {
    sourceType: "module",
    plugins: [
        "jsx",
        "typescript"
    ]
});
let a = {}
traverse.default(outstr, {
    ExportNamedDeclaration: (path) => {
        if(Object.keys(a).length > 0) {
            insterFaceMap.push(a);
        }
        a = { dec: '' };
        if (path.node.leadingComments) {
            path.node.leadingComments.forEach(s => {
                a.dec = a.dec + s.value
            })
        }
    },
    // 接口名描述
    TSInterfaceDeclaration: (path) => {
        a.name = {key: path.node.id.name, line: path.node.loc.start.line};
        a.filed = []
    },
    TSPropertySignature: (path) => {
        const node = path.node;
        let str = ''
        if (node.leadingComments) {
            node.leadingComments.forEach(s => {
                const LastaFiled = a.filed[a.filed.length-1];
                console.log(s.loc.start.line, LastaFiled)
                if(LastaFiled && s.loc.start.line === LastaFiled.line) {
                    LastaFiled.dec =  LastaFiled.dec + s.value
                } else {
                    str = str +  s.value;
                }
            })
        }
        const key = {key:node.key.name, dec: str, line:node.key.loc.start.line, type: node.typeAnnotation.typeAnnotation.type};
        a.filed.push(key)
    }
})
if(Object.keys(a).length > 0) {
    insterFaceMap.push(a);
}

fs.writeFileSync('./dist/dist2.json', JSON.stringify(insterFaceMap))
// console.log( outstr)