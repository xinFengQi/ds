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
            if (data && Array.isArray(data)) {
                data.forEach((da) => {
                    this.initComponentToKey(da);
                });
            }
        });
        Vue2EmitAdapter.on("key", (data) => {
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
                const elArr = [];
                this.getEl(this.$refs[reKey].$el, elArr);
                Vue2EmitAdapter.emit(`vueComponentCreate_${reKey}`, elArr);
                Vue2EmitAdapter.emit(`vueComponentDataChange_${reKey}`, this.componentMap[reKey]);
            }
        });
    },
    methods: {
        // 删除节点下面的所有子节点
        closeAllNode(node) {
            console.log(node)
            // while (node.hasChildNodes()) //当div下还存在子节点时 循环继续
            // {
            //     node.removeChild(node.firstChild);
            // }
        },
        // key 数据初始化
        initComponentToKey(key) {
            this.componentMap[key] = {
                isEl: false,
                el: this.$refs[key],
            };
            this.componentMap[key].OnComponentDestory = Vue2EmitAdapter.atOn(
                `componentDestory_${key}`,
                (key) => {
                    if (!this.componentMap || !this.componentMap[key]) {
                        return;
                    }
                    delete this.componentMap[key];
                    this.componentMap = { ...this.componentMap };
                }
            );
            this.componentMap[key].OnComponentCreate = Vue2EmitAdapter.atOn(
                `componentCreate_${key}`,
                (data) => {
                    if (data.prop) {
                        Object.keys(data.prop).forEach(ke => {
                            if (ke.startsWith('v-')) {
                                data.prop[ke.replace('v-', '')] = data.prop[ke];
                            }
                        })
                    }
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
                    Object.keys(data).forEach(ke => {
                        if (ke.startsWith('v-')) {
                            data[ke.replace('v-', '')] = data[ke];
                        }
                    })
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
            console.log([c], 'slot或者子节点')
            let slot = null;
            if (c.nodeType === 1) {
                c.removeAttribute('slot');
                slot = h(
                    c.localName,
                )
            } else {
                if (!c.parentNode || (c.parentNode && c.parentNode.nodeName === "VUE2-ANT")) {
                    slot = c.nodeValue;
                }
            }
            setTimeout(() => {
                if (c.nodeType === 1) {
                    if (slot.elm && slot.elm.parentNode && slot.elm.parentNode.replaceChild) {
                        if (!c.contains(slot.elm.parentNode)) {
                            slot.elm.parentNode.replaceChild(c, slot.elm)
                        }
                    }
                } else {
                    if (c.parentNode && c.parentNode.nodeName === "VUE2-ANT") {
                        c.parentNode.innerText = '';
                    }
                }
            })
            return slot;
        },
        getVueChildrens(h, childrenMap, childrens) {
            const childrenNodes = [];
            const filterChildrens = childrens.find(v => v.parentNode);
            if (filterChildrens) {
                const parentNode = filterChildrens.parentNode;
                this.closeAllNode(parentNode);
            }
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
            return childrenNodes.length ? childrenNodes: null;
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
                        console.log('开始渲染:', this.componentMap, c)
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