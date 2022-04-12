# 工具函数

工具函数，


## isEqualSync

<dsb5-function-execute initel="dsb5.dsUtil" fun="dsb5.dsUtil.isEqualSync" time="1">
    <ds-prop name="params" type="array">
       ["111", "111"]
    </ds-prop>
    <ds-prop name="result" type="boolean">
       true
    </ds-prop>
</dsb5-function-execute>

<!-- isEqualSync信息 -->

## valueVerifySync

<dsb5-function-execute initel="dsb5.dsUtil" fun="dsb5.dsUtil.valueVerifySync" time="1">   
    <ds-prop name="params" type="array">
       ["111", "number"]
    </ds-prop>
    <ds-prop name="result" type="json">
       {"valid": false, "realValue": 111}
    </ds-prop>
</dsb5-function-execute>

<!-- valueVerifySync信息 -->

## debounceTimeSync

<dsb5-function-execute initel="dsb5.dsUtil" fun="dsb5.dsUtil.debounceTimeSync" time="1">   
</dsb5-function-execute>

<!-- debounceTimeSync信息 -->


## getRecurveNode

<dsb5-function-execute initel="dsb5.dsUtil" fun="dsb5.dsUtil.getRecurveNodeSync" time="1">   
</dsb5-function-execute>

<!-- getRecurveNode信息 -->


<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description | Type                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------ | --------- | ----------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debounceTimeSync` | --        | 防抖函数        | `(fun: Function, time: number) => (...arg: any[]) => void` | `(fun: Function, time: number) => {     let timer = null;     return (...arg) => {       if (timer) {         clearTimeout(timer);         timer = null;       }       timer = setTimeout(() => {         fun.apply(arg);       }, time);     };   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `isEqualSync`      | --        | 判断两个数值是否相同  | `(a: any, b: any) => boolean`                              | `(a: any, b: any) => {     if (typeof a !== typeof b) {       return false;     }     if (a === b) {       return true;     }     if (typeof a === 'object') {       return JSON.stringify(a) === JSON.stringify(b);     }      return false;   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `valueVerifySync`  | --        | 值校验         | `(value: string, type: DataType) => ValueVerifyFunReturn`  | `(value: string, type: DataType): ValueVerifyFunReturn => {     let flag: ValueVerifyFunReturn = { valid: false, realValue: null };     if (value === null \|\| value === undefined) {       return flag;     }     if (type === DataType.number) {       flag.realValue = Number(value);       flag.valid = isNaN(flag.realValue);       return flag;     }     if (type === DataType.boolean) {       try {         flag.realValue = Boolean(value);         flag.valid = false;       } catch (error) {         flag.valid = true;       }       return flag;     }     if (type === DataType.array \|\| type === DataType.json) {       try {         flag.realValue = JSON.parse(value);         if (typeof flag.realValue === 'object') {           flag.valid = false;         }       } catch (error) {         flag.valid = true;       }       return flag;     }     flag.realValue = value;     return flag;   }` |


## Methods

### `getRecurveNode<T extends GenericsNode<T>, K extends keyof T>(nodes: GenericsNode<T>[], keys: K[], childKey?: PropNodeKeys) => Promise<T[]>`

递归获取节点,筛选自己需要的属性值

#### Returns

Type: `Promise<T[]>`



### `init() => Promise<HTMLElement>`

初始化信息

#### Returns

Type: `Promise<HTMLElement>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
