<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getConfigData, getAll } from "@/sevices/gitee.api";
import store from "./store";
@Options({
  components: {},
})
export default class Home extends Vue {
  splitFileNameGetInfo(arr: any[]) {
    if (!arr || !Array.isArray(arr)) {
      return [];
    }
    return arr.map((v) => {
      const vArr = v.fileName.split("_$_");
      return {
        belongTo: vArr[0],
        time: vArr[1].replaceAll("_", "/"),
        classify: vArr[2],
        title: vArr[3],
        tags: vArr[4].split(";"),
        ...v,
      };
    });
  }

  created() {
    getConfigData("./homefile/config.json").then((data) => {
      if (!data.data) {
        throw "请加入配置文件";
      }
      store.dispatch("setLayoutData", data.data);
      if (!data.data.gitee) {
        throw "请加入gitee配置";
      }
      const { access, owner, repo } = data.data.gitee;
      getAll(access, owner, repo, "blog", "blog_setting").then(
        (data: any) => {
          console.log('------------------------------')
          if (data.content) {
            const blogConfig = JSON.parse(
              decodeURIComponent(atob(data.content))
            )[0];
            store.dispatch("setBlogConfig", blogConfig);
            console.log("博客分类设置", blogConfig);
          }
        }
      );
      getAll(access, owner, repo, "blog", "blog_list").then((data: any) => {
        if (data.content) {
          const blogList = JSON.parse(
            decodeURIComponent(atob(data.content))
          )[0];
          store.dispatch("setBlogDataList", this.splitFileNameGetInfo(blogList));
          console.log("博客", blogList);
        }
      });
      getAll(access, owner, repo, "blog", "blog_project_list").then(
        (data: any) => {
          if (data.content) {
            const projectList = JSON.parse(
              decodeURIComponent(atob(data.content))
            )[0];
            store.dispatch(
              "setProjectDataList",
              this.splitFileNameGetInfo(projectList)
            );
            console.log("项目", projectList);
          }
        }
      );
    });
  }

  mounted() {

  }
}
</script>

<style lang="less">
@import "./less/dark.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
