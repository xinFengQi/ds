import { DataType } from '../../interface/type.interface';

export function valueVerifyFun(value: string, type: DataType) {
  if (value === null || value === undefined) {
    return false;
  }
  if (type === DataType.number) {
    return isNaN(Number(value));
  }
  if (type === DataType.boolean) {
    let flag = true;
    try {
      Boolean(value);
      flag = false;
    } catch (error) {}
    return flag;
  }
  if (type === DataType.array || type === DataType.json) {
    let flag = true;
    try {
      if (typeof JSON.parse(value) === 'object') {
        flag = false;
      }
    } catch (error) {}
    return flag;
  }
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
