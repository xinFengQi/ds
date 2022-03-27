const fs = require('fs')
var exec = require('child_process').exec;
// 引用 browserSync 模块
var bs = require("browser-sync").create();
const dfb = require('dfb/export');
const { generatorMenu, generatorDocs } = require('./doc');
// 是否启动服务器
let serveOpen = false;
// 节流
let timer = null;
// 是否启动文件监听器
let isListenerJson = false;


console.log(' 启动stencil服务器与编译器');
const cmd = 'stencil build --docs --dev --watch';
let stencilCompolieCmd = exec(cmd);

stencilCompolieCmd.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  if (data.indexOf('build finished') > -1) {
    watchFileChanges();
  }
});

stencilCompolieCmd.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});





function watchFileChanges() {
  if (isListenerJson) {
    return;
  }
  isListenerJson = true;
  console.log('首次全文档编译')
  copyHandler();
  console.log('启动文件监听器')
  const excepts = ['_sidebar.md', 'index.html']
  // 监听文档json文件是否变更
  fs.watch('./src', { recursive: true }, function (event, filename) {
    console.log(event, filename, '====')
    if (excepts.includes(filename)) {
      return;
    }
    const str = fs.readFileSync('./src/index.html').toString();
    // fs.writeFileSync('./src/index.html', str)
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      copyHandler(filename);
    }, 2000)
  });
}

// 生成文档目录
function copyHandler(filename) {
  //  生成目录
  const docsJson = generatorMenu()
  // 生成缓存文档
  generatorDocs(docsJson, filename)
  // 复制相关的文件
  dfb.nodeExecute({ Copy: true })
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