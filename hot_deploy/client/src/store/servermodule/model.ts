



export interface ServerState {
  serverList: ServerOptions[];
  currentServerList: ServerOptions | null,
  serverProjectsList: { [key: string]: ProjectsList[] },
  // 正在处理的服务器项目
  serverProjectsHandlerList: { [key: string]: ProjectsList[] },
  serverLog: string
}


// 服务器的参数
export interface ServerOptions {
  value: string;
  label?: string;
  cpuAlreadyUse: string;
  upnetUse: string;
  downnetUse: string;
  memoryAlreadyUse: string;
  options?: ExtraServerOpteion | null;
  childrens?: ServerOptions[]
}

export interface ExtraServerOpteion {
  dec: string;
  domainName: string;
}

export interface ProjectsList {
  isDeploy: number;
  hotconfig: ProjectInfo;
  localaddress: string;
  baseUrl?: string;
  isOnlyShow?: number;
  redemeMd?: RedemeMd
}

interface RedemeMd {
  link?: string;
  type: string;
  content?: string
}

interface ProjectInfo {
  // 'node_server_front'  后端   'client_front' 前端
  type: 'node_server_front' | 'client_front';
  name: string;
  dec: string;
  isOnlyShow?: number
}


//eslint-disable-next-line
export function isToggleArrUtil(arr: any[], params: ServerOptions): any[] {
  const index = arr.findIndex(v => v.value === params.value);
  if (index > -1) {
    arr.splice(index, 1, params);
  } else {
    arr.push(params)
  }
  return arr
}