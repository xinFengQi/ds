import express from 'express';
import config from '../../config';
import request from 'request'
const router = express.Router();
import { getOsResource, getisbeBeingDelopy, setisbeBeingDelopy, getPreject, setcurrentPreject, getcurrentPreject } from '../../cache/resource.cache'
import { handlerResponse, ResponseStatus } from '../../util/response.util'

import { handlerGetResource } from '../../timer/resource.timer'
import { getIo } from '../../handler/io.util';

const { startDeploy, startChildrenDeploy, nodeNpmCmdInstall, nodeChildrenNpmCmdInstall } = require('../../handler/git_operate');


// 服务器未完全检查完成时或者更新服务器检查时调用的函数
function updateResource(res: any) {
    handlerGetResource().then(
        v => {
            if (v) {
                res.json(handlerResponse(ResponseStatus.success, getOsResource()));
            } else {
                res.json(handlerResponse(ResponseStatus.success, { _message: '调用上次检查服务器数据', ...getOsResource() }));
            }
        });
}

// 获取服务器资源数据
router.get('/getOsResource', (req, res) => {
    if (getOsResource()) {
        res.json(handlerResponse(ResponseStatus.success, getOsResource()));
    } else {
        updateResource(res)
    }
});


// 获取更新的资源
router.get('/updateOsResource', (req, res) => {
    const { value } = req.query;
    if (value && value !== config.server.value) {
        // 通过socket去其他服务器取值
        const v: any = getOsResource(value as string)
        request.get(`http://${v.value}:${v.port}/hot_deploy/updateOsResource`, (err, resreq, body) => {
            if (!err) {
                console.log('子服务器返回', JSON.parse(body).data)
                res.json(handlerResponse(ResponseStatus.success, JSON.parse(body).data));
            } else {
                res.json(handlerResponse(ResponseStatus.success, { _message: '出现错误' }));
            }
        })
    } else {
        updateResource(res)
    }
})

// 获取服务器下面的项目
router.get('/getOsProject', (req, res) => {
    const { value } = req.query;
    if (value && value !== config.server.value) {
        const osResource: any = getOsResource(value as string)
        request.get(`http://${osResource.value}:${osResource.port}/hot_deploy/getOsProject?value=${osResource.value}`,
            (err, resa, body) => {
                if (!err) {
                    res.json(handlerResponse(ResponseStatus.success,
                        { project: JSON.parse(body).data.project, currentProject: JSON.parse(body).data.currentProject }));
                } else {
                    console.log(resa)
                    res.json(handlerResponse(ResponseStatus.success, { _message: '获取失败' }));
                }
            })
    } else {
        if (!getPreject(value as string)) {
            res.json(handlerResponse(ResponseStatus.success, { _message: '此服务器不存在' }));
            return;
        }
        if (value) {
            res.json(handlerResponse(ResponseStatus.success,
                { project: getPreject(value as string), currentProject: getcurrentPreject(value as string) }));
        } else {
            res.json(handlerResponse(ResponseStatus.success,
                { project: getPreject(config.server.value), currentProject: getcurrentPreject(config.server.value) }));
        }
    }

});

// 执行部署
router.get('/executeDeploy', (req, res) => {
    const { address, value } = req.query;
    if (value && value !== config.server.value) {
        // 通过socket去其他服务器取值
        startChildrenDeploy(getOsResource(value as string), address)
        res.json(handlerResponse(ResponseStatus.success, { _message: '服务器开始构建' }));
    } else {
        if (address) {
            const index = getisbeBeingDelopy().findIndex(v => v === address)
            if (index > -1) {
                res.json(handlerResponse(ResponseStatus.tooManyRes, { _message: '此项目正在构建' }));
            } else {
                setisbeBeingDelopy(address as string, 'add')
                const projectInfo = getPreject(value as string).find((v: any) => v.localaddress === address)
                setcurrentPreject(value as string, projectInfo, 'add');
                getIo().emit('updateServerProjectsHandlerList',
                    { value: value, projects: getcurrentPreject(value as string) })
                startDeploy(address, (message: any) => {
                    console.log(message)
                    // 通过socket往前面弹消息
                    if (message.status && message.status === 'success') {
                    }
                    // 通过socket通知构建完成
                    setisbeBeingDelopy(address as string, 'delete');
                    setcurrentPreject(value as string, projectInfo, 'delete');
                    getIo().emit('updateServerProjectsHandlerList',
                        { value: value, projects: getcurrentPreject(value as string) })

                })
                res.json(handlerResponse(ResponseStatus.success, { _message: '服务器开始构建' }));
            }

        } else {
            res.json(handlerResponse(ResponseStatus.success, { _message: '地址不存在' }));
        }
    }
})


// 安装依赖
router.get('/installDepend', (req, res) => {
    const { value, address } = req.query;
    const project = getPreject(value as string).find((v: any) => v.localaddress === address)
    console.log(value, address)
    if (value && value !== config.server.value) {
        // 通过socket去其他服务器取值
        const v: any = getOsResource(value as string)
        nodeChildrenNpmCmdInstall(v, project)
    } else {
        setcurrentPreject(value as string, project, 'add');
        nodeNpmCmdInstall(getOsResource(value as string), project, () => {
            setcurrentPreject(value as string, project, 'delete');
        })
    }
    res.json(handlerResponse(ResponseStatus.success, { _message: '依赖开始安装' }));
})

module.exports = router;