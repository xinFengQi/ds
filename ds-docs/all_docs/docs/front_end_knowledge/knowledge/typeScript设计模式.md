# 设计模式原则

### 开闭原则：ocp原则
 1. 软件中的对象(类，模块，函数等)应该对于扩展是开放的，但是对于修改是封闭的
 2. 意味着一个实体是允许在不改变它的源代码的前提下变更它的行为
 

 #### 前端释义
 1. 在前端中，对于组件，方法应当对于扩展是开发的，但是对于修改是封闭的
 2. 一个组件，方法应该可以在不修改它的源代码的前提下变更它的行为
 3. 重点： 组件设计中，应当可以在不修改它的源代码的情况下，允许被修改事件，方法且不影响其他的调用关系

 ### 里氏替换原则：LSP原则
1. 任何基类可以出现的地方，子类一定可以出现
2. 里氏替换原则是继承复用的基石，只有当衍生类可以替换掉基类，软件单位的功能不受到影响，基类才能被真正的复用，而衍生类也能够在基类的基础上增加新的行为
3. 是对开-闭原则的补充

#### 前端释义
1. 组件应当可以被任意地方引用，如果在ng中，则允许被引入组件的模块的模块所引用
2. 对于二次实现的组件,应当兼容所继承组件的所有参数及事件，但是二次实现的组件可以有自己独特的事件及参数：参考于： 组件的装饰器模式的实现

 ### 依赖倒置原则
1. 程序要依赖于抽象接口，不要依赖于具体实现
2. 对抽象进行编程，不要多实现进行编程

#### 前端释义
1. 因为前端本身是js,目前以组件来对应类的实现，所以对于抽象的概念非常的模糊
2. 所以此释义暂时需要思考思考

### 合成复用原则(组合/聚合复用原则)： CRP原则
1. 尽量使用对象组合，而不是继承来达到复用的目的
2. 在一个新的对象里通过关联关系(包括组合关系和聚合关系)来使用一些已有的对象，使之成为新对象的一部分；
3. 新对象通过委派调用已有对象的方法达到复用的目的
4. 通过继承来进行复用的主要问题在于继承复用会破坏系统的封装性，因为继承会将基类的实现细节暴露给子类，由于基类的内部细节通常对子类来说是可见的，所以这种复用又称为“白箱”复用，如果基类发生改变，那么子类的实现也不得不发生改变


#### 前端释义
1. 前端组件本身就是天生的合成复用原则
2. 但是对于目前的复用都是"白箱"复用，子组件被改变，那么复用子组件会天生的改变，甚至与不能被使用
3. 目前的前端编译基本上都有这种约束，针对参数及事件的约束，所以不能被使用的情况基本很少：所以web组件的天然弱势就出来了，除非加生态
4. 类继承组件与hook函数组件的优缺点思考，同样也是一个问题


### 迪米特法则(最小知识原则： LOD)

1. 一个类对于其他类知道的越少越好
2. 一个对象应当对其他对象有尽可能少的了解，只和朋友通信，不和陌生人说话
3. 初衷在于降低类之间的耦合，由于每个类尽量减少其他类的依赖
4. 如果真的需要建立联系，也希望通过它的友元类来转达
5. 狭义：如果两个类不必彼此直接通信，那么这两个类就不应当发生直接的相互作用，如果其中一个类需要调用另一个类的某一个方法的话，可以通过第三者转发这个调用
6. 广义：优先考虑将一个类设置成不变类，尽量降低一个类的访问权限，尽量降低成员的访问权限

#### ”朋友圈“的确定
满足一下的条件之一则是"朋友"
1. 当前对象本身
2. 以参量(形参)形式传入到当前对象方法中的对象
3. 当前对象的实例变量直接引用的对象
4. 当前对象的实例变量如果是一个聚集，那么聚集中的元素也都是朋友
5. 当前对象所创建的对象

#### 缺点
1. 在系统中造出了大量的小方法，这些方法仅仅是传递间接的调用，与系统的业务逻辑无关
2. 遵循之间的迪米特法则会是一个系统的局部设计简化。


####  前端释义
1. 调用组件的模块并不需要组件的具体实现，只需要知道组件所暴露出来的东西即可
2. 组件和组件之间是天生的调用模式，所以不存在友元组件概念
3. 但是对于功能，页面来说，多个组件的组合体就会出现这种友元概念


### 单一职责原则(SRP)
1. 一个类应该只有一个发生变化的原因
2. 职责是指类变化的原因。如果一个类有多于一个的动机被改变，那么这个类就具有多于一个职责



# 中介者模式 
```

/**
 * 中介者模式(调停模式)
 * 1. 定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，且可以独立地改变它们的交互
 */

/**
 * 优点：
 * 1. 类之间各司其职，符合迪米特法则
 * 2. 降低对象之间的耦合性，使得对象易于独立地被复用
 * 3. 将对象间的一对多关联转变为一对一关联，提高系统的灵活性，使得系统易于维护和扩展
 * 
 */

/**
 * 缺点：
 * 中介者模式将原本多个对象直接的相互依赖变成中介者和多个同事类的依赖关系，当同事类越多时，
 * 中介者就会越臃肿，变得复杂且难以维护
 * 
 */

/**
 * 角色：
 * 1. 抽象中介者角色：它是中介者的接口，提供了同事对象注册与转发同事对象信息的抽象方法
 * 2. 具体中介者角色：实现中介者接口，定义一个数组来管理同事对象，协调各个同事角色之间的交互关系，因此它依赖于同事角色
 * 3. 抽象同事类角色：定义同事类的接口，保存中介者对象，提高同事对象交互的抽象方法，实现所有相互影响的同事类的公共功能
 * 4. 具体同事类角色：抽象同事类的实现者，当需要与其他同事对象交互时，由中介者对象负责后续的交互
 *                  
 */


let aa = new Set();

/** 抽象中介者 */
abstract class Mediator {
    abstract register(colleage: Colleague): void;
    abstract relay(cl: Colleague): void;
}

/** 具体中介者 */ 
class concreteMediator extends Mediator {

    private conlleagues = new Set<Colleague>()

    // 注册同事类
    register(colleage: Colleague): void {
        if(!this.conlleagues.has(colleage)) {
            this.conlleagues.add(colleage);
            colleage.setMedium(this); // 绑定中介类
        }
    }
    
    relay(cl: Colleague) {
        this.conlleagues.forEach(v => {
            if(v === cl) {
                cl.receive();
            }
        })
    }
    
}


/** 抽象同事类 */
abstract class Colleague{

    protected mediator: Mediator | null = null;

     setMedium(mediator: Mediator) {
        if(!this.mediator) {
            this.mediator = mediator;
        }
    }

    abstract receive(): void;
    abstract send(): void;
}

/** 具体同事类1 */
class concreteColleaguel extends Colleague {
    receive(): void {
        console.log('具体同事类1收到请求')
    }
    send(): void {
        console.log('具体同事类1发出请求');
        if(this.mediator) {
            this.mediator.relay(this);  // 请中介者转发
        }
    }
    
}

/** 具体同事类2 */
class concreateColleague2 extends Colleague {
    receive(): void {
        console.log('具体同事类2收到请求')
    }
    send(): void {
        console.log('具体同事类2发出请求');
        if(this.mediator) {
            this.mediator.relay(this);  // 请中介者转发
        }
    }
}

/** 测试 */
const ConcreteMediator = new concreteMediator();

const colleagu1 = new concreteColleaguel();
const colleagu2 = new concreateColleague2();
ConcreteMediator.register(colleagu1);
ConcreteMediator.register(colleagu2);
colleagu1.send();
console.log('-----------------------')
colleagu2.send();

/**
 * 应用场景
 * 1. 当对象之间存在复杂的网状结构关系而导致依赖关系混乱且难以复用时
 * 2. 当想创建一个运行于多个类之间的对象，又不想生成新的子类时
 */

/**
 * 扩展：
 * 简化中介者模式
 * 1. 不定义中介者接口，把具体中介者对象实现成为单例
 * 2. 同事对象不持有中介者，而是在有需要的时候直接获取中介者对象并调用
 */

class SimpleMediator {
    private static smd = new SimpleMediator();
    private colleagues = new Set<SimpleColleague>();

    static getMedium() {
        return this.smd;
    }

    register(cplleague: SimpleColleague) {
        if(!this.colleagues.has(cplleague)) {
            this.colleagues.add(cplleague);
        }
    }

    relay(sc1: SimpleColleague) {
        this.colleagues.forEach(v => {
            if(v ===sc1) {
                v.receive();
            }
        })
    }
}

/** 抽象同事类 */
interface SimpleColleague {
    receive(): void;
    send(): void;
}

/** 具体同事类 */
class SimpleConcreteColleague1 implements SimpleColleague {
    
    constructor() {
        const smd = SimpleMediator.getMedium();
        smd.register(this);
    }
    
    receive(): void {
        console.log('具体同事类1:收到请求...')
    }
    send(): void {
        const smd = SimpleMediator.getMedium();
        console.log('具体同事类1: 发出请求...');
        smd.relay(this);
    }
    
}

class SimpleConcreteColleague2 implements SimpleColleague {
    
    constructor() {
        const smd = SimpleMediator.getMedium();
        smd.register(this);
    }
    
    receive(): void {
        console.log('具体同事类2:收到请求...')
    }
    send(): void {
        const smd = SimpleMediator.getMedium();
        console.log('具体同事类2: 发出请求...');
        smd.relay(this);
    }
    
}

/** 测试 */
console.log('------简单中介者模式----')
const simpleConcreteColleague1 = new SimpleConcreteColleague1();
const simpleConcreteColleague2 = new SimpleConcreteColleague2();

simpleConcreteColleague1.send();
console.log('----------')
simpleConcreteColleague2.send();

```


