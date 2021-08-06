<template>
  <div class="home_main">
    <div>
      <HomeMenu @getShowMenu="getShowMenu($event)"></HomeMenu>
    </div>
    <div class="home_content">
      <div class="home_tool">
        <a-input
          class="input_search"
          v-model:value="value"
          placeholder="搜索书签"
        />
      </div>
      <HomeContent style="overflow: auto;flex: 1"
        v-if="showContentData && showContentData.length"
        :showContentData="showContentData"
      ></HomeContent>
    </div>
  </div>
</template>

<script>
import HomeMenu from "./home-menu.vue";
import HomeContent from "./home-content.vue";
export default {
  name: "home",
  components: {
    HomeMenu,
    HomeContent,
  },
  data() {
    return {
      showContentData: [],
      value: ""
    };
  },
  methods: {
    getShowMenu(data) {
      console.log(data, "会展示的菜单");
      this.showContentData = data.children;
    },
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
  padding: 20px 0;
  height: 100%;
}

.home_main {
  display: flex;
  height: 100%;
}
.home_content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  
}
.home_tool {
  display: flex;
  margin: 10px;
}
.input_search {
  width: 200px !important;
  height: 40px;
}
</style>
