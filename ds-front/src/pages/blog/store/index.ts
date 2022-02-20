import { createStore } from 'vuex';

export default createStore({
    state: {
        layoutData: {}, // 布局的数据
        mobleSiderStatus: false,
        // 博客具体的数据
        blogConfig: {},
        blogList: [],
        projectList: [],
    },
    getters: {
        getLayoutData: (state: any) => state.layoutData,
        getMobleSiderStatus: (state: any) => state.mobleSiderStatus,
        getBlogConfig: (state: any) => state.blogConfig,
        getBlogList: (state: any) => state.blogList,
        getProjectList: (state: any) => state.projectList,
    },
    mutations: {
        setLayoutData(state: any, layoutData: any) {
            state.layoutData = layoutData;
        },
        setMobleSiderStatus(state: any, bool: boolean) {
            state.mobleSiderStatus = bool;
        },
        setBlogConfig(state: any, config: any) {
            state.blogConfig = config;
        },
        setBlogList(state: any, blogList: any[]) {
            state.blogList = blogList;
        },
        setProjectList(state: any, projectList: any[]) {
            state.projectList = projectList;
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
        setBlogList(store: any, blogList: any[]) {
            store.commit('setBlogList', blogList);
        },
        setProjectList(store: any, projectList: any[]) {
            store.commit('setProjectList', projectList);
        },
    },
    modules: {},
});
