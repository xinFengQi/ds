import { createStore } from 'vuex';

export default createStore({
    state: {
        layoutData: {}, // 布局的数据
        mobleSiderStatus: false,
        // 博客具体的数据
        blogConfig: {},
        blogDataList: [],
        projectDataList: [],
    },
    getters: {
        getLayoutData: (state: any) => state.layoutData,
        getMobleSiderStatus: (state: any) => state.mobleSiderStatus,
        getBlogConfig: (state: any) => state.blogConfig,
        getBlogDataList: (state: any) => state.blogDataList,
        getProjectDataList: (state: any) => state.projectDataList,
    },
    mutations: {
        setLayoutData(state: any, layoutData: any) {
            state.layoutData = layoutData;
        },
        setMobleSiderStatus(state: any, bool: boolean) {
            state.mobleSiderStatus = bool;
        },
        setBlogConfig(state: any, config: any) {
            state.blogConfig = {...config};
        },
        setBlogDataList(state: any, blogDataList: any) {
            state.blogDataList = [...blogDataList];
        },
        setProjectDataList(state: any, projectDataList: any) {
            state.projectDataList = [...projectDataList];
        },
    },
    actions: {
        setLayoutData(store: any, data: any) {
            store.commit('setLayoutData', data);
        },
        setMobleSiderStatus(store: any, bool: boolean) {
            store.commit('setMobleSiderStatus', bool);
        },
        setBlogConfig(store: any, config: any) {
            store.commit('setBlogConfig', config);
        },
        setBlogDataList(store: any, blogDataList: any[]) {
            store.commit('setBlogDataList', blogDataList);
        },
        setProjectDataList(store: any, projectDataList: any[]) {
            store.commit('setProjectDataList', projectDataList);
        },
    },
    modules: {},
});
