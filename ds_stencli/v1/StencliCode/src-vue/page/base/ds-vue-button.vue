<!--
 * @Date: 2021-01-25 14:26:21
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 17:17:02
-->
<!--
 * @Date: 2021-01-22 10:28:54
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 14:25:33
-->
<template>
  <div>
    <ds-button @click="btuClick()">这是一个按钮</ds-button>
  </div>
</template>

<script>

export default {
  name: 'dsVueButton',
  components: {
  },
  setup(props, content) {
    function btuClick() {
      console.log('这是点击方法')
    }

    return {
      btuClick
    }
  },
}
</script>

<style scope>

</style>
