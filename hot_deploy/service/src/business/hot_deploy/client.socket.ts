const sockerClient = require('socket.io-client')
import config from '../../config'
import { getOsResource } from '../../cache/resource.cache'
let socket: any = null;

export function initSocketClient() {
    if (!config.server.hostServer || !config.server.hostServer.value
        || !config.server.hostServer.port) {
        return
    }
    console.log('准备连接socket')
    // http://47.102.97.25:8081
    socket = sockerClient.connect(`http://${config.server.hostServer.value}:${config.server.hostServer.port}`);
    socket.on('connecting', () => {
        console.log('连接主服务器')
    })
    socket.on('reconnect', () => {
        console.log('重新连上主服务器')
        isExistParentServer(getOsResource(config.server.value))

    })

    // 测试socket
    socket.on('server_clent', (data: any) => {
        socket.emit('server_clent_test', 'aaaa');

        console.log(data)
    });


    socket.on('connect_error', (a: any) => {
        console.log('连接出现错误')
    })
    isExistParentServer(getOsResource(config.server.value))


}

export function isExistParentServer(data?: any) {
    if (config.server.parentServer) {
        socket.emit('getchildServeInfo', { serverData: data ? data : config.server })
    } else if (config.server.hostServer) {
        socket.emit('getServeInfo', { serverData: data ? data : config.server })
    }
}








