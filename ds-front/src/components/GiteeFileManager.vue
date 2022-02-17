<template>
  <div class="gitee_file_manager">
    <div class="breadcrud_header">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, i) in historyData">
          <a-button
            v-if="item.type !== 'file'"
            class="p0"
            type="link"
            @click="gotoFolder(item, i)"
            >{{ item.name }}</a-button
          >
          <a-button v-if="item.type === 'file'" class="p0" type="text">{{
            item.name
          }}</a-button>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <div class="right_btu">
        <a-button v-if="!getLastIsFile()" @click="uploadFile" type="primary"
          >新增文件</a-button
        >
      </div>
    </div>

    <div
      v-if="!getLastIsFile() && showList && showList.length"
      class="folder_table"
    >
      <div class="folder_table_header">
        <div class="folder_table_col ml-16">文件名</div>
        <div class="folder_table_col ml-16">操作</div>
      </div>
      <div class="folder_table_content" v-for="(record, i) in showList">
        <div class="folder_table_col">
          <div class="w100" v-if="record.origin">
            <a-button class="w100 display_show display_aicenter" type="text">
              <FileOutlined />
              <a-typography-paragraph copyable>
                <span class="mr-8 ml-8">{{ record.name }}</span>
              </a-typography-paragraph>
            </a-button>
          </div>
          <div v-if="record.childrens">
            <a-button
              class="display_show display_aicenter"
              v-if="record.childrens.length"
              type="link"
            >
              <FolderOutlined />
              <a-typography-paragraph copyable>
                <span
                  class="mr-8 ml-8 link"
                  @click="showFolderDetail(record)"
                  >{{ record.name }}</span
                >
              </a-typography-paragraph>
            </a-button>
            <a-button v-if="!record.childrens.length" type="text">
              <FolderOutlined />
              <a-typography-paragraph copyable>
                <span class="mr-8 ml-8">{{ record.name }}</span>
              </a-typography-paragraph>
            </a-button>
          </div>
        </div>
        <div class="folder_table_col">
          <a-button
            v-if="!record.childrens"
            @click="downFile(record)"
            type="link"
            >下载</a-button
          >
          <a-button
            v-if="!record.childrens"
            @click="showFile(record)"
            type="link"
            >查看</a-button
          >
          <a-button type="link" @click="deleteFile(record)">删除</a-button>
        </div>
      </div>
    </div>
    <FileShowData
      v-if="getLastIsFile() && showFileData"
      :giteeData="giteeData"
      :fileData="showFileData"
    ></FileShowData>
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
    <div v-if="confirmDeleteLoading">
      需要删除文件数：{{ allDeleteNum }},删除成功数：{{
        alreadySuccessNum
      }}，删除失败数：{{ alreadyFailNum }}
    </div>
  </a-modal>

  <a-modal
    title="上传文件"
    v-model:visible="isUplodaVisible"
    :footer="null"
    :maskClosable="false"
  >
    <GiteeUpload
      v-if="isUplodaVisible"
      :giteeData="giteeData"
      :basePath="getBasePath()"
      @success="fileUploadSuccess"
    ></GiteeUpload>
  </a-modal>
</template>

