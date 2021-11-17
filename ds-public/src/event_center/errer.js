const wsDisconnectReasonMap = {
    "server namespace disconnect": "ws 被socket.disconnect()强行断开",
    "client namespace disconnect": "客户端使用socket.disconnect()手动断开了ws",
    "server shutting down": "服务器正在关闭",
    "ping timeout": "客户端没有在pingTimeout延迟中发送 PONG 数据包",
    "transport close": "连接已关闭（例如：用户已失去连接，或网络已从 WiFi 更改为 4G",
    "transport error": "连接遇到错误",
}

const errorData = {
    eventType: ['global', 'fixation_topic', 'topic'],
    emitData: '{fixationTopicId(topicId): "", data: any}',
    initType: ['add', 'new', 'update'],
    initDataStructure: `{eventName: string, type: 'global'| 'fixation_topic' | 'topic', isSelf?: boolean, "disconnect": boolean}[]`

}


// 验证初始化的事件数据
function verifyInitData(){
    const types =errorData.initType;
    const dataType = errorData.eventType
    return  {
        type: (type) => {
            if(types.includes(type)) {
                return null
            }
            return `初始化的类型错误,只允许${JSON.stringify(errorData)}`
        },
        data: (data) => {
            if(!Array.isArray(data)) {
                return `初始化的类型错误,只允许是数组，并且数据结构是${initDataStructure}`
            } 
            const isAll = data.every((value) => {
                return value.eventName && value.type && dataType.includes(value.type)
            })
            if(!isAll) {
                return `初始化的数据结构错误,必须需要两个属性,数据结构是${initDataStructure}`
            }
            return null;
        }
    }
   
}


module.exports = {
    wsDisconnectReasonMap,
    errorData,
    verifyInitData,
}