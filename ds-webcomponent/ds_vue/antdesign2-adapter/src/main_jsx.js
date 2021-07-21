import * as Vue2EmitAdapter from "./emit_on";
import { h } from 'vue'

export default {
    name: "vue2_webcomponent_adapter",
    data() {
        return {
            componentMap: {},
        }
    },
    updated() {
        Object.keys(this.componentMap).forEach((reKey) => {
            if (!this.componentMap[reKey] || this.componentMap[reKey].isEl) {
                return;
            }
            this.componentMap[reKey].el = this.$refs[reKey];
            this.componentMap[reKey].isEl = true;

            // 将el_Dom元素回调给webComponent
            if (this.$refs[reKey] && this.$refs[reKey].$el) {
                const elArr = [];
                this.getEl(this.$refs[reKey].$el, elArr);
                Vue2EmitAdapter.emit(`vueComponentCreate_${reKey}`, elArr);
            }
        });
    },
    mounted() {
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
                }
            );
            this.componentMap[key].OnComponentPropChange = Vue2EmitAdapter.atOn(
                `componentPropChange_${key}`,
                (data) => {
                    if (!data || !this.componentMap[key]) {
                        return;
                    }
                    this.componentMap[key].prop = data;
                }
            );
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
    },
    render() {
        return (
            <div>
                {
                    Object.keys(this.componentMap).map(c =>
                        h(
                            this.componentMap[c].name,
                            {
                                ref: c,
                                key: c,
                                prop: {...this.componentMap[c].prop},
                                on: {...this.componentMap[c].emit},

                            }
                        )
                    )
                }
            </div>
        )
    }
}