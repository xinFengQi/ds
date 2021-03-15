/*
 * @Date: 2021-02-22 17:42:52
 * @LastEditors: dongfb
 * @LastEditTime: 2021-02-22 18:26:57
 */

import { dsHttpAxios } from "./http_axios";

export var s = '123123';

export class util {
    constructor() {
        if(!window['ds']) {
            window['ds'] = {};
        }
        window['ds']['dsHttpAxios'] = new dsHttpAxios();

    }
}

new util();