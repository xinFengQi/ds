<template>
  <router-view v-if="!visible" />
  <a-modal
    v-model:visible="visible"
    :maskClosable="false"
    :keyboard="false"
    :closable="false"
    title="请输入账号信息"
  >
    <a-input class="mb-8" v-model:value="userName" placeholder="用户名" />
    <a-input
      v-if="use === 'password'"
      v-model:value="password"
      placeholder="用户密码"
    />
    <a-textarea
      v-if="use === 'cipher'"
      v-model:value="password"
      placeholder="输入内容密钥"
      :autoSize="{ minRows: 8 }"
      allow-clear
    />
    <template #footer>
      <a-button key="submit" type="primary" @click="newUser"
        >新用户进入</a-button
      >
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="formHandleOk"
        >确定</a-button
      >
    </template>
  </a-modal>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import crypto from "@/sevices/crypto.util";
import localStorgeData from "@/sevices/localStorge.data";
import { Md5 } from "ts-md5";
import { message } from "ant-design-vue";
import { getAll } from "@/sevices/gitee.api";

@Options({
  components: {},
})
export default class Home extends Vue {
  visible = true;
  loading = false;
  userName = "";
  password = "";
  use: "password" | "cipher" = "cipher";

  created() {}

  mounted() {
    localStorgeData.getLocalVariable("userName").then((v) => {
      if (v) {
        this.visible = false;
      }
    });
    const a = crypto.zip(
      JSON.stringify({
        accesk: "1sfhjdshfkjs fshdfhsf",
        repo: "ct",
        dongfub: 121212,
      })
    );
    console.log("压缩：", a, a.length);
    const aceKey = "12121212";
    const ena = crypto.encrypt(a, aceKey);
    console.log("加密", ena, ena.length);
    const dac = crypto.decrypt(ena, aceKey);
    console.log("解密", dac, dac.length);
    const b = crypto.unzip(dac);
    console.log("解压：", b, b.length);
  }

  newUser() {
    if (!this.userName) {
      message.error("请填写用户名即可");
      return;
    }
    localStorgeData.clearLocalData();
    this.setUserName();
    this.visible = false;
  }

  formHandleOk() {
    if (!this.userName || !this.password) {
      message.error("账号或者密码未填写");
      return;
    }
    localStorgeData.clearLocalData();
    const md5UserName = this.setUserName();
    if (this.use === "password") {
      this.passwordHandleOk(md5UserName);
    } else if (this.use === "cipher") {
      this.cipherHandleOk(md5UserName);
    }
  }

  setUserName() {
    const md5UserName = Md5.hashAsciiStr(
      crypto.decrypt(this.userName, this.userName)
    );
    return md5UserName;
  }

  cipherHandleOk(md5UserName: string) {
    try {
      const decryptData = crypto.decrypt(this.password, md5UserName);
      const unzipData = crypto.unzip(decryptData);
      const objectData = JSON.parse(unzipData);
      console.log("获取数据:", objectData);
      const datas: any = {
        __gitee_all_ds_flag: "flag",
        __gitee_all_ds_pubilc_flag: "publicFlag",
        __gitee_all_ds_access_token: "accessToken",
        __gitee_all_ds_owner: "owner",
        __gitee_all_ds_repo: "repo",
      };
      const promiseAll: any = [];
      Object.keys(datas).forEach((key: string) => {
        promiseAll.push(
          localStorgeData.setLocalVariable(key, objectData[datas[key]])
        );
      });
      Promise.all(promiseAll).then((v) => {
        localStorgeData.setLocalVariable("userName", md5UserName);
        this.visible = false;
      });
    } catch (error) {}
  }

  passwordHandleOk(md5UserName: string) {
    getAll("12", "12", "121", "username", md5UserName)
      .then((v: any) => {
        if (v.content) {
          localStorgeData.setLocalVariable("userName", md5UserName);
        } else {
          message.error("未查询到账号信息");
        }
      })
      .catch((err) => {
        message.error("未查询到账号信息");
      });
  }
}
</script>


<style lang="less">
@import "../../less/index.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px 0px;
  height: 100%;
}

.mb-8 {
  margin-bottom: 8px;
}
</style>
