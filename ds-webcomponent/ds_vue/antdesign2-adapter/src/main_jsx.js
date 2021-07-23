import * as Vue2EmitAdapter from "./emit_on";
import { h } from 'vue'

export default {
    name: "vue2_webcomponent_adapter",
    data() {
        return {
            componentMap: {},
        }
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
    updated() {
        Object.keys(this.componentMap).forEach((reKey) => {
            if (!this.$refs[reKey] || !this.componentMap[reKey] || this.componentMap[reKey].isEl) {
                return;
            }
            this.componentMap[reKey].el = this.$refs[reKey];
            this.componentMap[reKey].isEl = true;

            // 将el_Dom元素回调给webComponent
            if (this.$refs[reKey] && this.$refs[reKey].$el) {
                console.log('节点被渲染了', this.$refs[reKey], this.$refs)
                // 强行增加子节点 尽量不用
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
                Vue2EmitAdapter.emit(`vueComponentDataChange_${reKey}`, this.componentMap[reKey]);
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
            // 监听emit事件
            this.componentMap[key].OnComponentEmitChange = Vue2EmitAdapter.atOn(
                `componentEmitChange_${key}`,
                (data) => {
                    if (!data || !this.componentMap[key]) {
                        return;
                    }
                    this.componentMap[key].emit = data;
                }
            );
            // 监听prop事件
            this.componentMap[key].OnComponentPropChange = Vue2EmitAdapter.atOn(
                `componentPropChange_${key}`,
                (data) => {
                    if (!data || !this.componentMap[key]) {
                        return;
                    }
                    this.componentMap[key].prop = data;
                }
            );
            // 监听子节点是vue组件得节点
            this.componentMap[key].OnComponentChildrenChange = Vue2EmitAdapter.atOn(
                `componentChildrenChange_${key}`,
                (data) => {
                    if (!data || !this.componentMap[key]) {
                        return;
                    }
                    this.componentMap[key].childrens = data;
                    Vue2EmitAdapter.emit(`vueComponentDataChange_${key}`, this.componentMap[key]);
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
        getScopedSlots(h, slotMap) {
            const returnMap = {};
            Object.keys(slotMap).forEach(slotKey => {
                if (slotKey !== 'default') {
                    returnMap[slotKey] = () => this.getOtherSlot(h, slotMap[slotKey]);
                }
            })
            return returnMap
        },
        getOtherSlot(h, c) {
            let slot = null;
            if (c.nodeType === 1) {
                c.removeAttribute('slot');
                slot = h(
                    c.localName,
                )
            } else {
                var element = document.createTextNode(c.nodeValue)
                slot = element.nodeValue;
            }
            setTimeout(() => {
                if (c.nodeType === 1) {
                    if (slot.elm.parentNode && slot.elm.parentNode.replaceChild) {
                        slot.elm.parentNode.replaceChild(c, slot.elm)
                    }
                }
            })
            return slot;
        },
        getVueChildrens(h, childrenMap, childrens) {
            console.log('存在vue组件得数据', this.componentMap, childrenMap)

            const childrenNodes = [];
            childrens.forEach(c => {
                childrenNodes.push(this.getOtherSlot(h, c))
            })
            if (childrenMap) {
                Object.keys(childrenMap).map(key => {
                    const a = h(
                        childrenMap[key].name,
                        {
                            key: key,
                            prop: { ...childrenMap[key].prop },
                            attrs: {
                                ...childrenMap[key].prop
                            },
                            on: { ...childrenMap[key].emit },
                            scopedSlots: this.getScopedSlots(h, childrenMap[key].slot),
                        },
                        this.getVueChildrens(h, childrenMap[key].childrens, childrenMap[key].slot.default)
                    );
                    childrenNodes.push(a);
                })
            }
            return childrenNodes;
        }
    },

    render() {
        return (
            <div>
                {
                    Object.keys(this.componentMap).map(c => {
                        if (!this.componentMap[c].key || this.componentMap[c].isChildren) {
                            return;
                        }
                        console.log('开始渲染', this.componentMap, this.componentMap[c])
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
                                scopedSlots: this.getScopedSlots(h, this.componentMap[c].slot),
                            },
                            this.getVueChildrens(h, this.componentMap[c].childrens, this.componentMap[c].slot.default)
                        )
                    }
                    )
                }
            </div>
        )
    }
}