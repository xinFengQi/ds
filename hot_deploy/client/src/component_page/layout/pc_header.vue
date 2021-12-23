<template>
  <div class="pcheader_main">
    <div>
      <div>
        <h3>{{showOption && showOption.dec}}</h3>
      </div>
      <div>
        <h4>
          <span>ip地址：{{value}}</span>
          <span>域名：{{showOption && showOption.domainName}}</span>
        </h4>
      </div>
    </div>
    <div v-if="options">
      <el-select v-model="value"  placeholder="请选择" @change = "selectChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class';
import { ServerOptions, ExtraServerOpteion} from '@/store/servermodule/model'


@Component({
  components: {},
})
export default class PcHeaderPageComponent extends Vue {
  value = '';
  @Getter('server/getServerList') options!: ServerOptions[]
  @Getter('server/getCurrentServerListValue') getValue!: string;
  @Getter('server/getCurrentServerListOptions') showOption!: ExtraServerOpteion;

  @Action('server/changeCurrentServerList') changeCurrentServerList!: (value: string) => void
  @Action('server/getServerList') getServerList!: () => void
  @Action('server/getOsProject') getOsProject!: () => void

  @Watch('getValue')
  ValueChange(): void {
    this.value = this.getValue;
  }

  mounted(): void {
    this.getServerList()
    this.value = this.getValue;
  }

  // 时间选择器选择
  selectChange(): void {
    this.changeCurrentServerList(this.value)
  }

}
</script>

<style scoped>
.pcheader_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 100%;
}
</style>>

