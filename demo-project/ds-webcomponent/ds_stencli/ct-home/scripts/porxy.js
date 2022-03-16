
const { createProxyMiddleware } = require('http-proxy-middleware');

const ctPorxy = createProxyMiddleware('/ct/component' ,{ target: 'http://dongfubao.gitee.io', changeOrigin: true });

module.exports = function (req, res, next) {
    if (req.url.startsWith('/ct/component')) {
        ctPorxy(req, res, next)
    } else {
        // pass request on to the default dev server
        next();
    }
};