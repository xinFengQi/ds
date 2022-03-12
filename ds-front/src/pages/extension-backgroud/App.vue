<template></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import browerExtensionUtil from "@/sevices/brower_extension.util";
import localStorgeData from "@/sevices/localStorge.data";

@Options({
  components: {},
})
export default class App extends Vue {
  idArr: any = [];
  created() {
    console.log("创建菜单");
    browerExtensionUtil.addLinkMenu("扩展设置页面", "./extension-setting.html");
    browerExtensionUtil.addSeparatorMenu();
    this.getAllCodeMenu();
    browerExtensionUtil.onMessage(
      "__execute_codeScriptArr_reload",
      "backgroud监听到了数据刷新",
      () => {
        // 删除所有代码菜单
        this.idArr.forEach((id: any) => {
          browerExtensionUtil.deleteMenu(id);
        });
        // 重新生成所有菜单
        this.getAllCodeMenu();
      }
    );
  }
  getAllCodeMenu() {
    localStorgeData.getLocalVariable("__execute_codeScriptArr").then((codeArr: any) => {
      if (codeArr) {
        this.idArr = [];
        console.log("读取到脚本:", codeArr);
        codeArr.forEach((element: any) => {
          const id = browerExtensionUtil.addExtrueCodeMenu(element.name, element.code);
          this.idArr.push(id);
        });
      }
    });
  }
}
</script>

<style lang="less">
@import "../../less/index.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
