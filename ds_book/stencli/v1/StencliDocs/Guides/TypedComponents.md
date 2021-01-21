<!--
 * @Date: 2021-01-21 09:57:08
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 10:19:09
-->

# 类型化的组件
用stencil生成的Web组件附带有由Stencil编译器自动生成的输入信息。使用组件时，Typescript声明提供了有力的保证：

1. 确保将适当的值作为属性传递
2. 现代IDE（例如Atom和VSCode）中的代码自动完成
3. 事件的细节
4. 组件方法的签名

此公共类型由Stencil在src/component.d.ts中自动生成。它允许在JSX(就像React)和每个组件的HTMLElement接口中使用强类型。

因为由Stencil生成的Web组件只是普通的Web组件，所以它们扩展了HTMLElement接口。对于每个组件，都有一个名为HTML{CamelCaseTag}Element的类型在全局范围内注册，这意味着开发人员不必显式地导入它们，就像HTMLElement或HTMLScriptElement不被导入一样。



```
ion-button => HTMLIonButtonElement
ion-menu-controller => HTMLIonMenuControllerElement

const button: HTMLIonButtonElement = document.queryElement('ion-button');
button.fill = 'outline';
```

重要说明：始终使用HTML{}Element接口来保存对组件的引用。

### 属性

组件属性(properties)和特性(attributes)是通过用@Prop()装饰器注解实例变量来定义的:

```
@Prop() prop: number;
```

Stencil也使用类型信息来生成Web组件类型，并在运行时自动将值转换为指定的类型:

```
@Prop() str1: string; // string attribute
@Prop() str2: 'md' | 'ios'; // string attribute
@Prop() str3 = 'defaultValue'; // string attribute

@Prop() number1: number; // numeric attribute
@Prop() number2 = 42; // numeric attribute

@Prop() boolean1: boolean; // boolean attribute
@Prop() boolean2 = true; // boolean attribute
```

### 必需的属性

在变量名之后使用!，将根据需要标记此特性(attribute)/属性(property)，通过这种方式，JSX类型将确保传递该属性。

```
@Prop() value!: string;
```