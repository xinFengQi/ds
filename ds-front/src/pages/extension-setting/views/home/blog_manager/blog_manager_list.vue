<template>
  <div class="blog_managerlist_main">
    <div class="folder_table_header">
      <div class="folder_table_col ml-16">时间</div>
      <div class="folder_table_col ml-16">博客名</div>
      <div class="folder_table_col ml-16">分类</div>
      <div class="folder_table_col ml-16">标签</div>
      <div class="folder_table_col ml-16">操作</div>
    </div>
    <div class="folder_table_content" v-for="(item, index) in flieData">
      <div class="folder_table_col ml-16">{{ item.time }}</div>
      <div class="folder_table_col ml-16">{{ item.title }}</div>
      <div class="folder_table_col ml-16">{{ item.classify }}</div>
      <div class="folder_table_col ml-16">
        <TagsShow :tags="item.tags"> </TagsShow>
      </div>
      <div class="folder_table_col">
        <a-button @click="showFile(item)" type="link">查看</a-button>
        <a-button type="link" @click="deleteFile(item)">删除</a-button>
      </div>
    </div>
  </div>

  <a-modal
    title="确认删除文件"
    v-model:visible="isDeleteVisible"
    :confirm-loading="confirmDeleteLoading"
    @ok="handleDeleteOk"
    okText="确认"
    :cancelText="'取消'"
    :maskClosable="false"
  >
    <a-input
      v-model:value="deleteValue"
      placeholder="请输入删除的提交信息(必填)"
    />
  </a-modal>
</template>

<script>
import { getAll, addOrUpdateData, deleteFile } from "@/sevices/gitee.api";
import TagsShow from "@/components/TagsShow.vue";
import { message } from "ant-design-vue";

export default {
  name: "BlogManagerList",
  components: {
    TagsShow,
  },
  props: {
    giteeData: Object,
    belongTo: String
  },
  data() {
    return {
      flieData: [],
      originList: [],
      isDeleteVisible: false,
      confirmDeleteLoading: false,
      deleteItem: null,
      deleteValue: "",
    };
  },
  mounted() {
    if (!this.giteeData) {
      throw "giteeData数据未传入";
    }
    getAll(
      this.giteeData.access,
      this.giteeData.owner,
      this.giteeData.repo,
      "blog",
      this.belongTo === '博客' ? "blog_list" : "blog_project_list"
    ).then((v) => {
      if (v.content) {
        this.originList = JSON.parse(decodeURIComponent(atob(v.content)))[0];
      }
      this.handlerData();
      console.log(v, this.flieData, "博客设置");
    });
  },
  methods: {
    // 处理数据，获取表格list
    handlerData() {
      this.flieData = this.originList.map((da) => {
        const fileNames = da.fileName.split("_$_");
        return {
          belongTo: fileNames[0],
          time: fileNames[1].replaceAll("_", "/"),
          classify: fileNames[2],
          title: fileNames[3],
          tags: fileNames[4].split(";"),
          ...da,
        };
      });
    },
    deleteFile(item) {
      this.deleteValue = null;
      this.isDeleteVisible = true;
      this.confirmDeleteLoading = false;
      this.deleteItem = item;
    },
    handleDeleteOk() {
      this.confirmDeleteLoading = true;
      this.originList = this.originList.filter(
        (v) => v.fileName !== this.deleteItem.fileName
      );
      this.handlerData();
      this.saveBlog(this.originList, this.deleteItem.fileName);
    },
    saveBlog(blogList, fileName) {
      addOrUpdateData(
        this.giteeData.access,
        this.giteeData.owner,
        this.giteeData.repo,
        "blog",
        "blog_list",
        blogList
      ).then((v) => {
        console.log("修改结果", v);
        message.success("目录修改成功");
        deleteFile(
          this.giteeData.access,
          this.giteeData.owner,
          this.giteeData.repo,
          "_data_blog/" + fileName + ".json",
          null,
          this.deleteValue
        ).then((v) => {
          console.log("删除结果", v);
          message.success("内容删除成功");
          this.deleteValue = null;
          this.isDeleteVisible = false;
          this.deleteItem = null;
        });
      });
    },
  },
};
</script>

<style scoped>
.blog_managerlist_main {
  margin-top: 20px;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
}
.folder_table_header {
  display: flex;
  padding: 8px 0px;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
}
.ml-16 {
  margin-left: 16px;
}
.folder_table_col {
  padding: 4px 0;
  flex: 1;
}
.folder_table_content {
  display: flex;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
}
.folder_table_content:hover {
  background-color: #fafafa;
}
</style>>
