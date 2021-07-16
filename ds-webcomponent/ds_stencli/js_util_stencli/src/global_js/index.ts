import axios from 'axios';
import { dsStoreJs } from './store';
import { dsUtil } from './util';

export class golbalJs {
    constructor() {
        if (!window['ds']) {
            window['ds'] = {};
        }
        window['ds']['axios'] = axios;
        window['ds']['store'] = dsStoreJs;
        window['ds']['util'] = dsUtil;

    }
}

new golbalJs();