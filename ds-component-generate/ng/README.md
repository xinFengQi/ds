## component_generate -v1
主要实现angualr的组件输入输出函数, 文档描述生成

### Demo

```
https://xinfengqi.github.io/ds/component_generate/v1/ng/dfb_dist/index.html
```

### 使用说明

#### 安装
```
npm install -g dfbng
```

#### 功能

1. 针对angular中组件进行收集，生成文档

#### 固定规则

1. 读取组件.ts文件，文件必须以下列方式开头才会被识别为组件

```
/**
 * type: 类型一:类型二:类型三
 * name: '组件名'
 */
```
2. 读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并

### 代码结构

#### 代码说明
1. 使用babel进行ast生成
2. 利用访问者模式进行ast解析，生成自己想要的数据
3. 通过解析的数据生成markdown，html, json,vue项目等文件
4. 使用npm link进行npm全局测试
5. 使用npm发布，进行安装，名为dfbng

#### 代码限制
1. 暂时只允许单例编译