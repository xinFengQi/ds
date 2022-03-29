const fs = require('fs')
var exec = require('child_process').exec;
// 引用 browserSync 模块
var bs = require("browser-sync").create();
const { utilExecute } = require('../util/index');
const { generatorMenu, generatorDocs } = require('./doc');
// 是否启动服务器
let serveOpen = false;
// 是否启动文件监听器
let isListenerJson = false;

let srcChange = [];
let docsChange = [];


module.exports.startMonitor = function () {
  console.log(' 启动stencil服务器与编译器');
  const cmd = 'stencil build --docs --dev --watch';
  let stencilCompolieCmd = exec(cmd);

  stencilCompolieCmd.stdout.on('data', (data) => {
    console.log(`${data}`);
    if (data.indexOf('build finished') > -1) {
      watchFileChanges();
    }
    if (data.indexOf('rebuild finished') > -1) {
      fileChangesComplete()
    }
  });

  stencilCompolieCmd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });


}

function watchFileChanges() {
  if (isListenerJson) {
    return;
  }
  isListenerJson = true;
  console.log('首次全文档编译')
  copyHandler();
  console.log('启动文件监听器')
  const excepts = ['_sidebar.md', 'index.html']
  // 监听组件内部文件是否变更
  fs.watch('./src', { recursive: true }, function (event, filename) {
    if (excepts.find(v => filename.indexOf(v) > -1)) {
      return;
    }
    if(filename.indexOf('.md') > -1) {
      copyHandler(filename)
    } else {
      srcChange.push(filename);
    }
  });
  const exceptsDocs = ['.dstemp']
  // 监听文档内部变更
  fs.watch('./docs', { recursive: true }, function (event, filename) {
    if (exceptsDocs.find(v => filename.indexOf(v) > -1)) {
      return;
    }
    docsChange.push(filename);
  });
}

function fileChangesComplete() {
  if(docsChange.length) {
    copyHandler()
  } else {
    srcChange.forEach(v => {
      copyHandler(v);
    })
  }
  docsChange = [];
  srcChange = [];
}

// 生成文档目录
function copyHandler(filename) {
  //  生成目录
  const docsJson = generatorMenu(filename)
  // 生成缓存文档
  generatorDocs(docsJson, filename)
  // 复制相关的文件
  utilExecute({ Copy: true })
  // 打开或重启浏览器
  openBrowserSync();
}






// 启动browserSync
function openBrowserSync() {
  if (serveOpen) {
    bs.reload("*.*");
    return
  }
  serveOpen = true;
  // 启动服务器
  bs.init({ server: "./dist/www" });

}