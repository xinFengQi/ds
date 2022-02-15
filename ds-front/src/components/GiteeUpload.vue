<template>
  <div class="gitee_upload">
    <p>上传文件:</p>
    <input type="file" @change="inputChangeSingle" />
    <p>上传文件夹:</p>
    <input type="file" @change="inputChangeMultiple" webkitdirectory />
    <div v-if="confirmUploadLoading">
      需要上传文件数：{{ allFile }},
      上传成功数：{{allSuccessFile}}，
      上传失败数：{{ allFailFile }}
    </div>
    <div class="btu_tool">
      <a-button @click="ok" :loading="confirmUploadLoading" type="primary"
        >确定</a-button
      >
    </div>
  </div>
</template>

<script>
import { addOrUpdateData } from "@/sevices/gitee.api";
export default {
  components: {},
  name: "GiteeUpload",
  props: {
    giteeData: Object,
    basePath: String,
  },
  data() {
    return {
      singles: [],
      multiples: [],
      allFile: 0,
      allSuccessFile: 0,
      allFailFile: 0,
      confirmUploadLoading: false,
    };
  },
  mounted() {},
  watch: {},
  methods: {
    inputChangeSingle(event) {
      var reader = new FileReader();
      console.log(event.target.files);
      reader.onload = (ev) => {
        this.singles = [
          { file: event.target.files[0], content: ev.target.result },
        ];
      };
      reader.readAsDataURL(event.target.files[0]);
    },
    inputChangeMultiple(event) {
      console.log(event.target.files);
      this.multiples = [];
      for (let i = 0; i < event.target.files.length; i++) {
        const element = event.target.files[i];
        var reader = new FileReader();
        reader.onload = (ev) => {
          this.multiples.push({ file: element, content: ev.target.result });
        };
        reader.readAsDataURL(element);
      }
    },
    ok() {
      this.allSuccessFile = 0;
      this.allFailFile = 0;
      console.log(this.singles, this.multiples);
      const allarr = [...this.singles, ...this.multiples];
      this.allFile = allarr.length;
      this.confirmUploadLoading = true;
      this.loopUpload(allarr);
    },
    // 递归上传文件
    loopUpload(arr) {
      if (!arr.length) {
        if (this.allFailFile === 0 || this.allFile === this.allSuccessFile) {
          this.$emit("success", true);
        }
        this.confirmUploadLoading = false;
        return;
      }
      const { file, content } = arr.shift();
      addOrUpdateData(
        this.giteeData.access,
        this.giteeData.owner,
        this.giteeData.repo,
        null,
        file.webkitRelativePath ? (this.basePath + "/" + file.webkitRelativePath) :  (this.basePath + "/" + file.name),
        content
      )
        .then((v) => {
          this.allSuccessFile++;
        })
        .catch((err) => {
          this.allFailFile++;
        })
        .finally(() => {
          this.loopUpload(arr);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btu_tool {
  display: flex;
  justify-content: flex-end;
}
</style>
