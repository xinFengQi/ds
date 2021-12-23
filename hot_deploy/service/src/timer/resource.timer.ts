import { current_os } from '../handler/resource_lister'
import config from '../config';
import * as schedule from 'node-schedule'
import { setOsResource, getOsResource, ServerOptions } from '../cache/resource.cache';
import { isExistParentServer } from '../business/hot_deploy/client.socket'
import request from 'request';
import { chdir } from 'process';

function listerOsResource() {
    changeListerOsResource()
    const rule = new schedule.RecurrenceRule();
    rule.minute = [1, 31]
    schedule.scheduleJob(rule, () => {
        changeListerOsResource()
    })
}

function changeListerOsResource() {
    handlerGetResource().then(
        v => {
            console.log('检查资源完成')
        });;
}

// 处理现在获取的资源
function handlerGetResource() {
    return new Promise((reject, resolve) => {
        const selfResource: any = getOsResource(config.server.value);
        if (!selfResource ||
            (new Date().getTime() - selfResource.updatetime > 0)) {
            current_os().then(
                v => {
                    setOsResource({ ...v, updatetime: new Date().getTime(), ...config.server })
                    isExistParentServer({ ...v, updatetime: new Date().getTime(), ...config.server })
                    // 获取子服务器数据
                    getChildrenHandlerGetResource();
                    reject(true)
                });
        } else {
            reject(false)
        }
    })
}

// 处理子服务器的资源
function getChildrenHandlerGetResource() {
    const res = <ServerOptions>getOsResource(config.server.value);
    if (res && res.childrens) {
        res.childrens.forEach(
            v => {
                    request.get(`http://${v.value}:${v.port}/hot_deploy/updateOsResource`, (err, res, body) => {
                    if(!err) {
                        console.log('子服务器返回',JSON.parse(body).data[0])
                    } else {
                        console.log(res)
                    }
                    })
            });
    }
}

export {
    handlerGetResource,
    getChildrenHandlerGetResource,
    listerOsResource,
    changeListerOsResource
}