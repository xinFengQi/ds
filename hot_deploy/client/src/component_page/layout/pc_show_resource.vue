<template>
  <div class="pcshowresource_main">
    更新时间：{{toggleTime(currentServerList.updatetime)}}
    <el-button @click="toggleIsShowEcharts">{{isShowEcharts? '折叠':'展开'}}</el-button>
    <div class="g2_pie_contain">
      <template v-if="isShowEcharts">
         <div class="g2_pie_div">
        <G2PlotDountComponent :optData="cpuData" :optParams="{title: 'cpu占用率'}" @reset="dataReset" />
      </div>
      <div class="g2_pie_div">
        <G2PlotDountComponent
          :optData="memoryData"
          :optParams="{title: '内存使用率'}"
          @reset="dataReset"
        />
      </div>
      <div class="g2_gauge_div">
        <G2PlotGaugeComponent :value="upnetUseData" title="服务端上行网速" @reset="dataReset" />
      </div>
      <div class="g2_gauge_div" v-if="downnetUseData">
        <G2PlotGaugeComponent :value="downnetUseData" title="服务端下行网速" @reset="dataReset" />
      </div>
      </template>
     <template v-if="!isShowEcharts">
       <el-divider content-position="left">ip:{{currentServerList.value}}</el-divider>
          <div>
            内存使用率 {{currentServerList.memoryAlreadyUse}} cpu使用率 {{currentServerList.cpuAlreadyUse}} 上行网络 {{currentServerList.upnetUse}} 
            <span v-if="currentServerList.downnetUse">下行网络 {{currentServerList.downnetUse}}</span>
          </div>
     </template>
      <div v-if="childrenServerList && childrenServerList.length > 0" class="pcshowresource_arrow" @click="toggleIsShowAllSer">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <template v-if="isShowAllSer">
      <template v-for="(item, index) in childrenServerList">
        <div :key="index">
          <el-divider content-position="left">ip:{{item.value}}</el-divider>
          <div>
            内存使用率 {{item.memoryAlreadyUse}} cpu使用率 {{item.cpuAlreadyUse}} 上行网络 {{item.upnetUse}} 
            <span v-if="item.downnetUse">下行网络 {{item.downnetUse}}</span>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import G2PlotDountComponent, {
  DountOptData
} from "@/components/g2plot_canvas/g2plot_dount.vue";
import G2PlotGaugeComponent from "@/components/g2plot_canvas/g2plot_gauge.vue";
import { Getter, Action } from "vuex-class";
import { ServerOptions } from "@/store/servermodule/model";
import moment from 'moment'
@Component({
  components: {
    G2PlotDountComponent,
    G2PlotGaugeComponent
  }
})
export default class PcShowResourcePageComponent extends Vue {
  
  @Getter("server/getCurrentServerList") currentServerList!: ServerOptions;
  @Action('server/updateServerListResourse') updateCurrentServerList!: () => void
  // 展示所有其他的子服务器
  isShowAllSer = false;
  // 展示图表
  isShowEcharts = false;

  // cpu数据
  get cpuData(): DountOptData | null | false {
    const alreadyUse = Number(
      this.currentServerList.cpuAlreadyUse.replace("%", "")
    );
    return (
      this.currentServerList &&
      !isNaN(alreadyUse) && {
        alreadyUse: alreadyUse,
        noUse: Number((100 - alreadyUse).toFixed(2))
      }
    );
  }
  // 内存数据
  get memoryData(): DountOptData | null | false {
    const alreadyUse = Number(
      this.currentServerList.memoryAlreadyUse.replace("%", "")
    );
    return (
      this.currentServerList &&
      !isNaN(alreadyUse) && {
        alreadyUse: alreadyUse,
        noUse: Number((100 - alreadyUse).toFixed(2))
      }
    );
  }

  // 上行网速数据
  get upnetUseData(): number | null | false {
    const alreadyUse = Number(
      this.currentServerList.upnetUse.replace("kb/s", "")
    );
    return this.currentServerList && !isNaN(alreadyUse) && alreadyUse;
  }

  // 下行网速数据
  get downnetUseData(): number | null | false {
    if(!this.currentServerList.downnetUse) {
      return 0
    }
    const alreadyUse = Number(
      this.currentServerList.downnetUse.replace("kb/s", "")
    );
    return this.currentServerList && !isNaN(alreadyUse) && alreadyUse;
  }

  // 子服务器列表
  get childrenServerList(): ServerOptions[] | undefined {
    return this.currentServerList.childrens;
  }

  mounted(): void {
    console.log("展示资源");
  }

  // 转换时间
  toggleTime(time: number): string {
     return moment(time).format('YYYY-MM-DD HH:mm:SS')
  }

  toggleIsShowAllSer(): void {
    this.isShowAllSer = !this.isShowAllSer;
  }

  toggleIsShowEcharts(): void{
    this.isShowEcharts = !this.isShowEcharts;
  }

  dataReset(): void {
    this.updateCurrentServerList()
  }

}
</script>

<style scoped>
.pcshowresource_main {
  min-height: 100%;
}
.pcshowresource_arrow {
  display: flex;
  align-items: center;
}

.g2_pie_contain {
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
}
.g2_pie_div {
  margin-top: 20px;
  width: 250px;
  height: 250px;
}

.g2_gauge_div {
  margin-top: 20px;
  width: 250px;
  height: 220px;
}
</style>>

