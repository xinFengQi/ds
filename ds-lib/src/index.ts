
declare const window: any;

// 引入数组篇
import { DsBaseArray } from './array';

if(window.ds) {
    window.ds = {};
}

window.ds.ArrayBase = new DsBaseArray();