# 享元模式 
```

/**
 * 享元模式
 * 1. 通过共享技术来有效地支持大量细粒度对象的复用
 * 2. 它通过共享已经存在的对象来减少需要创建的对象数量，避免大量相似类的开销，从而提高系统资源的利用率
 */

/**
 * 优点：
 * 1. 相同对象只保存一份，降低了对象的数量，从而降低了系统中细粒度对象带给内存的压力
 * 
 */
/**
 * 缺点：
 * 1. 为了使对象可以共享，需要将一些不能共享的状态外部化，这将增加程序的复杂性
 * 2. 读取享元模式的外部状态会使得运行时间变长
 * 
 */
/**
 * 角色：
 * 1. 抽象享元角色: 所有具体享元类的基类，为具体享元规范需要实现的公共接口，
 *               非享元的外部状态以参数的形式通过方法传入
 * 2. 具体享元角色: 实现抽象元角色中所规定的接口
 * 3. 非享元角色: 是不可以共享的外部状态，它以参数的形式注入具体享元的相关方法中
 * 4. 享元工厂角色: 复杂创建和管理享元角色。当客户对象请求一个享元对象时，享元工厂检查系统中是否
 *                存在符合要求的享元对象，如果存在则提供给客户，如果不存在则创建一个
 * 
 */

/** 非享元角色 */
 class UnsharedConcreteFlyweight {
     private info = '';
     constructor(info: string) {
         this.info = info;
     }

     getInfo() {
         return this.info;
     }

     setInfo(info: string) {
        this.info = info;
     }

 }

 /** 抽象享元角色 */
 interface Flyweight {
     operation(state: UnsharedConcreteFlyweight): void;
 }

 /** 具体享元角色 */
class ConcreteFlyweight implements Flyweight {
    private key: string;
    constructor(key: string) {
        this.key = key;
        console.log(`具体享元${key}被创建！`)
    }

    operation(state: UnsharedConcreteFlyweight): void {
        console.log(`具体享元${this.key}被调用`);
        console.log(`非享元信息是:${state.getInfo()}`)
    }
    
}


/** 享元工厂角色 */
class FlyweightFactory{
    private flyweights = new Map<string, Flyweight>();

    getFlyweight(key: string) {
        let flyweight  = this.flyweights.get(key);
        if(flyweight) {
            console.log(`具体享元${key}已经存在,被成功获取!`)
        } else {
            flyweight = new ConcreteFlyweight(key);
            this.flyweights.set(key, flyweight)
        }
        return flyweight;
    }
}


/** 测试 */
const factory = new FlyweightFactory();
const flyweighta = factory.getFlyweight('a');
const flyweightb = factory.getFlyweight('b');
flyweighta.operation(new UnsharedConcreteFlyweight('第一次调用a'));
flyweightb.operation(new UnsharedConcreteFlyweight('第一次调用b'));
flyweighta.operation(new UnsharedConcreteFlyweight('第二次调用a'));
flyweightb.operation(new UnsharedConcreteFlyweight('第二次调用b'));



/** 扩展
 * 1. 单例享元模式：享元模式中所有的具体享元类都是可以共享的，不存在非共享的具体享元类
 * 2. 复合享元模式：这种享元模式中的有些享元对象是由一些单纯享元对象组合而成的，它们就是复合享元对象
 *                虽然复合享元对象本身不能被共享，但他们可以分解成单纯享元对象再被共享
 * 
 */
```


# 代理模式 
```

/**
 * 代理模式
 * 1. 由于某些原因需要给某个对象提供一个代理以控制对该对象的访问
 * 
 */

/**
 * 优点：
 * 1. 代理模式在客户端和目标对象之间起到一个中介作用和保护目标对象的作用
 * 2. 代理对象可以扩展目标对象的功能
 * 3. 能将客户端和目标对象分离，在一定程度上降低了系统的耦合度，增加了程序的可扩展性
 * 
 */

/**
 * 缺点：
 * 1. 会造成系统设计中类的数量增加
 * 2. 在客户端和目标对象之间增加一个代理对象，会造成请求处理速度变慢
 * 3. 增加了系统的复杂度
 */

/**
 * 角色：
 * 1. 抽象主题角色：通过接口或抽象类声明真实主题和代理对象实现的业务方法
 * 2. 真实主题类： 实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象
 * 3. 代理类： 提供了与真实主题相同的接口，其内部包含对真实主题的引用，它可以访问、控制或扩展真实主题的功能
 * 
 */

/**
 * 分类：
 * 1. 静态代理：在程序运行前，代理类就已经存在了
 * 2. 动态代理，运用反射机制动态创建而成
 */

/** 抽象主题 */
interface Subject{
    Request(): void;
}

/** 真实主题 */
class RealSubject implements Subject{
    Request(): void {
        console.log('访问真实主题方法...')
    }
    
}

/** 代理 */

class ProxyClass implements Subject {
    private realSubject: RealSubject | null = null;
    
    Request(): void {
        if(!this.realSubject) {
            this.realSubject = new RealSubject();
        }
        this.preRequest();
        this.realSubject.Request();
        this.postRequest();
    }
   
    preRequest() {
        console.log("访问真实主题之前的预处理")
    }

    postRequest() {
        console.log("访问真实主题之后的后续处理")
    }
    
}

/** 测试 */

const proxyClass = new ProxyClass();
proxyClass.Request();


/**
 * 目标：
 * 1. 保护目标对象
 * 2. 增强目标对象
 */
```


# 单例模式 
```

/**
 * 单例模式
 * 1. 只有一个实例对象
 * 2. 该单例对象必须由单例类自行创建
 * 3. 单例类对外提供一个访问该单例的全局访问点
 */


/** 懒汉式 */
class LazySingleton {
    private static lazySingleton: LazySingleton | null = null;
    static instance(): LazySingleton {
        if (!LazySingleton.lazySingleton) {
            LazySingleton.lazySingleton = new LazySingleton();
        }
        return LazySingleton.lazySingleton;
    }

    a = 0;
    add() {
        console.log(this.a++);
    }
}


const lazySingleton = LazySingleton.instance();
const lazySingleton1 = LazySingleton.instance();
const lazySingleton2 = LazySingleton.instance();
lazySingleton.add();
lazySingleton1.add();
lazySingleton2.add();



/** 饿汉式 */
class HungrySingleton {
    private static hungrySingleton: HungrySingleton = new HungrySingleton();
    static instance(): LazySingleton {
        return HungrySingleton.hungrySingleton;
    }
    a = 0;
    add() {
        console.log(this.a++);
    }
}


const lazySingleton3 = HungrySingleton.instance();
const lazySingleton4 = HungrySingleton.instance();
const lazySingleton5 = HungrySingleton.instance();
lazySingleton3.add();
lazySingleton4.add();
lazySingleton5.add();


```


# 原型模式 
```

/**
 * 原型模式
 * 分为浅克隆和深克隆，与深浅拷贝意义相同
 */

interface Prototype{
    clone(): Prototype;
}


class Dog implements Prototype{

    name = '';

    constructor(name: string) {
        this.name = name;
    }


    show() {
        console.log('这只狗叫：', this.name);
    }

    clone(): Dog {
        return Object.create(this)
    }
    
}

/** 测试 */
const dog = new Dog('a');
const dogb = dog.clone();
dog.name = 'aaaaa';
dogb.name = 'bbb';
dog.show();
dogb.show();





/**
 * 优点：
 * 1. 创建新的对象比较复杂时，可以利用原型模式简化对象的创建过程，同时也能够提高效率
 * 2. 不用初始化对象，而是动态的获得对象运行时的状态
 * 3. 如果原始对象发生变化(增加或者减少属性),其他克隆对象也会发生相应的变化，无需修改代码
 * 
 */

/**
 * 缺点：
 * 需要为每一个类配备一个克隆方法，对已有的类违背的开闭原则
 * 
 */
```


