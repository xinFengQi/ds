console.log('测试事件收发中心');

var socket = io.connect("ws://127.0.0.1:10000");


socket.on('connect', (a, b, c) => {
    console.log('连接了')
    console.log(socket.id)
    socket.emit('test1', '来自default_global的消息')
    socket.emit('test2', { systemId: 'default_system', data: '来自default_system的消息' })
    socket.emit('test3', { modulesId: 'default_modules', data: '来自default_modules的消息' })
    socket.emit('test4', { departmentId: 'default_department', data: '来自default_department的消息' })
    socket.emit('test5', { personalId: socket.id, data: '来自自己的消息' })
    socket.emit('test6', { topicId: 'default_topic', data: '来自default_topic的消息' })


})



socket.on('test1', function (msg) {
    console.log(msg)
})

socket.on('test2', function (msg) {
    console.log(msg)
})
socket.on('test3', function (msg) {
    console.log(msg)
})
socket.on('test4', function (msg) {
    console.log(msg)
})
socket.on('test5', function (msg) {
    console.log(msg)
})

socket.on('test6', function (msg) {
    console.log(msg)
})

socket.on('sendError', function (msg) {
    console.log(msg)
})