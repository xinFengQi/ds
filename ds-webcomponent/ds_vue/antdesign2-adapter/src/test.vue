<template>
  <div>
    <a-affix ref="affix" :offset-top="top">
      <a-button type="primary" @click="showRef()"> Affix top </a-button>
    </a-affix>

    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
    wqe<br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 100,
      affix: null,
    };
  },
  mounted() {
    console.log("---------------------------------", this.$refs);
    setTimeout(() => {
      console.log("---------------------------------", this.$refs);
    });
  },
  updated() {
    console.log(this.$refs);
  },
  methods: {
    showRef: function () {
      console.log(this.$ref);
    },
  },
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