# 命令模式 
```

/**
 * 命令模式
 * 1. ”方法的请求者“和”方法的实现者“之间经常存在紧密的耦合关系
 * 2. 将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开
 * 3. 两者通过命令对象进行沟通，这样方便将命令进行储存、传递、调用、增加和管理
 * 
 */

/**
 * 优点：
 * 1. 通过引入中间件(抽象接口)降低系统的耦合度
 * 2. 扩展性良好，增加或删除命令非常方便。采用命令模式增加与删除命令不会影响其他类，满足开闭原则
 * 3. 可以实现宏命令。命令模式可以与组合模式结合，将多个命令装配组合成一个组合命令，即宏命令
 * 4. 方便实现Undo和Redo操作，命令模式可以与后面介绍的备忘录模式结合，实现命令的撤销与恢复
 * 5. 可以在现有命令的基础上，增加额外功能。比如日志记录、结合装饰器类模式会更加灵活
 * 
 */
/**
 * 缺点：
 * 1. 可能产生大量具体的命令类。因为每一个具体操作都需要设计一个具体命令类，这会增加系统的复杂性
 * 2. 命令模式的结果其实就是接收方的执行结果，但是为了以命令的形式进行架构、解耦请求与实现，引入了额外类型结构(请求和抽象接口命令接口)
 *    增加了理解的困难
 * 3. 设计模式通病：抽象必然会额外增加类的数量，代码抽离肯定比代码聚合更加难理解
 * 
 */

/**
 * 角色：
 * 1. 抽象命令类角色：声明执行命令的接口、拥有执行命令的抽象方法execute()
 * 2. 具体命令类角色：是抽象命令类的具体实现类，它拥有接收者对象，并通过调用接收者的功能完成命令要执行的操作
 * 3. 实现者/接收者角色：执行命令功能的相关操作，是具体命令对象业务的真正实现
 * 4. 调用/请求者角色：是请求的发送者，它通常拥有很多的命令对象，并通过访问命令对象来执行相关请求，它不直接访问接收者
 */


/** 调用者 */
class Invoker {
    private command: Command | null = null;
    constructor(com: Command) {
        this.command = com;
    }

    setCommand(com: Command) {
        this.command = com;
    }

    call() {
        console.log('调用者执行命令command...');
        this.command && this.command.execute();
    }
}

/** 抽象命令 */
interface Command{
  execute(): void;
}


/** 具体命令 */
class ConcreteCommand implements Command {

    private receiver: Receiver;

    constructor() {
        this.receiver = new Receiver();
    }

    execute(): void {
        this.receiver.action();
    }
    
}

/** 接收者 */
class Receiver {
    action() {
        console.log('接收者')
    }
}

/** 测试 */
const cmd = new ConcreteCommand();
const ir = new Invoker(cmd);
console.log('客户访问调用者的call方法');
ir.call();

/**
 * 应用场景
 * 当系统的某项操作具备命令语义，且命令实现不稳定时，可以通过命令模式解耦请求与实现。
 * 使用抽象命令接口使请求方的代码架构稳定，封装接收方具体命令的实现细节。
 * 接收方与抽象命令呈现弱耦合(内部方法无须一致)。具备良好扩展性
 * 1. 请求调用者需要与请求接收者解耦时，命令模式可以使调用者和接受者不直接交互
 * 2. 系统随机请求命令或经常增加、删除命令时，命令模式可以方便地实现这些功能
 * 3. 当系统需要执行一组操作时，命令模式可以定义宏命令来实现该功能
 * 4. 当系统需要支持命令的撤销(undo)或者恢复(redo)操作时，可以将命令对象储存起来，采用备忘录模式实现
 */
```


# 备忘录模式 
```

/**
 * 备忘录模式(快照模式)
 * 1. 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，以便以后当需要时能将对象恢复到原先保存的状态
 * 缺点：资源消耗大，如果要保存的内部状态信息过多或者特别频繁，将会占用比较大的内存资源
 */

/**
 * 角色：
 * 1. 发起人角色：记录当前时刻的内部状态信息，提供创建备忘录和恢复备忘录数据的功能，实现其他业务功能，它可以访问备忘录里的所有信息
 * 2. 备忘录角色：负责存储发起人的内部状态，在需要的时候提供这些内部状态给发起人
 * 3. 管理者角色：对备忘录进行管理，提供保存与获取备忘录的功能，当其不能对备忘录的内容进行访问与修改
 */


/** 备忘录 */
class Memeto {
    private state: string;
    
    constructor(state: string) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

/** 发起人 */
class Origintor {
    private state = '';

    setState(state: string) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    createMemrnto() {
        return new Memeto(this.state);
    }

    restoreMemento(m: Memeto) {
        this.setState(m.getState());
    }

}

/** 管理者 */
class Caretaker {
    private memento: Memeto|null = null;
    setMemeto(m: Memeto) {
        this.memento = m;
    }

    getMemento(): Memeto {
        if(this.memento) {
            return this.memento;
        }
        return new Memeto('')
    }
}


/** 测试 */
const or = new Origintor();
const cr = new Caretaker()

or.setState('s0000000');
console.log(`初始化状态${or.getState()}`);
cr.setMemeto(or.createMemrnto());
or.setState('s1111111');
console.log(`新的状态${or.getState()}`);
or.restoreMemento(cr.getMemento());
console.log(`恢复状态${or.getState()}`);

```


# 外观模式 
```

/**
 * 外观模式(门面模式)
 * 1. 通过为多个复杂的子系统提供一个一致的接口，而使这些子系统更加容易被访问的模式
 * 2. 该哦模式对外有一个统一接口，外部应用程序不用关心内部子系统的具体细节
 * 
 */

/**
 * 优点： 
 * 1. 降低了子系统与客户端之间的耦合度，使得子系统的变化不会影响调用它的客户类
 * 2. 对客户屏蔽了子系统组件，减少了客户处理的对象数目，并使得子系统使用起来更加容易
 * 3. 降低了大型软件系统中的编译依赖性，简化了系统在不同平台之间的移植过程，因为编译一个子系统不会影响其他子系统，也不会影响外观对象(典型微服务思想)
 * 
 */

/**
 * 角色
 * 1. 外观角色： 为多个子系统对外提供一个共同的接口
 * 2. 子系统角色： 实现系统的部分功能，客户可以通过外观角色访问它
 * 3. 客户角色： 通过一个外观角色访问各个子系统的功能
 * 
 */

/** 外观角色 */
class Facde {
    private system1 = new SubSystem01()
    private system02 = new SubSystem02();
    method() {
        this.system1.method();
        this.system02.method();
    }
}

/** 子系统角色一 */
class SubSystem01 {
    method() {
        console.log('子系统01的method被调用')
    }
}


/** 子系统角色二 */
class SubSystem02 {
    method() {
        console.log('子系统02的method被调用')
    }
}


/** 测试： 客户角色 */
const facade = new Facde();
facade.method();


/**
 * 应用场景
 * 1. 对分层结构系统构建时，使用外观模式定义子系统中每层的入口点可以简化子系统之间的依赖关系
 * 2. 当一个复杂系统的子系统很多时，外观模式可以为系统设计一个简单的接口供外界访问
 * 3. 当客户端与多个子系统之间存在很大的联系时，引入外观模式可将它们分离，从而提高子系统的独立性和可移植性
 */

/**
 * 扩展
 * 1. 当增加或移除子系统时需要修改外观类，这违背了“开闭原则”,如果引入抽象外观类，则在一定程度上解决该问题
 */
```


