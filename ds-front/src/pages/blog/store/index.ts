import { createStore } from 'vuex';

export default createStore({
    state: {
        layoutData: {}, // 布局的数据
        mobleSiderStatus: false
    },
    getters: {
        getLayoutData: (state: any) => state.layoutData,
        getMobleSiderStatus: (state: any) => state.mobleSiderStatus,
    },
    mutations: {
        setLayoutData(state: any, layoutData: any) {
            state.layoutData = layoutData;
        },
        setMobleSiderStatus(state: any, bool: boolean) {
            state.mobleSiderStatus = bool;
        },
    },
    actions: {
        setLayoutData(store: any, data: any) {
            store.commit('setLayoutData', data);
        },
        setMobleSiderStatus(store: any, bool: boolean) {
            store.commit('setMobleSiderStatus', bool);
        },
    },
    modules: {},
});
