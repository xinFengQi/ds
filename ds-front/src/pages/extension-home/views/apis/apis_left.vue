<template>
  <div class="apis_left_main">
    <template v-if="cureentTab === 'project'">
      <div class="toolbar">
      <dsb5-button size="sm" @click="addProject()">增加</dsb5-button>
      </div>
      <dsb5-alert
        @click="gotoProject(item)"
        v-for="(item, index) in projectList"
        delay="0"
        fixed="false"
      >
        {{ item.name }}
      </dsb5-alert>
    </template>
    <template v-if="cureentTab === 'apiList'">
      <dsb5-button size="sm" @click="goto('project')">返回项目列表</dsb5-button>
      <div></div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

enum TabList {
  project = "project",
  apiList = "apiList",
}

export default class ApisLeft extends Vue {
  cureentTab: TabList = TabList.project;
  projectList = [];

  // 增加项目
  addProject() {}

  gotoProject(project: any): void {
    console.log(project);
    this.cureentTab = TabList.apiList;
  }

  goto(item: TabList) {
    this.cureentTab = item;
  }
}
</script>

<style lang="less" scope>
.apis_left_main {
  height: 100%;
}
.toolbar{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