# 工厂模式 
```

/**
 * 工厂模式
 * 抽象工厂类、具体工厂类、抽象产品类、具体产品类
 * 符合开闭原则
 * 增加新产品时，新增工厂类即可
 */

/** 抽象产品类，可以定义为接口，也可以写为抽象类(如下) */
interface Product1Impl {
    show: () => void
}


abstract class Product1Abstract {
    abstract show(): void;
}


/** 产品a类 */
class Product1A implements Product1Impl {
    constructor() {
        console.log('产品A被创建')
    }
    show() {
        console.log('产品A执行了show方法')
    }
}

/** 产品b类 */
class Product1B implements Product1Impl {
    constructor() {
        console.log('产品B被创建')
    }
    show() {
        console.log('产品B执行了show方法')
    }
}
/** 产品c类 */
class Product1C implements Product1Abstract {
    constructor() {
        console.log('产品B被创建')
    }
    show() {
        console.log('产品C执行了show方法')
    }
}

/** 抽象工厂类 */
interface FactoryImpl{
    create: () => Product1Impl
}

/** 具体工厂类 */
class Product1AFactory implements FactoryImpl{
    create(){
        return new Product1A();
    }
}

class Product1BFactory implements FactoryImpl{
    create(){
        return new Product1B();
    }
}

class Product1CFactory implements FactoryImpl{
    create(){
        return new Product1C();
    }
}

const factory = new Product1AFactory();
const product1a = factory.create();
product1a.show()
```


# 建造者模式 
```

/**
 * 建造者模式
 * 指将一个复杂的构造与它的表示分离，使同样的构建过程可以创建不同表示
 * 将变与不变相分离，即产品的组件部分是不变的，但每一个部分都是可以灵活选择的
 * 
 */

/**
 * 角色
 * 1. 产品角色： 它是包含组成部件的复杂对象，由具体建造者来创建其各个零件
 * 2. 抽象建造者：它是包含创建产品各个子部件的抽象方法的接口，通常还包含一个返回复杂产品的方法
 * 3. 具体建造者：实现构造接口，完成复杂产品的各个部件的具体创建方法
 * 4. 指挥者：它调用建造者对象中的部件构造与装配方法完成复杂对象的创建，在指挥者不涉及具体的产品信息
 * 
 */


/** 产品角色 */
class Product {
    private parta = '';
    private partb = '';
    private partc = '';

    setPartA(pratA: string) {
        this.parta = pratA;
    }
    setPartB(pratB: string) {
        this.partb = pratB;
    }
    setPartC(pratC: string) {
        this.partc = pratC;
    }

    show() {
        console.log('产品展示:', this.parta, this.partb, this.partc)
    }

}

/** 抽象建造者 */
abstract class Builder {
    protected product = new Product();
    abstract buildPartA(): void;
    abstract buildPartB(): void;
    abstract buildPartC(): void;
    getResult() {
        return this.product
    }
}


/** 具体建造者 */
class ConcreteBuilder extends Builder {
    buildPartA() {
        this.product.setPartA('建造 parta')
    }
    buildPartB() {
        this.product.setPartB('建造 partb')
    }
    buildPartC() {
        this.product.setPartC('建造 partc')
    }

}


/** 指挥者: 调用建造者中的方法完成复杂对象的创建 */
class Director {
    private builder: Builder;
    constructor(builder: Builder) {
        this.builder = builder;
    }

    construct() {
        this.builder.buildPartA();
        this.builder.buildPartC();
        return this.builder.getResult()
    }
}


/** 测试 */
const build = new ConcreteBuilder();
const director = new Director(build);
const product = director.construct();
product.show();



/**
 * 适用场景
 * 相同的方法，不同的执行顺序，产生不同的结果
 * 多个部件和零件，都可以装配到一个对象中，但是产生的结果又不相同
 * 产品类非常复杂或者产品类中不同的调用顺序产生不同的作用
 * 初始化一个对象特别复杂，参数多，而且很多参数都具有默认值
 * 
 */
```


# 抽象工厂模式 
```

/**
 * 抽象工厂模式
 * 抽象工厂类，具体工厂类，抽象产品类，具体产品类
 */


/** 抽象产品类，可以定义为接口，也可以写为抽象类(如下) */
interface aProjectImpl {
    show: () => void
}

interface bProjectImpl {
    show: () => void
}

abstract class Product2Abstract {
    abstract show(): void;
}


/** 产品a类 */
class Product2A implements aProjectImpl {
    constructor() {
        console.log('产品A被创建')
    }
    show() {
        console.log('产品A执行了show方法')
    }
}

/** 产品b类 */
class Product2B implements aProjectImpl {
    constructor() {
        console.log('产品B被创建')
    }
    show() {
        console.log('产品B执行了show方法')
    }
}

/** 产品aa类 */
class aProduct2A implements bProjectImpl {
    
    constructor() {
        console.log('产品AA被创建')
    }
    show() {
        console.log('产品AA执行了show方法')
    }
}

/** 产品ab类 */
class aProduct2B implements bProjectImpl {
    constructor() {
        console.log('产品AB被创建')
    }
    show() {
        console.log('产品VB执行了show方法')
    }
}


/** 抽象工厂类 */
interface FactoryImpl{
    create: () => aProjectImpl
    createA: () => bProjectImpl

}

/** 具体工厂类 */
class aProduct2AFactory implements FactoryImpl{
    createA() {
        return new Product2A();
    }
    create(){
        return new aProduct2A();
    }
}

class bProduct2AFactory implements FactoryImpl{
    createA() {
        return new Product2B();
    }
    create(){
        return new aProduct2B();
    }
}


const factoryaa = new aProduct2AFactory();
const product2b = factoryaa.create();
const aproduct2b = factoryaa.createA();
product2b.show();
aproduct2b.show()
```


# 桥接模式 
```

/**
 * 桥接模式
 * 1. 将抽象与实现分离，使它们可以独立变化
 * 2. 用组合关系来代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度
 */

/**
 * 优点：
 * 1. 抽象与实现分离，扩展能力强
 * 2. 符合开闭原则
 * 3. 符合合成复用原则
 * 4. 其实现细节对客户透明
 */
/**
 * 缺点：
 * 由于聚合关系建立在抽象层，要求开发者针对抽象化进行设计与编程，
 * 能正确识别出系统中两个独立变化的维度，这增加了系统的理解与设计难度
 */

/**
 * 角色：
 * 1. 抽象化角色：定义抽象类，并包含一个对实现化对象的引用
 * 2. 扩展抽象化角色：是抽象化角色的子类，实现父类的业务方法，并通过组合关系调用实现化角色的方法
 * 3. 实现化角色： 定义实现化角色的接口，供扩展抽象化角色调用
 * 4. 具体实现化角色：给出实现化接口的具体实现
 * 
 */

/** 实现化角色 */
interface Implementor{
    OperationImpl(): void;
}

/** 具体实现化角色 */
class ConcreteImplementorA implements Implementor{
    OperationImpl(): void {
        console.log('具体实现化ConcreteImplementorA角色被访问')
    }
    
}

/** 抽象化角色 */
abstract class Abstraction{
    protected  imple: Implementor;
    constructor(imple: Implementor) {
        this.imple = imple;
    }

    abstract Operation(): void;
}

/** 扩展抽象化角色 */
class RefindAbstration extends Abstraction{
    
    constructor(imple: Implementor) {
        super(imple);
    }
    
    Operation(): void {
        console.log('扩展抽象化RefindAbstration角色被访问');
        this.imple.OperationImpl();
    }
    
}

/** 测试 */
const impl = new ConcreteImplementorA();  // 具体的实现
const abs = new RefindAbstration(impl);
abs.Operation();

/**
 * 当一个类内部具备两种或多种变化维度时，使用桥接模式可以解耦这些变化的维度，使高层代码架构稳定
 * 1. 当一个类存在两个独立的变化的维，且这两个维度都需要扩展时
 * 2. 当一个系统不希望使用继承或因为多层次继承导致系统类的个数急剧增加时
 * 3. 当一个系统需要在构件的抽象化角色和具体角色之间增加更多的灵活性时
 * 
 */

/**
 * 继承具有强侵入性
 */
```


