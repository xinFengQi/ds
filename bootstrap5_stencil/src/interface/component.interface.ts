import { DataType } from './type.interface';

export interface Dsb5FromModel {
  type: DataType;
  value?: any;
  name?: string;
  __isHeader?: boolean;
  __error?: boolean;
  __value?: any;
}

export interface Dsb5MenuTreeData {
  name: string;
  expend?: boolean;
  origin?: any;
  childrens?: Dsb5MenuTreeData[];
}


interface Dsb5DropdownDataLine {
  type: 'line';
  text?: string;
}
interface Dsb5DropdownDataText {
  type?: 'text';
  text: string;
}
export type Dsb5DropdownData = Dsb5DropdownDataLine | Dsb5DropdownDataText;
