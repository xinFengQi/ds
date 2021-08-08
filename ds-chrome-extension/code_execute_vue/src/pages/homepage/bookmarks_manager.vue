<template>
  <div class="bookmarks_manager_main">
    <div class="bm_setting_tool">
      <a-button type="primary" @click="saveUpdate"
        >保存此次数据更新，不会影响本地书签内容</a-button
      >
    </div>
    <Home :edit="true"></Home>
  </div>
</template>

<script>
import Home from "../home/home.vue";
export default {
  name: "bookmarksManager",
  components: {
    Home,
  },
  methods: {
      saveUpdate: function() {
          console.log('保存此次更新')
      }
  },
};
</script>

<style scoped>
.bookmarks_manager_main {
  height: 100%;
}

.bm_setting_tool{
    display: flex;
}
</style>
