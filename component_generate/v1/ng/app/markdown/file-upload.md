## 文件上传组件

## file-upload

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| systemName | * ds0.0.2 | string | '' | 
| reviewFileUrl | 查看图片路径 | string | '' | 
| onlyRead | 只读 | boolean | false | 
| formSub | 监听Subject | Subject<FormSubject> | new Subject() | 
| fileUploadParams |  | UploadFileParams |  | 


### Output属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter<any> |  | 


