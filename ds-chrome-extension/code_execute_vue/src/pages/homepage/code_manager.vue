<template>
  <div class="code_manager_main">
    <div class="code_manager_tool">
      <a-button class="code_manager_tool_btu" type="primary" @click="addList"
        >增加</a-button
      >
      <a-button class="code_manager_tool_btu" type="primary" @click="openSync"
        >同步本地启用方案</a-button
      >
      <a-button class="code_manager_tool_btu" type="primary" @click="saveAll"
        >保存此次变更</a-button
      >
    </div>
    <div class="code_manager_content">
      <a-menu
        style="width: 200px; height: 100%"
        mode="vertical"
        v-model:selectedKeys="defaultSelectedKeys"
        @click="handleClick"
      >
        <a-menu-item style="margin: 0" v-for="code in codeList" :key="code.key">
          {{ code.name }}
          <span class="opate">
            <a-tooltip title="删除" v-if="!code.publicCode">
              <DeleteOutlined @click="deleteMenu($event, code)"></DeleteOutlined>
            </a-tooltip>
            <a-tooltip title="启用" v-if="!code.isOpen">
              <CheckCircleOutlined @click="openCode($event, code)" />
            </a-tooltip>
            <a-tooltip title="禁用" v-if="code.isOpen">
              <MinusCircleOutlined @click="closeCode($event, code)" />
            </a-tooltip>
          </span>
        </a-menu-item>
      </a-menu>
      <div class="code_manager_form" v-if="selectData && codeList.length">
        <a-form :model="selectData" :label-col="{ span: 4 }">
          <a-form-item label="唯一标识:">
            <a-input
              :disabled="selectData.publicCode"
              class="code_manager_input"
              v-model:value="selectData.key"
              placeholder="相同标识会覆盖内容"
            />
          </a-form-item>
          <a-form-item label="名称:">
            <a-input
              :disabled="selectData.publicCode"
              class="code_manager_input"
              v-model:value="selectData.name"
              placeholder=""
            />
          </a-form-item>
          <a-form-item label="描述:">
            <a-input
              :disabled="selectData.publicCode"
              class="code_manager_input"
              v-model:value="selectData.dec"
              placeholder=""
            />
          </a-form-item>
          <a-form-item label="脚本:">
            <a-textarea
              :disabled="selectData.publicCode"
              class="code_manager_textarea"
              :auto-size="{ minRows: 10, maxRows: 50 }"
              v-model:value="selectData.code"
              placeholder=""
            />
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import chrome_gitee_util from "../../chrome_lib/chrome_gitee_util";
import {
  DeleteOutlined,
  CheckCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons-vue";
import chrome_util from "../../chrome_lib/chrome_util";
export default {
  name: "codeManager",
  components: {
    DeleteOutlined,
    CheckCircleOutlined,
    MinusCircleOutlined,
  },
  data() {
    return {
      defaultSelectedKeys: [],
      deate: new Date().getTime(),
      key: 1,
      selectData: null,
      codeList: [],
      openKeys: null,
    };
  },
  mounted() {
    const localOpenCode = chrome_util.getLocalVariable("__execute_codeScriptArr");
    const allCode = chrome_gitee_util.getCode();
    Promise.all([allCode, localOpenCode]).then((data) => {
      if (!data[0].privateCode) {
        return;
      }
      // 处理全部的代码
      this.codeList = data[0].privateCode;
      if (data[0].publicCode) {
        this.codeList = [
          ...this.codeList,
          ...data[0].publicCode.map((pubCo) => {
            return {
              ...pubCo,
              publicCode: true,
            };
          }),
        ];
      }
      this.defaultSelectedKeys = [this.codeList[0].key];
      this.selectData = this.codeList[0];
      // 赋值现在启用的keys
      this.openKeys = data[1] ? data[1].map((v) => v.key) : null;
      this.codeList.forEach((ok) => {
        ok.isOpen = this.getOpenOrClose(ok.key);
      });
    });
  },
  methods: {
    getOpenOrClose: function (key) {
      if (!this.openKeys) {
        return false;
      }
      if (this.openKeys.includes(key)) {
        return true;
      }
      return false;
    },
    handleClick: function (ev) {
      const index = this.codeList.findIndex((v) => v.key === ev.key);
      this.selectData = this.codeList[index];
    },
    addList: function () {
      const key = this.deate + "" + this.key++;
      const data = {
        key,
        name: "测试脚本",
        dev: "这是测试的代码",
        code: `
        alert('测试的代码')
        `,
      };
      this.codeList = [data, ...this.codeList];
      this.defaultSelectedKeys = [key];
      this.selectData = this.codeList[0];
    },
    autoSave: function () {
      const index = this.codeList.findIndex((v) => v.key === this.selectData.key);
      this.codeList[index] = this.selectData;
      this.codeList = [...this.codeList];
    },
    saveAll: function () {
      chrome_gitee_util
        .uploadCode(this.codeList.filter((co) => !co.publicCode))
        .then((data) => {
          if (data) {
            alert("操作成功");
          }
        });
    },
    deleteMenu(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      console.log("删除导航", item);
      this.codeList = this.codeList.filter((v) => v.key !== item.key);
    },
    openCode(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      console.log("启用导航", item);
      if (this.openKeys) {
        this.openKeys.push(item.key);
      } else {
        this.openKeys = [item.key];
      }
      const index = this.codeList.findIndex((v) => v.key === item.key);
      this.codeList[index].isOpen = true;
      // 将消息发送给chrome的background
    },
    closeCode(ev, item) {
      ev.stopPropagation();
      ev.preventDefault();
      console.log("关闭导航", item);
      this.openKeys = this.openKeys.filter((v) => v !== item.key);
      // 将消息发送给chrome的background
      const index = this.codeList.findIndex((v) => v.key === item.key);
      this.codeList[index].isOpen = false;
    },
    openSync: function () {
      const isOpenData = this.codeList.filter((v) => v.isOpen);
      const isOpemDataClone = JSON.parse(JSON.stringify(isOpenData));
      chrome_util.setLocalVariable("__execute_codeScriptArr", isOpemDataClone);
      chrome_util.sendMessage(
        "__execute_codeScriptArr_reload",
        isOpemDataClone,
        (data) => {
          console.log(data);
        }
      );
    },
  },
};
</script>

<style scoped>
.code_manager_main {
  height: 100%;
}
.code_manager_tool {
  display: flex;
}
.code_manager_tool_btu {
  margin-right: 5px;
}
.code_manager_content {
  display: flex;
}
.code_manager_form {
  width: 100%;
  height: 100%;
  margin-left: 40px;
}
.code_manager_input {
  width: 300px;
  display: flex;
}
.code_manager_textarea {
  width: 500px;
  display: flex;
}
.code_manager_btu {
  display: flex;
}
</style>
