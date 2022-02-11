<template>
  <div class="file_show_main" v-if="fileType && content">
    <ImgShow v-if="fileType === 'img'" :imgBase64="imgBase64"></ImgShow>
    <JsonShow v-if="fileType === 'json'" :jsonData="jsonData"></JsonShow>
    <MarkDownShow
      v-if="fileType === 'md' && mdHtml"
      :mdData="mdHtml"
    ></MarkDownShow>
  </div>
</template>

<script>
import { getMdHtml, getFileData } from "@/sevices/gitee.api";
import ImgShow from "./content_show/ImgShow.vue";
import JsonShow from "./content_show/JsonShow.vue";
import MarkDownShow from "./content_show/MarkDownShow.vue";
export default {
  components: {
    ImgShow,
    JsonShow,
    MarkDownShow,
  },
  name: "FileShowData",
  props: {
    giteeData: Object,
    fileData: Object,
  },
  data() {
    return {
      fileType: null,
      fileDetail: null,
      content: "",
      imgBase64: "",
      jsonData: "",
      mdData: "",
      mdHtml: "",
    };
  },
  mounted() {
    if (!this.fileData) {
      throw "文件数据未传入";
    }
    console.log(this.fileData, this.giteeData, "==");
    if (!this.fileData.path) {
      throw "文件名未传入";
    }
    const suffixs = this.fileData.path.split(".");
    const suffix = suffixs[suffixs.length - 1].toLowerCase();
    // 直接获取数据
    getFileData(
      this.giteeData.access,
      this.giteeData.owner,
      this.giteeData.repo,
      this.fileData.path
    ).then((v) => {
      console.log(v)
      this.content = v.content;
      this.contentHandler(suffix, v);
    });
  },
  watch: {},
  methods: {
    contentHandler(suffix, v) {
      console.log(suffix, v, "==============");
      switch (suffix) {
        case "json":
          this.fileType = "json";
          this.jsonData = JSON.parse(decodeURIComponent(atob(v.content)));
          break;
        case "md":
          this.fileType = "md";
          this.mdData = decodeURIComponent(escape(atob(v.content)));
          getMdHtml(this.giteeData.access, this.mdData).then((v) => {
            this.mdHtml = v;
          });
          break;
        case "ico":
        case "jpg":
        case "png":
          this.fileType = "img";
          this.imgBase64 = `data:image/${this.fileType};base64,${v.content}`;
          break;
        default:
          this.fileType = "text";
          break;
      }
    },
  },
};
</script>

<style scoped>
.file_show_main {
  max-width: 400px;
  max-height: 800px;
}
</style>
