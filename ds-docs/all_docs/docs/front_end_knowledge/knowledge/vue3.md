
# pnpm 的使用

1. 安装

```
npm install pnpm -g
```

2. 使用

```
pnpm install 包 
pnpm i 包
pnpm add 包                  // -S  默认写入dependencies
pnpm add -D                  // -D devDependencies
pnpm add -g                  // 全局安装
pnpm remove 包               //移除包
pnpm remove 包 --global      //移除全局包
```

# TypeScript

## 全局变量声明
1. 增加一个*.d.ts文件
2. 需要被tsconfig.json的include的属性包含

```
1. 新增global.d.ts文件
import { Dsb5 } from './src/interface/method.interface';
declare global {
  const dsb5: Dsb5;
}

2. tsconfig.json写入
***
 "include": [
    "src",
    "./global.d.ts"
  ],
***

```
## keyof与typeof操作符用法

1. keyof
a. TypeScript 允许我们遍历某种类型的属性，并通过 keyof 操作符提取其属性的名称;
b. 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型

2. typeof 
a. typeof 操作符用于获取变量的类型。
b. 这个操作符的后面接的始终是一个变量，且需要运用到类型定义当中







# reactive和ref的原理

1. reactive只会对对象(引用类型)进行响应式变更
2. ref对基础类型和引用类型都可以进行响应式变更，但是得需要使用.value对其进行修改