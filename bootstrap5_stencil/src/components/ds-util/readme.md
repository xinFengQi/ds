# 工具函数

工具函数，

## isEqual

<!-- isEqual信息 -->

## valueVerify

<!-- valueVerify信息 -->



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute | Description | Type                                                                     | Default                                                                            |
| ----------------- | --------- | ----------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `isEqualSync`     | --        | 判断两个数值是否相同  | `(a: any, b: any) => boolean`                                            | `(a: any, b: any) => {     return isEqualFun(a, b);   }`                           |
| `valueVerifySync` | --        | 值校验         | `(value: string, type: DataType) => { valid: boolean; realValue: any; }` | `(value: string, type: DataType) => {     return valueVerifyFun(value, type);   }` |


## Methods

### `isEqual(a: any, b: any) => Promise<boolean>`

判断两个数值是否相同

#### Returns

Type: `Promise<boolean>`



### `valueVerify(value: string, type: DataType) => Promise<{ valid: boolean; realValue: any; }>`

值校验

#### Returns

Type: `Promise<{ valid: boolean; realValue: any; }>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
