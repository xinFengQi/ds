<template>
  <a-menu
    style="width: 256px"
    mode="vertical"
    v-model:selectedKeys="defaultSelectedKeys"
    @click="handleClick"
  >
    <template v-for="menu in menuTree">
      <a-menu-item v-if="menu.isShow" :key="menu.key">
        <component :is="menu.icon"></component>
        {{ menu.label }}
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import { SnippetsTwoTone } from "@ant-design/icons-vue";
import localStorgeData from "@/sevices/localStorge.data";
import { getGiteeKey } from "@/sevices/gitee.api";

export default {
  name: "layoutSider",
  components: {
    SnippetsTwoTone,
  },
  data() {
    return {
      defaultSelectedKeys: ["develop_preface"],
      menuTree: [
        {
          key: "develop_preface",
          label: "开发者序言",
          icon: SnippetsTwoTone,
          isShow: true,
        },
        {
          key: "bookmarks",
          label: "书签设置",
          icon: SnippetsTwoTone,
          isShow: true,
        },
        {
          key: "bookmarks_manager",
          label: "书签管理",
          icon: SnippetsTwoTone,
          isShow: false,
        },
        {
          key: "code_setting",
          label: "脚本设置",
          icon: SnippetsTwoTone,
          isShow: true,
        },
        {
          key: "code_manager",
          label: "脚本管理",
          icon: SnippetsTwoTone,
          isShow: false,
        },
        {
          key: "tasklist_setting",
          label: "任务列表设置",
          icon: SnippetsTwoTone,
          isShow: true,
        },
        {
          key: "resource_manager",
          label: "资源管理",
          icon: SnippetsTwoTone,
          isShow: false,
        },
        {
          key: "blog_manager",
          label: "博客管理",
          icon: SnippetsTwoTone,
          isShow: false,
        },
      ],
    };
  },

  mounted() {
    // 判断是否有资源管理的权限
    localStorgeData.getLocalVariableSub("__gitee_all_ds_access_token", (isShow) => {
      console.log(isShow, "=====");
      const index = this.menuTree.findIndex((v) => v.key === "resource_manager");
      this.menuTree[index].isShow = isShow !== "16cf2bb0ab7fa12779bfec47f2c3ee9a";
    });

    this.$emit("selectMenuKey", this.defaultSelectedKeys[0]);
    // 判断是否读取远程书签权限
    localStorgeData.getLocalVariableSub(
      getGiteeKey("booksMarks", "private_open"),
      (isShow) => {
        const index = this.menuTree.findIndex((v) => v.key === "bookmarks_manager");
        this.menuTree[index].isShow = isShow;
      }
    );
    // 判断是否读取远程书签权限
    localStorgeData.getLocalVariableSub(
      getGiteeKey("codes", "private_open"),
      (isShow) => {
        const index = this.menuTree.findIndex((v) => v.key === "code_manager");
        this.menuTree[index].isShow = isShow;
      }
    );
  },
  methods: {
    handleClick: function (event) {
      this.$emit("selectMenuKey", event.key);
    },
  },
};
</script>

<style scope></style>
