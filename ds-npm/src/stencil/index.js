const { startMonitor } = require('./monitor');



const stencilExecute = (options) => {
    console.log(options)
    if (options.Init) {
    }
    if (options.Dev) {
        startMonitor()
    }
}


module.exports = {
    startMonitor,
    stencilExecute
}