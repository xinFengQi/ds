<template>
  <a-menu
    style="width: auto; min-width: 160px"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
    :inline-collapsed="collapsed"
  >
    <a-menu-item
      style="width: auto"
      v-for="item in machineMenu"
      :key="item.dateAdded + ''"
      @click="getClickMenu(item)"
    >
      <span>{{ item.title }}</span>
      <span class="opate" v-if="edit">
        <HighlightTwoTone @click="editMenu($event, item)"></HighlightTwoTone>
        <DeleteOutlined @click="deleteMenu($event, item)"></DeleteOutlined>
      </span>
    </a-menu-item>

    <a-menu-item
      style="width: auto"
      v-for="item in pubilcMachineMenu"
      :key="item.dateAdded + ''"
      @click="getClickPublicMenu(item)"
    >
      <span>{{ item.title }}</span>
    </a-menu-item>
  </a-menu>

  <a-modal
    v-model:visible="editMenuNameItem"
    title="编辑名称"
    okText="保存"
    cancelText="取消"
    @ok="editMenuName"
    :centered="true"
    :maskClosable="false"
  >
    <div v-if="editMenuNameItem" class="form_col">
      <label class="form_col_label">名称:</label>
      <a-input class="form_col_input" v-model:value="editMenuNameItem.title" />
    </div>
  </a-modal>
</template>

<script>
import browerExtensionService from "@/sevices/brower_extension.services";
import { DeleteOutlined, HighlightTwoTone } from "@ant-design/icons-vue";

export default {
  name: "homeMenu",
  props: {
    edit: Boolean,
  },
  components: {
    DeleteOutlined,
    HighlightTwoTone,
  },
  data() {
    return {
      isError: false,
      selectedKeys: [],
      machineMenu: [],
      pubilcMachineMenu: [],
      editMenuNameItem: false,
    };
  },
  mounted() {
    browerExtensionService
      .getBookMarks(this.edit)
      .then((v) => {
        this.machineMenu = v;
        console.log("个人的", this.machineMenu);
        if (this.machineMenu && this.machineMenu.length) {
          this.$emit("getShowMenu", this.machineMenu[0]);
          this.$emit("getAllMenu", this.machineMenu);
          this.selectedKeys = [this.machineMenu[0].dateAdded + ""];
        }
      })
      .catch((err) => {
        console.log("获取书签出错:", err);
      });
    browerExtensionService
      .getPublicBookMarks()
      .then((v) => {
        if (!this.edit) {
          this.pubilcMachineMenu = v;
          console.log("公共的", this.pubilcMachineMenu);
        }
      })
      .catch((err) => {
        console.log("获取公共书签出错:", err);
      });
  },
  methods: {
    getClickMenu(data) {
      this.$emit("getShowMenu", data);
    },
    getClickPublicMenu(data) {
      this.$emit("getShowPublicMenu", data);
    },

    editMenuName() {
      console.log("编辑书签名", this.editMenuNameItem);
      this.$emit("editItem", this.editMenuNameItem);
      setTimeout(() => {
        this.editMenuNameItem = null;
      });
    },

    editMenu(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      this.editMenuNameItem = item;
    },

    deleteMenu(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      console.log("删除导航", item);
      this.machineMenu = this.machineMenu.filter((v) => v.dateAdded !== item.dateAdded);
      if (this.machineMenu.length && this.selectedKeys.includes(item.dateAdded + "")) {
        this.selectedKeys = [this.machineMenu[0].dateAdded + ""];
        this.getClickMenu(this.machineMenu[0]);
      } else {
        if (!this.machineMenu.length) {
          this.getClickMenu(null);
        }
      }
      this.$emit("deleteItem", item);
    },
  },
};
</script>

<style scope>
.opate {
  margin-left: 5px;
}
</style>
