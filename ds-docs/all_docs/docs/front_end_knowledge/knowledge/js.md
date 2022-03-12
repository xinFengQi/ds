## js学习

### 类型转换
```javascript
typeof "Bill"                 // 返回 "string"
typeof 3.14                   // 返回 "number"
typeof NaN                    // 返回 "number"
typeof false                  // 返回 "boolean"
typeof [1,2,3,4]              // 返回 "object"
typeof {name:'Bill', age:62}  // 返回 "object"
typeof new Date()             // 返回 "object"
typeof function () {}         // 返回 "function"
typeof myCar                  // 返回 "undefined" *
typeof null                   // 返回 "object"
"Bill".constructor                 // 返回 "function String()  { [native code] }"
(3.14).constructor                 // 返回 "function Number()  { [native code] }"
false.constructor                  // 返回 "function Boolean() { [native code] }"
[1,2,3,4].constructor              // 返回 "function Array()   { [native code] }"
{name:'Bill', age:62}.constructor  // 返回" function Object()  { [native code] }"
new Date().constructor             // 返回 "function Date()    { [native code] }"
function () {}.constructor         // 返回 "function Function(){ [native code] }"
```
检查具体类型        
```javascript
function isDate(myDate) {
    return myDate.constructor === Date;
}
```

### 位运算
1： 基于二进制来运算的
&  |  ^ ~ <<  >>   >>>

### 正则表达式
1： /模式（pattern）/修饰符（modifiers）        
2: RegExp对象       

### js作用域
1：如果对未声明的变量赋值，会自动升级为全局变量；（严格模式不会存在自动全局）；     
2：html的全局作用域是window,所有变量均属于window对象        
3：变量有效期始于被创建时，局部变量会在函数完成时删除，全局变量会在关闭页面时删除；     


### javaScript提升（hoisting）
1: Hoisting(提升)是javaScript将所有声明提升到当前作用域顶部的默认行为（提升到当前脚本或当前函数顶部）。     
2：let和const声明的变量不会提升     
3：<span style="color: red;">只提升声明，不提升初始化</span>        

### 严格模式
1： 在函数中声明严格模式，拥有局部作用域（只有在函数中的代码以严格模式执行）

### this关键词
1：
在方法中，this 指的是所有者对象。       
单独的情况下，this 指的是全局对象。     
在函数中，this 指的是全局对象。     
在函数中，严格模式下，this 是 undefined。       
在事件中，this 指的是接收事件的元素。       
2：
call和apply方法可以将this引用到任何对象，都可以用于将另一个对象作为参数调用对象方法

### let和const
1： 全局作用域和函数作用域，增加块作用域        
2： 两者有块作用域，在块{}内声明的变量无法从块外访问        
3： 在块中重新声明的变量不会重新声明块外的变量      
4： 定义的全局变量不属于window对象      
5：不会提升到顶端，不允许先使用后声明       

### 最佳实践
1：请始终将数值、字符串或者布尔值视作原始值而非对象，如果把这些类型声明为对象。会拖慢执行速度并产生讨厌的副作用     
2：如果调用函数缺少一个参数时，那么这个缺失参数的值会被设置undefined        
3：<span style="color: red">eval函数用于将文本作为代码来允许</span>，在所有情况下，都没有必要使用它         
4: switch使用严格比较       
5：<span style="color:red">存在处理浮点值困难,</span>请使用乘除运算
```javaScript
var x = 0.1;
var y = 0.2;
var z = x + y             // z 中的结果并不是 0.3
var z1 = (x * 10 + y * 10) / 10;       // z 中的结果将是 0.3
```
6: 在字符串中间换行是不对的，必须使用反斜杠\        
7: 不能对return换行     
<span style="color: red">8：如果某条语句是不完整的，js会通过读取下一行来完成这一条语句</span>        
9： JavaScript不会为每个代码创建新的作用域

### js性能
1： 先读取length在去循环，减少循环中的活动      
2： 减少dom的访问       
3： 减少dom的元素数量，缩减dom的规模        
4： 请不要创建不打算存储值的新变量      
5： defer属性规定了脚本应该在页面完成解析后执行，但是只适用于外部脚本       
6： 避免使用with关键词，严格模式不允许使用      

### js版本
1： js的官方名称是ECMAScript        
2: 
"use strict" 指令       
String.trim()       删除字符串两端的空白字符。      
Array.isArray() 方法检查对象是否为数组。        
Array.forEach()         
Array.map()     
Array.filter()      
Array.reduce()      
Array.reduceRight()          
Array.every()       
Array.some()        
Array.indexOf()       
Array.lastIndexOf()     
JSON.parse()        
JSON.stringify()        
Date.now() Date.now() 返回自零日期（1970 年 1 月 1 日 00:00:00:00）以来的毫秒数。       




### js的观察者们
[笔记来源](https://xiaotianxia.github.io/blog/vuepress/js/four_kinds_of_observers.html)     
1：Intersection Onserver              
    作用：监听某个元素，当它们在视口中可见的时候得到通知;       
    缺点：会对每个元素进行监听      
    用法示例：滚动的视频播放；在窗口中间开始播放        
2：Mutation Observer        
    作用：当我们想知道某个元素在某个时候发生了具体哪些变化时；      
3：Resize Observer （实验阶段）     
    作用：监听元素的尺寸变化        
    条件：              
         元素被插入或移除时触发；        
         元素display从现实变成none或相反过程时触发      
         对于不可替换内联元素不触发
         css tranform操作不触发
4：Performance Observer
    作用：用来监控各种性能相关的指标
    
### 垃圾回收算法
1：标记-清除算法  把“对象是否不再需要”简化定义为“对象是否可以获得”      
这个算法假定设置一个根对象，然后从根开始找，收集所有不能获得的对象

### 继承与原型链
1：class关键字只是语法糖，仍是基于原型的；      
2：javaScript中的对象都是位于原型链顶端的Object实现的       
3：javaScript中函数永远有一个默认原型属性       
4：检查对象是否具有自己定义的属性，而不是其原型链上的某个属性，则必须使用所有对象从Object.prototype继承的hasOwnProperty()方法，检查属性是否为undefined是不能够检查其是否存在的，该属性可能已存在，但其值恰好被设置成了undefined
5：Array.length并不总是等于数组中元素的个数，数组个数是比数组最大索引值多一的数
### 并发模型与事件循环
1：函数调用形成了一个由若干帧组成的栈       
2：对象分配在堆中       
3：NaN是Not a Number的缩写

### js基础概念
1：Object，可以简单理解成“名称-值”对(而不是键值对：现在的Map【映射表】比对象更接近键值对)