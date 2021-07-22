<template>
  <div>
    <a-menu style="width: 256px" mode="inline">
      <a-sub-menu key="sub1">
        <span slot="title">
          <vue2-ant __name=" a-icon" type="mail" />
          <span>这啥</span>
        </span>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3"> Option 3 </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
    
    };
  },
  mounted() {
  
  },
  methods: {
 
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
