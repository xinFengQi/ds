## 时间期限选择组件——只用于表单

## datetime-start-end

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| data |  | CxFromModel |  | 
| format | 日期的数据格式 | ''&#124;YYYY-MM-DD HH:mm:ss | 'YYYY-MM-DD HH:mm:ss' | 
| showTime | 展示时间 | boolean | true | 


### Output属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter<any> |  | 


