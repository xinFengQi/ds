import { states, getters } from './states';
import mutations from './mutations';
import actions from './actions'

const serverStoreModule = {
    namespaced: true,
    state: states,
    getters,
    mutations,
    actions
}


export default serverStoreModule;