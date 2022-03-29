import { DataType } from '../../interface/type.interface';

export interface ValueVerifyFunReturn {
  valid: boolean;
  realValue: any;
}

export function valueVerifyFun(value: any, type: DataType): ValueVerifyFunReturn {
  let flag: ValueVerifyFunReturn = { valid: false, realValue: null };
  if (value === null || value === undefined) {
    return flag;
  }
  if (type === DataType.number) {
    flag.realValue = Number(value);
    flag.valid = isNaN(flag.realValue);
    return flag;
  }
  if (type === DataType.boolean) {
    try {
      flag.realValue = Boolean(value);
      flag.valid = false;
    } catch (error) {}
    return flag;
  }
  if (type === DataType.array || type === DataType.json) {
    try {
      flag.realValue = JSON.parse(value);
      if (typeof flag.realValue === 'object') {
        flag.valid = false;
      }
    } catch (error) {}
    return flag;
  }
  flag.realValue = value
  return flag;
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
