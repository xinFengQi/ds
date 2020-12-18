/**
 * title: 时间期限选择组件——只用于表单
 * type: form-element
 */
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import moment from 'moment';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { CxFromModel } from '../model';

@Component({
  selector: 'app-datetime-start-end',
  templateUrl: './datetime-start-end.component.html',
  styleUrls: ['./datetime-start-end.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimeStartEndComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DatetimeStartEndComponent),
    multi: true
  }]
})
export class DatetimeStartEndComponent implements OnInit, ControlValueAccessor {

  @Input() data: CxFromModel;
  // 日期的数据格式 
  @Input() format: '' | 'YYYY-MM-DD HH:mm:ss' = 'YYYY-MM-DD HH:mm:ss'
  // 展示时间
  @Input() showTime: boolean = true;

  labelStart: string = '请输入开始时间';
  labelEnd: string = '请输入结束时间';

  startvalue: Date;
  endvalue: Date;

  currentDate = new Date();

  constructor() { }

  value = '';
  onChange: Function = () => { };
  onTouched: Function = () => { };

  ngOnInit(): void {
    this.data.dateTimeStartEndModel = {
      ...{labelStart: this.labelStart, isNoShowLabelStart: false, labelEnd: this.labelEnd, isNoShowLabelEnd: false},
      ...this.data.dateTimeStartEndModel
    }
  }

  writeValue(value: any): void {
    this.value = value;
    if(!value) {
      return;
    }
    if (this.format && this.startvalue && this.endvalue) {
      this.onChange({startTime: moment(value.startvalue).format(this.format), endTime:moment(value.endvalue).format(this.format) });
    } else {
      this.onChange({startTime:value.startvalue, endTime: value.endvalue});
    }
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

  validate(c: FormControl): { [key: string]: any } | null {
    let vResult = null;
    if (!this.startvalue && !this.endvalue) {
      return null;
    }
    if ((this.startvalue && !this.endvalue) || (!this.startvalue && this.endvalue)) {
      return { noOneInput: true }
    }
    if (this.startvalue.getTime() < this.currentDate.getTime()) {
      return { dateTimeNoToday: true }
    }

    if (this.startvalue.getTime() > this.endvalue.getTime()) {
      return { endThenStart: true }
    }


    return vResult;
  }

  // 是否展示lalel 使用占位
  getShow(item: boolean | string) {
    return { visibility: item ? 'hidden' : 'visible' };
  }

  dateChange() {
    if (this.format && this.startvalue && this.endvalue ) {
      this.onChange({startTime: moment(this.startvalue).format(this.format), endTime:moment(this.endvalue).format(this.format) });
    } else {
      this.onChange({startTime: this.startvalue, endTime: this.endvalue});
    }
  }

  startDisableDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, new Date()) < 0;
  };

  endDisableDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.startvalue) < 0;
  };


  startDateChange(event) {
    this.dateChange()
  }
  endDateChange(event) {
    this.dateChange()
  }

}
