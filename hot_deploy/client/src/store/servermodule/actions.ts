import { Commit, Dispatch } from 'vuex';
import { ServerState } from './model';
import { get } from '../../common/axios'

const actions = {
    getServerList(context: { commit: Commit, state: ServerState, dispatch: Dispatch }): void {
        get('/hot_deploy/getOsResource').then(
            v => {
                console.log('获取服务器列表', v)
                if(v && v.data && v.data.length > 0) {
                    context.commit('addServerList', v.data)
                    context.dispatch('changeCurrentServerList', v.data[0].value)
                }
            });
    },
    updateServerListResourse(context: { commit: Commit, state: ServerState }): void {
        get(`/hot_deploy/updateOsResource?value=${context.state.currentServerList?.value}`).then(
            v => {
                console.log('更新当前服务器列表', v)
            });
    },
    changeCurrentServerList(context: { commit: Commit, state: ServerState }, value: string): void {
        context.commit('changeCurrentServerList', value)
        if (!context.state.serverProjectsList.hasOwnProperty(value)) {
            // 前往后台取值,更新项目列表及正在部署项目列表
            get(`/hot_deploy/getOsProject?value=${context.state.currentServerList?.value}`).then(
                v => {
                    console.log('获取服务器项目', v)
                    context.commit('updateServerProjectsList', {
                        value: context.state.currentServerList?.value,
                        projects: v.data.project, 
                    })
                    context.commit('updateServerProjectsHandlerList', {
                        value: context.state.currentServerList?.value,
                        projects: v.data.currentproject
                    })
                });
        }
    },
    // 执行部署方法
    executeDeploy(context: { commit: Commit, state: ServerState }, address: string): void {
        get(`/hot_deploy/executeDeploy?value=${context.state.currentServerList?.value}&address=${address}`).then(
            v => {
                console.log('开始部署', v)
            });
    },
    // 执行安装依赖
    executeInstallDepend(context: { commit: Commit, state: ServerState }, address: string): void {
        get(`/hot_deploy/installDepend?value=${context.state.currentServerList?.value}&address=${address}`).then(
            v => {
                console.log('开始安装依赖', v)
            });
    },
    

    // 所有的socket监听
    SOCKET_server_clent_test(): void {
        console.log('执行了这个action')
    }

}


export default actions;