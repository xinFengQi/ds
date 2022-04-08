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
      <div class="toolbar">
        <dsb5-button size="sm" @click="goto('project')"
          >返回项目列表</dsb5-button
        >
        <dsb5-button class="ml_1" size="sm" @click="addApis()"
          >增加</dsb5-button
        >
      </div>
      <dsb5-menu-tree
        .menuTree="apiListData"
        @add="addApi($event)"
        @edit="editApi($event)"
        @remove="removeApi($event)"
      ></dsb5-menu-tree>
    </template>
  </div>
  <dsb5-modal
    .dstitle="modalTitle"
    .show="addModalShow"
    @cacel="addModalCacel()"
    @ok="addModalOk()"
  >
    <div slot="content">
      <dsb5-input
        .placeholder="modalPlaceholder"
        .value="modalValue"
        @valuechange="modalValueChange($event)"
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
  apiListData: any = [];
  modalValue = "";
  modalTitle = "增加项目";
  modalPlaceholder = "请输入项目名称";
  addModalShow = false;
  // 当前执行的节点
  nodeDetail: any = null;
  modalValueChange(ev: CustomEvent) {
    this.modalValue = ev.detail;
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
    });
  }

  // 增加项目
  addProject() {
    this.modalValue = "";
    this.modalTitle = "增加项目";
    this.modalPlaceholder = "请输入项目名称";
    this.addModalShow = true;
  }
  addApis() {
    this.modalValue = "";
    this.modalTitle = "增加api";
    this.modalPlaceholder = "请输入api名称";
    this.addModalShow = true;
  }

  addApi(ev: CustomEvent) {
    this.modalValue = "";
    this.modalTitle = "增加节点api";
    this.modalPlaceholder = "请输入节点api名称";
    this.addModalShow = true;
    this.nodeDetail = ev.detail;
  }
  editApi(ev: CustomEvent) {
    this.nodeDetail = ev.detail;
    this.modalValue = ev.detail.node.name;
    this.modalTitle = "编辑api";
    this.modalPlaceholder = "请输入api名称";
    this.addModalShow = true;
  }
  removeApi(ev: CustomEvent) {
    this.nodeDetail = ev.detail;
  }

  addModalOk() {
    if (this.modalTitle === "增加项目") {
      this.addProjectModalOk();
      return;
    }
    if (this.modalTitle === "增加api") {
      const aname = this.modalValue.trim();
      this.apiListData.push({ name: aname, childrens: [] });
      this.apiListData = [...this.apiListData];
      this.addModalCacel();
      return;
    }
    if (
      this.modalTitle === "增加节点api" &&
      this.nodeDetail &&
      this.nodeDetail.node
    ) {
      console.log(this.nodeDetail);
      this.nodeDetail.el.addNode(this.nodeDetail.node.key, {
        name: this.modalValue.trim(),
      });
      this.addModalCacel();
      return;
    }
    if (
      this.modalTitle === "编辑api" &&
      this.nodeDetail &&
      this.nodeDetail.node
    ) {
      console.log(this.nodeDetail);
      this.nodeDetail.el.editNode({
        ...this.nodeDetail.node,
        name: this.modalValue.trim(),
      });
      this.addModalCacel();
      return;
    }
  }
  addModalCacel() {
    this.addModalShow = false;
  }

  addProjectModalOk() {
    const pname = this.modalValue.trim();
    if (this.projectList.find((v: any) => v.name === pname)) {
      return;
    }
    addOrUpdateData(
      this.giteeFileData.access,
      this.giteeFileData.owner,
      this.giteeFileData.repo,
      "apis_data",
      pname,
      { name: "测试的接口", childrens: [] }
    ).then((v) => {
      this.addModalCacel();
      this.getAllProject();
    });
  }

  gotoProject(project: any): void {
    console.log(project);
    getAll(
      this.giteeFileData.access,
      this.giteeFileData.owner,
      this.giteeFileData.repo,
      "apis_data",
      project.name
    ).then((data: any) => {
      this.apiListData = JSON.parse(decodeURIComponent(atob(data.content)));
    });
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
  max-width: 300px;
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.project_card {
  cursor: pointer;
}
</style>
