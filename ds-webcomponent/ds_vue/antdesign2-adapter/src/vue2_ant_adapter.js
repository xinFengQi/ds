import * as Vue2EmitAdapter from './emit_on';

let iKey = 0;
let keys = [];

class Vue2AntAdapter extends HTMLElement {
    key = 'vue2_ant_' + iKey++;
    tagName = null;
    prop = {};
    propIn = ['__name', 'id', '__children'];
    componentData = null;
    constructor() {
        super();
        keys.push(this.key);
        Vue2EmitAdapter.emit(`keys`, [...keys]);
        Vue2EmitAdapter.emit(`key`, this.key);
        this.vueEmit = {};
        this.vueChildren = {};

    }

    isChildren() {
        return this.parentNode && this.parentNode.nodeName === 'VUE2-ANT' && this.nodeName === 'VUE2-ANT';
    }

    isSlot() {
        return this.parentNode && this.parentNode.hasAttribute('slot')
    }

    connectedCallback() {
        if (this.isSlot()) {
            return;
        }
        console.log('创建适配器组件:', this.key);
        // 初始化slot
        const slotMap = this.initSlotData();
        const childresNode = this.childNodes;

        this.tagName = this.attributes.__name.value;
        this.attributes.forEach(v => {
            if (!this.propIn.includes(v.name)) {
                this.prop[v.name] = v.value;
            }
        })

        this.componentData = {
            key: this.key,
            name: this.tagName,
            prop: this.prop,
            emit: this.vueEmit,
            slot: slotMap,
            childresNode: childresNode,
            elOn: null,
            isChildren: this.isChildren()
        };


        // 监听元素属性, 事件, 方法的变化
        this.listeningAttrbutes();
        this.listeningVueEmit();
        // 监听vue得回调事件
        this.initEmit();

        Vue2EmitAdapter.emit(`componentCreate_${this.key}`, this.componentData);

        if (this.isChildren()) {
            console.log(this.parentNode, this.parentNode.vueChildren)
            this.parentNode.vueChildren[this.key] = this.componentData;
            return;
        }

        // 监听后来vue组件创建之后
        this.componentData.elOn = Vue2EmitAdapter.on(`vueComponentCreate_${this.key}`, (data) => {
            console.log('vue返回的元素:', data)
            if (!data) {
                return;
            }
            data.forEach((da, i) => {
                const keyStr = this.key + '_' + i;
                if (document.getElementById(keyStr)) {
                    console.log('删除id:', keyStr)
                    this.removeChild(document.getElementById(keyStr))
                }
                da.id = keyStr;
                this.appendChild(da)
            })
        })
    }


    initEmit() {
        this.componentData.dataChangeOn = Vue2EmitAdapter.on(`vueComponentDataChange_${this.key}`, (data) => {
            if (!data) {
                return;
            }
            this.componentData = { ...this.componentData, ...data };
            if (this.isChildren()) {
                this.parentNode.vueChildren[this.key] = this.componentData;
            }
        })

    }


    initSlotData() {
        const slotMap = {};
        const childrenNodesNoName = [];
        if (!this.childNodes || !this.childNodes.length === 0) {
            return;
        }
        this.childNodes.forEach(no => {
            if (!no) {
                return;
            }
            if (no.nodeName === 'VUE2-ANT') {
                return;
            }
            if(no.nodeName === '#text' && no.nodeValue.replace(/\n/g, '').replace(/ /g, '').length === 0) {
                return;
            }
            if (no.getAttribute && no.getAttribute('slot')) {
                slotMap[no.getAttribute('slot')] = no;
            } else {
                childrenNodesNoName.push(no);
            }
        })
        slotMap.default = childrenNodesNoName;
        return slotMap;
    }

    disconnectedCallback() {
        if(!this.componentData) {
            return;
        }
        if (this.isChildren()) {
            delete this.parentNode.vueChildren[this.key];
            return;
        }
        Vue2EmitAdapter.destory(this.componentData.elOn);
        Vue2EmitAdapter.emit(`componentDestory_${this.key}`, this.key);

    }

    // 监听属性发生变化
    listeningAttrbutes() {
        const MutationObserver = window.MutationObserver ||
            window.WebKitMutationObserver || window.MozMutationObserver; //浏览器兼容
        const config = { attributes: true, childList: true } //配置对象
        const observer = new MutationObserver((mutations) => {//构造函数回调
            mutations.forEach(function (record) {
                if (record.type == "attributes") {//监听属性
                    console.log('change');
                }
                if (record.type == 'childList') {//监听结构发生变化
                    //do any code
                }
            });
        })
        observer.observe(this, config);
    }

    listeningVueEmit() {
        const vueEmit = new Proxy(this.vueEmit, {
            set: (target, key, value) => {
                target[key] = value;
                Vue2EmitAdapter.emit(`componentEmitChange_${this.key}`, { ...target });
                return true;
            },
            get(target, key) {
                return target[key]
            },
        })
        this.vueEmit = vueEmit;

        const vueChildren = new Proxy(this.vueChildren, {
            set: (target, key, value) => {
                target[key] = value;
                Vue2EmitAdapter.emit(`componentChildrenChange_${this.key}`, { ...target });
                return true;
            },
            get(target, key) {
                return target[key]
            },
        })
        this.vueChildren = vueChildren;

    }

}


if (!customElements.get('vue2-ant')) {
    customElements.define('vue2-ant', Vue2AntAdapter);
}