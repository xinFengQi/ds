/*
 * @Date: 2021-02-22 17:42:52
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-16 13:29:31
 */

import axios from 'axios';
import { dsStoreJs } from './store';
import  { dsVue }  from './vue';

export class golbalJs {
    constructor() {
        if (!window['ds']) {
            window['ds'] = {};
        }
        window['ds']['axios'] = axios;
        window['ds']['store'] = dsStoreJs;
        window['ds']['vue'] = dsVue;

    }
}

new golbalJs();