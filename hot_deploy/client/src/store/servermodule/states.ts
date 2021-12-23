
import { serverList, projects } from './mockdata';
import { ServerOptions, ExtraServerOpteion, ServerState, ProjectsList } from './model';
const mock = true;


const states: ServerState = {
    // 服务器列表及资源
    serverList: mock ? serverList : [],
    currentServerList: mock ? serverList[0] : null,
    // 服务器项目及资源
    serverProjectsList: mock ? { [serverList[0].value]: projects } : {},
    // 正在处理的服务器项目
    serverProjectsHandlerList: mock ? { [serverList[0].value]: [projects[0], projects[2]] } : {},
    // 服务器此时执行的log
    serverLog: ''
}

const getters = {
    // 获取所有的服务器集群列表
    getServerList(state: ServerState): ServerOptions[] {
        return state.serverList
    },
    // 获取当前选中的服务器集群
    getCurrentServerList(state: ServerState): ServerOptions | null {
        return state.currentServerList
    },
    // 获取当前选择服务器集群的ip(value)
    getCurrentServerListValue(state: ServerState): string | null {
        return state.currentServerList && state.currentServerList.value
    },
    // 获取当前选择服务器集群的描述
    getCurrentServerListOptions(state: ServerState): ExtraServerOpteion | null | undefined {
        return state.currentServerList && state.currentServerList.options
    },
    // 获取当前所有项目
    getServerProjectsList(state: ServerState): ProjectsList[] {
        return state.currentServerList ? state.serverProjectsList[state.currentServerList.value] : [];
    },
    // 获取当前所有项目
    getServerProjectsHandlerList(state: ServerState): ProjectsList[] {
        return state.currentServerList ? state.serverProjectsHandlerList[state.currentServerList.value] : [];
    },
    // 获取服务端日子
    getServerLog(state: ServerState): string {
        return state.serverLog;
    }
}


export { states, getters };