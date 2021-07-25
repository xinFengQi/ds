
const { createProxyMiddleware } = require('http-proxy-middleware');

const ctPorxy = createProxyMiddleware('/antdesign2-adapter-lib' ,{ target: 'http://192.168.3.85:8081', changeOrigin: true });

module.exports = function (req, res, next) {
    if (req.url.startsWith('/antdesign2-adapter-lib')) {
        ctPorxy(req, res, next)
    } else {
        // pass request on to the default dev server
        next();
    }
};