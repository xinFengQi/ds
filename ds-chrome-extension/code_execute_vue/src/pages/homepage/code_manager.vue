<template>
  <div class="code_manager_main">
    <div class="code_manager_tool">
      <a-button class="code_manager_tool_btu" type="primary" @click="addList"
        >增加</a-button
      >
      <a-button class="code_manager_tool_btu" type="primary" @click="addList"
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
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "codeManager",
  data() {
    return {
      defaultSelectedKeys: [],
      deate: new Date().getTime(),
      key: 1,
      codeList: [
        {
          key: "diyi",
          name: "测试脚本",
          dev: "这是测试的代码",
          code: `
        alert(‘测试的代码’)
        `,
        },
      ],
    };
  },
  methods: {
    handleClick: function (ev) {
      console.log(ev);
    },
    addList: function () {
      this.codeList = [
        {
          key: this.deate + ''+ this.key++,
          name: "测试脚本",
          dev: "这是测试的代码",
          code: `
        alert(‘测试的代码’)
        `,
        },
        ...this.codeList,
      ];
    },
    saveAll: function () {},
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
</style>
