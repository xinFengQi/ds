
export type PropNodeKeys = string | 'childrens';
export type GenericsNode<T> = {
  [z: string]: any | T[];
  childrens?: T[];
};


export interface ValueVerifyFunReturn {
  valid: boolean;
  realValue: any;
}



