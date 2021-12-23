import Vue from 'vue';
import Vuex from 'vuex';


import serverStoreModule from './servermodule'

Vue.use(Vuex);




export const store = new Vuex.Store({
    modules: {
        server: serverStoreModule
    }
})

export default store;