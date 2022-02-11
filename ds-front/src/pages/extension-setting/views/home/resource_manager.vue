<template>
  <div>
    <GiteeSettingForm :giteeData="giteePublicData"></GiteeSettingForm>
    <div class="setting_tool">
      <a-button type="primary" @click="reload()">重新加载</a-button>
    </div>
    <GiteeFileManager
      v-if="giteeFileData"
      :giteeData="giteeFileData"
    ></GiteeFileManager>
  </div>
</template>

<script>
import GiteeSettingForm from "@/components/GiteeSettingForm.vue";
import GiteeFileManager from "@/components/GiteeFileManager.vue";
import { getGiteeLocalStoreData, getGiteeObjectKey } from "@/sevices/gitee.api";

export default {
  name: "ResourceManager",
  components: {
    GiteeSettingForm,
    GiteeFileManager,
  },
  data() {
    return {
      giteePublicData: getGiteeObjectKey("resource", "public"),
      giteeFileData: null,
    };
  },
  mounted() {
    getGiteeLocalStoreData("resource", "public", true).then((v) => {
      this.giteeFileData = v;
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

<style>
</style>
