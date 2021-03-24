

import { createStore } from '@stencil/store';


interface DropDrapStoreData {
    isResize: boolean;
    resizeDom: HTMLElement;
    resizeDirection: 'lr'|'ud'|'ck';  // 左右。上下。斜着的可以放大缩小
}


class DsComponentStore {
    
    private dropDrapData: DropDrapStoreData = {
        isResize: false,
        resizeDom: null,
        resizeDirection: null
    }


    dropDrapDataStore = createStore(this.dropDrapData)

    
    constructor() {


    }
}


export const dsComponentStore = new DsComponentStore();