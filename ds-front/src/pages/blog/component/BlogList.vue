<template>
  <div class="blog_card" v-for="blog in blogList">
    <article class="md_card">
      <h2 class="post-title">
        {{ blog.title }}
      </h2>
      <div class="excerpt" :innerHTML="blog.prefaceHtml"></div>
      <div class="meta cap">
        <span class="cap" id="post-meta"
          >发布于&nbsp;
          <time :datetime="blog.time">
            {{ blog.time }}
          </time> </span
        >&nbsp;&nbsp;<span class="cap breadcrumb" style="color: #03a9f4">
            {{blog.classify}}
        </span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import store from "../store";

export default class BlogList extends Vue {
  @Prop() blogList!: any[];

  mounted() {
    if (!this.blogList || !Array.isArray(this.blogList)) {
      throw "BlogList组件参数错误";
    }
    console.log(this.blogList, "===================");
  }

  toggle() {}
}
</script>

<style scoped lang="less">
.blog_card {
  display: block;
  margin: 1rem 0;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 2%);
  transition: box-shadow 0.2s ease-out;
  overflow: hidden;
  background: var(--card);
  position: relative;
}
.md_card {
  padding: 1rem;
  max-width: 100%;
  padding: 1rem;
  color: var(--text-p1);
  line-height: 1.7;
  word-break: break-word;
}
</style>