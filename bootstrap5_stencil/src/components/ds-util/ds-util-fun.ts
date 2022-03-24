import { DataType } from '../../interface/type.interface';

export function valueVerifyFun(value: string, type: DataType): {valid: boolean, realValue: any} {
  let realValue: any = value;
  if (value === null || value === undefined) {
    return {valid: false, realValue} ;
  }
  if (type === DataType.number) {
    realValue = Number(value);
    return { valid: isNaN(realValue), realValue };
  }
  if (type === DataType.boolean) {
    let flag = { valid: true, realValue };
    try {
      flag.realValue = Boolean(value);
      flag.valid = false;
    } catch (error) {}
    return flag;
  }
  if (type === DataType.array || type === DataType.json) {
    let flag = { valid: true, realValue };
    try {
      flag.realValue = JSON.parse(value);
      if (typeof flag.realValue === 'object') {
        flag.valid = false;
      }
    } catch (error) {}
    return flag;
  }
  return {valid: false, realValue} ;

}

export function isEqualFun(a: any, b: any) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (a === b) {
    return true;
  }
  if (typeof a === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return false;
}
