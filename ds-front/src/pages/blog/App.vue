<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getConfigData } from "@/sevices/gitee.api";
import store from "./store";
@Options({
  components: {},
})
export default class Home extends Vue {
  mounted() {
    getConfigData("./data/config.json").then((data) => {
      if (!data.data) {
        throw "请加入配置文件";
      }
      store.dispatch('setLayoutData', data.data)
    });
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
