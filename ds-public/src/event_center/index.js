const { getDB } = require('../db/dbUtil');
const { app, io } = require('../util/getway_express');
const { wsDisconnectReasonMap, errorData, verifyInitData } = require('./errer');
const verifyInitDataFun = verifyInitData();
require('./http_ctrl');

// 读取db，获取事件
const eventdata = getDB('eventData', 'data');
const eventdataMap = {};

if (eventdata) {
    eventdata.forEach(v => {
        eventdataMap[v.eventName] = v;
    })
}

initEventServer(app, io);

function initEventServer(app, io) {
    io = io.of("/admin")
    startIoEvent(io);

}

// 全局默认事件
// ds_send_error: 发送错误消息
// ds_destroy : 放弃之前的事件
// ds_init: 初始化ds事件中心
// ds_join: 加入一个话题房间
// ds_leave: 离开一个话题房间
// ds_log: 发送log日志的,也做日志监听的地址




// 发送给其他具有id或者房间
function broadcast(type, id, name, data) {
    io[type](id).emit(name, data)
}

// 发送错误事件
function broadcastError(socket, data) {
    io.in(socket.id).emit('ds_send_error', data)
}


// 开始io事件监听
function startIoEvent(io) {

    io.on('connection', function (socket) {
        let newEventdata = eventdata;
        let isInit = false;
        let initData = null;
        console.log('新用户连接', socket.id);

        socket.on("ds_destroy", (data) => {
            isInit = false;;
        })

        socket.on("ds_init", (data) => {
            if (isInit) {
                broadcastError(socket, '已经初始化过了')
                return;
            }
            isInit = true;
            initData = data;
            console.log('新用户初始化', socket.id);
            if (!data) {
                eventdata ? eventdata.forEach(v => {
                    analyticEventdata(v, socket);
                }) : null;
                return;
            }
            // 验证类型错误
            let dataError = verifyInitDataFun.type(data.type);
            if (dataError) {
                broadcastError(socket, typeError)
                return;
            }
            // 验证数据错误
            dataError = verifyInitDataFun.type(data.data);
            if (dataError) {
                broadcastError(socket, typeError)
                return;
            }
            if (data.type === 'new') {
                data.forEach(v => {
                    analyticEventdata(v, socket);
                })
                newEventdata = data;
            } else if (data.type === 'update' && eventdata) {
                const dataMap = {}
                data.forEach(v => {
                    dataMap[v.eventName] = v;
                })
                const allMap = { ...eventdataMap, ...dataMap };
                newEventdata = [];
                Object.keys(allMap).forEach(v => {
                    analyticEventdata(allMap[v], socket);
                    newEventdata.push(allMap[v])
                });
            } else if (data.type === 'update' && !eventdata) {
                data.forEach(v => {
                    analyticEventdata(v, socket);
                })
                newEventdata = data;
            }

        })

        socket.on('ds_join', (data) => {
            if (!data) {
                newEventdata.filter(da => da.type === 'fixation_topic').forEach(da => {
                    socket.join(da.eventName);
                })
                return;
            }
            if (typeof data === 'number' || typeof data === 'string') {
                socket.join(data);
            } else {
                broadcastError(socket, `房间号必须是字符串`)
            }
        })
        socket.on('ds_leave', (data) => {
            if (typeof data === 'number' || typeof data === 'string') {
                socket.leave(data);
            } else {
                broadcastError(socket, `房间号必须是字符串`)
            }
        })

        socket.on('ds_log', (data) => {
            console.log(data)
        })

        // 断开连接之时都会发送的事件
        socket.on('disconnecting', function () {
            if (!isInit) {
                broadcastError(socket, '未初始化')
                return;
            }
            for (const room of socket.rooms) {
                if (room !== socket.id) {
                    // 是否有断开事件发送
                    newEventdata.filter(v => v.disconnect).forEach(v => {
                        if (v.type === 'global') {
                            console.log('全局广播:', v.eventName)
                            io.emit(v.eventName, obj);
                            io.emit('ds_log', obj);
                        } else {
                            let topicId = room;
                            let data = true;
                            console.log(`局部广播:事件名: ${v.eventName}房间名：${topicId}`)
                            broadcast('to', topicId, v.eventName, data)
                            io.emit('ds_log', obj);
                        }
                    })
                }
            }
        })

        // 测试断开连接
        socket.on('disconnect', function (reason) {
            console.log('用户离开', socket.id, wsDisconnectReasonMap[reason]);
        })


    })




    // io.to(socketId).emit('message');
    // 解析事件内容
    function analyticEventdata(v, socket) {
        if (!v.eventName || !v.type) {
            broadcastError(socket, `事件中心系统数据错误, 必须是${errorData.initDataStructure}`)
            return;
        }

        const typeIdNameMap = {
            fixation_topic: 'fixationTopicId',
            topic: 'topicId'
        }

        if (v.type === 'global') {
            socket.on(v.eventName, function (obj) {
                console.log('全局广播:', v.eventName)
                io.emit(v.eventName, obj);
                io.emit('ds_log', obj);
            });
        } else {
            socket.on(v.eventName, function (obj) {
                let topicId = obj[typeIdNameMap[v.type]];
                let data = obj.data;
                if (!topicId && v.type === 'fixation_topic') {
                    topicId = v.eventName;
                    data = obj;
                }
                if (!topicId || !data) {
                    console.log(topicId, data)
                    broadcastError(socket, `发送数据的类型错误，必须是${errorData.errorData}, 并且事件类型需要对应;${JSON.stringify(obj)}`)
                    return;
                }
                console.log(`局部广播:事件名: ${v.eventName}房间名：${topicId}`)
                v.isSelf ? broadcast('in', topicId, v.eventName, data)
                    : broadcast('to', topicId, v.eventName, data);
                io.emit('ds_log', obj);
            });
        }

    }
}


module.exports = {
    initEventServer
}

