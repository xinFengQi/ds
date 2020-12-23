## 单个时间选择组件

## datetime-single

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| disableDate | 不可以选择的日期 | Function:(current: Date): boolean | (current: Date): boolean => {<br>  return differenceInCalendarDays(current, new Date()) < 0;<br>} | 
| placeHolder | 输入框默认选择项 | string | '请选择日期' | 
| format | 返回的数据格式 | ''&#124;YYYY-MM-DD HH:mm:ss | 'YYYY-MM-DD HH:mm:ss' | 


### Output属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter<any> |  | 


