<template>
  <LayoutMain>
    <template v-slot:menu>
      <LayoutMainMenu :menu="menu" @menuClick="menuClick"></LayoutMainMenu>
    </template>

    <router-view />
  </LayoutMain>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LayoutMain from "@/layout/LayoutMain.vue";
import LayoutMainMenu from "@/layout/LayoutMainMenu.vue";
import { LayoutMenu } from "@/model/layout.model";
import { useRouter } from "vue-router";

@Options({
  components: {
    LayoutMain,
    LayoutMainMenu,
  },
})
export default class Home extends Vue {
  router = useRouter();
  menu: LayoutMenu[] = [
    {
      name: "首页",
    },
    {
      name: "关于",
      link: "./about",
    },
  ];
  menuClick(data: LayoutMenu) {
    console.log(data);
    if (data.link) {
      this.router.push({
        //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
        path: data.link,
      });
    }
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
