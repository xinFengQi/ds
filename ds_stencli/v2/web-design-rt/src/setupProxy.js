const proxy = require('http-proxy-middleware'); //需要安装中间件  
module.exports = function(app) {
  app.use(
    proxy("/ct", {
        target: 'http://dongfubao.gitee.io',
        changeOrigin: true,
    })
  );
};