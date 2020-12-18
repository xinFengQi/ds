import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueLabel } from '../model';



interface SelectValue {
  name: number,
  contain: number,
  value: number[],
  cache?: SelectValue;
}


@Component({
  selector: 'app-judge-condition',
  templateUrl: './judge-condition.component.html',
  styleUrls: ['./judge-condition.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JudgeConditionComponent),
      multi: true,
    },
  ],
})
export class JudgeConditionComponent implements OnInit, ControlValueAccessor {
  value = '';
  onChange: Function = () => { };
  onTouched: Function = () => { };

  containArr: ValueLabel[] = [
    {
      value: 1,
      label: '包含'
    },
    {
      value: 2,
      label: '不包含'
    },
  ]


  data = {
    worktrikt: {
      value: {
        value: 'worktrikt',
        label: '工单管理'
      },
      data: [
        {
          value: 1,
          label: 1
        },
        {
          value: 2,
          label: 2
        },
        {
          value: 3,
          label: 3
        }
      ]
    },
    worktriktA: {
      value: {
        value: 'worktriktA',
        label: '工单管理A'
      },
      data: [
        {
          value: 2,
          label: 2
        }
      ]
    },
  }

  // 数据
  selectAndArr: SelectValue[] = [
    {
      name: 1,
      contain: 1,
      value: [],
      cache: null
    }
  ]

  // 数据
  selectOrArr: SelectValue[] = []


  //  
  selectContentCache = {}

  constructor() { }


  get getKeys() {
    return Object.keys(this.data)
  }

  ngOnInit(): void {

    this.selectAndArr[0].name = this.data[Object.keys(this.data)[0]].value.value
    // 初始化并赋值
    for (const key in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, key)) {
        this.selectContentCache[key] = []
        this.data[key].selectData = this.data[key].data.map(v => {
          return { ...v, hide: false }
        });
        this.data[key].alreadySelectData = [];
      }
    }
  }




  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


  addSelectAndArr() {
    this.selectAndArr.push({
      name: this.data[Object.keys(this.data)[0]].value.value,
      contain: 1,
      value: []
    })
  }

  addSelectOrArr() {
    this.selectOrArr.push({
      name: this.data[Object.keys(this.data)[0]].value.value,
      contain: 1,
      value: []
    })
  }

  // 条件类型改变
  conditionTypeChange(event, index) {
    console.log(this.selectAndArr, event, index)
    const selectData = this.data[this.selectAndArr[index].cache.name].selectData;
    const value = this.selectAndArr[index].cache.value;
    selectData.forEach((item, index) => {
      const indexValue = value.findIndex(s => s === item.value)
      if (indexValue > -1) {
        item.hide = false;
      }
    })
    this.selectAndArr[index].cache = this.selectAndArr[index];
    setTimeout(() => {
      this.selectAndArr[index].value = []
    })
  }

  conditionjudgeChange(event) {
    console.log(this.selectAndArr)
  }

  conditionContentChange(event, index) {
    let cacheValue  = [...event]
    // 最好将这个写在增加和删除的事件回调中
    const selectData = this.data[this.selectAndArr[index].name].selectData;
    this.selectAndArr.filter(v => v.name = this.selectAndArr[index].name).forEach(s => {
      cacheValue = [...s.value,...cacheValue ]
    })
    selectData.forEach((item, index) => {
      const indexValue = cacheValue.findIndex(s => s === item.value)
      if (indexValue > -1) {
        item.hide = true;
      } else {
        item.hide = false;
      }
    })
    this.selectAndArr[index].cache = this.selectAndArr[index];

    console.log(this.selectAndArr, event)
  }


}
