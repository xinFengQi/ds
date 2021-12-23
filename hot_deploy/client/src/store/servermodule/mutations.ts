import { ServerState, ServerOptions, ProjectsList, isToggleArrUtil } from './model';

const mutations = {
    // 修改当前所有的服务器
    addServerList(state: ServerState, serverList: ServerOptions[]): void {
        state.serverList = serverList
    },
    // 修改当前选择的服务器
    changeCurrentServerList(state: ServerState, value: string): void {
        state.currentServerList =
            state.serverList.filter((v: ServerOptions) => v.value === value)[0];
    },
    // 更新当前服务器下的项目
    updateServerProjectsList(state: ServerState, data: { value: string, projects: ProjectsList[] }): void {
        state.serverProjectsList = {
            ...state.serverProjectsList, [data.value]: data.projects
        }
    },
    // 更新当前服务器下正在构建的项目
    updateServerProjectsHandlerList(state: ServerState, data: { value: string, projects: ProjectsList[] }): void {
        state.serverProjectsHandlerList = {
            ...state.serverProjectsHandlerList, [data.value]: data.projects
        }
    },
    // 通过value(ip)修改服务器的数据
    changeServerList(state: ServerState, changeServerData: ServerOptions): void {
        const index = state.serverList
            .findIndex(v => v.value === changeServerData.value);
        if (changeServerData.value === state.currentServerList?.value) {
            state.currentServerList = changeServerData;
        }
        state.serverList = state.serverList.splice(index, 1, changeServerData)
    },
    // 更新正在处理的项目列表


    // 所有的socket监听
    // set（增加或者更新）了一个父服务器
    SOCKET_add_os_resouce(state: ServerState, data: ServerOptions): void {
        state.serverList = [...isToggleArrUtil(state.serverList, data)]
        if (data.value === state.currentServerList?.value) {
            state.currentServerList = data;
        }
    },
    SOCKET_delete_os_resouce(state: ServerState, value: string): void {
        const index = state.serverList.findIndex(v => v.value === value);
        if (index > -1) {
            state.serverList.splice(index, 1)
            if (state.currentServerList?.value === state.serverList[index].value) {
                state.currentServerList = state.serverList[0]
            }
        }
    },
    // set(增加或者更新)一个子服务器
    SOCKET_add_os_children_resouce(state: ServerState, data: { value: string, data: ServerOptions[] }): void {
        const index = state.serverList.findIndex(v => v.value === data.value);
        if (index > -1) {
            state.serverList[index].childrens = data.data;
            state.serverList = [...state.serverList]
            if (state.currentServerList?.value === data.value) {
                state.currentServerList.childrens = data.data
                state.currentServerList = { ...state.currentServerList }
            }
        }
    },
    // set正在构建的项目
    SOCKET_updateServerProjectsHandlerList(state: ServerState, data: { value: string, projects: ProjectsList[] }): void {
        state.serverProjectsHandlerList = {
            ...state.serverProjectsHandlerList, [data.value]: data.projects
        }
    },
    // 获取实时的log
    SOCKET_serverlog(state: ServerState, data: {message: string[]}): void {
        data.message = data.message.map(
            v => {
                if(typeof v === 'object') {
                    return JSON.stringify(v)
                } else {
                    return v
                }
            });
        state.serverLog = state.serverLog + data.message.join('\n') + '\n\n'
    },
    // SOCKET__serverlogCommon(state: ServerState, data: string): void {
    //     state.serverLog = state.serverLog + data
    // },
    deleteServerLog(state: ServerState): void {
        state.serverLog = ''
    }
}

export default mutations;