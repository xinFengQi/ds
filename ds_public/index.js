const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: true });
const fs = require('fs')

const { initEventServer } = require('./event_center/index');



initEventServer(app, io);


app.get('/test', function (req, res) {
    res.send('<h1>welcome</h1>');
})


http.listen(10000, function () {
    console.log('listening on *:10000');
});