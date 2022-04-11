import { createStore } from 'vuex'

export default createStore({
  state: {
      allData: {}
  },
  getters: {
      getAllData: (state: any) => state.allData
  },
  mutations: {
      setAllData(state: any, layoutData: any) {
          state.allData = layoutData;
      }
  },
  actions: {
      setAllData(store: any, data: any) {
          store.commit('setAllData', data);
      }
  },
  modules: {},
});
