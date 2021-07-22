import * as Vue2EmitAdapter from './emit_on';

let iKey = 0;
let keys = [];

class Vue2AntAdapter extends HTMLElement {
    key = 'vue2_ant_' + iKey++;
    tagName = null;
    prop = {};
    propIn = ['__name', 'id', '__children'];
    componentData = null;
    componentOrigin = null;
    constructor() {
        super();
        keys.push(this.key);
        Vue2EmitAdapter.emit(`keys`, [...keys]);
        Vue2EmitAdapter.emit(`key`, this.key);
        this.vueEmit = {};
    }

    connectedCallback() {
        console.log([this],this, '--------------------')
        if(this.hasAttribute('__parent')) {
            return;
        }
        this.componentOrigin = this.cloneNode(true);
        console.log('创建--------------------------------', this.key);
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
            elOn: null
        };
        Vue2EmitAdapter.emit(`componentCreate_${this.key}`, this.componentData);

        // 监听元素属性, 事件, 方法的变化
        this.listeningAttrbutes();
        this.listeningVueEmit();

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
                console.log([this], '------------44444444444444444444444444444--------------------')
                if (this.hasAttribute('__children') && this.attributes.__children.value === '1') {
                    this.parentNode.insertBefore(da, this)
                } else {
                    this.appendChild(da)
                }

            })
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
            let cloneChild = no;
            if (no.nodeName === 'VUE2-ANT') {
                cloneChild.cloneNode(true);
                cloneChild.setAttribute('__children', '1');
            }

            if (cloneChild.getAttribute && cloneChild.getAttribute('slot')) {
                slotMap[cloneChild.getAttribute('slot').value] = cloneChild;
            } else {
                childrenNodesNoName.push(cloneChild);
            }
        })
        slotMap.default = childrenNodesNoName;
        return slotMap;
    }

    disconnectedCallback() {
        if(this.hasAttribute('__parent')) {
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
        const p = new Proxy(this.vueEmit, {
            set: (target, key, value) => {
                target[key] = value;
                Vue2EmitAdapter.emit(`componentEmitChange_${this.key}`, { ...target });
            },
            get(target, key) {
                return target[key]
            },
        })
        this.vueEmit = p;
    }

}


if (!customElements.get('vue2-ant')) {
    customElements.define('vue2-ant', Vue2AntAdapter);
}