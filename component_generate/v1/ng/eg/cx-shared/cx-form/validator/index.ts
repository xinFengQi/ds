import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';

// 自定义校验器  时间不超过今天
function dateTimeNoToday(): ValidatorFn {
    const dateTime = new Date().getTime();
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!control.value) {
            return { dateTimeNoToday: true };
        }
        const date = new Date(control.value);
        if (dateTime > date.getTime()) {
            return { dateTimeNoToday: true };
        }
        return null;
    };
}


export const cxValidator = {
    dateTimeNoToday,
    maxLength: Validators.maxLength,
};
