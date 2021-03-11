
const { api, apiMenu, getRequestData, returnJSON, io } = require('../util/getway_express');

const { addDB, getDBByKey, deleteDBByKey, getDB, updateDBByKey } = require('../db/dbUtil');


const methoddata = getDB('methodData', 'data');

if (methoddata) {
    methoddata.forEach(me => {
        me.methodFunction = new Function(me.method)()
    })
} else {
    methoddata = [];
}


const cb = (data) => {
    data.methodFunction = new Function(data.method)()
    return data;
}
@apiMenu({ name: 'methodCenter', dec: '函数的处理' })
class methodCenterHttp {

    // 根据方法名执行方法
    @api({
        url: '/methodCenter/excute/:methodName',
        type: 'post',
        dec: '根据方法名执行方法',
        resParam: [
            {
                field: 'data',
                dec: '参数',
                type: 'any',
            }

        ]
    })
    async extrueMethod(req, res, th) {
        const getData = await getRequestData.getRouterData(req);
        const postData = await getRequestData.getPostData(req);
        const item = methoddata.find(v => v.methodName === getData.methodName)
        if (!item) {
            res.json(returnJSON.fail('不存在此方法'));
            return;
        }

        if (!item.methodFunction) {
            res.json(returnJSON.fail('请在方法后面返回主方法'));
            return;
        }
        try {
            let returnData = '';
            if (postData && postData.data) {
                if (Array.isArray(postData.data)) {
                    returnData = item.methodFunction(...postData.data)
                } else {
                    returnData = item.methodFunction(postData.data)
                }
            } else {
                returnData = item.methodFunction()
            }
            console.log(getData, postData)
            res.json(returnJSON.success(returnData))
        } catch (error) {
            res.json(returnJSON.error({ message: '方法执行失败', error: error.toString() }));
        }
    }


    // 增加一个方法
    @api({
        url: '/methodCenter/add',
        type: 'post',
        dec: '接受参数，增加新的方法',
        resParam: [
            {
                field: 'methodName',
                dec: '方法名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'method',
                dec: '方法',
                require: true,
                type: 'string', // global system modules department personal  topic
                default: 'function main(...params){ return params}  return main'
            },
        ]
    })
    async add(req, res) {
        const data = await getRequestData.getPostData(req);
        if(!data.methodName || !data.method) {
            res.json(returnJSON.error({ message: '参数缺少' }))
            return;
        }
        if (getDBByKey('methodData', 'data', 'methodName', data.methodName)) {
            res.json(returnJSON.fail({ message: '方法名已被注册' }))
            return;
        }
        addDB('methodData', 'data', data, cb);
        res.json(returnJSON.success(data))
    }


    // 更新一个方法
    @api({
        url: '/methodCenter/update',
        type: 'put',
        dec: '根据方法名更新',
        resParam: [
            {
                field: 'methodName',
                dec: '方法名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'method',
                dec: '方法',
                require: true,
                type: 'string', // global system modules department personal  topic
                default: 'function main(...params){ return params}  return main'
            },
        ]
    })
    async update(req, res) {
        const data = await getRequestData.getPostData(req);
        if(!data.methodName || !data.method) {
            res.json(returnJSON.error({ message: '参数缺少' }))
            return;
        }
        if (updateDBByKey('methodData', 'data', 'methodName', data, cb)) {
            res.json(returnJSON.success(data))

        } else {
            res.json(returnJSON.fail({ message: '不存在这个方法' }))

        }
    }

    // 删除一个方法
    @api({
        url: '/methodCenter/delete',
        type: 'delete',
        dec: '删除方法',
        resParam: [
            {
                field: 'methodName',
                dec: '方法名',
                require: true,
                type: 'string',
                default: 'test1'
            }
        ]
    })
    async delete(req, res) {
        const data = await getRequestData.getGetData(req);
        console.log(data)
        const deleteData = getDBByKey('methodData', 'data', 'methodName', data.methodName);
        if (deleteData) {
            deleteDBByKey('methodData', 'data', 'methodName', data.methodName);
            res.json(returnJSON.success(deleteData))
            return;
        }
        res.json(returnJSON.fail({ message: '方法名不存在' }))
    }

    // 查询全部方法
    @api({
        url: '/methodCenter/getAll',
        type: 'get',
        dec: '查询全部方法'
    })
    async getAll(req, res) {
        res.json(returnJSON.success(getDB('methodData', 'data')))
    }

    // 根据方法名获取方法
    @api({
        url: '/methodCenter/getOne',
        type: 'get',
        dec: '根据方法名获取方法',
        resParam: [
            {
                field: 'methodName',
                dec: '方法名',
                require: true,
                type: 'string',
                default: 'test1'
            }
        ]
    })
    async getOne(req, res) {
        const data = await getRequestData.getGetData(req);

        res.json(returnJSON.success(getDBByKey('methodData', 'data', 'methodName', data.methodName)))
    }



}