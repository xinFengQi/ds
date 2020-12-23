## 使用简单表单时配置表单组件

## form-component

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| formModel | 表单模型数据 | CxFromModel[] |  | 
| formElementBaseConfig | 表单元素配置 | CxFormConfig |  | 
| formElementConfig | 定制表单元素配置 | {<br>  [key: string]: RichTextParams &#124; UploadFileParams;<br>} |  | 


### Output属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| formValueChange | 表单改变检测 | EventEmitter |  | 
| ok | 表单确认返回 | EventEmitter |  | 
| cacel | 表单取消返回 | EventEmitter |  | 


