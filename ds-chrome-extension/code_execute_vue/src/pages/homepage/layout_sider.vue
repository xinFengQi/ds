<template>
  <a-menu
    style="width: 256px"
    mode="vertical"
    v-model:selectedKeys="defaultSelectedKeys"
    @click="handleClick"
  >
    <a-menu-item v-for="menu in menuTree" :key="menu.key">
      <component :is="menu.icon"></component>
      {{ menu.label }}
    </a-menu-item>
  </a-menu>
</template>

<script>
import { SnippetsTwoTone } from "@ant-design/icons-vue";

export default {
  name: "layoutSider",
  components: {
    SnippetsTwoTone,
  },
  data() {
    return {
      defaultSelectedKeys: ["bookmarks"],
      menuTree: [
        {
          key: "bookmarks",
          label: "书签设置",
          icon: SnippetsTwoTone,
        },
        {
          key: "bookmarks_manager",
          label: "书签管理",
          icon: SnippetsTwoTone,
        },
         {
          key: "code_setting",
          label: "脚本设置",
          icon: SnippetsTwoTone,
        },
        {
          key: "code_manager",
          label: "脚本管理",
          icon: SnippetsTwoTone,
        },
      ],
    };
  },

  mounted() {
    this.$emit("selectMenuKey", this.defaultSelectedKeys[0]);
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
