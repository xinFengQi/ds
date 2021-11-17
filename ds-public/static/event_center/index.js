console.log('测试事件收发中心');

var socket = io.connect("ws://localhost:10000");
socket.nsp = '/admin'
socket.on('connect', (a, b, c) => {
    console.log('连接了，连接id是:', socket.id)
    socket.emit('ds_init')
    socket.emit('ds_join')
    socket.emit('global', '来自全局的消息')
    socket.emit('fixation_topic', { fixationTopicId: 'fixation_topic', data: '来自固定事件固定房间的消息' })
    socket.emit('fixation_topic', '来自固定事件的消息')
    socket.emit('topic', { topicId: '随意的id', data: 'topic' })

})



// socket.on('global', function (msg) {
//     console.log(msg)
// })

// socket.on('fixation_topic', function (msg) {
//     console.log(msg)
// })

// socket.on('topic', function (msg) {
//     console.log(msg)
// })



socket.on('ds_log', function (msg) {
    console.log(msg)
})

socket.on('ds_send_error', function (msg) {
    console.log(msg)
})