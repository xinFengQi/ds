
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



@apiMenu({ name: 'methodCenter', dec: '函数的处理' })
class methodCenterHttp {

    // 根据事件名获取事件
    @api({
        url: '/methodCenter/:methodName',
        type: 'post',
        dec: '根据事件名获取事件',
        resParam: [
            {
                field: 'data',
                dec: '参数',
                type: 'any',
            }
            
        ]
    })
    async extrueMethod(req, res) {
        const getData = await getRequestData.getRouterData(req);
        const postData = await getRequestData.getPostData(req);
        const item = methoddata.find(v => v.methodName === getData.methodName)
        if (item) {
            let returnData = '';
            if (postData && postData.data) {
              if(Array.isArray(postData.data)){
                    returnData = new Function(item.method)()(...postData.data)
                } else {
                    returnData = new Function(item.method)()(postData.data)
                }
            } else {
                returnData = new Function(item.method)()()
            }
            console.log(getData, postData)
            res.json(returnJSON.success(returnData))
        } else {
            res.json(returnJSON.fail('不存在此方法'));
        }

    }




}