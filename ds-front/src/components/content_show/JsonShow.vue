<template>
  <pre class="json_show_main">{{jsonData}}</pre>
</template>

<script>
export default {
  components: {},
  name: "JsonShow",
  props: {
    jsonData: String,
  },
  data() {
    return {
    };
  },
  mounted() {
    if (!this.jsonData) {
      throw "文件数据未传入";
    }
  },
  watch: {},
};
</script>

<style scoped>
.json_show_main {
  width: 100%;
  height: 100%;
}

</style>
