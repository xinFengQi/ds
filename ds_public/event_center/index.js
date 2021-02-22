const fs = require('fs')


// 读取db，获取事件
const eventdata = JSON.parse(fs.readFileSync('./db/eventData.json').toString());


function initEventServer(app, io) {

    startIoEvent(io);

    // 发送事件
    app.get('/send', function (req, res) {
        res.json({status: 200, message: '信息发送成功'});
    })

    // 注册事件， 事件名唯一

    // 删除事件

    // 





}

function startIoEvent(io) {

    io.on('connection', function (socket) {

        console.log('新用户登录', socket.id);
        // 加入默认房间
        socket.join('default_system')
        socket.join('default_modules')
        socket.join('default_department')
        socket.join('default_topic');
        if (eventdata.data) {
            eventdata.data.forEach(v => {
                analyticEventdata(v, socket);
            })
        }

    })

    // io.to(socketId).emit('message');
    // 解析事件内容
    function analyticEventdata(v, socket) {

        if (!v.eventName || !v.type) {
            broadcast('in', socket.id, 'sendError',
                '事件中心系统数据错误, 必须是{eventName:"", type: ""}')
            return;
        }

        // 发送给其他具有id或者房间
        function broadcast(type, id, name, data) {
            io[type](id).emit(name, data)
        }

        const typeIdNameMap = {
            system: 'systemId',
            modules: 'modulesId',
            department: 'departmentId',
            personal: 'personalId',
            topic: 'topicId'
        }

        if (v.type === 'global') {
            socket.on(v.eventName, function (obj) {
                io.emit(v.eventName, obj);
            });
        } else {
            socket.on(v.eventName, function (obj) {
                if (!obj[typeIdNameMap[v.type]] || !obj.data) {
                    broadcast('in', socket.id, 'sendError',
                        '发送数据的类型错误，必须是{systemId(modulesId,departmentId, personalId): "", data: any}, 并且事件类型需要对应')
                    return;
                }
                v.isSelf ? broadcast('in', obj[typeIdNameMap[v.type]], v.eventName, obj.data)
                    : broadcast('to', obj[typeIdNameMap[v.type]], v.eventName, obj.data)
            });
        }

    }
}


module.exports = {
    initEventServer
}

