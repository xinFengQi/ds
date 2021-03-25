/*
 * @Date: 2021-03-25 09:56:42
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-25 14:12:42
 */


import { createStore } from '@stencil/store';


interface DropDrapStoreData {
    isResize: boolean;
    resizeDom: HTMLElement;
    resizeDirection: 'lr'|'ud'|'ck';  // 左右。上下。斜着的可以放大缩小
    clickDownXY: {                         // 点击时保留下在点击时的鼠标在父元素左右的位置
        clickDownX: number;
        clickDownY: number;
    }
}


class DsComponentStore {
    
    private dropDrapData: DropDrapStoreData = {
        isResize: false,
        resizeDom: null,
        resizeDirection: null,
        clickDownXY: {
            clickDownX: 0,
            clickDownY: 0
        }
    }


    dropDrapDataStore = createStore(this.dropDrapData)

    
    constructor() {


    }
}


export const dsComponentStore = new DsComponentStore();