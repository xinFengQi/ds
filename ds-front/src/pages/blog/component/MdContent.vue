<template>
  <div class="md_main">
    <div class="bread-nav fs12">
      <div id="breadcrumb">
        <a class="cap breadcrumb" href="/">主页</a><span class="sep"></span
        ><a class="cap breadcrumb" href="/">文章</a><span class="sep"></span
        ><a
          class="cap breadcrumb-link"
          href="/blog/categories/%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91/"
          >设计开发</a
        >
      </div>
      <div id="post-meta">
        发布于&nbsp;<time :datetime="blogData.time">{{ blogData.time }}</time>
      </div>
    </div>
    <article class="md_content" :innerHTML="blogData.fullTextHtml"></article>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class MdContent extends Vue {
  @Prop() blogData!: any[];

  mounted() {
    if (!this.blogData) {
      throw "BlogList组件参数错误";
    }
  }

  toggle() {}
}
</script>

<style scoped lang="less">
.md_main {
  @media screen and (min-width: 768px) {
    padding-top: calc(2 * var(--gap-l));
  }
}
.md_content {
  padding: 0 1rem;
  max-width: 100%;
  color: var(--text-p1);
  line-height: 1.7;
  word-break: break-word;
}
.bread-nav {
  padding: 1rem 1rem 0;
  color: var(--text-p3);
  font-weight: 500;
}

.bread-nav div#breadcrumb {
  display: flex;
  align-items: center;
  flex-direction: row;
  .bread-nav div#breadcrumb span.sep[data-v-1c28b947] {
    color: var(--text-p3);
  }
}

.bread-nav div#breadcrumb:not([style]) a {
  color: #2196f3;
}

.cap {
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--text-p3);
}

.bread-nav div#breadcrumb span.sep {
  color: var(--text-p3);
}
</style>