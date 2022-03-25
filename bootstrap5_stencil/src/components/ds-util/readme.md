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

| Property          | Attribute | Description | Type                                                                     | Default                                                                            |
| ----------------- | --------- | ----------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `isEqualSync`     | --        | 判断两个数值是否相同  | `(a: any, b: any) => boolean`                                            | `(a: any, b: any) => {     return isEqualFun(a, b);   }`                           |
| `valueVerifySync` | --        | 值校验         | `(value: string, type: DataType) => { valid: boolean; realValue: any; }` | `(value: string, type: DataType) => {     return valueVerifyFun(value, type);   }` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
