<template>
  <div class="apis_left_main">
    <template v-if="cureentTab === 'project'">
      <div class="toolbar">
        <dsb5-button size="sm" @click="addProject()">增加</dsb5-button>
      </div>
      <div class="apis_left_conetnt">
        <dsb5-alert
          class="project_card"
          @click="gotoProject(item)"
          v-for="(item, index) in projectList"
          :key="item.key"
          delay="0"
          fixed="false"
        >
          {{ item.name }}
        </dsb5-alert>
      </div>
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
import store from "../../store";
import localStorgeData from "@/sevices/localStorge.data";
declare const dsb5: any;

enum TabList {
  project = "project",
  apiList = "apiList",
}

export default class ApisLeft extends Vue {
  @Prop() giteeFileData: any = {};

  cureentTab: TabList = TabList.project;
  projectList: any = [];
  selectProject: any = null; // 选择的项目
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
    localStorgeData.getLocalVariable("apiAll_datas").then((v) => {
      console.log(v);
      store.dispatch("setAllData", v).then((data) => {
        this.getAllProject();
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
    } else if (this.modalTitle === "增加api") {
      const aname = this.modalValue.trim();
      this.apiListData.push({ name: aname, childrens: [] });
      this.apiListData = [...this.apiListData];
        this.addModalOkNext();
      this.addModalCacel();
    } else if (
      this.modalTitle === "增加节点api" &&
      this.nodeDetail &&
      this.nodeDetail.node
    ) {
      console.log(this.nodeDetail);
      this.nodeDetail.el.addNode(this.nodeDetail.node.key, {
        name: this.modalValue.trim(),
      }).then(() =>  {
        this.addModalOkNext();
      });;
      this.addModalCacel();
    } else if (
      this.modalTitle === "编辑api" &&
      this.nodeDetail &&
      this.nodeDetail.node
    ) {
      console.log(this.nodeDetail);
      this.nodeDetail.el.editNode({
        ...this.nodeDetail.node,
        name: this.modalValue.trim(),
      }).then(() =>  {
        this.addModalOkNext();
      });
      this.addModalCacel();
    }
  }

  addModalOkNext() {
    if (this.selectProject) {
      const allData = store.getters.getAllData;
      allData[this.selectProject.key].apis =  this.apiListData;
      this.dispatchAllDatas(allData);
    }
  }

  addModalCacel() {
    this.addModalShow = false;
  }

  // 获取所有项目
  getAllProject() {
    getAll(
      this.giteeFileData.access,
      this.giteeFileData.owner,
      this.giteeFileData.repo,
      "apis_data"
    ).then((data: any) => {
      let projectListCache = [...data].map((v) => {
        v.name = v.name.split(".")[0];
        v.reloadName = v.name;
        const arrs = v.name.split("___");
        v.name = arrs[0];
        v.key = arrs[1];
        return {
          reloadName: v.reloadName,
          name: v.name,
          key: v.key,
        };
      });
      const allData = store.getters.getAllData;
      const isExistKeys: any = [];
      projectListCache.forEach((v: any) => {
        isExistKeys.push(v.key);
        if (allData[v.key]) {
          allData[v.key] = { ...allData[v.key], ...v };
        } else {
          v.oldTime = new Date().getTime();
          allData[v.key] = v;
        }
      });
      const newAllData: any = {};
      Object.keys(allData).forEach((v) => {
        if (isExistKeys.indexOf(v) > -1) {
          newAllData[v] = allData[v];
        }
      });
      this.dispatchAllDatas(newAllData);
      this.projectList = [...projectListCache];
    });
  }

  // 增加项目事件
  addProjectModalOk() {
    let pname = this.modalValue.trim();
    if (pname.indexOf("___") > -1) {
      dsb5.dsb5Alert.showAlert({
        content: "名称中不需要存在___符号",
        type: "danger",
      });
      return;
    }
    if (this.projectList.find((v: any) => v.name === pname)) {
      return;
    }
    pname = `${pname}___${new Date().getTime()}`;
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

  // 选择项目
  gotoProject(project: any): void {
    this.selectProject = { ...project };
    const allData = store.getters.getAllData;
    const singleData = allData[project.key];
    if (singleData.apis) {
      this.apiListData = [...singleData.apis];
      this.cureentTab = TabList.apiList;
      return singleData.apis;
    }
    console.log(singleData, "================");
    getAll(
      this.giteeFileData.access,
      this.giteeFileData.owner,
      this.giteeFileData.repo,
      "apis_data",
      project.reloadName
    ).then((data: any) => {
      if (data.content) {
        this.apiListData = JSON.parse(decodeURIComponent(atob(data.content)));
        singleData.apis = [...this.apiListData];
        allData[project.key] = singleData;
        this.dispatchAllDatas(allData);
      }
      this.cureentTab = TabList.apiList;
    });
  }

  dispatchAllDatas(allData: any) {
    store.dispatch("setAllData", allData);
    localStorgeData.setLocalVariableWeb("apiAll_datas", allData);
  }

  goto(item: TabList) {
    this.cureentTab = item;
  }
}
</script>

<style lang="less" scope>
.apis_left_main {
  height: 100%;
  min-width: 200px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
.apis_left_conetnt {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
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
