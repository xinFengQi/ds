<template>
  <div>
    vue监听页面
    <a-button type="primary" @click="add">加</a-button>
    <a-time-picker
      ref="aaaa"
      use12-hours
      @change="onChange"
      @openChange="openChange"
    />

    <component
      v-for="c in Object.keys(componentMap)"
      :key="c"
      :ref="c"
      :is="componentMap[c].name"
      >1测试{{ i }}</component
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      componentMap: {},
    };
  },
  mounted() {
    // webComponent页面渲染后，vue组件进行初始化
    const comMap = window.ds.vue2AntStore.store.state.vue2.antComponent;
    const refKey = Object.keys(comMap);
    // 将初始页面的组件进行初始化
    refKey.forEach((reKey) => {
      // 将组件数据进行赋值，重构
      this.componentMap[reKey] = {
        name: comMap[reKey].name,
        prop: comMap[reKey].prop,
        emit: comMap[reKey].emit,
        el: this.$refs[reKey],
      };
    });
    console.log(
      comMap,
      window.ds.vue2AntStore.store.state,
      "========================="
    );
  },
  updated() {
    console.log("======================", this.componentMap, this.$refs);

    Object.keys(this.$refs).forEach((reKey) => {
      if (this.componentMap[reKey] && !this.componentMap[reKey].el) {
        this.componentMap[reKey].el = this.$refs[reKey];
        // 赋予初始值的prop
        this.propChange(reKey);
        window.ds.vue2AntStore.on(`vue2.antComponent.${reKey}.prop`, (data) => {
          console.log(data, reKey, "监听到prop变化");
          this.componentMap[reKey].prop = { ...data };
          this.propChange(reKey);
        });
        // 赋予初始化emit
        this.emitChange(reKey);
        window.ds.vue2AntStore.on(`vue2.antComponent.${reKey}.emit`, (data) => {
          console.log(data, reKey, "监听到emit变化");
          this.componentMap[reKey].emit = data;
          this.emitChange(reKey);
        });
        // 将el_Dom元素回调给webComponent
        const elArr = [];
        this.getEl(this.$refs[reKey].$el, elArr);
        window.ds.vue2AntStore.storeSet(`vue2.antComponent.${reKey}.el`, elArr);
      }
    });
    this.$refs;
  },
  methods: {
    // 节点形成数组或者节点
    getEl: function (el, arr) {
      if (el.nextElementSibling && el.nodeType === 3) {
        arr.push(el);
        this.getEl(el.nextElementSibling, arr);
      } else {
        arr.push(el);
      }
    },
    // Prop变化
    propChange: function (reKey) {
      Object.keys(this.componentMap[reKey].prop).forEach((ks) => {
        if (
          typeof this.componentMap[reKey].prop[ks] == "string" &&
          this.componentMap[reKey].prop[ks].length === 0
        ) {
          this.componentMap[reKey].prop[ks] = true;
        }
        this.$refs[reKey].$.props[ks] = this.componentMap[reKey].prop[ks];
      });
    },
    // emit变化
    emitChange: function (reKey) {
      Object.keys(this.componentMap[reKey].emit).forEach((ks) => {
          this.$refs[reKey].$parent[ks] = this.componentMap[reKey].emit[ks];
         this.$refs[reKey].$root[ks] = this.componentMap[reKey].emit[ks];
        this.$refs[reKey].$.props[ks] = this.componentMap[reKey].emit[ks];
      });
    },

    add: function () {
      this.i++;
    },
    onChange(time, timeString) {
      console.log(time, timeString);
    },
    openChange(data) {
      console.log(data);
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
