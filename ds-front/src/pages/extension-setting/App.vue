<template>
  <router-view v-if="!visible" />
  <a-modal
    v-model:visible="visible"
    :maskClosable="false"
    :keyboard="false"
    :closable="false"
    title="请输入账号信息"
  >
    <a-radio-group class="mb-8" v-model:value="use">
      <a-radio-button value="password">密码登录</a-radio-button>
      <a-radio-button value="cipher">密文登录</a-radio-button>
    </a-radio-group>
    <a-input class="mb-8" v-model:value="userName" placeholder="用户名" />
    <a-input v-if="use === 'password'" v-model:value="password" placeholder="用户密码" />
    <a-textarea
      v-if="use === 'cipher'"
      v-model:value="password"
      placeholder="输入内容密钥"
      :autoSize="{ minRows: 8 }"
      allow-clear
    />
    <template #footer>
      <a-button key="submit" type="primary" @click="newUser">新用户进入</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="formHandleOk"
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
import { getPersonalSetting } from "./store/util";
import store from "./store";
@Options({
  components: {},
})
export default class Home extends Vue {
  visible = true;
  loading = false;
  userName = "";
  password = "";
  use: "password" | "cipher" = "password";

  created() {}

  mounted() {
    localStorgeData.getLocalVariable("userName").then((v) => {
      if (v) {
        store.dispatch("setUserName", v);
        this.visible = false;
      }
    });
    // const a = crypto.zip(
    //   JSON.stringify({
    //     accesk: "1sfhjdshfkjs fshdfhsf",
    //     repo: "ct",
    //     dongfub: 121212,
    //   })
    // );
    // console.log("压缩：", a, a.length);
    // const aceKey = "12121212";
    // const ena = crypto.encrypt(a, aceKey);
    // console.log("加密", ena, ena.length);
    // const dac = crypto.decrypt(ena, aceKey);
    // console.log("解密", dac, dac.length);
    // const b = crypto.unzip(dac);
    // console.log("解压：", b, b.length);
  }

  newUser() {
    if (!this.userName) {
      message.error("请填写用户名即可");
      return;
    }
    localStorgeData.clearLocalData();
    const md5UserName = this.setUserName();
    getPersonalSetting(md5UserName)
      .then((v) => {
        message.error("用户名已存在");
      })
      .catch(() => {
        localStorgeData.setLocalVariable("userName", md5UserName);
        this.visible = false;
      });
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
    const md5UserName = Md5.hashAsciiStr(crypto.encrypt(this.userName, this.userName));
    return md5UserName;
  }

  cipherHandleOk(md5UserName: string) {
    try {
      const decryptData = crypto.decrypt(this.password, md5UserName);
      const unzipData = crypto.unzip(decryptData);
      const objectData = JSON.parse(unzipData);
      console.log("获取数据:", objectData);
      this.settingAllData(md5UserName, objectData);
    } catch (error) {
      message.error("解析失败");
    }
  }
  settingAllData(md5UserName: string, objectData: any) {
    const datas: any = {
      __gitee_all_ds_flag: "flag",
      __gitee_all_ds_pubilc_flag: "publicFlag",
      __gitee_all_ds_access_token: "accessToken",
      __gitee_all_ds_owner: "owner",
      __gitee_all_ds_repo: "repo",
    };
    const promiseAll: any = [];
    Object.keys(datas).forEach((key: string) => {
      promiseAll.push(localStorgeData.setLocalVariable(key, objectData[datas[key]]));
    });
    Promise.all(promiseAll).then((v) => {
      localStorgeData.setLocalVariable("userName", md5UserName);
      store.dispatch("setUserName", md5UserName);
      this.visible = false;
    });
  }
  passwordHandleOk(md5UserName: string) {
    getPersonalSetting(md5UserName)
      .then((v: any) => {
        const password = v.data.password;
        if (!password) {
          message.error("此账号未设置密码");
          return;
        }
        try {
          const md5UserNamePassword = Md5.hashAsciiStr(
            crypto.decrypt(md5UserName, this.password)
          );
          const decryptData = crypto.decrypt(password, md5UserNamePassword);
          const unzipData = crypto.unzip(decryptData);
          const objectData = JSON.parse(unzipData);
          console.log("获取数据:", objectData);
          this.settingAllData(md5UserName, objectData);
        } catch (error) {
          console.log(error);
          message.error("解析失败", error);
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
  height: calc(100% - 60px) !important;
  overflow: hidden;
}

.mb-8 {
  margin-bottom: 8px;
}
</style>
