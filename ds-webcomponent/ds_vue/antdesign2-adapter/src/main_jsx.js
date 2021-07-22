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
                const slotDefalult = this.componentMap[reKey].slot.default || []
                for (let i = 0; i < slotDefalult.length; i++) {
                    const el = slotDefalult[i];
                    if (this.$refs[reKey].$el.nodeType === 1) {
                        this.$refs[reKey].$el.appendChild(el);
                    }
                }
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
        getChildNode(c) {
            const nodes = [];
            for (let i = 0; i < this.componentMap[c].childresNode.length; i++) {
                const el = this.componentMap[c].childresNode.item(i);
                console.log(el)
                nodes.push(['span', '112123']);
            }
            return nodes;
        },
    },

    render() {

        return (
            <div>
                {
                    Object.keys(this.componentMap).map(c => {
                        if (!this.componentMap[c].key) {
                            return;
                        }
                        console.log(this.componentMap[c], '开始渲染---------------------------------------')
                        return h(
                            this.componentMap[c].name,
                            {
                                ref: c,
                                key: c,
                                prop: { ...this.componentMap[c].prop },
                                attrs: {
                                    ...this.componentMap[c].prop
                                },
                                on: { ...this.componentMap[c].emit },
                                slot: 'default',
                                scopedSlots: {
                                    default: () =>  this.getChildNode(c).map(v => {
                                        console.log(v, '-----------------------------')
                                        return h.apply(h, [...v])
                                    })
                                },
                            },
                           
                        )
                    }

                    )
                }
            </div>
        )
    }
}