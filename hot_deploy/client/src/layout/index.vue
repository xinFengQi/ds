<template>
  <div class="layout_main">
    <PcHeaderPageComponent />
    <PcShowResourcePageComponent />
    <div class="layout_content">
      <PcProjectCardComponent style="flex: 1" />
      <div class="showlog_main">
        <div>
          显示log: <el-button @click="clearlog">清除</el-button>
        </div>
        <div class="showlog">{{log}}</div>

      </div>
    </div>

    <el-backtop :bottom="10"></el-backtop>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import PcHeaderPageComponent from "@/component_page/layout/pc_header.vue";
import PcShowResourcePageComponent from "@/component_page/layout/pc_show_resource.vue";
import PcProjectCardComponent from "@/component_page/layout/pc_project_card.vue";
import { Getter, Mutation } from 'vuex-class'
@Component({
  components: {
    PcHeaderPageComponent,
    PcShowResourcePageComponent,
    PcProjectCardComponent,
  },
})
export default class LayOutPage extends Vue {

  @Getter("server/getServerLog") log!: string[];
  @Mutation("server/deleteServerLog") clearlog!: () => void;

  mounted(): void {
         this.$alert(`
          1：部署服务器是阿里学生机，所以带宽有限，请等待，若是开发者可以打开调试，查看network加载速度 <br /> 
          2: 使用360浏览器请设置成极速模式，非极速模式使用IE内核，暂未做兼容设置
         `, '使用注意', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString: true,
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
  }
}
</script>

<style scoped>
.layout_main {
  min-height: 100%;
  padding: 20px 80px;
  background-color: #f6f6f6;
}
.layout_content{
  display: flex;
}
.showlog_main{
  margin: 20px;
}
.showlog{
  margin-top: 10px;
  height: 400px;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: 400px;
  background-color: #fff;
  overflow-y: scroll;
}
</style>>

