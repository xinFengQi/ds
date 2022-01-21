<template>
  <div></div>
</template>

<script>
import chrome_util from "../../chrome_lib/chrome_util";
/**
 * ，是一个常驻的页面，它的生命周期是插件中所有类型页面中最长的，
 * 它随着浏览器的打开而打开，随着浏览器的关闭而关闭，所以通常把需要一直运行的、启动就运行的、全局的代码放在background里面。
 * background的权限非常高，几乎可以调用所有的Chrome扩展API（除了devtools），
 * 而且它可以无限制跨域，也就是可以跨域访问任何网站而无需要求对方设置CORS。
 */

// 脚本管理
export default {
  name: "background",
  components: {},
  data() {
    return {
      idArr: [],
    };
  },
  created() {
    console.log("创建菜单");
    chrome_util.addLinkMenu("扩展设置页面", "src/homepage.html");
    chrome_util.addSeparatorMenu();
    this.getAllCodeMenu();
    chrome_util.onMessage(
      "__execute_codeScriptArr_reload",
      "backgroud监听到了数据刷新",
      () => {
        // 删除所有代码菜单
        this.idArr.forEach((id) => {
          chrome_util.deleteMenu(id);
        });
        // 重新生成所有菜单
        this.getAllCodeMenu();
      }
    );
  },
  methods: {
    getAllCodeMenu: function () {
      chrome_util.getLocalVariable("__execute_codeScriptArr").then((codeArr) => {
        if (codeArr) {
          this.idArr = [];
          console.log("读取到脚本:", codeArr);
          codeArr.forEach((element) => {
            const id = chrome_util.addExtrueCodeMenu(element.name, element.code);
            this.idArr.push(id);
          });
        }
      });
    },
  },
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
