# 工具函数

工具函数，


<ds-script >
        dsb5.dsUtil.isEqualSync
</ds-script>

## isEqualSync

<dsb5-function-execute fun="dsb5.dsUtil.isEqualSync" time="1">
    <ds-prop name="params" type="array">
       ["111", "111"]
    </ds-prop>
    <ds-prop name="result" type="boolean">
       true
    </ds-prop>
</dsb5-function-execute>

<!-- isEqualSync信息 -->

## valueVerifySync

<dsb5-function-execute fun="dsb5.dsUtil.valueVerifySync" time="1">   
    <ds-prop name="params" type="array">
       ["111", "number"]
    </ds-prop>
    <ds-prop name="result" type="json">
       {"valid": false, "realValue": 111}
    </ds-prop>
</dsb5-function-execute>

<!-- valueVerifySync信息 -->

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description | Type                                                       | Default                                                                                                                                                                                                                                               |
| ------------------ | --------- | ----------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debounceTimeSync` | --        | 防抖函数        | `(fun: Function, time: number) => (...arg: any[]) => void` | `(fun: Function, time: number) => {     let timer = null;     return (...arg) => {       if (timer) {         clearTimeout(timer);         timer = null;       }       timer = setTimeout(() => {         fun.apply(arg);       }, time);     };   }` |
| `isEqualSync`      | --        | 判断两个数值是否相同  | `(a: any, b: any) => boolean`                              | `(a: any, b: any) => {     return isEqualFun(a, b);   }`                                                                                                                                                                                              |
| `valueVerifySync`  | --        | 值校验         | `(value: string, type: DataType) => ValueVerifyFunReturn`  | `(value: string, type: DataType): ValueVerifyFunReturn => {     return valueVerifyFun(value, type);   }`                                                                                                                                              |


## Methods

### `init() => Promise<HTMLElement>`

初始化信息

#### Returns

Type: `Promise<HTMLElement>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
