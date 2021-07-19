// 在根目录下自行创建vue.config.js
module.exports = {
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    devServer: {
      port: '8080',
      open: true,
      proxy: {
        '/ct': {
          // /api 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
          // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
          target: 'https://dongfubao.gitee.io',
          changeOrigin: true,
          pathRewrite: {'^/ct': 'https://dongfubao.gitee.io/ct'}
        }
      }
    }
  }