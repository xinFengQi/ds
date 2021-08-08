<template>
    <a-layout class="main_layout">
      <a-layout-sider>
        <layoutSider class="layout_sider" @selectMenuKey="selectMenuKey($event)"></layoutSider>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="layout_content">
            <bookmarksSetting v-if="currentKey === 'bookmarks'"></bookmarksSetting>
            <bookmarksManager v-if="currentKey === 'bookmarks_manager'"></bookmarksManager>
            <codeSetting v-if="currentKey === 'code_setting'"></codeSetting>
            <codeManager v-if="currentKey === 'code_manager'"></codeManager>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
import layoutSider from './layout_sider.vue';
import bookmarksSetting from './bookmarks_setting.vue';
import bookmarksManager from './bookmarks_manager.vue'
import codeSetting from './code_setting.vue';
import codeManager from './code_manager.vue';

export default {
  name: "homepage",
  components: {
    layoutSider,
    bookmarksSetting,
    bookmarksManager,
    codeSetting,
    codeManager
  },
  data() {
    return {
      currentKey: null
    }
  },
  methods: {
    selectMenuKey: function(key) {
      this.currentKey = key;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main_layout{
  height: 100%;
}
.layout_sider{
  width: 200px !important;
  height: 100%;
}

.layout_content{
  margin-left: 4px;
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
}

</style>
