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
        v-if="!currentShowBlogData && selectCurrentNav && selectCurrentNav.tab"
        :tabData="selectCurrentNav.tab"
        @selectTab="selectTab"
      ></Tab>
      <div class="right_content" v-if="!currentShowBlogData">
        <BlogList
          v-if="
            blogDataList &&
            blogDataList.length &&
            selectCurrentNav?.title === '博客' &&
            selectCurrentTab?.title === '近期发布'
          "
          :blogList="blogDataList"
          @selectBlog="selectBlog"
        ></BlogList>
        <BlogList
          v-if="
            projectDataList &&
            projectDataList.length &&
            selectCurrentNav?.title === '项目' &&
            selectCurrentTab?.title === '所有项目'
          "
          :blogList="projectDataList"
          @selectBlog="selectBlog"
        ></BlogList>
      </div>
      <div class="right_content" v-if="currentShowBlogData">
        <MdContent :blogData="currentShowBlogData"></MdContent>
      </div>
    </div>
  </div>
  <FloatPanel></FloatPanel>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BlogList from "../component/BlogList.vue";
import FloatPanel from "../component/FloatPanel.vue";
import LogoWrap from "../component/LogoWrap.vue";
import Nav from "../component/Nav.vue";
import Tab from "../component/Tab.vue";
import store from "../store";
import MdContent from "../component/MdContent.vue";
import { getAll } from "@/sevices/gitee.api";
@Options({
  components: { LogoWrap, FloatPanel, Nav, Tab, BlogList, MdContent },
})
export default class Home extends Vue {
  selectCurrentNav: any = null;
  selectCurrentTab: any = null;
  currentShowBlogData: any = null;

  mounted() {}

  get layoutData() {
    return store.getters.getLayoutData;
  }
  get mobleSiderStatus() {
    return store.getters.getMobleSiderStatus;
  }

  get blogDataList() {
    return store.getters.getBlogDataList;
  }

  get projectDataList() {
    return store.getters.getProjectDataList;
  }



  selectBlog(blogData: any) {
    console.log(blogData);
    if (blogData && blogData.fileName) {
      const { access, owner, repo } = this.layoutData.gitee;
      getAll(access, owner, repo, "blog", blogData.fileName).then(
        (data: any) => {
          if (data.content) {
            const blogContent = JSON.parse(
              decodeURIComponent(atob(data.content))
            )[0];
            this.currentShowBlogData = {...blogData, ...blogContent};
            console.log("博客详细内容", this.currentShowBlogData);
          }
        }
      );
    }
  }

  // 不在展示博客内容
  setShowBlogDataNull() {
    this.currentShowBlogData = null;
  }

  selectNav(nav: any) {
    this.selectCurrentNav = nav;
    this.setShowBlogDataNull();
    console.log("----", this.selectCurrentNav);
  }

  selectTab(tab: any) {
    this.selectCurrentTab = tab;
    this.setShowBlogDataNull();
    console.log("选择的tab", this.selectCurrentTab);
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
.right_content {
  margin: 1rem;
  min-height: 80%;
}
</style>
