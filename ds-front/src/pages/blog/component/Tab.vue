<template>
  <div class="nav-wrap">
    <nav class="sub post cap">
      <a
        v-for="(tab, i) in tabData"
        :key="i"
        :class="{ active: tab.title === selectCurrentTab?.title }"
        @click="selectTab(tab)"
      >
        {{ tab.title }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import store from "../store";

export default class Tab extends Vue {
  @Prop({ default: [] }) private tabData!: any[];
  selectCurrentTab = null;
  mounted() {
    setTimeout(() =>  {
      this.tabDataChange();
    })
  }

  @Watch("tabData")
  tabDataChange() {
    this.selectCurrentTab = this.tabData[0];
    this.emitSelectTab();
  }

  selectTab(tab: any) {
    this.selectCurrentTab = tab;
    this.emitSelectTab();
  }

  emitSelectTab() {
    this.$emit("selectTab", this.selectCurrentTab);
  }
}
</script>

<style lang="less">
.nav-wrap {
  position: sticky;
  margin-top: 1.75rem;
  top: -2px;
  background: var(--site-bg);
  padding: 0 1rem;
  z-index: 8;
  margin-bottom: 1px;
}

.nav-wrap:after {
  content: "";
  width: calc(100% - 2 * 1rem);
  height: 2px;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
  left: 1rem;
  background: var(--block-hover);
}
</style>