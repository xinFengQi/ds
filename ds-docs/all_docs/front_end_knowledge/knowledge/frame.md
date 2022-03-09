# 前端三大框架的学习

## Angular9
### 使用
1： attr.可以用于响应式的更新HTML attribute(html标签的属性)             
2：  <ng-container></ng-container>作为不可见的包裹元素      
3: *ngFor = "item of items;let i=index";如果使用对象作为items时，需要使用keyValues管道（pipe）      
4： <ng-content></ng-content>作为插槽分发内容
5: 懒加载，构建时会切割成新的包，会通过ajax请求加载

### 辅助工具库
1: 文档工具库 compodoc库  Dgeni库 

## Vue2.0
### 原理
1： vue不是基于字符串的模板引擎     
2：Vue为了使得DOM元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作       
3： 由于js的限制，Vue不能检测数组和对象的变化       
4: 当一个VIewModel被销毁时，所有的事件处理器都会自动被删除。你无需担心如何清理它们    

```html
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
<!-- 组件中使用v-model -->
<input
  v-bind:value="value"
  v-on:input="$emit('input', $event.target.value)"
>
```

5：v-model本质不过是语法糖，它负责监听用户的输入事件以更新数据；不会在输入法组合文件过程中得到更新，如果你想处理这个过程，请使用input事件       
6： 父级模板里的所有内容都是在父级作用域中编译的，子模板里的所有内容都是在子作用域中编译的
### 使用
1： v-bind(简写 :)指令可以用于响应式的更新HTML attribute(html标签的属性)        
2： 
.prevent修饰符告诉v-on指令对于触发的事件调用event.preventDefault()      
.stop 组件单击事件继续传播      
.capture添加事件监听器时使用事件捕获模式（内部元素触发事件先在此处理，然后才交由内部元素进行处理）
.self 只当在event.target是当前元素自身时才触发处理函数，即事件不是从内部元素触发
.once 点击事件将只会触发一次
.passive 滚动事件的默认行为将会立即触发，而不会等待onScroll完成
.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件     
.lazy v-model在每次input事件触发后将输入框的值与数据进行同步，可以添加lazy修饰符，从而转为在change事件之后进行同步      
.trim 自动过滤用户输入的首尾空白字符
.native修饰符 可以在组件的根元素上直接监听一个原生事件
3： v-bind:style使用需要添加浏览器引擎前缀的css property(css属性)前缀时，vue.js会自动侦测并添加相应的前缀       
4： 使用&lt;template>&lt;/template>作为不可见的包裹元素       
5: 存在v-else指令，必须跟在v-if或者v-else-if后面        
6： v-for用法  v-for="(item, index) in items"  v-for="(item, index) of items"； 可以使用对象作为items,但是不能保证在所有js引擎下都一致      
7：vue将被侦听的数据变更方法进行了包裹，所以它们也会触发视图更新                
    push() pop() shift() unshift() splice() sort() reverse()        
8： &lt;ul>元素中只要&lt;li>元素会被看作有效内容,所以使用&lt;li is="todo-item">&lt;/li>，与&lt;todo-item>&lt;/todo-item>实现效果相同
9：一个组件的data选项必须是一个函数     
10：子组件通过调用内建的$emit方法并传入事件名称来触发一个事件       
11: slot元素，通过插槽分发内容，存在name的attribute,使用v-slot的参数形式使用，只能添加在template上      
12： 动态组件，使可以通过&lt;component>元素加一个特殊的is attribute来实现

``` html
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>
<!-- 
    已注册组件的名字，或
    一个组件的选项对象 
-->
```

13： 为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组   
14：如果你不希望组件的根元素继承attribute，你可以在组件的选项中设置inheritAttrs:false;这个模式允许你在使用基础组件的时候更像是使用原始的html元素，而不会担心哪个元素是真正的根元素    
15: 使用<keep-alive></keep-alive>可以将失活的组件缓存起来
16：异步组件 构建时会切割成新的包，会通过ajax请求加载
```
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```
17：根实例可以通过$root属性进行访问，子组件可以从$parent属性访问父组件的实例        
18：通过ref这个attribute为子组件赋予一个ID引用      
19：内联模板，当inline-template这个特殊的attribute出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发内容      
20： 强制更新 $forceUpdate
### 概念
1: 计算属性，提供函数作为一个属性的getter函数，[可以添加setter函数]（计算属性的getter函数是没有副作用(side effect)的,这使它更易于测试和理解）;计算属性是基于它们的响应式依赖进行缓存的，只有相关响应式依赖发生改变时它们才会重新求值；      
2： key值来表达两个元素是完全独立的，不要复用它们    
3： v-for比v-if的优先级更高      
4: DOM模板及字符串模板  
5：把依赖注入看作一部分“大范围有效的prop”,祖先组件不需要知道哪些后代组件使用它提供的property,后代组件不需要知道被注入的property来自哪里     
6：程序化监听器     
7: 使用v-once来创建低开销的静态组件
### 避免
1：模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，不应该在模板表达式中试图访问用户定义的全局变量       
2： 动态参数表达式有一些语法约束，因为某些字符，如空格和引导，放在HTML attribute名里是无效的        
3： 避免使用大写字符来命名键名，浏览器会把attribute名全部强制转为小写       
4： 建议使用v-for时提供key attribute，除非遍历输出的DOM特别简单或者是依赖默认行为以获取性能的提升（如果数据项的顺序被改变，vue将不会移动Dom元素来匹配数据项的顺序，而是就地更新每个元素，并且确保每个索引位置正确渲染，这个模式是高效的，但是只适用于不依赖子组件状态或者临时Dom状态）     
5：在js中，对象和数组都是通过引用传入的，所以对一个数组或对象类型的prop来说，在子组件中改变变更这个对象或者数组本身，将会影响到父组件的状态     
6： html是大小写不敏感的（会自动转为小写），所以始终推荐使用kebab-case命名      
7：谨慎适应全局混入，因为它会影响每个单独创建的Vue实例


## React

### 原理（理念）
1：React认为渲染逻辑本质上与UI逻辑内在耦合
2： jsx语法更接近js而不是html,所以react Dom使用camelCase(小驼峰命名)来定义属性名称，而不是使用html属性名称的命名约定
### 使用

### 概念
1

### 避免


## 总结
### 理解
1: 将一段html抽象为一个对象，将标签，属性，事件描述为对象的属性，进行操作，这应该就是所谓的虚拟dom，其实就像是一个对象树；      
2： 真值与假值的概念        
## 安全

1： 请只对可信内容进行html插值，绝不要对用户提供的内容使用插值；
