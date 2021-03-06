## 事件分发系统

### 描述
#### 功能
主要是做一个事件分发系统，有未来的数据中心管理数据，此系统只管收发数据及延时收发消息
#### 架构
主要是后端功能， express加socket.js

### 阶段里程碑

#### v1 

##### 开始时间
2020-01-17

##### 开发思路

1. 注册事件

```
必须和权限对应起来，得和登陆系统结合起来？
历史积压消息，不在线如何得到消息？

广播事件，系统级别
        模块级别
        部门级别
一对一事件            是否定时
一对多事件
// 事件结构体
{
    eventName: '事件名',
    type: 'global system modules department personal',

}

// 发送事件结构体
{
    eventName: '事件名',
    delay： ‘延迟时间，单位ms’,
    socketId: {
        systemId: '系统级别的id',
        modulesId: '模块级别的id',
        departmentId: '部门级别的id',
        personalId: '一对一的socketId'
    },
    data: any;
}
```



### 使用