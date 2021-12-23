<template>
  <div id="g2plot_pie_main" @click="reset()">
    <div :id="'container'+componentId" class="container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Donut, DonutConfig, DataItem } from "@antv/g2plot";
import { Component, Prop, Emit, Watch } from "vue-property-decorator";

export interface DountOptData {
  alreadyUse: number;
  noUse: number;
}

export interface DountOptParams {
  title: string;
}

@Component({})
export default class G2PlotDountComponent extends Vue {
  @Prop({
    type: Object,
    default: () => {
      return {
        alreadyUse: 26,
        noUse: 73
      };
    }
  })
  optData!: DountOptData;

  @Prop({
    type: Object,
    default: () => {
      return {
        title: "内存使用情况"
      };
    }
  })
  optParams!: DountOptParams;

  showData: DataItem[] = [];

  // 组件随机id
  componentId = (Math.random() * 1000).toFixed(0);
  // 图表实例
  donutPlot!: Donut;

  @Watch("optData")
  optDataWatch(): void {
    this.updateShowData();
    this.donutPlot.changeData(this.showData);
    this.donutPlot.render();
  }

  mounted(): void {
    this.updateShowData();
    const dountOption: DonutConfig = {
      forceFit: true,
      radius: 0.8,
      padding: "auto",
      data: this.showData,
      color: ["#5a93fc", "#90b6fd", "#c8dbfe", "#ffffff"],
      angleField: "value",
      colorField: "type",
      statistic: {
        visible: false
      },
      title: {
        visible: true,
        text: this.optParams.title
      },
      label: {
        visible: true
      },
      legend: {
        visible: true,
        position: "bottom-center"
      },
      meta: {
        value: {
          alias: "使用情况",
          formatter: (v: number) => {
            return `${v}%`;
          }
        }
      },
      pieStyle: (v: string) => {
        if (v === "已使用") {
          return {
            shadowColor: "#4d4d4d",
            shadowBlur: 50,
            shadowOffsetX: -15
          };
        }
        return;
      }
    };
    if (document.getElementById("container" + this.componentId)) {
      const divIdHtml: HTMLElement = document.getElementById(
        "container" + this.componentId
      ) as HTMLElement;
      this.donutPlot = new Donut(divIdHtml, dountOption);
      this.donutPlot.render();
    }
  }

  updateShowData(): void {
    this.showData = [
      {
        type: "已使用",
        value: this.optData.alreadyUse
      },
      {
        type: "未使用",
        value: this.optData.noUse
      }
    ];
  }

  // 重新请求回调
  @Emit("reset")
  reset(): void {
    console.log("emit出reset方法");
  }
}
</script>

<style scoped>
#g2plot_pie_main {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
