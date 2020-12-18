/**
 * title: 同行输入组组件
 * type: form-element
 */

import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputGroupModel, ValueLabel } from '../model';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputGroupComponent),
      multi: true,
    },
  ],
})
export class InputGroupComponent implements OnInit, ControlValueAccessor {
  value = '';
  onChange: Function = () => { };
  onTouched: Function = () => { };

  constructor() { }

  // 输入框默认选择项
  @Input() placeHolder: string = '';


  // value值
  inputValue = ''
  // 前面model值
  beforeValue = ''
  beforeArr: ValueLabel[] = [
  ]
  // 后面的model值
  afterValue = ''
  afterArr: ValueLabel[] = [
  ]

  @Input() inputGroupModel: InputGroupModel;

  writerFn: (value: any) => string  = (value: any) => { return value }; 

  changeFn: (value: any) => string  = (value: any) => { return `${this.beforeValue}-${this.inputValue}-${this.beforeValue}` }; 

  writeValue(value: any): void {
    this.value = this.inputGroupModel.writerFn(value);
    this.onChange(this.value);
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

  inputChange(value: string) {
    this.valueChange(value);
  }
  inputBeforeChange(value: string) {
    this.valueChange(value);
  }
  inputAfterChange(value: string) {
    this.valueChange(value);
  }

  valueChange(value: string) {
    this.onChange(this.inputGroupModel.changeFn(value))
  }

  ngOnInit(): void { 
    this.inputGroupModel = {
      ...{ beforeArr: this.beforeArr, afterArr: this.afterArr, writerFn: this.writerFn, changeFn: this.changeFn },
      ...this.inputGroupModel
    }
    if(this.inputGroupModel.beforeArr.length > 0) {
      this.beforeValue = this.inputGroupModel.beforeArr[0].value;
    }
    if(this.inputGroupModel.afterArr.length > 0) {
      this.afterValue = this.inputGroupModel.afterArr[0].value;
    }
  }

}
