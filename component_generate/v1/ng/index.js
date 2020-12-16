
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



/*-----------babel学习----------------*/
const parser = require('@babel/parser').parse;

const str = fs.readFileSync(testAPath).toString();
const outstr = parser(str, {
    sourceType: "module",
    plugins: [
        "jsx",
        "typescript"
    ]
})
fs.writeFileSync('./dist.json', JSON.stringify(outstr))
console.log( outstr)