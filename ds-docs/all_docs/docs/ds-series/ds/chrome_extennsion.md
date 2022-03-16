# chrome插件

## 功能

### v1.0.0(已完成)

1. 重写书签页，实现书签页的多电脑同步功能
2. 实现脚本快捷执行功能，应用场景：快捷登录
3. 快捷便签功能
4. 本chrome插件的管理后台
5. gitee仓库文件管理功能

### v1.0.1(计划中)

1. 博客管理功能及基于hexo博客系统和docsify文档系统的快捷构建搭载功能，
2. 基于域名过滤的自执行脚本处理


## 逻辑漏洞及设计漏洞

1. 基于自己设置的个人标识的数据隔离，这导致同库的同个人标识会导致数据混乱，


## 扩展初始化

基于dsn系列的脚手架进行初始化

### 安装方式

```
1. 安装了node, 在控制台中执行如下命令
2. npm install dfb -g
3. dsn dg -chrome
```

最后会打印出扩展的下载地址，然后在chrome扩展中加载已解压的文件夹即可；操作如下

![chrome使用方式](./imgs/chrome使用方式.jpg)



![chrome使用方式1](./imgs/chrome使用方式1.jpg)


### 前置条件

#### 使用开发者提供的公共gitee仓库

```
1. 用户授权码: 16cf2bb0ab7fa12779bfec47f2c3ee9a
2. 仓库所属空间地址: semonstrate
3. 仓库路径: demonstrate_storage
```

#### 使用自己的gitee仓库

1. 登录码云, 这个能获取到仓库所属空间地址
2. 新建一个自己的仓库, 这个能获取到仓库路径
3. 获取私人令牌, 这个能获取到用户授权码


### 基本功能

1.  开发者序言

```
1. 个人标识与设置的密码成为一个用户对
2. 一键清空则代表注销登录
3. 生成密文可以下次使用用户名及密文配对登录
4. 一键设置可以快捷使用上已开发完成功能
```

![书签页](./imgs/开发者序言展示.jpg)


### 书签功能

#### 重写书签页

1. 使用的是antDesign风格的折叠面板展示自己的书签页


![书签页](./imgs/书签页.jpg)


2. 书签设置页，设置储存书签的gitee令牌信息

![书签设置页](./imgs/书签设置页.jpg)



3. 书签管理页，可以删除储存的书签信息

### 脚本快捷执行

1. 右击快捷执行脚本

![右击菜单项](./imgs/右击菜单项.jpg)


2. 脚本管理，进行脚本的增删改查及启用禁用

![脚本管理页面](./imgs/脚本管理页面.jpg)



### gitee文件管理

1. 文件管理，进行上传和删除功能
2. 使用公共库的用户授权码则无法使用资源管理功能


![资源管理](./imgs/资源管理.jpg)