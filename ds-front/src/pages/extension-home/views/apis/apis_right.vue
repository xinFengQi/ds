<template>
  <div class="apis_right_main">
    <div class="right_sendurl">
      <dsb5-select id="aaaaa" class="mr_1" @valuechange="methodChange($event)">
        <option v-for="item in httpMethods" :selected="selectHttpMethod === item" :value="item">{{item}}</option>
      </dsb5-select>
      <dsb5-input class="right_sendurl_input mr_1"> </dsb5-input>
      <dsb5-button>发送</dsb5-button>
    </div>
    <div class="right_sendbody"></div>
    <div class="right_sendresponse"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ApisRight extends Vue {
  httpMethods = ['Get', 'Post', 'Put', 'Delete'];
  selectHttpMethod = 'Get';
  mounted() {
    const a =  document.getElementById("aaaaa");
    if (a) {
     a.addEventListener("valueChange", (ev) => {
        console.log(ev);
      });
    }
  }

  // 方法变化
  methodChange(ev: CustomEvent) {
    this.selectHttpMethod = ev.detail;
  }
}
</script>

<style lang="less" scope>
.apis_right_main {
  height: 100%;
  .right_sendurl {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .right_sendurl_input {
      flex: 1;
      max-width: 450px;
    }
  }
  .right_sendbody {
    border: 1px solid red;
    flex: 1;
  }
  .right_sendresponse {
    border: 1px solid red;
    flex: 1;
  }
}
</style>
