/**
 * title: 单个时间选择组件
 * type: form-element
 */

import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import moment from 'moment';
@Component({
    selector: 'app-datetime-single',
    templateUrl: './datetime-single.component.html',
    styleUrls: ['./datetime-single.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatetimeSingleComponent),
            multi: true,
        },
    ],
})
export class DatetimeSingleComponent implements OnInit, ControlValueAccessor {
    value = '';
    onChange: Function = () => {};
    onTouched: Function = () => {};

    constructor() {}

    // 不可以选择的日期
    @Input() disableDate = (current: Date): boolean => {
        return differenceInCalendarDays(current, new Date()) < 0;
    };

    // 输入框默认选择项
    @Input() placeHolder: string = '请选择日期';

    // 返回的数据格式 
    @Input() format: '' | 'YYYY-MM-DD HH:mm:ss' = 'YYYY-MM-DD HH:mm:ss'

    writeValue(value: any): void {
       
        this.value = value;
        if(this.format) {
            this.onChange(moment(this.value).format(this.format));
        } else {
            this.onChange(this.value);
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

    dateChange() {
        if(this.format) {
            this.onChange(moment(this.value).format(this.format));
        } else {
            this.onChange(this.value);
        }
    }

    ngOnInit(): void {}
}
