<template>
  <div class="home_tool">
    <a-button v-if="edit" type="primary" @click="saveUpdate"
      >保存此次数据更新，不会影响本地书签内容</a-button
    >
  </div>
  <div class="home_main">
    <HomeMenu
      @getShowMenu="getShowMenu($event)"
      @getShowPublicMenu="getShowPublicMenu($event)"
      @getAllMenu="getAllMenu($event)"
      @deleteItem="deleteItem($event)"
      :edit="edit"
    ></HomeMenu>
    <div class="home_content">
      <div
        class="home_tool"
        v-if="
          !edit &&
          ((showContentData && showContentData.length) ||
            (showPublicContentData && showPublicContentData.length))
        "
      >
        <a-input class="input_search" v-model:value="value" placeholder="搜索书签" />
      </div>
      <div
        v-if="
          edit && !isShowPublic && !value && showContentData && showContentData.length
        "
        class="data_show_tool"
      >
        数据时间标识: {{ getDate(showContentData[0].dateAdded) }}
      </div>

      <HomeContent
        :edit="edit"
        style="overflow: auto; flex: 1"
        v-if="value && searchContentData && searchContentData.length"
        :showContentData="searchContentData"
      ></HomeContent>

      <!-- 私有书签展示 -->
      <HomeContent
        :edit="edit"
        style="overflow: auto; flex: 1"
        v-if="!isShowPublic && !value && showContentData && showContentData.length"
        :showContentData="showContentData"
        @deleteItem="deleteItem($event)"
        @editItem="editItem($event)"
      ></HomeContent>

      <!-- 公有书签展示 -->
      <HomeContent
        :edit="false"
        style="overflow: auto; flex: 1"
        v-if="
          isShowPublic && !value && showPublicContentData && showPublicContentData.length
        "
        :showContentData="showPublicContentData"
      ></HomeContent>
    </div>
    <div v-if="!edit && (isHomeTaskList || isHomeTaskListPublic)" class="home_task_list">
      <HomeTaskList></HomeTaskList>
    </div>
  </div>
</template>

<script>
import HomeMenu from "./home-menu.vue";
import HomeContent from "./home-content.vue";
import HomeTaskList from "./home-tasklist.vue";
import localStorgeData from "@/sevices/localStorge.data";
import browerExtensionService from "@/sevices/brower_extension.services";

import { getGiteeKey } from "@/sevices/gitee.api";
import moment from "moment";

export default {
  name: "Home",
  components: {
    HomeMenu,
    HomeContent,
    HomeTaskList,
  },
  props: {
    edit: Boolean,
  },
  data() {
    return {
      isShowPublic: false,
      searchContentData: [],
      showPublicContentData: [],
      showPublicContentDataStr: [],
      showContentData: [],
      showContentDataStr: "[]",
      allData: [],
      value: "",
      deleteMarkData: [],
      isHomeTaskList: false,
      isHomeTaskListPublic: false,
    };
  },
  watch: {
    value(newValue) {
      this.searchContentData = this.loopSearchMarks(
        this.isShowPublic
          ? JSON.parse(this.showPublicContentDataStr)
          : JSON.parse(this.showContentDataStr),
        newValue.toLowerCase()
      );
    },
  },
  mounted() {
    localStorgeData
      .getLocalVariable(getGiteeKey("tasklist", "private_open"))
      .then((v) => {
        this.isHomeTaskList = v;
      });
    localStorgeData.getLocalVariable(getGiteeKey("tasklist", "public_open")).then((v) => {
      this.isHomeTaskListPublic = v;
    });
  },
  methods: {
    getDate(date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    },
    // 递归查询数据
    loopSearchMarks(marks, str) {
      if (!marks) {
        return [];
      }
      const outputData = marks.filter(
        (v) =>
          !v.url ||
          v.title.toLowerCase().indexOf(str) > -1 ||
          str.indexOf(v.title.toLowerCase()) > -1
      );
      if (outputData && outputData.length) {
        outputData.forEach((v) => {
          v.children = this.loopSearchMarks(v.children, str);
        });
      }
      return outputData;
    },
    // 递归删除数据
    loopDeleteMarks(marks, deleteArr) {
      if (!marks) {
        return [];
      }
      const outputData = marks.filter((v) => {
        return !deleteArr.find(
          (dV) => v.dateAdded === dV.dateAdded && v.title === dV.title && v.id === dV.id
        );
      });
      if (outputData && outputData.length) {
        outputData.forEach((v) => {
          v.children = this.loopDeleteMarks(v.children, deleteArr);
        });
      }
      return outputData;
    },
    saveUpdate: function () {
      const odata = this.loopDeleteMarks(this.allData, this.deleteMarkData);
      console.log(
        this.allData,
        this.deleteMarkData,
        odata,
        "保存所有更新========================"
      );
      browerExtensionService.uploadBookMarks(odata).then((v) => {
        if (v) {
          alert("更新成功");
        }
      });
    },
    getAllMenu(data) {
      this.allData = data;
    },
    getShowMenu(data) {
      this.isShowPublic = false;
      console.log(data, "会展示的菜单");
      if (!data) {
        this.showContentData = [];
      } else {
        this.showContentData = data.children;
      }
      this.showContentDataStr = JSON.stringify(this.showContentData);
    },
    getShowPublicMenu(data) {
      this.isShowPublic = true;
      console.log(data, "会展示的公共菜单");
      if (!data) {
        this.showPublicContentData = [];
      } else {
        this.showPublicContentData = data.children;
      }
      this.showPublicContentDataStr = JSON.stringify(this.showPublicContentData);
    },
    deleteItem(ev) {
      this.deleteMarkData.push(ev);
      this.showContentData = this.showContentData.filter((v) => v.dateAdded !== ev);
    },
    editItem(ev) {
      const index = this.allData.find(
        (v) => v.dateAdded === ev.dateAdded && v.id === ev.id
      );
      this.allData[index].title = ev.title;
    },
  },
};
</script>

<style scoped>
.home_main {
  display: flex;
  height: calc(100% - 71px);
}
.home_content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 600px;
}
.home_tool {
  display: flex;
  margin: 10px;
}
.data_show_tool {
  display: flex;
  margin: 4px;
}
.input_search {
  width: 200px !important;
  height: 40px;
}
.home_task_list {
  text-align: left;
  padding-right: 20px;
  padding-left: 10px;
  width: 300px;
  height: 100%;
  overflow-y: auto;
}

/* antDesign 样式重写 */
.ant-card-head {
  min-height: auto !important;
}
.ant-card-extra {
  padding: 8px 0px !important;
}
.ant-card-head-title {
  padding: 8px 0px !important;
}
</style>
