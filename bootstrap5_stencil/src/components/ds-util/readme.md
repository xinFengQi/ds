# 工具函数

工具函数，因为要做懒加载，所以所有的方法都是异步函数

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute | Description | Type                                         | Default                                                                            |
| ----------------- | --------- | ----------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| `isEqualSync`     | --        |             | `(a: any, b: any) => boolean`                | `(a: any, b: any) => {     return isEqualFun(a, b);   }`                           |
| `valueVerifySync` | --        |             | `(value: string, type: DataType) => boolean` | `(value: string, type: DataType) => {     return valueVerifyFun(value, type);   }` |


## Methods

### `isEqual(a: any, b: any) => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `valueVerify(value: string, type: DataType) => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
