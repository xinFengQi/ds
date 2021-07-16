
import Vue from 'vue/dist/vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';

Vue.use(Button)

import { componentInit } from '../core/component';

const template = document.createElement('div');
template.innerHTML = `
        <a-button type="primary">
            <slot></slot>
        </a-button>
`;


export class DsJsButton extends HTMLElement {
    shadowRoot = null
    constructor() {
        console.log('button组件构造')
        super();
    }

    connectedCallback() {
        componentInit(this, template).then(v => {
            new Vue({
                el: v,
                data: {
                    aaa: 1212
                }
            })
        });
    }

}




if (!customElements.get('dsjs-button')) {
    customElements.define('dsjs-button', DsJsButton);
}
