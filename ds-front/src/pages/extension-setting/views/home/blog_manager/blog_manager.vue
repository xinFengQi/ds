<template>
  <div class="blog_manager_main">
    <GiteeSettingForm :giteeData="giteePublicData"></GiteeSettingForm>
    <div class="setting_tool">
      <a-button class="mr-8" type="primary" @click="reload()">
        重新加载
      </a-button>
    </div>
    <BlogManagerAdd></BlogManagerAdd>
  </div>
</template>

<script>
import GiteeSettingForm from "@/components/GiteeSettingForm.vue";
import { getGiteeLocalStoreData, getGiteeObjectKey } from "@/sevices/gitee.api";
import BlogManagerAdd from "./blog_manager_add.vue";
export default {
  name: "BlogManager",
  components: {
    GiteeSettingForm,
    BlogManagerAdd,
  },
  data() {
    return {
      giteePublicData: getGiteeObjectKey("blog_manager", "public"),
      giteeFileData: null,
    };
  },
  mounted() {
    getGiteeLocalStoreData("blog_manager", "public", true).then((v) => {
      this.giteeFileData = v;
      console.log(this.giteeFileData, "======");
    });
  },
  methods: {
    reload: function () {
      this.giteeFileData = null;
      setTimeout(() => {
        getGiteeLocalStoreData("resource", "public", true).then((v) => {
          this.giteeFileData = v;
        });
      }, 0);
    },
  },
};
</script>

<style scoped>
.blog_manager_main {
}
</style>>
