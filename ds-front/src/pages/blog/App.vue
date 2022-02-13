<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getConfigData } from "@/sevices/gitee.api";
import poka from "@/sevices/poka.util";
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
      store.dispatch("setLayoutData", data.data);
    });
    const a = poka.zip("121212fsfsdfsfsd分身乏术的");
    console.log("压缩：", a, a.length);
    const aceKey = "12121212";
    const ena = poka.encrypt(a, aceKey);
    console.log("加密", ena, ena.length);
    const dac = poka.decrypt(ena, aceKey);
    console.log("解密", dac, dac.length);
    const b = poka.unzip(dac);
    console.log("解压：", b, b.length);
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
