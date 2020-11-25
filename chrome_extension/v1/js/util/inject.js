function injectCustomJs(jsPath) {
	if (!jsPath) {
		return;
	}
	jsPath = jsPath;
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function () {
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.head.appendChild(temp);
}


messageUtil = {
	// 消息管理函数
	/*
	构造消息体
	{
		option: C|U|R|D   增 改  查 删
		messageId: string   消息id 标识唯一条消息
		message: json   消息内容
	}
	*/

	sendMessage: (option, messageId, message) => {
		// 发送消息，js间的消息传递
		const jsonData = {
			option,
			messageId,
			message
		}
		return new Promise((resolve, reject) => {
			chrome.runtime.sendMessage(jsonData, function (response) {
				resolve(response)
			});
		})
	},
	getData: function(dataJson){
		return new Promise(function(resolve, reject){
			// 读取数据，第一个参数是指定要读取的key以及设置默认值
			chrome.storage.sync.get(dataJson, function (items) {
				resolve(items)
			});
		})
	},
	getDataCB: function(dataJson, cb){
			// 读取数据，第一个参数是指定要读取的key以及设置默认值
			chrome.storage.sync.get(dataJson, function (items) {
				cb(items)
			});
	},
	setData: function(dataJson){
		// 保存数据  会存在数据覆盖，需做好数据拼接
		chrome.storage.sync.set(dataJson, function () {
			console.log('保存成功！');
		});
	}
}


// 查询数据
function RMethod(key, value, cb) {
    messageUtil.getDataCB({[key]: value}, v => {
		cb(v)
    })
}

// 增加数据
function ADDMethod(key, value, cb) {
    messageUtil.getDataCB({[key]: []}, function(v){
        messageUtil.setData({[key]: [...v[key], value]});
        RMethod(key, value, cb)
    })
}