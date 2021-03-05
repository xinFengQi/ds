
const { api, apiMenu, getRequestData, returnJSON, io } = require('../util/getway_express');

const { addDB, getDBByKey, deleteDBByKey, getDB, updateDBByKey } = require('../db/dbUtil');



@apiMenu({ name: 'eventCenter', dec: '事件中心的http服务' })
class eventCenterHttp {

    // 增加一个事件
    @api({
        url: '/eventCenter/add',
        type: 'post',
        dec: '接受参数，增加新的事件',
        resParam: [
            {
                field: 'eventName',
                dec: '事件名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'type',
                dec: '类型',
                require: true,
                type: 'string', // global system modules department personal  topic
                default: 'global'
            },
            {
                field: 'isSelf',
                dec: '是否发送给自己',
                type: 'boolean',
                default: false
            },
        ]
    })
    async add(req, res) {
        const data = await getRequestData.getPostData(req);
        if (getDBByKey('eventData', 'data', 'eventName', data.eventName)) {
            res.json(returnJSON.fail({ message: '事件名已被注册' }))
            return;
        }
        addDB('eventData', 'data', data);
        res.json(returnJSON.success(data))
    }


    // 增加一个事件
    @api({
        url: '/eventCenter/update',
        type: 'put',
        dec: '根据事件名更新',
        resParam: [
            {
                field: 'eventName',
                dec: '事件名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'type',
                dec: '类型',
                require: true,
                type: 'string', // global system modules department personal  topic
                default: 'global'
            },
            {
                field: 'isSelf',
                dec: '是否发送给自己',
                type: 'boolean',
                default: false
            },
        ]
    })
    async update(req, res) {
        const data = await getRequestData.getPostData(req);
        if (updateDBByKey('eventData', 'data', 'eventName', data)) {
            res.json(returnJSON.success(data))

        } else {
            res.json(returnJSON.fail({ message: '不存在这个事件' }))

        }
    }

    // 删除一个事件
    @api({
        url: '/eventCenter/delete',
        type: 'delete',
        dec: '删除事件',
        resParam: [
            {
                field: 'eventName',
                dec: '事件名',
                require: true,
                type: 'string',
                default: 'test1'
            }
        ]
    })
    async delete(req, res) {
        const data = await getRequestData.getGetData(req);
        console.log(data)
        const deleteData = getDBByKey('eventData', 'data', 'eventName', data.eventName);
        if (deleteData) {
            deleteDBByKey('eventData', 'data', 'eventName', data.eventName);
            res.json(returnJSON.success(deleteData))
            return;
        }
        res.json(returnJSON.fail({ message: '事件名不存在' }))
    }

    // 获取事件
    @api({
        url: '/eventCenter/getAll',
        type: 'get',
        dec: '查询全部事件'
    })
    async getAll(req, res) {
        res.json(returnJSON.success(getDB('eventData', 'data')))
    }

    // 根据事件名获取事件
    @api({
        url: '/eventCenter/getOne',
        type: 'get',
        dec: '根据事件名获取事件',
        resParam: [
            {
                field: 'eventName',
                dec: '事件名',
                require: true,
                type: 'string',
                default: 'test1'
            }
        ]
    })
    async getOne(req, res) {
        const data = await getRequestData.getGetData(req);

        res.json(returnJSON.success(getDBByKey('eventData', 'data', 'eventName', data.eventName)))
    }



    // 发送事件
    @api({
        url: '/eventCenter/send',
        type: 'post',
        dec: '通过http请求发送事件',
        resParam: [
            {
                field: 'eventName',
                dec: '事件名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'id',
                dec: '房间id',
                require: true,
                type: 'string',
                default: 'default_system'
            },
            {
                field: 'data',
                dec: '发送的数据',
                type: 'any',
                default: '这是发送的数据'
            },
        ]
    })
    async send(req, res) {

        const data = await getRequestData.getPostData(req);
        console.log(data)
        // 发送给其他具有id或者房间
        function broadcast(type, id, name, data) {
            io[type](id).emit(name, data)
        }

        const eventData = getDBByKey('eventData', 'data', 'eventName', data.eventName)
        if (eventData) {
            eventData.forEach(v => {
                if (v.type === 'global') {
                    v.isSelf ? io['in'](data.id).emit(data.eventName, data.data) : io['to'](data.id).emit(data.eventName, data.data)
                } else {
                    v.isSelf ? broadcast('in', data.id, data.eventName, data.data)
                        : broadcast('to', data.id, data.eventName, data.data)
                }
            })
            res.json(returnJSON.success({ message: '发送成功' }))

        } else {
            res.json(returnJSON.fail({ message: '不存在这个事件', data }))

        }


    }


}