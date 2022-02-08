// store/modules/passenger.ts
import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import store from '@/pages/blog/store';

// dynamic: true: 动态创建动态模块,即new Vuex.Store({})里面不用注册的.空着就行,
// store,当前模块注册到store上.也可以写在getModule上,即getModule(PassengerStore,store)
// namespaced: true, name: 'global' 命名空间
@Module({
    name: 'global',
    dynamic: true,
    namespaced: true,
    store,
})
export default class GloableStore extends VuexModule {
    // state => 要public不然外面调用不到
    public layoutData = {};

    // getter
    get getLayoutData(): any {
        return this.layoutData;
    }

    @Mutation
    setLayoutData(data: any): void {
        console.log(data, '===================');
        this.layoutData = { ...data };
    }
    // commit的两种调用方式,第一种,Action后面的括号里面添加commit,然后return的结果就是USERINFO的参数
    @Action({ commit: 'setLayoutData' })
    disLayoutData(data: any) {
        console.log(data, '===================');
        return data;
    }
    //   // 第二种,直接this.USERINFO调用;
    //   @Action
    //   getLisi(): void {
    //     const user = { username: '李四', password: 'lisi' };
    //     this.context.commit('USERINFO', user); // commit调用
    //     // this.USERINFO(user); // 直接调用
    //   }
}
// 使用getModule: 对类型安全的访问
export const GloableStoreModule = getModule(GloableStore);
