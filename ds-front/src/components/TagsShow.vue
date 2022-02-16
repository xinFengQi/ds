<template>
  <div class="tagshow_main">
    <a-tag v-for="(item, index) in tags" color="success">
      {{ getItem(item) }}
      <slot :item="item"></slot>
    </a-tag>
  </div>
</template>

<script>
export default {
  components: {},
  name: "TagsShow",
  props: {
    tags: Object,
  },
  data() {
    return {};
  },
  mounted() {
    if (!this.tags || !Array.isArray(this.tags)) {
      throw "使用TagsShow组件的tags参数错误";
    }
  },
  watch: {},
  methods: {
    getItem(item) {
      if (typeof item === "object") {
        return item.text;
      }
      if (typeof item === "string") {
        return item;
      }
    },
  },
};
</script>

<style scoped>
.file_show_main {
  max-width: 400px;
  max-height: 800px;
}
</style>