# 模版模式 
```

/**
 * 模版方法模式
 * 定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤
 * 是一种行为模式
 */

/**
 * 优点：
 * 1. 封装了不变部分，扩展可变部分：它把认为是不变的部分的算法封装到父类中实现，而把可变部分算法由子类继承实现，便于代码复用
 * 2. 在父类中提取了公共的部分代码，便于代码复用
 * 3. 部分方法是由子类实现的，因此子类可以通过扩展方式增加相应的功能，符合开闭原则
 * 
 */

/**
 * 缺点：
 * 1. 对每个不同的实现都需要定义一个子类，这会导致类的个数增加，系统更加庞大，设计也更加抽象，间接地增加了系统实现的复杂度
 * 2. 父类中的抽象方法由子类实现，子类执行的结果会影响父类的结果，这导致一种反向的控制结构，它提高了代码阅读的难度
 * 3. 由于继承关系自身的缺点，如果父类添加新的抽象方法，则所有子类都要改一遍
 */

/**
 * 角色：
 * 1. 抽象类/抽象模板
 * 抽象模板类，负责给出一个算法的轮廓和骨架。它由一个模板方法和若干个基本方法构成
 *  a. 模版方法：定义了算法架构，按某种顺序调用其包含的基本方法
 *  b. 基本方法：整个算法的一个步骤
 *     ·抽象方法：在抽象类声明，由具体子类实现
 *     ·具体方法：在抽象类中已经实现，在具有子类中可以继承或重写它
 *     ·钩子方法：在抽象类中已经实现，包括用于判断的逻辑方法和需要子类重写的空方法两种
 * 2. 具体子类/具体实现
 * 具体实现类，实现抽象类中所定义的抽象方法和钩子方法，它们是一个顶级逻辑和一个组成步骤
 * 
 */

/** 抽象类 */
abstract class AbstractClass {
    TemplateMethod() {
        this.SpecificMethod();
        this.abstractMethod1();
        this.abstractMethod2();
    }

    protected SpecificMethod() {
        console.log('抽象类中的具体方法被调用...')
    }
    protected abstract abstractMethod2(): void;
    protected abstract abstractMethod1(): void;

}

class ConcreteClass extends AbstractClass {
    
    protected abstractMethod1(): void {
        console.log('抽象方法1的实现调用')
    }

    protected abstractMethod2(): void {
        console.log('抽象方法2的实现调用')
    }
    
}

/** 测试 */
const a = new ConcreteClass();
a.TemplateMethod();

/**
 * 应用场景
 * 1. 算法的整体步骤很固定，但其中个别部分易变时，可以使用模版方法模式将容易变的部分抽象出来，供子类实现
 * 2. 当多个子类存在公共的行为时，可以将其提取出来并集中到一个公共父类中以避免代码重复
 *    首先：要识别现有代码中的不同之处，并且将不同之处分离为新的操作。最后，用一个调用这些新的操作的模版方法来替换这些不同的代码
 * 3. 但需要控制子类的扩展时，模版方法只在特定点调用钩子操作，这样就只允许在这些点进行扩展
 */


/** 含狗子的抽象类 */
abstract class HookAbstractClass {
    
    TemplateMethod() {
        this.abstractMethod1()
        this.HookMethod1();
        if(this.HookMethod2()) {
            this.SpecificMethod();
        }
    }
    protected SpecificMethod() {
        console.log('抽象类的具体方法被调用！！！')
    }
    protected HookMethod2(): boolean {
        return true;
    }
    protected HookMethod1() {
    }
    protected abstract  abstractMethod1(): void;
}

/** 含钩子方法的具体子类 */
class HoolConcreteClass extends HookAbstractClass{
    
    
    protected abstractMethod1(): void {
        console.log('抽象方法1的实现调用')
    }

    protected HookMethod1(): void {
        console.log('钩子方法1被重写')
    }
    
    protected HookMethod2(): boolean {
        console.log('钩子方法2被重写')
        return true;
    }
    
}

/** 测试 */
const hoolConcreteClass = new HoolConcreteClass();
hoolConcreteClass.TemplateMethod();
```


# 状态模式 
```

/**
 * 状态模式
 * 1. 对有状态的对象，把复杂的“判断逻辑”提取到不同的状态对象中，允许状态对象在其内部状态发生改变时改变其行为
 * 2. 各个状态知道自己要进入的下一个状态对象
 */

/**
 * 优点：
 * 1. 结构清晰，状态模式将特定状态相关的行为局部化到一个状态中，并且将不同状态的行为分割开来，满足“单一职责原则”
 * 2. 将状态转换显示化，减少对象间的相互依赖。将不同的状态引入独立的对象中会使状态转换更加的明确，且减少对象间的相互依赖
 * 3. 状态类职责明确，有利于程序的扩展。通过定义新的子类很容易地增加新的状态和转换
 * 
 */

/**
 * 缺点：
 * 1. 状态模式的使用必然会增加系统的类与对象的个数
 * 2. 状态模式的结构和实现都较为复杂，如果使用不当会导致程序结构和代码的混乱
 * 3. 状态模式对开闭原则的支持并不太好，对于可以切换状态的状态模式，增加新的状态类需要修改那些负责状态转换的源码，否则
 *    无法切换到新增的状态，而且修改某个状态类的行为也需要修改对应类的源码
 */

/**
 * 角色
 * 1. 环境类角色：上下文，它定义了客户端需要的接口，内部维护一个当前状态，并负责具体状态的切换
 * 2. 抽象状态角色：定义一个接口，用以封装环境对象中的特定状态所对应的行为，可以有一个或多个行为
 * 3. 具体状态角色：实现抽象状态所对应的行为，并且在需要的情况下进行状态切换
 * 
 */


/** 环境类 */
class StateContext {
    private state: State | null = null;

    constructor() {
        this.state = new ConcreteStateA();
    }

    setState(state: State) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    Handle() {
        this.state && this.state.Handle(this);
    }


}


/** 抽象状态类 */
abstract class State {
    abstract Handle(context: StateContext): void
}

/** 具体状态A类 */
class ConcreteStateA extends State {
    Handle(context: StateContext) {
        console.log('当前状态是 A!!!');
        context.setState(new ConcreteStateB())
    }
    
}

/** 具体状态B类 */
class ConcreteStateB extends State {
    Handle(context: StateContext) {
        console.log('当前状态是 B!!!');
        context.setState(new ConcreteStateA())
    }
    
}

/** 测试 */
const stateC = new StateContext();
stateC.Handle();
stateC.Handle();
stateC.Handle();
stateC.Handle();
stateC.Handle();


/**
 * 应用场景
 * 1. 当一个对象的行为取决于它的状态，并且它必须在运行时根据状态改变它的行为时，就可以考虑状态模式
 * 2. 一个操作中含有庞大的分支结构，并且这些分支决定于对象的状态时
 */
```


# 策略模式 
```

/**
 * 策略模式
 * 1. 该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换且算法的变化不会影响使用算法的客户。
 * 2. 对象行为模式
 * 3. 通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理
 * 
 */

/**
 * 优点：
 * 1. 多重条件不易维护，而使用策略模式可以避免使用多重条件语句
 * 2. 策略模式可以提供相同行为的不同实现，客户可以根据不同时间或空间要求选择不同的策略
 * 3. 策略模式提供了一系列的可供重用的算法族，恰当使用继承可以把算法族的公共代码转移到父类里面，从而避免重复代码
 * 4. 策略模式可以提供相同的行为实现，可以在不修改原代码的情况下，灵活的新增新算法
 * 5. 策略模式把算法的使用放到环境类中，而算法的实现转移到具体的策略类中，实现了二者的分离
 */

/**
 * 缺点：
 * 1. 必须理解所有的策略算法的区别，以便适时选择恰当的算法类
 * 2. 策略模式造成很多的策略类，增加维护难度
 */


/**
 * 角色：
 * 1. 抽象策略类：定义一个公共接口，各种不同的算法以不同的方式实现这个接口，环境角色使用这个接口调用不同的算法
 *              一般使用接口或抽象类实现
 * 2. 具体策略类：实现了抽象策略定义的接口，提供具体的算法实现
 * 3. 环境类：持有一个策略类的引用，最终给客户端调用
 */

/** 抽象策略类 */
interface Strategy{
    strategyMethod(): void;
}

/** 具体策略类A */
class ConcreteStrategyA implements Strategy {
    strategyMethod(): void {
        console.log('具体策略A的策略方法被访问！！')
    }
    
}

/** 具体策略类B */
class ConcreteStrategyB implements Strategy {
    strategyMethod(): void {
        console.log('具体策略B的策略方法被访问！！')
    }
    
}

/**环境类 */
class Context {
    private strategy: Strategy | null = null;;

    getStrategy() {
        return this.strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    strategyMethod() {
        this.strategy && this.strategy.strategyMethod();
    }

}


/** 测试 */
const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();
const context = new Context();
context.setStrategy(strategyA);
context.strategyMethod();
console.log('-----------------');
context.setStrategy(strategyB);
context.strategyMethod();


/**
 * 应用场景
 * 1. 一个系统需要动态地在几种算法中选择一种时，可将每个算法封装到策略类中
 * 2. 一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现，可将每个条件分支移入它们各自的
 *    策略类中以代替这些条件语句
 * 3. 系统中各算法彼此完全独立，且要求对客户隐藏具体算法的实现细节时
 * 4. 系统要求使用算法的客户不应该知道其操作的数据时，可以使用策略模式来隐藏与算法相关的数据结构
 * 5. 多个类只区别在表现行为不同，可以使用策略模式，在运行时动态选择具体要执行的行为
 */


/**
 * 扩展：
 * 策略工厂模式
 */














































































































































































































































































































































```


