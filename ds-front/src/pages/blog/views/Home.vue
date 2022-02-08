<template>
  <div class="center_body_pc" :class="{ sidebar: mobleSiderStatus }">
    <aside class="left" layout>
      <LogoWrap></LogoWrap>
      <Nav :navData="layoutData?.nav" @selectNav="selectNav($event)"></Nav>
      <div class="widgets">
        <div class="widget-wrap" id="markdown">
          <div class="widget-header cap dis-select">
            <span class="name">{{ layoutData?.describe?.title }}</span>
          </div>
          <div class="widget-body fs14">
            <p>
              {{ layoutData?.describe?.des }}
            </p>
          </div>
        </div>
      </div>
      <footer class="footer dis-select"></footer>
    </aside>
    <div class="right">
      <header class="header mobile-only">
        <LogoWrap></LogoWrap>
      </header>
      <Tab
        v-if="
          selectCurrentNav &&
          selectCurrentNav.tab &&
          selectCurrentNav.tab.length > 1
        "
        :tabData="selectCurrentNav.tab"
      ></Tab>
    </div>
  </div>
  <FloatPanel></FloatPanel>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FloatPanel from "../component/FloatPanel.vue";
import LogoWrap from "../component/LogoWrap.vue";
import Nav from "../component/Nav.vue";
import Tab from "../component/Tab.vue";
import store from "../store";

@Options({
  components: { LogoWrap, FloatPanel, Nav, Tab },
})
export default class Home extends Vue {
  selectCurrentNav = null;

  mounted() {}
  get layoutData() {
    return store.getters.getLayoutData;
  }
  get mobleSiderStatus() {
    return store.getters.getMobleSiderStatus;
  }
  selectNav(nav: any) {
    this.selectCurrentNav = nav;
  }
}
</script>

<style scoped  lang="less">
.widgets {
  .widget-wrap {
    margin: 1rem 0 3rem 0;
    .widget-header + .widget-body {
      margin-top: 0;
    }
    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      position: sticky;
      position: -webkit-sticky;
      top: -2px;
      background: var(--site-bg);
      padding-top: 2px;
      z-index: 1;
      line-height: 2;
      color: var(--text-p4);
      font-size: 0.875rem;
    }
    .widget-body {
      margin: 0.5rem 0;
      color: var(--text-p1);
      p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        line-height: 1.5;
      }
    }
  }
}
</style>
