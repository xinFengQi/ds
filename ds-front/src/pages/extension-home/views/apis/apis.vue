<template>
  <div class="apis_main" v-if="giteeFileData">
    <ApisLeft :giteeFileData="giteeFileData"></ApisLeft>
    <ApisRight class="apis_right"></ApisRight>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ApisLeft from "./apis_left.vue";
import ApisRight from "./apis_right.vue";
import { getGiteeLocalStoreData, getAll } from "@/sevices/gitee.api";

@Options({
  components: {
    ApisLeft,
    ApisRight,
  },
})
export default class ApiHome extends Vue {
  giteeFileData = null;

  mounted() {
    getGiteeLocalStoreData("apisData", "private", true).then((v: any) => {
      this.giteeFileData = v;
    });
  }
}
</script>

<style lang="less" scope>
.apis_main {
  display: flex;
  height: 100%;
  padding: 10px;
  .apis_right {
    flex: 1;
    padding: 0px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
