


const { app, io} = require('./util/getway_express');
 
const { initEventServer } = require('./event_center/index');

require('./util/getway_express');

initEventServer(app, io);



app.get('/api', function (req, res) {
    res.send('<h1>welcome</h1>');
})


