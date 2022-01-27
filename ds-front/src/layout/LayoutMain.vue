<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider class="dispaly_flex" v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="menu">
        <slot name="menu"></slot>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <slot name="footer"></slot>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LayoutMain extends Vue {
  collapsed = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.LayoutMain_main {
  width: 100%;
  height: 100%;
}

.dispaly_flex {
  /deep/ .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
}

.logo {
  width: 100%;
  height: 64px;
}

.menu {
  flex: 1;
  overflow: auto;
}
</style>
