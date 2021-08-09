<template>
  <div>
    <a-collapse v-model:activeKey="activeKeys">
      <a-collapse-panel v-for="da in getIsChildren" :key="da.dateAdded + ''">
        <template #header>
          {{ da.title }}
          <span class="opate" v-if="edit">
            <DeleteOutlined @click="deleteMenu($event, da)"></DeleteOutlined>
          </span>
        </template>
        <HomeContent
          :showContentData="da.children"
          @deleteItem="deleteItem($event, da)"
          :edit="edit"
        ></HomeContent>
      </a-collapse-panel>
      <div class="show_contain">
        <a-button
          v-for="da in getNoChildren"
          :key="da.dateAdded + ''"
          type="link"
        >
          <a :href="da.url" target="_blank">{{ da.title }}</a>
          <span class="opate" v-if="edit">
            <DeleteOutlined @click="deleteMenu($event, da)"></DeleteOutlined>
          </span>
        </a-button>
      </div>
    </a-collapse>
  </div>
</template>

<script>
import { DeleteOutlined } from "@ant-design/icons-vue";

export default {
  name: "homeContent",
  components: {
    DeleteOutlined,
  },
  props: {
    showContentData: [],
    edit: Boolean,
  },
  data() {
    return {
      activeKeys: [],
    };
  },
  computed: {
    getIsChildren: function () {
      return (
        this.showContentData &&
        Array.isArray(this.showContentData) &&
        this.showContentData.filter((v) => v.children && v.children.length)
      );
    },
    getNoChildren: function () {
      return (
        this.showContentData &&
        Array.isArray(this.showContentData) &&
        this.showContentData.filter(
          (v) => v.url && (!v.children || v.children.length === 0)
        )
      );
    },
  },
  watch: {
    showContentData: function (newV) {
      this.activeKeys = newV
        .filter((v) => v.children && v.children.length)
        .map((v) => v.dateAdded + "");
    },
  },
  mounted() {
    this.activeKeys = this.showContentData
      .filter((v) => v.children && v.children.length)
      .map((v) => v.dateAdded + "");
  },
  methods: {
    deleteMenu(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      console.log("删除导航", item);
      item.isDelete = true;
      this.$emit("deleteItem", item.dateAdded);
    },
    deleteItem(ev, da) {
      da.children = da.children.filter((v) => v.dateAdded !== ev);
    },
  },
};
</script>

<style scope>
.show_contain {
  display: flex;
  flex-wrap: wrap;
}
.show_all_tip {
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
}

.ant-collapse-content > .ant-collapse-content-box {
  padding: 2px !important;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  display: flex;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  padding: 6px 40px !important;
}
</style>
