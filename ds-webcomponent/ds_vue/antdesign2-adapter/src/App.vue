<template>
  <div>
    <!-- 测试 -->

    <a-time-picker ref="aaa" use12-hours v-on:focus="onChange" />
    <a-switch
      ref="bbb"
      un-checked-children="a123"
      checked-children="a"
      size="small"
    >
    </a-switch>

    <div v-for="c in Object.keys(componentMap)" :key="c">
      <component
        v-if="componentMap[c] && componentMap[c].key"
        :ref="c"
        :is="componentMap[c].name"
        v-on="$listeners"
      >
        1测试{{ i }}
      </component>
    </div>
  </div>
</template>

<script>
import * as Vue2EmitAdapter from "./emit_on";

export default {
  data() {
    return {
      i: 0,
      componentMap: {},
    };
  },
  mounted() {
    console.log("初始化");
    Vue2EmitAdapter.atOnceHandler("keys", (data) => {
      console.log("已生成keys:", data);
      if (data && Array.isArray(data)) {
        data.forEach((da) => {
          this.initComponentToKey(da);
        });
      }
    });
    Vue2EmitAdapter.on("key", (data) => {
      console.log("新生成key:", data);
      if (data) {
        this.initComponentToKey(data);
      }
    });
  },
  updated() {
    console.log("有的", this.$refs.aaa);
    console.log("有的", this.$refs.bbb);
    console.log("vue组件进行更新", this, this.componentMap, this.$refs);
    Object.keys(this.componentMap).forEach((reKey) => {
      if (!this.componentMap[reKey] || this.componentMap[reKey].isEl) {
        return;
      }
      this.componentMap[reKey].el = this.$refs[reKey];
      this.componentMap[reKey].isEl = true;
      // 赋予初始值的prop
      this.propChange(reKey);

      // 重写emit方法，使之执行外来emit
      if (this.componentMap[reKey].emit) {
        this.$refs[reKey][0].$emit = this.emitReload(reKey);
      }
      this.emitChange(reKey);
      // 将el_Dom元素回调给webComponent
      if (this.$refs[reKey] && this.$refs[reKey].$el) {
        const elArr = [];
        this.getEl(this.$refs[reKey].$el, elArr);
        Vue2EmitAdapter.emit(`vueComponentCreate_${reKey}`, elArr);
      }
    });
  },
  methods: {
    // key 数据初始化
    initComponentToKey(key) {
      this.componentMap[key] = {
        isEl: false,
        el: this.$refs[key],
      };
      this.componentMap[key].OnComponentDestory = Vue2EmitAdapter.atOn(
        `componentDestory_${key}`,
        (key) => {
          console.log("vue监听到销毁事件", key, this.componentMap[key]);
          if (!this.componentMap[key]) {
            return;
          }
          console.log(this.componentMap[key]);
          delete this.componentMap[key];
          this.componentMap = { ...this.componentMap };
        }
      );
      this.componentMap[key].OnComponentCreate = Vue2EmitAdapter.atOn(
        `componentCreate_${key}`,
        (data) => {
          console.log("vue监听到创建事件", key, this.componentMap[key]);
          this.componentMap[key] = {
            ...this.componentMap[key],
            ...data,
          };
          this.componentMap = { ...this.componentMap };
        }
      );
      this.componentMap[key].OnComponentEmitChange = Vue2EmitAdapter.atOn(
        `componentEmitChange_${key}`,
        (data) => {
          if (!data || !this.componentMap[key]) {
            return;
          }
          this.componentMap[key].emit = data;
          this.emitChange(key);
        }
      );
      this.componentMap[key].OnComponentPropChange = Vue2EmitAdapter.atOn(
        `componentPropChange_${key}`,
        (data) => {
          if (!data || !this.componentMap[key]) {
            return;
          }
          this.componentMap[key].prop = data;
          this.propChange(key);
        }
      );
    },
    // emit 重写
    emitReload: function (reKey) {
      const _that = this;
      return function () {
        const args = [].slice.call(arguments, 0);
        // 所有事件的回调
        if (_that.componentMap[reKey].emit["__emitChange"]) {
          _that.componentMap[reKey].emit["__emitChange"].apply(null, [...args]);
        }
        const eventName = args[0];
        const event = _that.componentMap[reKey].emit[eventName];
        if (args.length && event) {
          if (Array.isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
              event[i].apply(null, [...args.slice(1)]);
            }
          } else {
            event.apply(null, [...args.slice(1)]);
          }
        }
      };
    },
    // 节点形成数组或者节点
    getEl: function (el, arr) {
      if (el.nextElementSibling && el.nodeType === 3) {
        arr.push(el);
        this.getEl(el.nextElementSibling, arr);
      } else {
        arr.push(el);
      }
    },
    // prop名字转换
    propToggle: function (name) {
      return name.replace(/-(\w)/g, (all, letter) => {
        return letter.toUpperCase();
      });
    },
    // Prop变化
    propChange: function (reKey) {
      console.log(1, reKey);
      if (!this.$refs[reKey] || !this.componentMap[reKey].prop) {
        return;
      }
      console.log(2, this.$refs[reKey], this.$refs[reKey][0]);
      Object.keys(this.componentMap[reKey].prop).forEach((ks) => {
        if (
          typeof this.componentMap[reKey].prop[ks] == "string" &&
          this.componentMap[reKey].prop[ks].length === 0
        ) {
          this.componentMap[reKey].prop[ks] = true;
        }
        this.$refs[reKey][0].$vnode.componentInstance._props[this.propToggle(ks)] = this.componentMap[reKey].prop[ks];
      });
    },
    // emit变化
    emitChange: function (reKey) {
      if (!this.$refs[reKey] || !this.componentMap[reKey].emit) {
        return;
      }
      Object.keys(this.componentMap[reKey].emit).forEach((ks) => {
        this.$refs[reKey][0].$listeners[ks] = this.componentMap[reKey].emit[ks], this;
        this.$refs[reKey][0]._events[ks] = this.componentMap[reKey].emit[ks];
        this.$refs[reKey][0][ks] = this.componentMap[reKey].emit[ks];

      });
    },
    onChange: function () {
      console.log("改变");
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
