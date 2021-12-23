<template>
  <div class="card_btu_main">
    <template v-for="(item, index) in btuListShow2">
      <el-button :key="'btuListShow2'+index" type="text" @click="item.btuMethod">{{item.label}}</el-button>
    </template>
    <template v-for="(item, index) in btuListShow">
      <el-button
        :disabled="!btuClick || isOnlyClick"
        :key="'btuListShow'+index"
        type="text"
        @click="item.btuMethod"
      >{{item.label}}</el-button>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { ProjectsList } from "@/store/servermodule/model";
interface BtuOriginList {
  pm2_web: BtuParams;
  deploy: BtuParams;
  resetDeploy: BtuParams;
  npmI: BtuParams;
  showInter: BtuParams;
}

interface BtuParams {
  value: string;
  label: string;
  btuMethod: () => void;
}

@Component({
  components: {},
})
export default class CardExtraBtuComponent extends Vue {
  // input 按钮类型
  @Prop({ type: String, default: () => "all" })
  btutype!: "node_server_front" | "client_front" | "show_project";

  // input 按钮数据
  @Prop({ type: Object, default: () => null })
  optData!: ProjectsList;

  @Getter("server/getServerProjectsHandlerList")
  handlerprojects!: ProjectsList[];

  @Action("server/executeDeploy") executeDeploy!: (address: string) => void;
  @Action("server/executeInstallDepend") executeInstallDepend!: (
    address: string
  ) => void;

  // input 是否被点击 true 可被点击  false 不可被点击
  btuClick = false;
  isOnlyClick = !!this.optData.isOnlyShow;

  @Watch("handlerprojects", { immediate: true })
  projectsHandler(): void {
    if (this.handlerprojects) {
      this.btuClick = !this.handlerprojects
        .map((v) => v.hotconfig.name)
        .includes(this.optData.hotconfig.name);
    } else {
      this.btuClick = true;
    }
  }

  // 所有按钮列表
  btuOriginList: BtuOriginList = {
    pm2_web: {
      value: "pm2_web",
      label: "pm2性能监控",
      btuMethod: (): void => {
        console.log("执行PM2性能监控的方法");
      },
    },
    npmI: {
      value: "npmi",
      label: "安装依赖",
      btuMethod: (): void => {
        this.executeInstallDepend(this.optData.localaddress);
        console.log("执行安装依赖的方法");
      },
    },
    deploy: {
      value: "deploy",
      label: "部署",
      btuMethod: (): void => {
        console.log("执行部署的方法");
        this.executeDeploy(this.optData.localaddress);
      },
    },
    resetDeploy: {
      value: "resetDeploy",
      label: "重新部署",
      btuMethod: (): void => {
        console.log("执行重新部署监控的方法");
        this.executeDeploy(this.optData.localaddress);
      },
    },
    showInter: {
      value: "showInter",
      label: "展示详细介绍",
      btuMethod: (): void => {
        if (
          this.optData &&
          this.optData.redemeMd &&
          this.optData.redemeMd.type === "html"
        ) {
          console.log("展示详细介绍", this.optData.redemeMd.link);
        } else if (
          this.optData &&
          this.optData.redemeMd &&
          this.optData.redemeMd.type === "md"
        ) {
          console.log("展示详细介绍", this.optData.redemeMd.content);
        }
      },
    },
  };

  // 展示按钮列表
  btuListShow: BtuParams[] = [];
  // 肯定展示按钮列表
  btuListShow2: BtuParams[] = [];

  mounted(): void {
    this.isOnlyClick = !!this.optData.hotconfig.isOnlyShow;
    let types = ["deploy"];
    if (this.optData.isDeploy) {
      switch (this.btutype) {
        case "node_server_front":
          types = ["npmI", "deploy", "resetDeploy"];
          break;
        case "client_front":
          types = ["deploy", "resetDeploy"];
          break;
        default:
          console.log("全部的按钮");
      }
    } else {
      switch (this.btutype) {
        case "show_project":
          types = [];
          break;
        default:
          console.log("全部的按钮");
      }
    }
    this.btuListShow = this.checkBtuShow(types, this.btuOriginList);
    const showtypes:  string[] = [];
    if (this.optData && this.optData.redemeMd && (  !!this.optData.redemeMd.link ||   !!this.optData.redemeMd.content)) {
      // showtypes.push("showInter");
    }
    this.btuListShow2 = this.checkBtuShow(showtypes, this.btuOriginList);
  }

  // 检测应该放出哪些按钮
  checkBtuShow(types: string[], btuListOrigin: BtuOriginList): BtuParams[] {
    const btuList: BtuParams[] = [];
    types.forEach((v: string) => {
      btuList.push(btuListOrigin[v]);
    });
    return btuList;
  }
}
</script>

<style scoped>
.card_btu_main {
  display: flex;
}
</style>>

