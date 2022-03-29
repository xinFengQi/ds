<template>
  <div class="apis_main">
    <div class="apis_left"></div>
    <div class="apis_right">
      <div class="right_sendurl"></div>
      <div class="right_sendbody"></div>
      <div class="right_sendresponse"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ApiHome extends Vue {
  collapsed = false;
}
</script>

<style lang="less" scope>
.apis_main {
  display: flex;
  border: 1px solid red;
  height: 100%;
  padding: 10px;
  .apis_left {
    border: 1px solid red;
    min-width: 250px;
  }
  .apis_right {
    border: 1px solid red;
    flex: 1;
    padding: 0px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    .right_sendurl {
      width: 100%;
      height: 50px;
      border: 1px solid red;
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
}
</style>
