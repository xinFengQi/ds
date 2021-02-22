
const sockerClient = require('socket.io-client')




const appconfig = {
    // system名
    // 局域网ip
    systemIp: `http://localhost:10000`,
    systemName: 'ds_public.0.1',
    //getway地址
    getwayHost: 'http://47.102.97.25:8081',
}


const socket = sockerClient.connect(appconfig.getwayHost)

console.log('哈睡觉打卡结束的', appconfig.getwayHost)


// 连接getway
socket.on('connect', () => {
  console.log('连上getway')
})

socket.on('disconnect', () => {
  console.log('getway断开')
})

const apiJSON = {systemInfo: appconfig, apiArr: [] }


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
socket.emit('sendApiSystemName',  apiJSON.systemInfo)

// 发送每个api
// url 接口url  接口描述 接口类型 请求参数 返回类型 返回参数
async function gotoApiSwagger({url,dec, type,reqParam, resType, resParam}){
  // console.log('开始生产文档：', url, type, reqParam, resParam)
  apiJSON.apiArr[apiJSON.apiArr.length -1].apiArr.push({url,dec, type, reqParam,resType, resParam})
}

function apiMenu(name, dec='') {
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


function api({url,dec, type,reqParam,resType, resParam}) {
  if(!url || !type ) {
    throw `存在接口注解参数不全url:${url},type:${type}`
  }
  type = type.toLowerCase()
  const arr = ['get', 'post', 'detele', 'put', 'all']
  if(arr.findIndex(v => v == type) < 0) {
    throw `存在接口类型不正确url:${url},type:${type}`
  }
  gotoApiSwagger({url,dec, type,reqParam,resType, resParam});
  return (target, prototypeKey, descriptor) => {
    // console.log('所装饰类的属性',target, prototypeKey, descriptor)
    router[type]('/'+ appconfig.systemName  + url, descriptor.value)
  };
}

module.exports = { 
    apiMenu: apiMenu,
    api: api,
}