# 简单工厂模式 
```

/**
 * 简单工厂模式
 * 简单分为工厂类、抽象产品类、具体产品类。
 * 简单工厂模式在每一次增加新的产品都需要在工厂类中增加对应的逻辑，这样违背了开闭原则
 */

/** 抽象产品类，可以定义为接口，也可以定义为如下的抽象类 */
interface ProductImpl {
    show: () => void
}

abstract class ProductAbstract {
    abstract show(): void;
}


/** 产品a类 */
class ProductA implements ProductImpl {
    constructor() {
        console.log('产品A被创建')
    }
    show() {
        console.log('产品A执行了show方法')
    }
}

/** 产品b类 */
class ProductB implements ProductImpl {
    constructor() {
        console.log('产品B被创建')
    }
    show() {
        console.log('产品B执行了show方法')
    }
}
/** 产品c类 */
class ProductC implements ProductAbstract {
    constructor() {
        console.log('产品B被创建')
    }
    show() {
        console.log('产品C执行了show方法')
    }
}




/** 工厂 */
function Factory(className: string) {
    switch (className) {
        case 'ProductA':
            return new ProductA();
        case 'ProductB':
            return new ProductB();
        case 'ProductC':
            return new ProductC();
        default:
            throw '不存在的类'
    }
}

const producta = Factory('ProductA')
const productb = Factory('ProductB')

```


# 组合模式 
```

/**
 * 组合模式(整体-部分模式)
 * 1.透明模式    2. 安全模式
 * 将对象组合成树状的层次结构的模式，用来表示“整体-部分”的关系
 * 使用户对单个对象和组合对象具有一致的访问性
 */

/**
 * 优点：
 * 1. 组合模式使得客户端代码可以一致地处理单个对象和组合对象，无须关心自己处理的是单个对象还说组合对象
 * 2. 更容易在组合体内加入新的对象，客户端不会因为加入了新的对象而更改源代码，满足“开闭”原则
 * 
 */

/**
 * 缺点：
 * 1. 设计较复杂，客户端需要花更多时间理清类之间的层次关系
 * 2. 不容易限制容器中的构件
 * 3. 不容易用继承的方法来增加构件的新功能
 */


/**
 * 角色：
 * 1. 抽象构件角色：它的主要作用是为树叶构件和树枝构件声明公共接口，并实现它们的默认的行为。
 * 2. 树叶构件角色：是组合中的叶节点对象，它没有子节点，用于继承或实现抽象构件
 * 3. 树枝构件/中间构件角色：是组合中的分支节点对象，它有子节点，用于继承和实现抽象构件。它的主要作用是
 *    存储和管理子部件，通常包含Add(),Remove(),GetChild()等方法
 */


/** 透明组合模式 */

/** 抽象构件 */
interface Component {
    add(c: Component): void;
    remove(c: Component): void;
    getChild(i: number): Component;
    opertion(): void;
}

/** 树叶构件 */
class Leaf implements Component {

    name = '';
    constructor(name: string) {
        this.name = name;
    }
    add(c: Component): void {
        throw new Error("Method not implemented.");
    }
    remove(c: Component): void {
        throw new Error("Method not implemented.");
    }
    getChild(i: number): Component {
        throw new Error("Method not implemented.");
    }


    opertion(): void {
        console.log(`树叶${this.name}被访问`)
    }
}

/** 树枝构件 */
class Composite implements Component {

    private children = new Set<Component>();
    add(c: Component): void {
        this.children.add(c);
    }
    remove(c: Component): void {
        this.children.delete(c);
    }
    getChild(i: number): Component {
        return [...this.children.values()][i]
    }
    opertion(): void {
        this.children.forEach(v => {
            v.opertion();
        })
    }

}

/** 测试 */
const c0 = new Composite();
const c1 = new Composite();
const leaf1 = new Leaf('1');
const leaf2 = new Leaf('2');
const leaf3 = new Leaf('3');
c0.add(leaf1);
c0.add(c1);
c1.add(leaf2)
c1.add(leaf3);
c0.opertion();



/** 安全组合模式 */
interface ComponentSafe {
    operation(): void;
}
interface CompositeSafeImpl {
    add(c: CompositeSafeImpl | ComponentSafe): void;
    remove(c: CompositeSafeImpl | ComponentSafe): void;
    getChild(i: number): CompositeSafeImpl | ComponentSafe;
    operation(): void;
}


/** 树叶构件 */
class LeafSafe implements ComponentSafe {

    name = '';
    constructor(name: string) {
        this.name = name;
    }
    operation(): void {
        console.log(`树叶${this.name}被访问`)
    }
}

/** 树枝构件 */
class CompositeSafe implements CompositeSafeImpl {


    private children = new Set<CompositeSafeImpl | ComponentSafe>();
    add(c: CompositeSafeImpl | ComponentSafe): void {
        this.children.add(c);
    }
    remove(c: CompositeSafeImpl | ComponentSafe): void {
        this.children.delete(c);
    }
    getChild(i: number): CompositeSafeImpl | ComponentSafe {
        return [...this.children.values()][i]
    }

    operation(): void {
        this.children.forEach(v => {
            v.operation();
        })
    }

}

/** 测试 */
const c2 = new CompositeSafe();
const c3 = new CompositeSafe();
const leaf4 = new LeafSafe('4');
const leaf5 = new LeafSafe('5');
const leaf6 = new LeafSafe('6');
c2.add(leaf4);
c2.add(c3);
c3.add(leaf5)
c3.add(leaf6);
c2.operation();
```


# 装饰器模式 
```

/**
 * 装饰器模式
 * 1. 在不改变现有对象结构的情况下，动态的给该对象增加一些职责的模式
 * 
 */

/**
 * 角色：
 * 1. 抽象构件角色：定义一个抽象接口以规范准备接收附加责任的对象
 * 2. 具体构件角色：实现抽象构件，通过装饰角色为其添加一些职责
 * 3. 抽象装饰角色：继承抽象构件，并包含具体构件的实例，可以通过其子类扩展具体构件功能
 * 4. 具体装饰角色：实现抽象装饰的相关方法，并给具体构件对象添加附加的责任
 */

// 抽象构件角色
interface DecoratorComponent {
    operation(): void;
}

// 具体构件角色
class ConcreteComponent implements DecoratorComponent {


    constructor() {
        console.log('创建具体构件角色')
    }

    operation() {
        console.log('调用具体构件角色的方法：operation() ')
    }
}

// 抽象装饰角色
class Decorator implements DecoratorComponent {
    private component: DecoratorComponent;
    constructor(component: DecoratorComponent) {
        this.component = component;
    }

    operation(): void {
        this.component.operation();
    }

}


// 具体装饰角色
class ConcreteDecorator extends Decorator{
    
    constructor(component: DecoratorComponent) {
        super(component);
    }

    operation() {
        super.operation();
        this.addedFunction();
    }

    private addedFunction() {
        console.log('为具体构件角色增加额外的功能： addedFunction()')
    }

}

/** 测试 */

const p = new ConcreteComponent();
p.operation();
const d = new ConcreteDecorator(p);
d.operation();
```


# 观察者模式 
```

/**
 * 观察者模式(发布-订阅模式，模型-视图模式)
 * 1。 多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新
 * 2. 具体目标对象和具体观察者对象不能直接调用，否则将使两者之间紧密耦合，违反面向对象的设计原则
 */
/**
 * 优点：
 * 1. 降低了目标与观察者之间的耦合关系，两者之间是抽象耦合关系，符合依赖倒置原则
 * 2. 目标与观察者之间建立了一套触发机制
 * 
 */

/**
 * 缺点：
 * 1. 目标与观察者之间的依赖关系并没有完全解除，而且有可能出现循环引用
 * 2. 当观察者对象很多时，通知的发布会花费很多时间，影响程序的效率
 */

/**
 * 角色：
 * 1. 抽象主题角色：抽象目标类，提供了一个用于保存观察者的聚集类和增加、删除观察者对象方法，以及通知所有观察者的抽象方法
 * 2. 具体主题角色：具体目标类，实现抽象目标的通知方法，当具体主题的内部状态发生改变时，通知所有注册过的观察者对象
 * 3. 抽象观察者角色：它是一个抽象类或接口，它包含一个更新自己的抽象方法，当接到具体主题被更改通知时被调用
 * 4. 具体观察者角色：实现抽象观察者中定义的抽象方法，以便在得到目前的更改通知时更新自身的状态
 */

abstract class Subject{
    protected observers = new Set<Observer>();

    add(observer: Observer) {
        this.observers.add(observer);
    }

    remove(observer: Observer) {
        this.observers.delete(observer);
    }

    abstract notifyObserver(): void;
}

/** 具体目标 */
class ConcreteSubject extends Subject {

    notifyObserver() {
        console.log('具体目标发生改变...')
        console.log('------------------')
        this.observers.forEach(v => {
            v.response();
        })
    }

}

/** 抽象观察者 */
interface Observer{
    response(): void;
}

/** 具体观察者1 */
class ConcreteObserver1 implements Observer {
    response(): void {
        console.log('具体观察者1作出反应！！！')
    }
}
/** 具体观察者1 */
class ConcreteObserver2 implements Observer {
    response(): void {
        console.log('具体观察者2作出反应！！！')
    }
}

const sub = new ConcreteSubject();
const ob1 = new ConcreteObserver1();
const ob2 = new ConcreteObserver1();

sub.add(ob1);
sub.add(ob2);
sub.notifyObserver();

```


