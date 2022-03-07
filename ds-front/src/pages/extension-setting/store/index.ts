import { createStore } from 'vuex';

export default createStore({
    state: {
        personalSetting: null,
        userName: '',
    },
    getters: {
        getPersonalSetting: (state: any) => state.personalSetting,
        getUserName: (state: any) => state.userName,
    },
    mutations: {
        setPersonalSetting(state: any, personalSetting: any) {
            state.personalSetting = personalSetting;
        },
        setUserName(state: any, userName: string) {
            state.userName = userName;
        },
    },
    actions: {
        setPersonalSetting(store: any, data: any) {
            store.commit('setPersonalSetting', data);
        },
        setUserName(store: any, data: string) {
            store.commit('setUserName', data);
        },
    },
    modules: {},
});
