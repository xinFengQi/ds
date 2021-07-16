<!--
 * @Date: 2021-01-20 11:28:20
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 11:50:35
-->
# 输出目标的复制属性

每个输出目标都可以有自己的copy配置，该配置是一个对象数组，用于定义应复制到输出目标的生成目录的所有文件或文件夹。

## src属性

数组中的每个对象都必须包含一个src属性，可以是绝对路径、srcDir中的相对路径或glob模式。默认情况下，复制到目标的项将使用与源相同的名称。

在下面的www输出目标示例的复制配置中，构建将把整个目录从src/images复制到www/images。在这个例子中，因为没有设置srcDir属性，所以默认的源目录是src

```
  outputTargets: [
    {
      type: 'www',
      copy: [
        { src: 'images' }
      ]
    }
  ]
```

## dest属性

配置还可以提供一个可选的dest属性，它可以是绝对路径，也可以是相对于输出目标的构建目录的路径。在下面的例子中，我们将构建目录定制为public，而不是默认目录，它将src/files/fonts复制到public/static/web fonts。

```
  outputTargets: [
    {
      type: 'www',
      dir: 'public',
      copy: [
        { src: 'files/fonts', dest: 'static/web-fonts' }
      ]
    }
  ]
```
## warn属性

默认情况下，如果一个文件或目录不可用，它不会在复制任务找不到它时发出警告。要查看无法找到拷贝任务时的警告，请在拷贝配置对象中设置warn: true。

```
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: 'fonts', warn: true }
      ]
    }
  ]
```