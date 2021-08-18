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
import chrome_util from "../../chrome_lib/chrome_util";

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
          isShow: true,
        },
      ],
    };
  },

  mounted() {
    this.$emit("selectMenuKey", this.defaultSelectedKeys[0]);
    // 判断是否读取远程书签权限   todo 差了联动代码
    chrome_util.getLocalVariable("__giteeMarks_private_open").then((isShow) => {
      this.menuTree[2].isShow = isShow;
    });
  },
  methods: {
    handleClick: function (event) {
      this.$emit("selectMenuKey", event.key);
    },
  },
};
</script>

<style scope>
</style>
