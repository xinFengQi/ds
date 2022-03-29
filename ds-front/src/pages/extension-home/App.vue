<template>
  <div class="top_tool">
    <dsb5-button class="mr_1" @click="goto('/')">书签页</dsb5-button>
    <dsb5-button @click="goto('/apis')">请求页</dsb5-button>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  methods: {
    goto: function (url) {
      this.$router.push(url);
    },
  },
};
</script>

<style lang="less">
@import "../../less/index.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 20px;
  height: calc(100% - 20px) !important;
  overflow: hidden;
}

.top_tool {
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
}
</style>
