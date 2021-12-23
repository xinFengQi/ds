
import { getIo } from '../handler/io.util'
import { Ds2Project } from './project.data'


export interface ServerOptions {
    value: string;
    label: string;
    ostype: string;
    allMemory: string;
    cpuAlreadyUse: string;
    upnetUse: string;
    memoryAlreadyUse: string;
    updatetime: number;
    port?: number,
    options?: ExtraServerOpteion;
    childrens?: ServerOptions[]
    _socket_ids?: string[];
    _socket_id?: string;
    parentServer?: {value: string}
}

interface ExtraServerOpteion {
    dec: string;
    domainName: string;
}



// 服务器资源
let osResouce: ServerOptions[] | null = null;
let osResouceChildren: ServerOptions[] = [];
// 增加一个父级服务器资源
function setOsResource(osResoucePrams: ServerOptions) {
    osResoucePrams = checkChldrenList(osResoucePrams);
    if(osResouce) {
        osResouce = isToggleArr(osResouce, osResoucePrams);
    } else {
        osResouce = [osResoucePrams]
    }
    getIo().emit('add_os_resouce', osResoucePrams);
    console.log('增加了一个父级服务器',osResoucePrams.updatetime,osResouce)
}

// 增加父服务器时检查子服务器列表
function checkChldrenList(osResoucePrams: ServerOptions) {
    osResouceChildren.forEach(
        v => {
            if(v.parentServer?.value === osResoucePrams.value ) {
                if(!osResoucePrams.childrens) {
                    osResoucePrams.childrens = []
                }
                osResoucePrams.childrens.push(v)
            }
        })
    return osResoucePrams;
}

// 增加一个子服务器资源
function setChildrenOsResource(osResoucePrams: ServerOptions) {
    // 加入子服务器列表缓存中
    osResouceChildren = isToggleArr(osResouceChildren, osResoucePrams);
    if(osResouce) {
        const index = osResouce.findIndex(v => v.value === osResoucePrams.parentServer?.value);
        if(index > -1) {
            if(!osResouce[index].childrens) {
                osResouce[index].childrens = []
            }
            if(!osResouce[index]._socket_ids) {
                osResouce[index]._socket_ids = []
            }
            osResouce[index].childrens = isToggleArr(osResouce[index].childrens as any[], osResoucePrams);
            osResouce[index]._socket_ids = isToggleArrString(osResouce[index]._socket_ids as any[], osResoucePrams._socket_id as string);
            getIo().emit('add_os_children_resouce', 
                {value: osResoucePrams.parentServer?.value,
                    data: osResouce[index].childrens});
            return true
        } else {
            console.log(`不存在此${osResoucePrams.parentServer?.value}父服务器`)
            return false;
        }
    } else {
        console.log(`不存在任何服务器资源`)
        return false;
    }
}

// 删除一个子服务器资源
function deleteChildrenOsResource(socketid: string) {
    const childIndex =  osResouceChildren.findIndex(v => v._socket_id === socketid);
    if(osResouce && childIndex > -1) {
        const osIndex = osResouce.findIndex( v => v.value === osResouceChildren[childIndex].parentServer?.value)
        if(osIndex> -1 && (osResouce as ServerOptions[])[osIndex].childrens) {
            const osChildernIndex = (osResouce as ServerOptions[])[osIndex].childrens?.findIndex( v => v._socket_id === socketid)
            if(osChildernIndex && osChildernIndex > -1) {
                osResouce[osIndex].childrens?.splice(osChildernIndex as number, 1);
                osResouce[osIndex]._socket_ids?.splice(osChildernIndex as number, 1);
                getIo().emit('add_os_children_resouce', 
                {value: osResouce[osIndex].value,
                    data: osResouce[osIndex].childrens});
            }
        }
    }
  
}

function isToggleArr(arr: any[], params: ServerOptions) {
    const index = arr.findIndex(v => v.value === params.value);
    if(index > -1) {
       arr.splice(index, 1, params);
    } else {
        arr.push(params)
    }
    return arr
}

function isToggleArrString(arr: any[], str: string) {
    const index = arr.findIndex(v => v === str);
    if(index > -1) {
       arr.splice(index, 1, str);
    } else {
        arr.push(str)
    }
    return arr
}


// 得到一个服务器资源
function getOsResource(value?: string) {
    if(value) {
        return osResouce?.find(v => v.value === value)
    } else {
        return osResouce;
    }
}
// 删除一个服务器资源
function deleteOsResource(value?: string, socketId?: string) {
    if(!osResouce) {
        return;
    }
    let index = -2;
    if(value) {
        index = osResouce.findIndex(v => v.value === value);
        
    }
    if(socketId) {
        index = osResouce.findIndex(v => v._socket_id === socketId);
    }
    if(index > -1) {
        osResouce.splice(index, 1)
        getIo().emit('delete_os_resouce', osResouce[index].value);
    }
   
}

// 项目资源
let prejectMap: { [key: string]: any } = {};

function setPreject(key: string, value: any, isMerge?: boolean) {
    if(isMerge && prejectMap[key]) {
        prejectMap[key] =  [ ...prejectMap[key], ...value]
    } else {
        prejectMap[key] = Ds2Project[key]? [...Ds2Project[key] , ...value]: value
    }
}

function getPreject(key?: any) {
    if(!key) {
        return prejectMap
    } else {
        return prejectMap[key]
    }
}

// 正在构建项目资源
let currentprejectMap: { [key: string]: any } = {};

function setcurrentPreject(key: string, value: any, opt?: 'add'|'delete') {
    if(!currentprejectMap[key]) {
        currentprejectMap[key] = []
    }
    if(opt === 'add') {
        currentprejectMap[key].push(value)
    } else if(opt === 'delete') {
        const index = currentprejectMap[key].findIndex((v:any) => v.localaddress === value.localaddress)    
        currentprejectMap[key].splice(index, 1);       
    }
}

function getcurrentPreject(key?: string) {
    if(!key) {
        return  currentprejectMap
    } else {
        return  currentprejectMap[key]
    }
}


// 正在构建的项目地址
let isbeBeingDelopy: string[] = [];

function setisbeBeingDelopy(dployAddress: string, opt?: 'add'|'delete') {
    if(opt === 'add') {
        isbeBeingDelopy.push(dployAddress)
    } else if(opt === 'delete') {
        const index = isbeBeingDelopy.findIndex(v => v === dployAddress)    
       isbeBeingDelopy.splice(index, 1);       
    }
}
function getisbeBeingDelopy() {
    return isbeBeingDelopy;
}

export {
    setOsResource,
    setChildrenOsResource,
    deleteChildrenOsResource,
    getOsResource,
    deleteOsResource,
    setPreject,
    getPreject,
    setcurrentPreject,
    getcurrentPreject,
    setisbeBeingDelopy,
    getisbeBeingDelopy
}