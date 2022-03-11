# Catalog 目录(树结构展示)

适用平台：Native、H5

功能概述：

- 以目录的形式展示各种树结构数据

## 代码演示

### 样式由基础样式+颜色数组配置而成，请求由httpClient请求

```html
    <app-ds-catalog [config]="catalogBConfig" [reqRootParams]="reqRootParams" [styleColors]="styleColors"
      (clickNodeEmit)="clickNodeEmitB($event)" [nodeClass]="nodeClassB"></app-ds-catalog>

```

```typescript
  reqRootParams= '';
  catalogBConfig: DsNodeconfig = new DsNodeconfig(
    (id) => this.getNodeRoot(id),
    (id) => this.getNodeChildren(id));
  nodeClassA: DsNodeClass = new DsNodeClass();
  styleColors = ['#014289', '#006FAF', '#009ac0', '#00ccbc', '#60f3ab'];

  ngOnInit() {
    this.catalogBConfig.isReqRootParams = true;
    this.catalogBConfig.styleColor = true;
    this.nodeClassA.baseTreeNode = 'baseTreeNodeA';
    this.nodeClassA.baseTreeNodeLeft = 'baseTreeNodeLeftA';
    this.nodeClassA.baseTreeNodeRightRightLeft = 'baseTreeNodeRightLeftA';
    this.nodeClassA.baseTreeNodeRightRight = 'baseTreeNodeRightRightA';
    this.nodeClassA.baseTreeNodeRightRightOpen = 'baseTreeNodeRightRightOpenA';
    this.nodeClassA.leafNode = 'leafNodeA';
    this.nodeClassA.leafNodeLeft = 'leafNodeLeftA';
    this.nodeClassA.leafNodeRightLeft = 'leafNodeRightLeftA';
    this.nodeClassA.leafNodeRightRight = 'leafNodeRightRightA';
  }
  clickNodeEmitA(e) {
      // 点击节点返回
      consloe.log(e)
  }
  // 作为构造参数的函数必须返回数组
  getNodeRootParam(id) {
    const url = `${environment.getwayUrl}${environment.systemName}/base/catalog?id=${id}`;
    return this.http.get(url).pipe(
      map(v => v['body']['data'])
    );
  }
  getNodeChildren(id) {
    const url = `${environment.getwayUrl}${environment.systemName}/base/catalog?id=${id}`;
    return this.http.get(url).pipe(
      map(v => v['body']['data'])
    );
  }

```
```scss
// 对于设置的样式必须加上:host ::ng-deep
:host ::ng-deep  .baseTreeNodeA {
    display: flex;
    align-items: center;
    .baseTreeNodeLeftA {}
    .baseTreeNodeRightLeftA {
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .baseTreeNodeRightRightA {}
    .baseTreeNodeRightRightOpenA {}
}
:host ::ng-deep  .leafNodeA {
    display: flex;
    align-items: center;
    .leafNodeLeftA {}
    .leafNodeRightLeftA {}
    .leafNodeRightRightA {}
}
```

### 样式由各层样式单独配置而成，请求由httpClient请求
```html
<app-ds-catalog [config]="catalogBConfig"  
      (clickNodeEmit)="clickNodeEmitB($event)" [nodeClass]="nodeClassB"></app-ds-catalog>
```

