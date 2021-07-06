
import Vue from 'vue/dist/vue.esm.browser.js';



class dsVueJs {


    constructor() {
        Vue.config.ignoredElements = [/ds-\w*/];
    }


    init(el, data, methods) {
        new Vue({
            el: el,
            data: () => {
                return { ...data }
            },
            methods
        })
    }

}

export const dsVue = new dsVueJs();