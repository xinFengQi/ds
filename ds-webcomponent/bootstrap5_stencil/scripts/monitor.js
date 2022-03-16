const fs = require('fs')
var exec = require('child_process').exec;
let timer = null;

fs.watch('./dist', function (event, filename) {
  if (filename === 'docs.json') {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      copyHandler();
    }, 500)
  }

});

// 生成文档目录
function copyHandler() {
  // 先去生成目录
  let _sidebarStr = '* [介绍](/readme.md)\n';
  if(fs.existsSync('./dist/www/components')) {
    console.log('解析文档目录')
    const dirs = fs.readdirSync('./dist/www/components')
    dirs.forEach(dirName => {
      _sidebarStr = _sidebarStr + `   * [${dirName}](/components/${dirName}/readme.md)\n`
    })
  }
  fs.writeFileSync('./src/_sidebar.md', _sidebarStr)
  const cmd = 'dsn dfu -copy';
  exec(cmd, function (error, stdout, stderr) {
    // 获取命令执行的输出
    console.log(error);
    console.log(stdout);
    console.log(stderr);
    console.log(cmd, '命令被执行')
  });

}