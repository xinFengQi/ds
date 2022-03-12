<template>
  <div class="blog_manager_main">
    <GiteeSettingForm :giteeData="giteePublicData"></GiteeSettingForm>
    <div class="setting_tool">
      <a-button class="mr-8" type="primary" @click="reload()"> 重新加载 </a-button>
    </div>
    <div class="setting_tool left">
      <a-button class="mr-8" type="primary" @click="gotoPage('list', '博客')">
        博客列表页
      </a-button>
      <a-button class="mr-8" type="primary" @click="gotoPage('list', '项目')">
        项目列表页
      </a-button>
      <a-button class="mr-8" type="primary" @click="gotoPage('setting')">
        设置页
      </a-button>
      <a-button class="mr-8" type="primary" @click="gotoPage('add')"> 新增页 </a-button>
    </div>
    <BlogManagerList
      v-if="giteeFileData && currentPage === 'list'"
      :giteeData="giteeFileData"
      :belongTo="belongTo"
    ></BlogManagerList>
    <BlogManagerAdd
      v-if="giteeFileData && currentPage === 'add'"
      :giteeData="giteeFileData"
      @success="addSuccess"
    ></BlogManagerAdd>
    <BlogManagerSetting
      v-if="giteeFileData && currentPage === 'setting'"
      :giteeData="giteeFileData"
    ></BlogManagerSetting>
  </div>
</template>

<script>
import GiteeSettingForm from "@/components/GiteeSettingForm.vue";
import { getGiteeLocalStoreData, getGiteeObjectKey } from "@/sevices/gitee.api";
import BlogManagerAdd from "./blog_manager_add.vue";
import BlogManagerSetting from "./blog_manager_setting.vue";
import BlogManagerList from "./blog_manager_list.vue";

export default {
  name: "BlogManager",
  components: {
    GiteeSettingForm,
    BlogManagerAdd,
    BlogManagerSetting,
    BlogManagerList,
  },
  data() {
    return {
      giteePublicData: getGiteeObjectKey("blog_manager", "public"),
      giteeFileData: null,
      currentPage: "list",
      belongTo: "博客",
    };
  },
  mounted() {
    getGiteeLocalStoreData("blog_manager", "public", true).then((v) => {
      this.giteeFileData = v;
    });
  },
  methods: {
    gotoPage: function (page, belongTo) {
      this.currentPage = null;
      setTimeout(() => {
        this.belongTo = belongTo;
        this.currentPage = page;
      });
    },
    addSuccess: function () {
      this.currentPage = "list";
    },
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
.setting_tool {
  display: flex;
}
.left {
  justify-content: flex-end;
}
</style>
>