```typescript

  catalogBConfig: DsNodeconfig = new DsNodeconfig(
    (id) => this.getNodeRoot(id),
    (id) => this.getNodeChildren(id));
  nodeClassA: DsNodeClass = new DsNodeClass();


  ngOnInit() {
    this.catalogBConfig.styleColor = false;
    this.nodeClassA.baseTreeNode = 'baseTreeNodeA';
    this.nodeClassA.baseTreeNodeLeft = 'baseTreeNodeLeftA';
    this.nodeClassA.baseTreeNodeRightRightLeft = 'baseTreeNodeRightLeftA';
    this.nodeClassA.baseTreeNodeRightRight = 'baseTreeNodeRightRightA';
    this.nodeClassA.baseTreeNodeRightRightOpen = 'baseTreeNodeRightRightOpenA';

    this.nodeClassB.treeNode = 'treeNode';
    this.nodeClassB.treeNodeOpen = 'treeNodeOpen';
    this.nodeClassB.treeNodeLeft = 'treeNodeLeft';
    this.nodeClassB.treeNodeLeftOpen = 'treeNodeLeftOpen';
    this.nodeClassB.treeNodeRightRight = 'treeNodeRightRight';
    this.nodeClassB.treeNodeRightRightOpen = 'treeNodeRightRightOpen';

    this.nodeClassA.leafNode = 'leafNodeA';
    this.nodeClassA.leafNodeLeft = 'leafNodeLeftA';
    this.nodeClassA.leafNodeRightLeft = 'leafNodeRightLeftA';
    this.nodeClassA.leafNodeRightRight = 'leafNodeRightRightA';
  }
  clickNodeEmitA(e) {
      // 点击节点返回
      consloe.log(e)
  }
  // 作为构造参数的函数必须返回数组
  getNodeRootParam() {
    const url = `${environment.getwayUrl}${environment.systemName}/base/catalog`;
    return this.http.get(url).pipe(
      map(v => v['body']['data'])
    );
  }
  getNodeChildren(id) {
    const url = `${environment.getwayUrl}${environment.systemName}/base/catalog?id=${id}`;
    return this.http.get(url).pipe(
      map(v => v['body']['data'])
    );
  }
```
```scss
:host ::ng-deep  .baseTreeNodeA {
    display: flex;
    align-items: center;
    .baseTreeNodeLeftA {}
    .baseTreeNodeRightLeftA {}
    .baseTreeNodeRightRightA {}
    .baseTreeNodeRightRightOpenA {}
}

:host ::ng-deep  .leafNodeA {
    height: 40px;
    display: flex;
    align-items: center;
    .leafNodeLeftA {}
    .leafNodeRightLeftA {}
    .leafNodeRightRightA {}
}
// 第一层样式
:host ::ng-deep  .treeNode-1 {
    height: 40px;
    display: flex;
    align-items: center;
    .treeNodeLeft-1 {}
    .treeNodeLeftOpen-1 {}
    .treeNodeRightLeft-1 {}
    .treeNodeRightLeftOpen-1 {}
    .treeNodeRightRight-1 {}
    .treeNodeRightRightOpen-1 {}
}
// 第二层样式
:host ::ng-deep  .treeNode-2 {
    height: 40px;
    display: flex;
    align-items: center;
    .treeNodeLeft-2 {}
    .treeNodeLeftOpen-2 {}
    .treeNodeRightLeft-2 {}
    .treeNodeRightLeftOpen-2 {}
    .treeNodeRightRight-2 {}
    .treeNodeRightRightOpen-2 {}
}
```

### 样式由ng-template传入而成【推荐】，数据由状态管理框架Ngrx请求

```html
    <app-ds-catalog [config]="catalogAConfig"
      (clickNodeEmit)="clickNodeEmitA($event)" [nodeTemplent]="node" [leafTemplent]="left">
    </app-ds-catalog>
    <ng-template #left let-node="node">
      <div>{{node }}</div>
    </ng-template>
    <ng-template #node let-node="node">
        <div>{{node.origin }}</div>
    </ng-template>
```

```typescript
  catalogBConfig: DsNodeconfig = new DsNodeconfig(
    (id) => this.getRoot(id),
    (id) => this.getChild(id));

  ngOnInit() {
    this.catalogAConfig.isLeafCustomization = true;
    this.catalogAConfig.isNodeCustomization = true;
  }
  clickNodeEmitA(e) {
      // 点击节点返回
      consloe.log(e)
  }

  // 作为构造参数的函数必须返回数组
  getRoot() {
    // 请求节点的selector
    return this.store.pipe(select(selectDocumentSummary));
  }

  getChild(id) {
    // 发射请求节点的action
    this.store.dispatch(DocumentGetChildren({ pid: id }));
    // 请求子节点的selector
    return this.store.select(state => {
      return state.document.entities[id] ? state.document.entities[id].summaryInfo : [];
    });
  }
```


## 在线示例[暂无]

## 参数图例
<div style="backgroud: #000">
    <img src="./component/img/catalog-01.png">
</div>


<!-- ?> 类、接口定义 -->
### [接口]DsNode
```typescript
export interface DsNode {
    // 键值
    key: number[];
    // 是否是叶子节点
    isLeaf: boolean;
    // 是否展开
    expend: boolean;
    // 孩子节点
    children?: DsNode[];
    // 样式
    class?: any;
    // 额外的数据
    origin?: any;
    // 是否初始化
    hmIsInit?: boolean;
}
```

### [配置类]DsNodeconfig

