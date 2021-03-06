
const sockerClient = require('socket.io-client')
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: true });
const nodePath = require('path');


// todo  之前的getway连接存在问题
const appconfig = {
  // system名
  // 局域网ip
  systemIp: `http://localhost:10000`,
  systemName: 'ds_public0.0.1',
  //getway地址
  getwayHost: 'http://localhost:10000',
}

http.listen(10000, function () { });


const socket = sockerClient.connect(appconfig.getwayHost)

const apiJSON = { systemInfo: appconfig, apiArr: [] }



@apiMenu({ name: 'test', dec: '初始的测试接口' })
class Test {

  @api({
    url: '/test',
    type: 'get',
  })
  test(res, req) {
    req.json(returnJSON.success({ message: '测试成功' }));
  }

}

// 连接getway
socket.on('connect', () => {
  console.log('连上getway')
})

socket.on('disconnect', () => {
  console.log('getway断开')
})

socket.on('reconnect', () => {
  console.log('从新连上getway')
  socket.emit('sendApiSystemName', apiJSON.systemInfo)
  apiJSON.apiArr.forEach(
    v => {
      socket.emit('sendApi', v)
    }
  )
})



// 向getway发送服务名
socket.emit('sendApiSystemName', apiJSON.systemInfo)

// 发送每个api
// url 接口url  接口描述 接口类型 请求参数 返回类型 返回参数
async function gotoApiSwagger({ url, dec, type, reqParam, resType, resParam }) {
  // console.log('开始生产文档：', url, type, reqParam, resParam)
  apiJSON.apiArr[apiJSON.apiArr.length - 1].apiArr.push({ url, dec, type, reqParam, resType, resParam })
}

function apiMenu(name, dec = '') {
  console.log(name)
  apiJSON.apiArr.push(
    {
      systemName: appconfig.systemName,
      menuName: name,
      dec: dec,
      apiArr: []
    }
  )
  return (target, prototypeKey, descriptor) => {
    // console.log('所装饰类的属性',target, prototypeKey, descriptor)
    // console.log('一个模块的api',apiJSON.apiArr[apiJSON.apiArr.length - 1])
    socket.emit('sendApi', apiJSON.apiArr[apiJSON.apiArr.length - 1])
  };
}


function api({ url, dec, type, reqParam, resType, resParam }) {
  if (!url || !type) {
    throw `存在接口注解参数不全url:${url},type:${type}`
  }
  type = type.toLowerCase()
  const arr = ['get', 'post', 'delete', 'put', 'all']
  if (arr.findIndex(v => v == type) < 0) {
    throw `存在接口类型不正确url:${url},type:${type}`
  }
  gotoApiSwagger({ url, dec, type, reqParam, resType, resParam });
  return (target, prototypeKey, descriptor) => {
    // console.log('所装饰类的属性',target, prototypeKey, descriptor)
    console.log(appconfig.systemIp + '/' + appconfig.systemName + url)
    app[type]('/' + appconfig.systemName + url, descriptor.value)
  };
}





const returnJSON = {
  success: (data) => {
    return { status: 200, data, message: '接口请求成功' }
  },
  fail: (data) => {
    return { status: 412, data, message: '接口请求失败，存在条件不满足' }
  }
}


// post取值
async function getPostData(res) {
  return new Promise((resolve, reject) => {
    var array = [];
    res.on('data', function (chunk) {
      array.push(chunk);
    });
    res.on('end', function () {
      var postBody = Buffer.concat(array);
      postBody = postBody.toString('utf8');
      if (postBody) {
        resolve(JSON.parse(postBody));
      } else {
        resolve()
      }
    });
  })
}



// 获取用户get提交的数据
async function getGetData(res) {
  return new Promise((resolve, reject) => {
    resolve(res.query)
  })
}

// 获取用户路由提交的数据
async function getRouterData(res) {
  return new Promise((resolve, reject) => {
    resolve(res.params)
  })
}

// 获取用户路由提交路径
function getUrlPathData(url, length = 2) {
  const urlArr = nodePath.normalize(url).split(nodePath.sep);
  const len = urlArr.length;
  const types = urlArr[len - 1].split('.');
  const operates = types[types.length - 1].split(';');
  return {
    originPath: url,
    path: urlArr.slice(length + 2, len).join('/'),
    type: types.length > 1 ? types[types.length - 1].toLowerCase() : null,
    operate: operates.length > 1 ? operates.pop().join(';').split(',') : []
  }
}



module.exports = {
  apiMenu,
  api,
  app,
  io,
  returnJSON,
  getRequestData: {
    getPostData,
    getGetData,
    getRouterData,
    getUrlPathData
  }
}










/*

api注解:
{
    url: '请求路径',
    type: '请求类型',
    resType: '返回类型' html|json|file,
    dec: '接口描述',
    reqParam: [  // 请求参数
        {
            field: '参数字段',
            dec: '字段描述',
            require: '是否必填' true|false,
            type: '类型' string | number | file,
            default: '默认值'
        }
    ]
}
*/

