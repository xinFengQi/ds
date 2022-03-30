import { DataType } from './type.interface';

export interface Dsb5FromModel {
  type: DataType;
  value: any;
  __error?: boolean;
  __value?: any;
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
