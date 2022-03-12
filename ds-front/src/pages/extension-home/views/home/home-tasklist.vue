<template>
  <div class="home_tasklist">
    <div class="task_tool">
      <a-button type="primary" @click="addTaskList">新增任务</a-button>
    </div>
    <a-modal
      v-model:visible="addVisible"
      title="新增任务"
      okText="保存"
      cancelText="取消"
      @ok="addTaskData"
      :centered="true"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
    >
      <div class="form_col">
        <label class="form_col_label">名称:</label>
        <a-input class="form_col_input" v-model:value="title" />
      </div>
      <div class="form_col">
        <label class="form_col_label">时间:</label>
        <a-date-picker
          class="form_col_input"
          :locale="locale"
          show-time
          placeholder="选择时间"
          v-model:value="time"
        />
      </div>
      <div class="form_col">
        <label class="form_col_label">内容:</label>
        <a-textarea
          class="form_col_input"
          :autoSize="{ minRows: 8, maxRows: 15 }"
          v-model:value="content"
        />
      </div>
    </a-modal>

    <a-card
      class="card"
      v-for="(task, i) in taskList"
      :title="task.title"
      :key="task.title + i"
      :bodyStyle="cardBodyStyle"
    >
      <template #extra>
        <a-button type="link" @click="deleteTask(task)">删除</a-button>
      </template>
      <span>{{ getData(task.time) }}</span>
      <pre>{{ task.content }}</pre>
      <div class="tag_list">
        <a-tag v-if="task.status === 0" color="error">已超时</a-tag>
        <a-tag v-if="task.status === 1" color="success">进行中</a-tag>
        <a-tag v-if="task.status === 2" color="default">未进行</a-tag>
      </div>
    </a-card>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import browerExtensionService from "@/sevices/brower_extension.services";

import moment from "moment";

export default {
  name: "HomeTaskList",
  props: {
    msg: String,
  },
  data() {
    return {
      locale,
      cardBodyStyle: {
        padding: "5px 10px",
      },
      taskList: [],
      addVisible: false,
      title: "",
      content: "",
      time: null,
      confirmLoading: false,
    };
  },
  mounted() {
    browerExtensionService.getTasklist().then((v) => {
      let data = [];
      if (v.privateDatas) {
        data = [...data, ...v.privateDatas];
      }
      this.dataSort(data);
      console.log(v, "获取的任务列表");
    });
  },
  methods: {
    getData(time) {
      return moment(time).format("YYYY/MM/DD HH:mm:ss");
    },
    // 任务列表重新排序
    dataSort(arr) {
      const time = new Date().getTime();
      const threeTime = 3 * 60 * 60 * 1000;
      let timeoutTask = [];
      const noRunTask = [];
      let runTask = [];
      arr.forEach((v) => {
        if (v.time - time < 0) {
          // 已超时
          v.status = 0;
          timeoutTask.push(v);
        } else if (v.time - time <= threeTime) {
          // 正在进行的
          v.status = 1;
          runTask.push(v);
        } else {
          v.status = 2;
          noRunTask.push(v);
        }
      });
      timeoutTask = timeoutTask.sort((a, b) => {
        return a.time - b.time;
      });
      runTask = runTask.sort((a, b) => {
        return a.time - b.time;
      });
      this.taskList = [...timeoutTask, ...runTask, ...noRunTask];
    },
    // 展示弹窗
    addTaskList: function () {
      this.addVisible = true;
    },
    addTaskData: function () {
      console.log(this.title, this.time._d, this.content);
      if (!this.title || !this.time || !this.time._d) {
        message.error("请填写完整");
        return;
      }
      const data = {
        title: this.title,
        time: new Date(this.time._d).getTime(),
        content: this.content,
      };
      this.taskList.push(data);
      this.dataSort(this.taskList);
      this.confirmLoading = true;
      browerExtensionService.uploadTaskList(this.taskList).then((_v) => {
        if (_v) {
          message.success("更新成功");
          this.addVisible = false;
          this.title = "";
          this.content = "";
        } else {
          message.error("更新失败");
        }
        this.confirmLoading = false;
      });
    },
    deleteTask: function (task) {
      const key = task.title + task.time;
      this.taskList = this.taskList.filter((v) => v.title + v.time !== key);
      browerExtensionService.uploadTaskList(this.taskList).then((_v) => {
        if (_v) {
          message.success("更新成功");
        } else {
          message.error("更新失败");
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home_tasklist {
  height: 100%;
}
.task_tool {
  margin: 10px;
  display: flex;
  justify-content: flex-end;
}
.form_col {
  display: flex;
  margin-bottom: 10px;
}
.form_col_label {
  min-width: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
}
.form_col_input {
  flex: 1;
}
.card {
  margin-bottom: 10px;
}
.tag_list {
  display: flex;
  justify-content: flex-end;
}
</style>
