
const { api, apiMenu, getRequestData, returnJSON } = require('../util/getway_express');

const fs = require('fs')


// 读取db，获取事件
const eventdata = JSON.parse(fs.readFileSync('./src/db/eventData.json').toString());


@apiMenu({ name: 'eventCenter', dec: '事件中心的http服务' })
class eventCenterHttp {

    // 发送事件
    @api({
        url: '/send',
        type: 'post',
        resParam: [{
            
        }]
    })
    async send(res, req) {
        const data = await getRequestData.getPostData(res);
        console.log(data)
        req.json({ a: data})
    }


    // 注册事件， 事件名唯一
    @api({
        url: '/registered',
        type: 'post'
    })
    registered(res, req) {
        eventdata.data.push({"eventName":"test52","type":"global"})
        req.json({ a: eventdata})
    }

    // 删除事件

    // 


}