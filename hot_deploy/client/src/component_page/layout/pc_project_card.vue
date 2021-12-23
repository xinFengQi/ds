<template>
  <div class="pcprojectcard_main">
    <template v-for="(item, index) in projects">
      <el-card class="box-card" :key="index">
        <div slot="header" class="clearfix">
          <h3 v-if="item.hotconfig">{{item.hotconfig.name}}</h3>
          <div style="float: right; padding: 3px 0">
            <CardExtraBtuComponent  v-if="item.hotconfig" :btutype="item.hotconfig.type" :optData="item" />
          </div>
        </div>
        <div class="text item" v-if="item.hotconfig"> {{item.hotconfig.dec }}</div>
        <template v-if="item.baseUrl">
          <el-divider></el-divider>
          <div class="text item">
            在线地址：
            <a :href="gotoAHref(item.baseUrl)" target="_blank">{{ item.baseUrl }}</a>
          </div>
        </template>
      </el-card>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CardExtraBtuComponent from "./card_extra_btu.vue";
import { ProjectsList } from "@/store/servermodule/model";
import { Getter } from "vuex-class";

@Component({
  components: {
    CardExtraBtuComponent
  }
})
export default class PcProjectCardComponent extends Vue {
  @Getter("server/getServerProjectsList") projects!: ProjectsList[];

  // 前往项目前端网址
  gotoAHref(href: string): string {
    return href.startsWith("http") ? href : "http://" + href;
  }

  mounted(): void {
    console.log("卡片组件初始化");
  }
}
</script>

<style scoped>
.pcprojectcard_main {
  height: 470px;
  overflow-y: scroll;
  overflow-x: hidden;
  /* min-height: 100%; */
}

.item {
  margin-bottom: 18px;
}

.clearfix {
  margin-top: -18px;
  margin-bottom: -18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  margin-top: 20px;
  width: 100%;
}
</style>>