<script>
import { getAllTree, deleteFile } from "@/sevices/gitee.api";
import { getData } from "@/sevices/axios.api";
import {
  FileOutlined,
  FolderOutlined,
  CopyOutlined,
} from "@ant-design/icons-vue";
import FileShowData from "./FileShowData.vue";
import GiteeUpload from "./GiteeUpload.vue";
import { message } from "ant-design-vue";
export default {
  components: {
    FileOutlined,
    FolderOutlined,
    FileShowData,
    GiteeUpload,
    CopyOutlined,
  },
  name: "GiteeFileManager",
  props: {
    giteeData: Object,
  },
  data() {
    return {
      isUplodaVisible: false,
      isDeleteVisible: false,
      confirmDeleteLoading: false,
      deleteRecord: null,
      deleteValue: null,
      allDeleteNum: 0,
      alreadySuccessNum: 0,
      alreadyFailNum: 0,
      getGiteeAccess: "",
      getGiteeOwner: "",
      getGiteeRepo: "",
      historyData: [{ name: "..", type: "root" }],
      showList: [],
      originData: [],
      inputDatas: [],
      filterValue: "",
      columns: [
        {
          title: "文件名",
          dataIndex: "name",
          key: "name",
          slots: { customRender: "name" },
        },
        {
          title: "操作",
          key: "action",
          slots: { customRender: "action" },
        },
      ],
      showFileData: null,
    };
  },
  mounted() {
    if (!this.giteeData) {
      throw "没有参数,报错";
    }
    this.releadData();
  },
  watch: {},
  methods: {
    downFile(item) {
      if (!item.origin && !item.origin.url) {
        return;
      }
      getData(item.origin.url).then((data) => {
        console.log(data, "===============");
        if (!data.content) {
          return;
        }
        const bstr = decodeURIComponent(decodeURIComponent(escape(atob(data.content))));
        console.log(bstr, '=============')
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        // 乱码问题
        const blob = new Blob([u8arr],  {type:"*/*;charset=utf-8"});
        var myUrl = URL.createObjectURL(blob);
        console.log(blob, myUrl);
        var a = document.createElement("a");
        a.setAttribute("href", myUrl);
        a.setAttribute("download", item.name);
        a.setAttribute("target", "_blank");
        let clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent("click", true, true);
        a.dispatchEvent(clickEvent);
      });
      console.log(item, "下载数据");
    },

    // 文件上传成功
    fileUploadSuccess(ev) {
      if (ev) {
        this.isUplodaVisible = false;
        this.releadData();
      }
    },
    getBasePath() {
      return this.historyData
        .slice(1, this.historyData.length)
        .map((v) => v.name)
        .join("/");
    },
    uploadFile() {
      this.isUplodaVisible = true;
    },
    getLastIsFile() {
      return this.historyData[this.historyData.length - 1].type === "file";
    },
    showFile(record) {
      this.historyData.push({
        ...record,
        type: "file",
      });
      this.showFileData = null;
      setTimeout(() => {
        if (record.origin) {
          this.showFileData = record.origin;
        }
      });
    },
    releadData() {
      getAllTree(
        this.giteeData.access,
        this.giteeData.owner,
        this.giteeData.repo
      ).then((v) => {
        this.originData = [...this.sortTree(v.tree)];
        this.filterClick();
        this.showList = [
          ...this.inputDatas.map((v, index) => {
            v.key = index + "";
            return v;
          }),
        ];
        this.lopoGotoFolder();
      });
    },
    // 数据重启后递归进行文件夹点击
    lopoGotoFolder() {
      const copyHistoryData = [...this.historyData];
      copyHistoryData.forEach((v) => {
        const index = this.showList.findIndex((id) => id.name === v.name);
        if (index < 0) {
          return;
        }
        this.showFolderDetail(this.showList[index], true);
      });
    },
    handleDeleteOk: function () {
      const record = this.deleteRecord;
      if (!record || !this.deleteValue) {
        return;
      }
      this.confirmDeleteLoading = true;
      if (!record.childrens && record.origin) {
        this.allDeleteNum = 1;
        const { path, sha } = record.origin;
        deleteFile(
          this.giteeData.access,
          this.giteeData.owner,
          this.giteeData.repo,
          path,
          sha,
          this.deleteValue
        )
          .then(() => {
            this.alreadySuccessNum++;
            this.releadData();
            this.isDeleteVisible = false;
          })
          .catch(() => {
            this.alreadyFailNum++;
          })
          .finally(() => {
            this.confirmDeleteLoading = false;
          });
        return;
      }
      let pathStr =
        this.historyData.reduce((a, b) => {
          if (b.name === ".." && b.type === "root") {
            return a;
          } else {
            return a + "/" + b.name;
          }
        }, "") +
        "/" +
        record.name;
      if (pathStr.startsWith("/")) {
        pathStr = pathStr.replace("/", "");
      }
      const deleteArr = this.originData
        .filter((str) => str.path.startsWith(pathStr))
        .filter((v) => v.type === "blob");
      this.allDeleteNum = deleteArr.length;
      this.deleteArrFile(deleteArr);
    },
    // 串行删除文件
    deleteArrFile(arr) {
      if (!arr.length) {
        if (
          this.alreadyFailNum === 0 ||
          this.allDeleteNum === this.alreadySuccessNum
        ) {
          this.isDeleteVisible = false;
        }
        this.confirmDeleteLoading = false;
        this.releadData();
        return;
      }
      const record = arr.shift();
      const { path, sha } = record;
      deleteFile(
        this.giteeData.access,
        this.giteeData.owner,
        this.giteeData.repo,
        path,
        sha,
        this.deleteValue
      )
        .then(() => {
          this.alreadySuccessNum++;
        })
        .catch(() => {
          this.alreadyFailNum++;
        })
        .finally(() => {
          this.deleteArrFile(arr);
        });
    },
    deleteFile: function (record) {
      this.isDeleteVisible = true;
      this.deleteRecord = record;
      this.deleteValue = null;
      this.allDeleteNum = 0;
      this.alreadySuccessNum = 0;
      this.alreadyFailNum = 0;
    },
    gotoFolder: function (item, index) {
      if (index === this.historyData.length - 1) {
        return;
      }
      this.historyData = this.historyData.slice(0, index + 1);
      if (item.name === ".." && item.type === "root") {
        this.showList = [
          ...this.inputDatas.map((v, index) => {
            v.key = index + "";
            return v;
          }),
        ];
        return;
      }
      let showChildres = this.inputDatas;
      this.historyData.forEach((v) => {
        if (v.name === ".." && v.type === "root") {
          return;
        }
        if (Array.isArray(showChildres)) {
          showChildres = showChildres.find((sc) => sc.name === v.name);
        } else {
          showChildres = showChildres.childrens.find(
            (sc) => sc.name === v.name
          );
        }
      });
      this.showFolderDetail(showChildres, true);
    },
    showFolderDetail: function (record, falseAdd) {
      if (!falseAdd) {
        this.historyData.push({
          ...record,
          type: "folder",
        });
      }
      this.showList = [];
      setTimeout(() => {
        this.showList = [
          ...record.childrens.map((v, index) => {
            v.key = index + "";
            return v;
          }),
        ];
      });
    },
    sortTree: function (data) {
      const treeData = [];
      const fileTree = [];
      data.forEach((v) => {
        if (v.type === "tree") {
          treeData.push(v);
        } else {
          fileTree.push(v);
        }
      });
      return [...treeData, ...fileTree].sort((a, b) => {
        return b.path.split("/").length - a.path.split("/").length;
      });
    },
    filterClick: function () {
      const treeDatas = this.originData
        .filter((it) => this.getFilterData(it, this.filterValue))
        .map((it) => this.getRecusionOrigin(it));
      const inputDatas = [];
      treeDatas.forEach((it) => {
        if (it.pathArr) {
          this.getTree(inputDatas, it);
        } else {
          inputDatas.push(it);
        }
      });
      this.inputDatas = [...inputDatas];
    },

    getFilterData: function (it, str) {
      return it.type === "blob" && it.path.indexOf(str) > -1;
    },

    getRecusionOrigin: function (it) {
      const pathArr = it.path.split("/");
      const fileName = pathArr.pop();
      if (pathArr.length === 0) {
        return {
          name: it.path,
          origin: it,
        };
      }
      return {
        name: pathArr.join("/"),
        pathArr: pathArr,
        childrens: [
          {
            name: fileName,
            origin: it,
          },
        ],
      };
    },
    getTree: function (arr, it) {
      const navName = [...it.pathArr].shift();
      const index = arr.findIndex((its) => its.name === navName);
      if (index < 0) {
        const inData = {};
        it.pathArr.reduce((a, b, c) => {
          a.name = b;
          if (c === it.pathArr.length - 1) {
            a.childrens = it.childrens;
          } else {
            a.childrens = [{}];
          }
          return a.childrens[0];
        }, inData);
        arr.push(inData);
      } else {
        it.pathArr.shift();
        if (it.pathArr.length === 0) {
          arr[index].childrens.push(it.childrens[0]);
        } else {
          this.getTree(arr[index].childrens, it);
        }
      }
    },
  },
};
</script>

<style scoped>
.gitee_file_manager {
  padding: 20px 27px;
}
.breadcrud_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.folder_table {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
}
.folder_table_header {
  display: flex;
  padding: 8px 8px;
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
</style>
