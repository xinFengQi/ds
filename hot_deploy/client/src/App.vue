<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {
  mounted(): void {
    console.log('vue主界面')
  }
}
</script>

<style>
html {
  min-height: 100%;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  min-height: 90%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px 40px;
}
</style>
