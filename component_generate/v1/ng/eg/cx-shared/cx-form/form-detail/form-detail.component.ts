/**
 * title: 使用简单表单时预览组件
 * type: form
 */

import { Component, Input, OnInit } from '@angular/core';
import { CxFromModel, ValueLabel } from '../model';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.less']
})
export class FormDetailComponent implements OnInit {


  // 表单模型数据
  @Input() formModel: CxFromModel[]
  
  constructor(
  ) { }

  ngOnInit(): void {
  }


  getShowContent(value: string, jsonData: ValueLabel[]) {
    return jsonData.find(v => v.value === value).label
  }

  
  // 是否展示lalel 使用占位
  getShow(item: string) {
    return { visibility: item ? 'hidden' : 'visible' }
  }

}
