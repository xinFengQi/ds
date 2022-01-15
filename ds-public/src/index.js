



const { app, io} = require('./util/getway_express');
const express = require('express');
app.use(express.static('./static'))
require('./util/getway_express');

require('./event_center/index');
// require('./file_center/index');
// require('./method_center/index');







app.get('/api', function (req, res) {
    res.send('<h1>welcome</h1>');
})


