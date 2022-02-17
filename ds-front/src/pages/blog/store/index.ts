import { createStore } from 'vuex';

export default createStore({
    state: {
        layoutData: {}, // 布局的数据
        mobleSiderStatus: false, // sider是否展开
        blogDataList: [],
        projectDataList: [],
    },
    getters: {
        getLayoutData: (state: any) => state.layoutData,
        getMobleSiderStatus: (state: any) => state.mobleSiderStatus,
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
        setBlogData(state: any, blogDataList: any) {
            state.blogDataList = blogDataList;
        },
        setProjectData(state: any, projectDataList: any) {
            state.projectDataList = projectDataList;
        },
    },
    actions: {
        setLayoutData(store: any, data: any) {
            store.commit('setLayoutData', data);
        },
        setMobleSiderStatus(store: any, bool: boolean) {
            store.commit('setMobleSiderStatus', bool);
        },
        setBlogDataList(store: any, blogDataList: any[]) {
            blogDataList = blogDataList.map(da => {
                const fileNames = da.fileName.split("_$_");
                return {
                    time: fileNames[1].replaceAll("_", "/"),
                    classify: fileNames[2],
                    title: fileNames[3],
                    tags: fileNames[4].split(";"),
                    ...da,
                };
            })
            store.commit('setBlogData', blogDataList);
        },
        setProjectDataList(store: any, projectDataList: any[]) {
            projectDataList = projectDataList.map(da => {
                const fileNames = da.fileName.split("_$_");
                return {
                    time: fileNames[1].replaceAll("_", "/"),
                    classify: fileNames[2],
                    title: fileNames[3],
                    tags: fileNames[4].split(";"),
                    ...da,
                };
            });
            store.commit('setProjectData', projectDataList);
        },
    },
    modules: {},
});
