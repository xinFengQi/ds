let iKey = 0;
const state = {
    vue2: {
        antComponent: {}
    }
};

const loadFun = [];

export function initAdapter() {
    if (window.ds && window.ds.store && !window.ds.vue2AntStore) {
        window.ds.vue2AntStore = new window.ds.store(state);
    }
    loadFun.forEach(fun => {
        fun.apply(this)
    })
}

class Vue2AntAdapter extends HTMLElement {
    key = 'vue2_ant_' + iKey++;
    tagName = null;
    prop = {};
    propIn = ['__name', 'id']
    constructor() {
        super();
        this.vueEmit = {};
        loadFun.push(this.sendTag)
    }

    connectedCallback() {
        this.sendTag();
    }

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
                window.ds.vue2AntStore.storeSet(`vue2.antComponent.${this.key}.emit`,  { ...target });
            },
            get(target, key) {
                return target[key]
            },
        })
        this.vueEmit = p;
    }

    sendTag = () => {
        if (!window.ds || !window.ds.vue2AntStore) {
            console.log("事件监听方法还未引入")
            return;
        }



        this.tagName = this.attributes.__name.value;
        this.attributes.forEach(v => {
            if (!this.propIn.includes(v.name)) {
                this.prop[v.name] = v.value;
            }
        })
        state.vue2.antComponent[this.key] = {
            key: this.key,
            name: this.tagName,
            prop: this.prop,
            emit: this.vueEmit
        };



        window.ds.vue2AntStore.storeSet('vue2.antComponent.' + this.key, state.vue2.antComponent[this.key]);

        // 监听元素属性的变化
        this.listeningAttrbutes();
        this.listeningVueEmit();

        window.ds.vue2AntStore.on(`vue2.antComponent.${this.key}.el`, (data) => {

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
}


if (!customElements.get('vue2-ant')) {
    customElements.define('vue2-ant', Vue2AntAdapter);
}