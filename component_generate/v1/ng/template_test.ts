
// 这是描述
export interface CeshiInterface{
    // 名字
    key: string;  // 这是复杂的情况
    // 设置
    name: number;
} 


/**
 * @author damon.dong
 * @description 这个切换中英文不咋好用
 * 
 */
export interface CeshiInterfaceA{
    // 名字
    key: string;
    // 设置
    name: number;
    // 
    heehi: {
        a: number,
        b: () => void,
        c: {
            f: boolean  // 这是假的
        }
    }
} 