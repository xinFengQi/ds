<template>
  <div id="g2plot_gauge_main" @click="reset">
    <div :id="'gauge_container'+componentId" class="container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Gauge, GaugeConfig } from "@antv/g2plot";
import { Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component({})
export default class G2PlotGaugeComponent extends Vue {
  @Prop({ type: Number, default: () => 34 })
  value!: number;
  @Prop({ type: String, default: () => "服务器上行网速" })
  title!: string;

  componentId = (Math.random() * 1000).toFixed(0);

  gaugePlot!: Gauge;

  valuemax(): number {
    return Math.pow(10, this.value.toFixed(0).length);
  }

  Range(): number[] {
    const vmax = this.valuemax();
    return [0, vmax * 0.25, vmax * 0.5, vmax * 0.75, vmax];
  }

  @Watch("value")
  optDataWatch(): void {
    this.gaugePlot.updateConfig({
        ...this.updateConfig()
    });
     this.gaugePlot.render();
  }

  mounted(): void {
    const gaugeOption: GaugeConfig = {
      title: {
        visible: true,
        text: this.title
      },
      min: 0,
      max: this.valuemax(),
      range: this.Range(),
      color: ["#39B8FF", "#52619B", "#43E089", "#C0EDF3"],
      ...this.updateConfig()
    };
    if (document.getElementById("gauge_container" + this.componentId)) {
      const divIdHtml: HTMLElement = document.getElementById(
        "gauge_container" + this.componentId
      ) as HTMLElement;
      this.gaugePlot = new Gauge(divIdHtml, gaugeOption);
      this.gaugePlot.render();
    }
  }

  updateConfig(): GaugeConfig {
    return {
      value: this.value,
      max: this.valuemax(),
      range: this.Range(),
      statistic: {
        visible: true,
        text: this.value + "kb/s",
        color: "#30bf78"
      }
    };
  }

  // 重新请求回调
  @Emit("reset")
  reset(): void {
    console.log("emit出reset方法");
  }
}
</script>

<style scoped>
#g2plot_gauge_main {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
