<template>
  <div class="apis_sned_main">
    <dsb5-tabs .tabs="tabs">
      <div slot="参数">
        <dsb5-api-params
          class="apis_send_params"
          @formchange="paramsChange($event)"
        ></dsb5-api-params>
      </div>
      <div slot="请求头">
        <dsb5-api-params
          class="apis_send_params"
          @formchange="headerChange($event)"
        ></dsb5-api-params>
      </div>
      <div slot="请求体">
        <dsb5-textarea  class="apis_send_params" .rows="8"></dsb5-textarea>
      </div>
    </dsb5-tabs>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ApisSend extends Vue {
  tabs = ["参数", "请求头", "请求体"];
  mounted() {}

  paramsChange(ev: CustomEvent) {
    console.log(ev.detail);
  }

  headerChange(ev: CustomEvent) {
    console.log(ev.detail);
  }
}
</script>

<style lang="less" scope>
.apis_sned_main {
}
.apis_send_params {
  padding-top: 20px;
}
</style>
