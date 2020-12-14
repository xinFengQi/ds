
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

readInterface(testAPath)

// 读取文件中的接口数据
function readInterface(filepath) {
    console.log(`解析${filepath}中interface数据`)
    // const str = fs.readFileSync(filepath).toString();
    const interface = {}
    read_file(filepath, (data) => {
        console.log(data);
        data.forEach((v, i) => {
            if(v.includes('interface')) {
                const strArr = v.split(' ');
                interface[strArr[strArr.length - 1]] = {
                    dec: 123,
                    params: {}
                } 
            }
        });
        console.log(interface)
    })
}

// 获取括号中的数据，形成数组，生成elemet,children,type
// 有修饰符就是type,没有修饰符就是object
function getCodeTree(codeArr, index) {
    let isLoop = true;
    const obj = {
        code: [],
        type: 'object',
        children: []
    };
    while(isLoop) {

        if(codeArr.includes('}')) {
            isLoop = false;
        }
        index = index + 1;
    }
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