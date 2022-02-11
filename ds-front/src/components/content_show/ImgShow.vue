<template>
  <div class="img_show_main">
    <img class="img_show" :src="imgBase64" />
  </div>
</template>

<script>
export default {
  components: {},
  name: "ImgShow",
  props: {
    imgBase64: String,
  },
  data() {
    return {
    };
  },
  mounted() {
    if (!this.imgBase64) {
      throw "文件数据未传入";
    }
  },
  watch: {},
};
</script>

<style scoped>
.img_show_main {
  width: 100%;
  height: 100%;
}

</style>
