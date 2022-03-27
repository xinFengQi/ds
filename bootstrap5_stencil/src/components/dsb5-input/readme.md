# 输入框


## 示例

1. 基础使用示例
<dsb5-webcomponent-show>
    <dsb5-input>
    </dsb5-input>
</dsb5-webcomponent-show>

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description  | Type      | Default     |
| ------------- | ------------- | ------------ | --------- | ----------- |
| `error`       | `error`       | 是否是错误        | `boolean` | `undefined` |
| `placeholder` | `placeholder` | placeholder值 | `string`  | `undefined` |
| `value`       | `value`       | 当前的值         | `any`     | `null`      |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` | 值变化的事件      | `CustomEvent<any>` |


## Dependencies

### Used by

 - [dsb5-function-params](../dsb5-function-params)

### Graph
```mermaid
graph TD;
  dsb5-function-params --> dsb5-input
  style dsb5-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*