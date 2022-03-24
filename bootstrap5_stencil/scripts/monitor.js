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
    if (stencilCompolieCmd) {
      stencilCompolieCmd.kill();
    }
    if (copyHandlerCmd) {
      copyHandlerCmd.kill();
    }
    timer = null;
  }
  timer = setTimeout(() => {
    stencilCompolie(filename);
  }, 2000)
});

// stencil打包
function stencilCompolie(filename) {
  // 先去生成目录
  console.log('开始打包');
  const cmd = 'stencil build --docs --dev';
  stencilCompolieCmd = exec(cmd, function (error, stdout, stderr) {
    // 获取命令执行的输出
    console.log(error);
    console.log(stdout);
    console.log(stderr);
    console.log(cmd, '命令被执行')
    copyHandler(filename);
  });

}

// 生成文档目录
function copyHandler(filename) {
  console.log('开始生成文件目录');
  // 先去生成目录
  let _sidebarStr = '* [介绍](/readme.md)\n';
  let docsJson = null;
  if (fs.existsSync('./dist/docs.json')) {
    console.log('解析文档json数据')
    const docsAll = {
      '其他': []
    };
    docsJson = JSON.parse(fs.readFileSync('./dist/docs.json').toString())
    docsJson.components.forEach(com => {
      const componentName = com.docsTags.find(v => v.name === 'componentName');
      if (!componentName) {
        return;
      }
      const componentType = com.docsTags.find(v => v.name === 'componentType');
      const docsPaths = `   * [${componentName ? componentName.text : com.tag}](/components/${com.tag}.md)\n`;
      if (!componentType) {
        docsAll['其他'].push(docsPaths);
      } else {
        if (docsAll[componentType.text]) {
          docsAll[componentType.text].push(docsPaths)
        } else {
          docsAll[componentType.text] = [docsPaths]
        }
      }
    })
    Object.keys(docsAll).forEach(v => {
      if (!docsAll[v].length) {
        return;
      }
      _sidebarStr = _sidebarStr + `* ${v}\n`
      docsAll[v].forEach(docPath => {
        _sidebarStr = _sidebarStr + docPath
      })
    })
  }
  fs.writeFileSync('./src/_sidebar.md', _sidebarStr)
  // 复制相关的文件
  const cmd = 'dsn dfu -copy';
  copyHandlerCmd = exec(cmd, function (error, stdout, stderr) {
    // 获取命令执行的输出
    console.log(error);
    console.log(stdout);
    console.log(stderr);
    console.log(cmd, '命令被执行')
    openBrowserSync();
  });
  // 生成文档
  generatorDocs(docsJson, filename)
}

// 生成文档
function generatorDocs(docsJson, filename) {
  if (!fs.existsSync('./dist/www/components')) {
    fs.mkdirSync('./dist/www/components')
  }
  if (!docsJson) {
    return;
  }
  docsJson.components.forEach(com => {
    // if (filename && filename.indexOf(com.tag) < 0) {
    //   return;
    // }
    let mdStr = com.readme;
    const isLib = com.docsTags.find(v => v.name === 'lib');
    if (isLib) {
      // 这个用于生成lib的文档
    }
    // 生成参数
    if (!isLib && com.props && com.props.length) {
      mdStr = generatorPropMd(mdStr, com)
    }

    // 生成事件
    if (!isLib && com.events && com.events.length) {
      mdStr = generatorEventMd(mdStr, com)
    }
    fs.writeFileSync(`./dist/www/components/${com.tag}.md`, mdStr)
  })
}

// 非lib的参数文档
function generatorPropMd(mdStr, com) {
  mdStr = mdStr + '\n\n## 属性\n'
  mdStr = mdStr + generatorDocsTable(
    [
      {
        header: '属性(Property)', value: (data) => {
          return data.name + (data.required ? '(必填)' : '')
        }
      },
      { header: '属性(Attribute)', value: 'attr' },
      { header: '描述', value: 'docs' },
      {
        header: '类型', value: (data) => {
          return data.values.map(v => {
            return v.value ? v.value : v.type
          }).join(' \\| ')
        }
      },
      { header: '默认值', value: 'default' },

    ], com.props
  )
  return mdStr;
}

// 非lib的事件文档
function generatorEventMd(mdStr, com) {
  mdStr = mdStr + '\n\n## 事件\n'
  mdStr = mdStr + generatorDocsTable(
    [
      { header: '事件名', value: 'event' },
      { header: '描述', value: 'docs' },
      { header: '类型', value: 'detail' },
    ], com.events
  )
  return mdStr;
}

// 生成表格
function generatorDocsTable(headers, datas) {
  const colMaxLength = [];
  headers.forEach(v => {
    let maxLength = getByteLen(v.header);
    datas.forEach(da => {
      let str = getPropValue(v.value, da);
      if (maxLength < getByteLen(str)) {
        maxLength = getByteLen(str);
      }
    })
    colMaxLength.push(maxLength);
  })

  let returnStr = '|';
  headers.forEach((header, i) => {
    returnStr = returnStr + addEmpty(header.header, colMaxLength[i]) + '|'
  })
  returnStr = returnStr + '\n|';
  headers.forEach((header, i) => {
    returnStr = returnStr + loopStr('-', colMaxLength[i]) + '|'
  })

  datas.forEach(da => {
    returnStr = returnStr + '\n|'
    headers.forEach((v, i) => {
      returnStr = returnStr + addEmpty(getPropValue(v.value, da), colMaxLength[i]) + '|'
    })
  })
  returnStr = returnStr + '\n';
  return returnStr;
}

// 从单个prop获取值
function getPropValue(key, data) {
  let valueStr = ''
  if (typeof key === 'string') {
    valueStr = data[key];
  }
  if (typeof key === 'function') {
    valueStr = key(data);
  }
  if (valueStr) {
    valueStr = '`' + valueStr + '`'
  }
  if (!valueStr) {
    valueStr = '--'
  }
  return valueStr
}

// 补空
function addEmpty(str, len) {
  if (getByteLen(str) >= len) {
    return str;
  }
  const strL = (len - getByteLen(str)) / 2;
  const halfEmpty = Math.floor(strL);
  const strs = loopStr(' ', halfEmpty)
  let returnStr = strs + str + strs;
  if (strL % 1 !== 0) {
    returnStr = returnStr + ' ';
  }
  return returnStr;
}
// 循环得到一个复制到字符串
function loopStr(str, len) {
  let getStr = '';
  for (let i = 0; i < len; i++) {
    getStr = getStr + str
  }
  return getStr;
}

// 获取长度，汉字算两个
function getByteLen(val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    var length = val.charCodeAt(i);
    if (length >= 0 && length <= 128) {
      len += 1;
    }
    else {
      len += 2;
    }
  }
  return len;
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