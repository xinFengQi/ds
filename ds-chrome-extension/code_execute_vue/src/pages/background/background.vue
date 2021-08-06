<template>
  <div></div>
</template>

<script>
/**
 * ，是一个常驻的页面，它的生命周期是插件中所有类型页面中最长的，
 * 它随着浏览器的打开而打开，随着浏览器的关闭而关闭，所以通常把需要一直运行的、启动就运行的、全局的代码放在background里面。
 * background的权限非常高，几乎可以调用所有的Chrome扩展API（除了devtools），
 * 而且它可以无限制跨域，也就是可以跨域访问任何网站而无需要求对方设置CORS。
 */

export default {
  name: "page1",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
