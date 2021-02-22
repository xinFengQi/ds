const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: true });
const fs = require('fs')

const { initEventServer } = require('./event_center/index');

require('./util/getway_express');

initEventServer(app, io);


app.get('/api', function (req, res) {
    res.send('<h1>welcome</h1>');
})


http.listen(10000, function () {
    console.log('http://localhost:10000/test');
});