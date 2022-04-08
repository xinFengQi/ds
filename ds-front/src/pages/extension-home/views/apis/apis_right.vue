<template>
  <div class="apis_right_main">
    <div class="right_sendurl">
      <dsb5-select  class="mr_1" @valuechange="methodChange($event)">
        <option v-for="item in httpMethods" :selected="selectHttpMethod === item" :value="item">{{item}}</option>
      </dsb5-select>
      <dsb5-input class="right_sendurl_input mr_1"> </dsb5-input>
      <dsb5-button>发送</dsb5-button>
    </div>
    <ApisSend class="right_sendbody"></ApisSend>
    <div class="right_sendresponse"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ApisSend from "./apis_send.vue";

@Options({
  components: {
    ApisSend,
  },
})
export default class ApisRight extends Vue {
  httpMethods = ['Get', 'Post', 'Put', 'Delete'];
  selectHttpMethod = 'Get';
  mounted() {
    
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
    margin: 0 20px;
    .right_sendurl_input {
      flex: 1;
      max-width: 650px;
    }
  }
  .right_sendbody {
    padding: 0px 1rem;
    flex: 1;
    overflow: auto;
  }
  .right_sendresponse {
    border-top: 1px solid #d3d3d3;
    flex: 1;
    overflow: auto;
  }
}
</style>
