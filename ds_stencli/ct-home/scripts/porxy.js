
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (req, res, next) {
    if (req.url.startsWith('/ct')) {
        createProxyMiddleware('/ct' ,{ target: 'http://dongfubao.gitee.io', changeOrigin: true })(req, res, next)
    } else {
        // pass request on to the default dev server
        next();
    }
};