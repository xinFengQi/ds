<template>
  <div class="home_main">
    <div>
      <HomeMenu
        @getShowMenu="getShowMenu($event)"
        @getAllMenu="getAllMenu($event)"
        @deleteItem="deleteItem($event)"
        :edit="edit"
      ></HomeMenu>
    </div>
    <div class="home_content">
      <div class="home_tool">
        <a-input
          v-if="!edit"
          class="input_search"
          v-model:value="value"
          placeholder="搜索书签"
        />
        <a-button v-if="edit" type="primary" @click="saveUpdate"
          >保存此次数据更新，不会影响本地书签内容</a-button
        >
      </div>
      <HomeContent
        :edit="edit"
        style="overflow: auto; flex: 1"
        v-if="value && searchContentData && searchContentData.length"
        :showContentData="searchContentData"
      ></HomeContent>
      <HomeContent
        :edit="edit"
        style="overflow: auto; flex: 1"
        v-if="!value && showContentData && showContentData.length"
        :showContentData="showContentData"
        @deleteItem="deleteItem($event)"
      ></HomeContent>
    </div>
  </div>
</template>

<script>
import HomeMenu from "./home-menu.vue";
import HomeContent from "./home-content.vue";
import chrome_gitee_util from "../../chrome_lib/chrome_gitee_util";

export default {
  name: "home",
  components: {
    HomeMenu,
    HomeContent,
  },
  props: {
    edit: Boolean,
  },
  data() {
    return {
      searchContentData: [],
      showContentData: [],
      showContentDataStr: "[]",
      allData: [],
      value: "",
      deleteMarkData: [],
    };
  },
  watch: {
    value(newValue) {
      console.log("数据变更", newValue, "==============");
      this.searchContentData = this.loopSearchMarks(
        JSON.parse(this.showContentDataStr),
        newValue.toLowerCase()
      );
    },
  },
  methods: {
    // 递归查询数据
    loopSearchMarks(marks, str) {
      if (!marks) {
        return [];
      }
      const outputData = marks.filter(
        (v) => !v.url || v.title.toLowerCase().indexOf(str) > -1 || str.indexOf(v.title.toLowerCase()) > -1
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
      const outputData = marks.filter((v) =>
        deleteArr.includes(
          (dV) => v.dateAdded !== dV.dateAdded && v.title !== dV.title
        )
      );
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
      chrome_gitee_util.uploadBookMarks(odata).then((v) => {
        if (v) {
          alert("更新成功");
        }
      });
    },
    getAllMenu(data) {
      this.allData = data;
    },
    getShowMenu(data) {
      console.log(data, "会展示的菜单");
      if (!data) {
        this.showContentData = [];
      } else {
        this.showContentData = data.children;
      }
      this.showContentDataStr = JSON.stringify(this.showContentData);
    },
    deleteItem(ev) {
      this.deleteMarkData.push(ev);
      this.showContentData = this.showContentData.filter(
        (v) => v.dateAdded !== ev
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 0;
  height: 100%;
}

.home_main {
  display: flex;
  height: 100%;
}
.home_content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.home_tool {
  display: flex;
  margin: 10px;
}
.input_search {
  width: 200px !important;
  height: 40px;
}
</style>
