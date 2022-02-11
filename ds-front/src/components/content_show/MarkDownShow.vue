<template>
  <div class="md_show_main" :innerHTML="mdData"></div>
</template>

<script>
export default {
  components: {},
  name: "JsonShow",
  props: {
    mdData: String,
  },
  data() {
    return {
    };
  },
  mounted() {
    if (!this.mdData) {
      throw "文件数据未传入";
    }
  },
  watch: {},
};
</script>

<style scoped>
.md_show_main {
  width: 100%;
  height: 100%;
}

</style>
