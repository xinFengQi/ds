const fs = require('fs')
var exec = require('child_process').exec;
// 引用 browserSync 模块
var bs = require("browser-sync").create();

// 是否启动服务器
let serveOpen = false;
let timer = null;
let stencilCompolieCmd = null;
let copyHandlerCmd = null;

stencilCompolie();
const excepts = ['_sidebar.md']





// 监听src下目录改变
fs.watch('./src', { recursive: true }, function (event, filename) {
  if (excepts.includes(filename)) {
    return;
  }
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  timer = setTimeout(() => {
    stencilCompolie();
  }, 2000)
});

// stencil打包
function stencilCompolie() {
  // 先去生成目录
  console.log('开始打包');
  const cmd = 'stencil build --docs --dev';
  if(stencilCompolieCmd) {
    stencilCompolieCmd.kill();
  }
  stencilCompolieCmd = exec(cmd, function (error, stdout, stderr) {
    // 获取命令执行的输出
    console.log(error);
    console.log(stdout);
    console.log(stderr);
    console.log(cmd, '命令被执行')
    copyHandler();
  });

}

// 生成文档目录
function copyHandler() {
  console.log('开始生成文件目录');
  // 先去生成目录
  let _sidebarStr = '* [介绍](/readme.md)\n';
  if (fs.existsSync('./dist/www/components')) {
    console.log('解析文档目录')
    const dirs = fs.readdirSync('./dist/www/components')
    dirs.forEach(dirName => {
      _sidebarStr = _sidebarStr + `   * [${dirName}](/components/${dirName}/readme.md)\n`
    })
  }
  fs.writeFileSync('./src/_sidebar.md', _sidebarStr)
  const cmd = 'dsn dfu -copy';
  if(copyHandlerCmd) {
    copyHandlerCmd.kill();
  }
  copyHandlerCmd = exec(cmd, function (error, stdout, stderr) {
    // 获取命令执行的输出
    console.log(error);
    console.log(stdout);
    console.log(stderr);
    console.log(cmd, '命令被执行')
    openBrowserSync();
  });
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