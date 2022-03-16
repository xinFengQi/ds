
# dsn配置


## 介绍

1. 主要是用于dsn的配置命令模块
2. 主要用于dsn的使用及功能完善


## 帮助

```
dsn dc --help

```

## 基础命令

```
dsn的配置命令集合,可使用--help查看细节

Options:
  -init, --i             初始化配置文件
  -update, --u           更新配置文件
  -clear                 清除dsn的所有缓存
  --stencil              加入配置文件生成的可选项
  --gitee                加入配置文件生成的可选项
  -token <access_token>  写入gitee的配置
  -repo <repo>           写入gitee的配置
  -owner <owner>         写入gitee的配置
  -h, --help             display help for command
```


## -init(初始化配置)

用于生成dsn的相关配置，用户快捷操作

1. 配置的副命令

```
--stencil 用于生成stencil编译工具的配置
--gitee 用于生成需要gitee工具功能的配置
```

### 说明
1. 目前使用的是json配置，后期加入可以使用js文件作为配置，这样可以加一些自定义函数执行，对于插件功能友好

## -update(更新配置文件)

用于更新本目录配置文件，暂未开发

1. 配置的副命令同init

## -token,-repo,-owner(全局化配置)

全局化配置一些数据，正常的读取逻辑是先本目录，后全局，如果都没有则会抛出异常

1. token: gitee的授权令牌，有这个才能调用gitee接口
2. repo: gitee的仓库名
3. owner：gitee的个人地址名


## -clear(清除缓存)

清除dsn在运行中产生的缓存

1. 目前在下载文件时会产生缓存，
