<template>
  <div class="">
    <div class="" v-for="blog in blogList"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import store from "../store";

export default class BlogList extends Vue {
  @Prop() blogList!: any[];

  mounted() {
    if (!this.blogList || !Array.isArray(this.blogList)) {
      throw "BlogList组件参数错误";
    }
    console.log(this.blogList, "===================");
  }

  toggle() {}
}
</script>

<style scoped lang="less">
</style>