# 解释器模式 
```

/**
 * 解释器模式
 * 1. 给分析对象定义一个语言，并定义该语言的文法表示，再设计一个解析器来解释语言中的句子
 * 2. 文法: 指语言的语法规则；句子：指语言集中的元素
 * 3. 类行为模式
 */

/**
 * 优点：
 * 1. 扩展性好。由于在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展文法
 * 2. 容易实现。在语法树中的每个表达式节点类都是相似的，所以实现其文法较为容易
 */

/**
 * 缺点：
 * 1. 执行效率低。解释器模式中通常使用大量的循环和递归调用，当要解释的句子较复杂时，其运行速度很慢，且调试复杂
 * 2. 会引起类膨胀。解释器模式中的每条规则至少需要定义一个类，当包含的文法规则很多时，类的个数将急剧增加，导致系统难以管理和维护
 * 3. 可应用场景很少。在软件开发中，需要定义语言文法的应用实例很少，所以这种模式很少被用到；
 * 
 */


/**
 * 角色：
 * 1. 抽象表达式角色: 定义解释器的接口，约定解释器的解释操作，主要包含解释方法
 * 2. 终结符表达式角色：是抽象表达式的子类，用来实现文法中与终结符相关的操作，文法中的每一个终结符都有一个具体终结表达式与之相对应
 * 3. 非终结符表达式角色：也是抽象表达式的子类，用来实现文法中与非终结符相关的操作，文法中的每条规则都对应于一个非终结符表达式
 * 4. 环境角色：通常包含各个解释器需要的数据或是公共的功能，一般用来传递被所有解释器共享的数据，后面的解释器可以从这里获取这些值
 * 5. 客户端：主要任务是将需要分析的句子或表达式转换成使用解释器对象描述的抽象语法树，然后调用解释器的解释方法，当然也可以通过环境角色简介访问解释器的解释方法
 */


/** 实例代码  */

/** 文法规则 */


/** 抽象表达式 */
interface Expression {
    interpret(info: string): boolean;
}

/** 终结符表达式类 */
class TerminaExpression implements Expression {

    private set = new Set<string>()

    constructor(data: string[]) {
        data.forEach(v => this.set.add(v))
    }

    interpret(info: string): boolean {
        if (this.set.has(info)) {
            return true
        }
        return false
    }

}

/** 非终结符表达式类 */
class AndExpression implements Expression {

    private city: Expression | null = null;
    private person: Expression | null = null;

    constructor(city: Expression, person: Expression) {
        this.city = city;
        this.person = person;
    }


    interpret(info: string): boolean {
        const s = info.split('的');
        if(this.city && this.person) {
            return this.city.interpret(s[0]) && this.person.interpret(s[1])
        } 
        return false
    }

}

/** 环境类 */
class Context {
    private citys = ['韶关', '广州'];
    private persons = ['老人', '妇女', '儿童'];
    private cityPerson: Expression | null = null;

    constructor() {
        const city = new TerminaExpression(this.citys);
        const person = new TerminaExpression(this.persons);
        this.cityPerson = new AndExpression(city, person);
    }

    freeRide(info: string) {
        if(!this.cityPerson) {
            return;
        }
        const ok = this.cityPerson.interpret(info);
        if (ok) {
            console.log(`你是${info}, 免费`)
        } else {
            console.log(`你是${info}, 不免费`)
        }
    }

}

/** 测试 */
const bus = new Context();
bus.freeRide('韶关的老人');
bus.freeRide('韶关的年轻人');
bus.freeRide('广州的妇女');
bus.freeRide('广州的儿童');
bus.freeRide('山东的儿童');


```


# 访问者模式 
```

/**
 * 访问者模式
 * 1. 将作用于某种数据结构中的各元素的操作分离出来封装成独立的类，使其在不改变数据结构的前提下可以添加作用于这些元素的新的操作，为数据结构中的每个元素提供多种访问方式
 *    它将对数据的操作与数据结构进行分离
 * 2. 行为类模式
 */

/**
 * 优点：
 * 1. 扩展性好，能够在不修改对象结构中的元素的情况下，为对象结构中的元素添加新的功能
 * 2. 复用性好，可以通过访问者来定义整个对象结构通用的功能，从而提高系统的复用程度
 * 3. 灵活性好。访问者模式将数据结构与作用于结构上的操作解耦，使得操作集合可相对自由地演化而不影响系统的数据结构
 * 4. 符合单一职责原则，访问者模式把相关的行为封装在一起，构成一个访问者，使每一个访问者的功能都比较单一
 */

/**
 * 缺点
 * 1. 增加新的元素类很困难。在访问者模式中，每增加一个新的元素类，都要在每一个具体访问类里中增加相应的具体操作
 *    这违背了“开闭原则”
 * 2. 破坏封装。访问者模式中具体元素对访问者公布细节，这破坏了对象的封装性
 * 3. 违反了依赖倒置原则，访问者模式依赖了具体类，而没有依赖抽象类
 * 
 */

/**
 * 角色：
 * 1. 抽象访问者角色：定义一个访问具体元素的接口，为每个具体元素类对应一个访问操作 visit()，该操作中的参数类型
 *              标识了被访问的具体元素
 * 2. 具体访问者角色：实现抽象访问者角色中声明的各个访问操作，确定访问者访问一个元素时该做什么
 * 3. 抽象元素角色：声明一个包含接受操作accept()的接口，被接受的访问者对象作为accept()方法的参数
 * 4. 具体元素角色：实现抽象元素角色提供的accept()操作，其方法体通常都是visitor.visit(this)，另外具体元素中可能还包含本身业务逻辑的相关操作
 * 5. 对象结构角色：是一个包含元素角色的容器，提供让访问者对象遍历容器中的所有元素的方法
 * 
 * 
 */

/** 抽象访问类 */
interface Visitor {
    visit(element: ConcreteElementA | ConcreteElementB): void;

}

/** 具体访问类A */
class ConcreteVisitorA implements Visitor {

    visit(element: ConcreteElementA | ConcreteElementB) {
        if (element instanceof ConcreteElementA) {
            console.log('具体访问者A被访问:->', element.operationA())
            console.log()
        }
        if (element instanceof ConcreteElementB) {
            console.log('具体访问者A被访问:->', element.operationB())

        }
    }

}


/** 具体访问类B */
class ConcreteVisitorB implements Visitor {

    visit(element: ConcreteElementA | ConcreteElementB) {
        if (element instanceof ConcreteElementA) {
            console.log('具体访问者B被访问:->', element.operationA())
            console.log()
        }
        if (element instanceof ConcreteElementB) {
            console.log('具体访问者B被访问:->', element.operationB())

        }
    }
}

/** 抽象元素类 */
interface ElementC {
    accept(visitor: Visitor): void;
}

/** 具体元素a */
class ConcreteElementA implements ElementC {
    accept(visitor: Visitor): void {
        visitor.visit(this)
    }

    operationA() {
        return '具体元素a的操作'
    }

}

/** 具体元素b */
class ConcreteElementB implements ElementC {
    accept(visitor: Visitor): void {
        visitor.visit(this)
    }

     operationB() {
        return '具体元素b的操作'
    }

}

/** 对象结构角色 */

class Objectstructure {
    private list = new Set<ElementC>()

    accept(visit: Visitor) {
        this.list.forEach(v => {
            v.accept(visit);
        })
    }

    add(ec: ElementC) {
        this.list.add(ec);
    }

    remove(ec: ElementC) {
        this.list.delete(ec);
    }



}


/** 测试 */
const ea = new ConcreteElementA();
const eb = new ConcreteElementB();
const os = new Objectstructure();
os.add(ea);
os.add(eb);
const va = new ConcreteVisitorA();
const vb = new ConcreteVisitorB();
os.accept(va);
console.log('---------');
os.accept(vb)



/**
 * 应用场景
 * 当系统中存在类型数量稳定的一类数据结构时，可以将访问者模式方便地实现对该类型所有数据结构的不同操作，而不会对数据产生任何副作用(脏数据)
 * 1. 对象结构相对稳定，但其操作算法经常变化的程序
 * 2. 对象结构中的对象需要提供多种不同且不相关的操作，而且要避免让这些操作的变化影响对象的结构
 * 3. 对象结构包含很多类型的对象，希望对这些对象实施一些依赖于其具体类型的操作
 */

/**
 * 扩展：
 * 1. 与迭代器模式联用
 * 2. 与组合模式联用
 */
```