```typescript
export class DsNodeconfig {
    // 是否展开第一行
    isShowOne = true;
    // 是否异步请求
    isAnasy = true;
    // 是否只选择配置颜色及基础样式
    styleColor = true;
    // 获取根节点方法
    // tslint:disable-next-line:ban-types
    getRootMethod: (...id) => Observable<any>;
    // 获取子节点方法
    // tslint:disable-next-line:ban-types
    getChildMethod: (...id) => Observable<any>;
    // 节点完全自定义
    isNodeCustomization = false;
    // 叶子节点完全自定义
    isLeafCustomization = false;
    // 叶子节点判断字段
    leafFiled = 'adviceType';
    // 叶子节点判断值
    leafValue = 1;
    // 节点id字段
    idField = 'wid';
    // 需要展示的字段
    showField = 'title';
    // 需要展示数量的字段
    showNumField = 'adviceType';
    // 展示数量的位置
    numPosition: 'space-between' | 'flex-start' = 'space-between';

    // 需要子节点的字段（在同步请求是使用）
    showChildrenField = 'title';
    // 根节点请求参数是否携带参数
    isReqRootParams = false;
    // 请求过的是否缓存（在同步请求时必须设置缓存）
    isCache = true;
    // 允许多层展开
    isShowAllExpend = false;
    constructor(getRootMethod: (...id) => Observable<any>, getChildMethod: (...id) => Observable<any>) {
        this.getRootMethod = getRootMethod;
        this.getChildMethod = getChildMethod;
    }

}
```
| 属性   | 说明 | 类型        | 默认值 |
| -------- | ------ | ------------- | ------ |
| isShowOne | 是否展开第一行 | boolean |   true     |
| isAnasy | 是否异步请求 | boolean |    true    |
| styleColor | 是否只选择配置颜色及基础样式 | boolean |   true     |
| getRootMethod | 获取根节点方法 | (...id) => Observable<any> |        |
| getChildMethod | 获取子节点方法 | (...id) => Observable<any> |        |
| isNodeCustomization | 节点完全自定义 | boolean |     false   |
| isLeafCustomization | 叶子节点完全自定义 | boolean |   false     |
| leafFiled | 叶子节点判断字段(根据后端设置) | string |       |
| leafValue | 叶子节点判断值(根据后端设置) | string |        |
| idField | 节点id字段(根据后端设置) | string |        |
| showField | 需要展示的字段(根据后端设置) | string |        |
| showNumField | 需要展示数量的字段(根据后端设置) | string |        |
| numPosition | 展示数量的位置 | 'space-between' 'flex-start' |     'space-between'   |
| showChildrenField | 需要子节点的字段（在同步请求是使用） | string |        |
| isReqRootParams | 根节点请求参数是否携带参数 | boolean |   false     |
| isCache | 请求过的是否缓存（在同步请求时必须设置缓存） | boolean |   true     |
| isShowAllExpend | 允许多层展开 | boolean |    false    |

### [配置类]DsNodeClass
```typescript
export class DsNodeClass {

    // 在调用是写样式文件一定需要加 :host ::deep
    // 其中带open是打开时的样式
    // treenode 为整个节点样式
    // treeNodeleft 为左样式 treenoderightleft 为中间样式 treenoderightright 为右样式

    // 基础样式
    baseTreeNode = 'baseTreeNode';
    baseTreeNodeLeft = 'baseTreeNodeLeft';
    baseTreeNodeRightRight = 'baseTreeNodeRightRight';
    baseTreeNodeOpen = 'baseTreeNodeOpen';
    baseTreeNodeLeftOpen = 'baseTreeNodeLeftOpen';
    baseTreeNodeRightRightOpen = 'baseTreeNodeRightRightOpen';
    baseTreeNodeRightRightLeft = 'baseTreeNodeRightRightLeft';
    baseTreeNodeRightRightLeftOpen = 'baseTreeNodeRightRightLeftOpen';

    baseTreeNodeRightRightRight = 'baseTreeNodeRightRightRight';
    baseTreeNodeRightRightRightOpen = 'baseTreeNodeRightRightRightOpen';
    // 存在变化样式，写时在后面加 -n
    treeNode = 'treeNode';
    treeNodeOpen = 'treeNodeOpen';
    treeNodeLeft = 'treeNodeLeft';
    treeNodeLeftOpen = 'treeNodeLeftOpen';

    treeNodeRightRightLeft = 'treeNodeRightRightLeft';
    treeNodeRightRightLeftOpen = 'treeNodeRightRightLeftOpen';
    treeNodeRightRightRight = 'treeNodeRightRightLeft';
    treeNodeRightRightRightOpen = 'treeNodeRightRightLeftOpen';

    treeNodeRightRight = 'treeNodeRightRight';
    treeNodeRightRightOpen = 'treeNodeRightRightOpen';

    // 叶子节点，不会有变化
    leafNode = 'leafNode';
    leafNodeLeft = 'leafNodeLeft';
    leafNodeRightLeft = 'leafNodeRightLeft';
    leafNodeRightRight = 'leafNodeRightRight';
}   
```
