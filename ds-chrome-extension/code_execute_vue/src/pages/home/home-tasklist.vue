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
    >
      <div class="form_col">
        <label class="form_col_label">名称:</label>
         <a-input class="form_col_input" v-model:value="title" />
      </div>
      <div class="form_col">
       <label class="form_col_label">时间:</label>
          <a-date-picker class="form_col_input" :locale="locale"  show-time placeholder="选择时间" v-model:value="time"  />
      </div>
      <div class="form_col">
        <label class="form_col_label">内容:</label>
         <a-textarea class="form_col_input" :autosize="{minRows: 8, maxRows: 15 }"  v-model:value="content" />
      </div>
    </a-modal>

    <a-card
      v-for="(task, i) in taskList"
      :title="task.title"
      :key="task.title + i"
      :bodyStyle="cardBodyStyle"
    >
      <template #extra><a href="#">删除</a></template>
      <pre>
          {{ task.content }}
      </pre>
    </a-card>
  </div>
</template>

<script>
 import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
export default {
  name: "HomeTaskList",
  props: {
    msg: String,
  },
  data() {
    return {
        locale,
      cardBodyStyle: {
        padding: "5px",
      },
      taskList: [
        {
          title: "第一个任务",
          content: "第一个任务",
        },
      ],
      addVisible: false,
      title: '',
      content: '',
      time: null
    };
  },
  methods: {
    // 展示弹窗
    addTaskList: function () {
      this.addVisible = true;
    },
    addTaskData: function () {},
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
.form_col{
    display: flex;
    margin-bottom: 10px;
}
.form_col_label{
    min-width: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px;
}
.form_col_input{
    flex: 1;
}
</style>
