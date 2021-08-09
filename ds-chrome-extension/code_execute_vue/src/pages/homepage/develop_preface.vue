<template>
  <div class="developPrefaceMain">
    <a-typography-title>序言</a-typography-title>
    <a-typography-paragraph>
      基于vue的chrome扩展的工具集合,目前主要的功能是书签及脚本执行;
    </a-typography-paragraph>
    <a-typography-title :level="2">开发者测试数据</a-typography-title>
    <a-typography-paragraph>
      <blockquote>
        <a-typography-paragraph :copyable="{text: 'dongfubao'}"
          >个人标识:dongfubao</a-typography-paragraph
        ><br />
        <a-typography-paragraph :copyable="{text: 'e9694199cc954120b37d5d449a56a752'}">
          用户授权码:e9694199cc954120b37d5d449a56a752</a-typography-paragraph
        ><br />
        <a-typography-paragraph :copyable="{text: 'dongfubao'}"
          >仓库所属空间地址:dongfubao</a-typography-paragraph
        ><br />
        <a-typography-paragraph :copyable="{text: 'ct'}"> 仓库路径:ct</a-typography-paragraph
        ><br />
        <a-typography-paragraph :copyable="{text: 'dongfubao_trrt'}"
          >公共标识: dongfubao_trrt</a-typography-paragraph
        ><br />
      </blockquote>
    </a-typography-paragraph>
  </div>
</template>

<script>
export default {
  name: "developPreface",
  props: {},
};
</script>


<style scoped>
.developPrefaceMain {
  text-align: left;
}
</style>
