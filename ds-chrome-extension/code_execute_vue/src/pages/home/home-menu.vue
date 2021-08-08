<template>
  <div>
    <a-menu
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      :inline-collapsed="collapsed"
    >
      <a-menu-item
        v-for="item in machineMenu"
        :key="item.dateAdded + ''"
        @click="getClickMenu(item)"
      >
        <span>{{ item.title }}</span>
        <span class="opate" v-if="edit">
          <DeleteOutlined @click="deleteMenu($event, item)"></DeleteOutlined>
        </span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import chromeGiteeUtil from "../../chrome_lib/chrome_gitee_util";
import { DeleteOutlined } from "@ant-design/icons-vue";
export default {
  name: "homeMenu",
  props: {
    edit: Boolean,
  },
  components: {
    DeleteOutlined,
  },
  data() {
    return {
      selectedKeys: [],
      machineMenu: [],
    };
  },
  mounted() {
    chromeGiteeUtil
      .getBookMarks(this.edit)
      .then((v) => {
        this.machineMenu = v;
        this.$emit("getShowMenu", this.machineMenu[0]);
        this.selectedKeys = [this.machineMenu[0].dateAdded + ""];
      })
      .catch((err) => {
        console.log("获取书签出错:", err);
      });
  },
  methods: {
    getClickMenu(data) {
      this.$emit("getShowMenu", data);
    },
    deleteMenu(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      console.log("删除导航", item);
    },
  },
};
</script>

<style scope>
.opate {
  margin-left: 5px;
}
</style>