# 责任链模式 
```

/**
 * 责任链模式(职责链模式)
 * 1. 为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一个对象记住下一个对象的引用而连成一条链
 *    当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止
 */

/**
 * 优点：
 * 1. 降低了对象之间的耦合度，该模式使得一个对象无须知道到底哪一个对象处理其请求以及链的结构
 *    发送者和接收者也无须拥有对方的明确信息
 * 2. 增强了系统的可扩展性，可以根据需要增加新的请求处理类，满足开闭原则
 * 3. 增强了给对象指派职责的灵活性。当工作流程发生变化时，可以动态地改变链内的成员或者调动它们的次序，也可动态地新增或者删除责任
 * 4. 责任链简化了对象之间的连接，每个对象只需保持一个指向其后继者的引用，不需要保持其他处理者的引用
 * 5. 责任分担，每个类只需要处理自己该处理的工作，不该处理的传递给下一个对象完成，明确各类的责任范围，符合类的单一职责原则
 * 
 */

/**
 * 缺点：
 * 1. 不能保证每个请求一定被处理，由于一个请求没有明确的接收者，所以不能保证它一定会被处理
 * 2. 对比较长的职责链，请求的处理可能涉及多个处理对象，系统性能将受到一定影响
 * 3. 职责链建立的合理性要靠客户端来保证，增加了客户端的复杂性，可能由于职责链的错误设置而导致系统出错，则可能会造成循环调用
 * 
 */

/**
 * 角色：
 * 1. 抽象处理者角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接
 * 2. 具体处理者角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者
 * 3. 客户类角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程
 * 
 */

/** 抽象处理者角色 */
abstract class Handler{
    private next: Handler | null = null;

    setNext(next: Handler) {
        this.next = next;
    }

    getNext() {
        return this.next
    }

    abstract handleRequest(request: string): void;

}

/** 具体处理者角色1 */
class ConcreteHandler1 extends Handler {

    handleRequest(request: string): void {
        if(request === 'one') {
            console.log('具体处理者1处理该请求！！！！')
        } else{
            if(this.getNext()) {
               this.getNext()?.handleRequest(request)
            } else {
                console.log('没有人处理该请求！！！！')
            }
        }
    }
}

/** 具体处理者角色2 */
class ConcreteHandler2 extends Handler {

    handleRequest(request: string): void {
        if(request === 'two') {
            console.log('具体处理者2处理该请求！！！！')
        } else{
            if(this.getNext()) {
                this.getNext()?.handleRequest(request)
            } else {
                console.log('没有人处理该请求！！！！')
            }
        }
    }
}

const ch1 = new ConcreteHandler1();
const ch12= new ConcreteHandler2();

ch1.setNext(ch12);
ch1.handleRequest('two')


/**
 * 应用场景
 * 1. 多个对象可以处理一个请求，但具体由哪个对象处理该请求在运行时自动确认
 * 2. 可动态指定一组对象处理请求或添加新的处理者
 * 3。 需要在不明确指定请求处理者的情况下，向多个处理者中的一个提交请求
 */

/**
 * 扩展
 * 1. 纯的职责链模式：一个请求必须被某一个处理者对象所接收，且一个具体处理者对某个请求的处理只能采用以下两种行为之一：自己处理(承担责任)；把责任推给下家处理
 * 2. 不纯的职责链模式：允许出现某一个具体处理者对象在承担了请求的一部分责任后又将剩余责任传给下家的情况，且一个请求可以最终不被任何接收端对象所接收
 */
```


# 迭代器模式 
```

/**
 * 迭代器模式
 * 1. 提供一个对象来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示
 * 
 */

/**
 * 优点：
 * 1. 访问一个聚合对象的内容而无须暴露它的内部表示
 * 2. 遍历任务交由迭代器完成，这简化了聚合类
 * 3. 它支持以不同方式遍历一个聚合，甚至可以自定义迭代器的子类以支持新的遍历
 * 4. 增加新的聚合类和迭代器类都很方便，无须修改原有代码
 * 5. 封装性良好，为遍历不同的聚合结构提供一个统一的接口
 */

/**
 * 缺点：
 * 1. 增加了类的个数，这在一定程度上增加了系统的复杂性
 */

/**
 * 角色：
 * 1. 抽象聚合角色: 定义存储、添加、删除聚合对象以及创建迭代器对象的接口
 * 2. 具体聚合角色：实现抽象聚合类，返回一个具体迭代器的实例
 * 3. 抽象迭代器角色: 定义访问和遍历聚合元素的接口，通常包含hasNext(), first(), next()等方法
 * 4. 具体迭代器角色：实现抽象迭代器接口所定义的方法，完成对聚合对象的遍历，记录遍历的当前位置
 * 
 */


/** 抽象聚合 */
interface Aggregate<T> {
    add(obj: T): void;
    remove(obj: T): void;
    getIterator(): IteratorModel<T>;
}


/** 具体聚合 */
class ConcreteAggregate implements Aggregate<string>{
    private list = new Set<string>()
    add(obj: string) {
        this.list.add(obj);
    }
    remove(obj: string) {
        this.list.delete(obj);
    }
    getIterator(): IteratorModel<string> {
        return new ConcreteIterator(this.list)
    }

}


/** 抽象迭代器 */
interface IteratorModel<T> {
    first(): T;
    next(): T;
    hasNext(): boolean;
}

/** 具体迭代器 */
class ConcreteIterator implements IteratorModel<string> {
    private list: Set<string>;
    private index = -1;
    
    constructor(list: Set<string>) {
        this.list = list;
    }
    
    first(): string {
        this.index = 0;
        return [...this.list.values()][0]
    }
    next(): string {
        if(this.hasNext()) {
            return [...this.list.values()][++this.index] as string;
        }
        return '';
    }
    hasNext(): boolean {
        if(this.index < this.list.size - 1) {
            return true;
        }
        return false;
    }

   

}

const ca = new ConcreteAggregate();
ca.add('测试1');
ca.add('测试2')
ca.add('测试3')
ca.add('测试4')
const iter = ca.getIterator();
console.log(iter.first())
console.log(iter.next())

/**
 *  应用场景
 * 1. 当需要为聚合对象提供多种遍历方式时
 * 2. 当需要为遍历不同的聚合结构提供一个统一的接口时
 * 3. 当访问一个聚合对象而无须暴露其内部细节的表示时
 */
```


# 适配器模式 
```

/**
 * 适配器模式
 * 1. 分类结构型模式和对象结构型模式
 * 
 */

/**
 * 角色：
 * 1. 目标接口：当前系统业务所期待的接口，他可以是抽象类或者接口
 * 2. 适配者类：它是被访问和适配的现存组件库中的组件接口
 * 3. 适配者类：它是一个转换器，通过继承或者引用适配者的对象，把适配者接口转换为目标接口，让客户按目标接口的格式访问适配者
 */

/** 目标接口 */
interface Target{
    request(): void;
}

/** 适配者接口 */
class Adaptee{
    specificRequest(){
        console.log('适配者中的业务代码被调用')
    }
}

/** 类适配器 */
class ClassAdapter extends Adaptee implements Target{
    request(): void {
        this.specificRequest();
    }
    
}


/** 测试 */

const target = new ClassAdapter();

target.request();


/** 对象适配器 */
class ObjectAdapter implements Target{
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee
    }
    
    request(): void {
        this.adaptee.specificRequest();
    }
    
}

/** 测试 */
console.log('对象适配器测试')
const adaptee = new Adaptee();
const objectAdapter = new ObjectAdapter(adaptee);
objectAdapter.request();
```

