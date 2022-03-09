# DatePicker 日期选择器

适用平台：Native、H5

功能概述：

- 选择日期，返回[年， 月，日，时，分，秒]数组

## 代码演示

### 日期选择域(组件)

```html
   <app-ds-date-picker [config]="config" [startOpts]="startOpts" [inputOpts]="inputOpts" [dateType]="dateType"
    [endOpts]="endOpts" (outTime)="outTime($event)"></app-ds-date-picker>
```

```typescript
  newDate = new Date();
  config = new DsDateConfig();
  startOpts = new DsDate();
  inputOpts = new DsDate(this.newDate.getFullYear(), this.newDate.getMonth() + 1,
    this.newDate.getDate(), this.newDate.getHours(), this.newDate.getMinutes(), this.newDate.getSeconds());
  endOpts = new DsDate(this.newDate.getFullYear(), this.newDate.getMonth() + 1,
    this.newDate.getDate(), this.newDate.getHours(), this.newDate.getMinutes(), this.newDate.getSeconds());
  dateType = 'yyyy-MM-dd';
  outTime(e) {
    this.dateA = this.dsState.textRepalce('yyyy-MM-dd', e);
  }
  constructor(
    private dsState: DsComponentCtrlService,
  ) { }

```

### 日期选择框Modal(服务)
```html
<ion-button (click)="showDatePicker()">点击选择时间</ion-button>
```

```typescript
  config = new DsDateConfig();
  startOpts = new DsDate();
  showDatePicker() {
    this.config.okText = new DsDateText('ok', '#fff', '0.8rem');
    this.config.cacelText = new DsDateText('cacel', '#fff', '0.8rem');
    this.dsState.createDsDatePicker(
      {
        config: this.config,
        inputOpts: this.inputOpts,
        dateType: 'yyyy-MM-dd hh:mm:ss'
      }).then(
        v => {
          if (v.isOk) {
            console.log('点击了确定', v);
            this.dateB = this.dsState.textRepalce('yyyy-MM-dd hh:mm:ss', v.time);
          } else {
            console.log('点击了取消', v);
          }
        });
  }

```

### 日期选择框(指令)
```html
 <span appDsDatePicker  [config]="config" [startOpts]="startOpts" [inputOpts]="inputOpts"
    [endOpts]="endOpts"  [dateType]="'hh:mm:ss'" (outTime)="outTimeA($event)">这个span携带指令</span>
```

```typescript
   newDate = new Date();
  config = new DsDateConfig();
  startOpts = new DsDate();
  inputOpts = new DsDate(this.newDate.getFullYear(), this.newDate.getMonth() + 1,
    this.newDate.getDate(), this.newDate.getHours(), this.newDate.getMinutes(), this.newDate.getSeconds());
  endOpts = new DsDate(this.newDate.getFullYear(), this.newDate.getMonth() + 1,
    this.newDate.getDate(), this.newDate.getHours(), this.newDate.getMinutes(), this.newDate.getSeconds());
  outTime(e) {
    this.dateA = this.dsState.textRepalce('hh:mm:ss', e);
  }
```


## 在线示例[暂无]

## 参数图例

<div style="backgroud: #000">
    <img src="./component/img/datePicker-01.png">
</div>

## API

| 属性   | 说明 | 类型        | 默认值 |
| -------- | ------ | ------------- | ------ |
| config | 配置项 | DsDateConfig  |   new DsDateConfig()     |
| startOpts | 选择最开始时间 | DsDate |    new DsDate()   |
| inputOpts     | 选择时间  | DsDate |  new DsDate(this.newDate.getFullYear(), this.newDate.getMonth() + 1, this.newDate.getDate(), this.newDate.getHours(), this.newDate.getMinutes(), this.newDate.getSeconds()); |
| endOpts     | 选择最大时间  | DsDate      |  new DsDate(this.newDate.getFullYear(), this.newDate.getMonth() + 1,this.newDate.getDate(), this.newDate.getHours(), this.newDate.getMinutes(), this.newDate.getSeconds());  |
| dateType     | 选择时间类型  |  'yyyy-MM-dd hh：mm：ss', 'yyyy-MM-dd' , 'hh：mm：ss' , 'yyyy-MM-dd hh：mm' , 'hh：mm' |    'yyyy-MM-dd'    |
| outTime()     | 点击确认回调  | new EventEmitter<string[]>()     |        |


?> 类、接口定义
### [实体类]DsDate
```typescript
export class DsDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  /**
   * Creates an instance of DsDate.
   * @param {*} [year] 年(可选)
   * @param {*} [month] 月(可选)
   * @param {*} [day] 日(可选)
   * @param {*} [hour] 时(可选)
   * @param {*} [minute] 分(可选)
   * @param {*} [second] 秒(可选)
   * @memberof DsDate
   */
  constructor(year?: number, month?: number, day?: number,
    hour?: number, minute?: number, second?: number) {
    this.year = year ? year : 2000;
    this.month = month ? month : 1;
    this.day = day ? day : 1;
    this.hour = hour ? hour : 0;
    this.minute = minute ? minute : 0;
    this.second = second ? second : 0;
  }
}
```

### [配置类]DsDateConfig

```typescript
export class DsDateConfig {

  // 默认字体大小
  defultFontSize = '0.933rem';
  // 选择字体大小
  selectFontSize = '1.2rem';
  // 层数
  pliesNum = 5;
  // 取消字体
  cacelText = new DsDateText('取消', '#248D6D');
  // 确认字体
  okText = new DsDateText('确认', '#248D6D');
  // 标题字体
  titleText = new DsDateText('日期', '#2B2A2A');
  constructor() {

  }

```

### [配置类]DsDateText
```typescript
export class DsDateText {
  color = '#2B2A2A';
  content = '';
  fontsize = '4.5333vw';
  constructor(content?: string, color?: string, fontsize?: string) {
    this.color = color;
    this.content = content;
    this.fontsize = fontsize;
  }
}

```
