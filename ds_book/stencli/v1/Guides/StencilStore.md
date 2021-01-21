<!--
 * @Date: 2021-01-21 11:34:39
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 11:48:55
-->
# @stencil/store

Store是模板核心团队的轻量级共享状态库。它实现了一个简单的键/值映射，可以在必要时有效地重新渲染组件。

1. 轻量级
2. 零依赖关系
3. 简单的API，如响应式映射
4. 最佳的性能

## 安装

```
npm install @stencil/store --save-dev
```

## 例子
 store.ts：

```
import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  clicks: 0,
  seconds: 0,
  squaredClicks: 0
});

onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});

export default state;
```

component.tsx：

```
import { Component, h } from '@stencil/core';
import state from '../store';

@Component({
  tag: 'app-profile',
})
export class AppProfile {

  componentWillLoad() {
    setInterval(() => state.seconds++, 1000);
  }

  render() {
    return (
      <div>
        <p>
          <MyGlobalCounter />
          <p>
            Seconds: {state.seconds}
            <br />
            Squared Clicks: {state.squaredClicks}
          </p>
        </p>
      </div>
    );
  }
}

const MyGlobalCounter = () => {
  return (
    <button onClick={() => state.clicks++}>
      {state.clicks}
    </button>
  );
};
```

## API

### createStore<T>(initialState)

使用给定的初始状态创建一个新的store。该类型是从initialState推断出来的，或者可以作为泛型类型T传递。

返回store是具有以下属性的对象。

### store.state

状态对象是代理的，也就是说，你可以直接获取和设置属性，当状态对象改变时，Store会自动处理组件的重新呈现。

注意：IE11不支持Proxy对象（甚至不支持polyfill），因此，如果要支持IE11，则需要使用API的store.get和store.set方法。

### store.on(event, listener)

为某个操作添加一个监听器以执行特定操作。

### store.onChange(propName, listener)

添加一个在特定属性更改时调用的侦听器。

### store.get(propName)

从store中获取属性的值。

### store.set(propName, value)
在store中设置属性的值。

### store.reset()

将store重置为初始状态。

### store.use(...subscriptions)

使用store中给定的订阅。订阅是定义一个或多个属性get、set或reset的对象。

## 测试

像任何全局状态库一样，应在每个规范测试之间重置状态。在beforeEach钩子中使用dispose()API 。

```
import store from '../store';

beforeEach(() => {
  store.dispose();
});
```

