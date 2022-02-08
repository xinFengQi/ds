<template>
  <nav class="menu dis-select">
    <a
      v-for="(nav, i) in navData"
      :key="i"
      class="nav-item"
      :class="{ active: nav.title === selectCurrentNav?.title }"
      @click="selectNav(nav)"
    >
      {{ nav.title }}</a
    >
    <!-- class active -->
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import store from "../store";

export default class Nav extends Vue {
  @Prop({ default: [] }) private navData!: any[];
  selectCurrentNav = null;
  mounted() {
    setTimeout(() => {
      if (!this.selectCurrentNav) {
        this.selectCurrentNav = this.navData[0];
        this.emitSelectNav();
      }
    });
  }

  selectNav(nav: any) {
    this.selectCurrentNav = nav;
    this.emitSelectNav();
  }

  emitSelectNav() {
    this.$emit("selectNav", this.selectCurrentNav);
  }
}
</script>

<style lang="less">
nav.menu {
  margin: 1rem 0;
  background: var(--block);
  border-radius: 6px;
  display: flex;
  padding: 1px;
  flex-wrap: wrap;
  a.nav-item {
    text-overflow: ellipsis;
    word-break: keep-all;
    margin: 1px;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    overflow: hidden;
    padding: 0.375rem 0.75rem;
    color: var(--text-p3);
    text-align: center;
    flex-grow: 1;
  }
  a.nav-item.active,
  a.nav-item:hover {
    color: var(--text-p1);
    background: var(--card);
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 4%), 0 0 8px 0 rgb(0 0 0 / 4%);
  }
}
</style>