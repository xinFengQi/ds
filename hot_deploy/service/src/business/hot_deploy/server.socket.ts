import { getIo }  from '../../handler/io.util';
import { Socket } from 'socket.io';
import { setChildrenOsResource, getOsResource,setOsResource, deleteChildrenOsResource, deleteOsResource } from '../../cache/resource.cache'


export function initSocke() {
    console.log('启动连接监听')
    getIo().on('connection', (socket: Socket) => {
        console.log('存在连接',socket.id)


        socket.on('server_clent', (data: any) => {
            console.log(data)
        })
       

         // 监听其他父服务器发送的数据消息
         socket.on('getServeInfo', (data: {serverData: any}) => {
            // 资源完成后需要重新写入子服务器, 每一次父服务器写入，同时要检查子服务器
            setOsResource({ _socket_id:socket.id , ...data.serverData})
        })


        // 监听子服务器发送的数据消息
        socket.on('getchildServeInfo', (data: {serverData: any}) => {
            // 资源完成后需要重新写入子服务器, 每一次父服务器写入，同时要检查子服务器
            const isSuccess =  setChildrenOsResource({ _socket_id:socket.id , ...data.serverData})
            if(isSuccess) console.log(getOsResource())
        })

        // 监听子服务器发送的部署消息
        // getIo().emit('updateServerProjectsHandlerList',
        //                 { value: value, projects: getcurrentPreject(value as string) })

        socket.on('updateServerProjectsHandlerList', (data: any) => {
                console.log(data)
        })
        socket.on('disconnect', () => {
            deleteChildrenOsResource(socket.id)
            deleteOsResource('', socket.id)
            console.log('断开连接')
        })
    })
    
}
