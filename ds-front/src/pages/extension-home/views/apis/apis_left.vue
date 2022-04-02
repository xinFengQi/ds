<template>
  <div class="apis_left_main">
    <template v-if="cureentTab === 'project'">
      <div class="toolbar">
        <dsb5-button size="sm" @click="addProject()">增加</dsb5-button>
      </div>
      <dsb5-alert
        class="project_card"
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
  <dsb5-modal
    dstitle="增加项目"
    .show="addProjectModalShow"
    @cacel="addProjectModalCacel()"
    @ok="addProjectModalOk()"
  >
    <div slot="content">
      <dsb5-input
        placeholder="请输入项目名称"
        .value="projectName"
        @valuechange="projectNameChange($event)"
      ></dsb5-input>
    </div>
  </dsb5-modal>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { addOrUpdateData, getAll } from "@/sevices/gitee.api";
import { Prop } from "vue-property-decorator";

enum TabList {
  project = "project",
  apiList = "apiList",
}

export default class ApisLeft extends Vue {
  @Prop() giteeFileData: any = {};

  cureentTab: TabList = TabList.project;
  projectList: any = [];
  projectName = "";
  addProjectModalShow = false;
  projectNameChange(ev: CustomEvent) {
    this.projectName = ev.detail;
  }

  mounted() {
    if (!this.giteeFileData) {
      throw "组件错误，没有gitee参数";
    }
    this.getAllProject();
  }

  // 获取所有项目
  getAllProject() {
    getAll(
      this.giteeFileData.access,
      this.giteeFileData.owner,
      this.giteeFileData.repo,
      "apis_data"
    ).then((data: any) => {
      this.projectList = [...data].map((v) => {
        v.name = v.name.split(".")[0];
        return v;
      });
      console.log(data, "===");
    });
  }

  // 增加项目
  addProject() {
    this.addProjectModalShow = true;
  }
  addProjectModalCacel() {
    this.addProjectModalShow = false;
  }

  addProjectModalOk() {
    const pname = this.projectName.trim();
    if (this.projectList.find((v: any) => v.name === pname)) {
      return;
    }
    addOrUpdateData(
      this.giteeFileData.access,
      this.giteeFileData.owner,
      this.giteeFileData.repo,
      "apis_data",
      pname,
      {}
    ).then((v) => {
      console.log(v);
      this.addProjectModalShow = false;
      this.getAllProject()
    });
  }

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
  min-width: 150px;
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.project_card{
  cursor: pointer;
}
</style>
