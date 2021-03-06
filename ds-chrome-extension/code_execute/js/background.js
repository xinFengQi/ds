
// ==============================菜单管理=================================================================

// 脚本管理
scriptCodeSrc = chrome.extension.getURL('html/menu_html/script_code.html');
chrome.contextMenus.create({
    title: chrome.i18n.getMessage("codeManageMenuName"),
    onclick: function () {
        chrome.tabs.create({ url: scriptCodeSrc });
    }
});
// 菜单分割线
chrome.contextMenus.create({
    type: 'separator',
    title: "可执行脚本",
    onclick: function () {
    }
});



const scriptCodeMenuMap = {};
let getScriptNameList = [];
let scriptCodeMenu = null;

// 查询所有菜单
RMethod('getScriptName', [], (item) => {
    getScriptNameList = [...item.getScriptName];
    getScriptNameList.forEach(v => {
        createCodeMenu(v)
    })
});



// 根据脚本信息创建菜单
function createCodeMenu(v) {
    const id = chrome.contextMenus.create({
        title: v.name,
        onclick: function () {
            getCurrentTabId(tabId => {
                chrome.tabs.executeScript(tabId, { code: v.content });
            })
        }
    });
    scriptCodeMenuMap[v.idtime] = id
}

// 根据脚本信息修改菜单
function updateCodeMenu(v) {
    chrome.contextMenus.update(scriptCodeMenuMap[v.idtime], {
        title: v.name,
        parentId: scriptCodeMenu? scriptCodeMenu: null,
        onclick: function () {
            getCurrentTabId(tabId => {
                chrome.tabs.executeScript(tabId, { code: v.content });
            })
        }
    });
}


// 根据脚本信息修改菜单
function deleteCodeMenu(v) {
    chrome.contextMenus.remove(scriptCodeMenuMap[v.idtime]);
    delete(scriptCodeMenuMap[v.idtime])
}


// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.messageId === 'getScriptName') {
        menuScriptDataHandler(request)
    }
    sendResponse('background处理成功')
});


// 实时处理脚本信息修改时内容
function menuScriptDataHandler(request) {
    console.log(request)
    switch (request.option) {
        case 'ADD':
            createCodeMenu(request.message)
            break;
        case 'UPDATE':
            updateCodeMenu(request.message)
            break;
        case 'D':
            deleteCodeMenu(request.message)
            break;
    }
}


// =================================请求监听=================================================================


// 后期规划
// chrome.webRequest.onActionIgnored
// chrome.webRequest.onAuthRequired
// chrome.webRequest.onBeforeRedirect
// chrome.webRequest.onBeforeRequest
// chrome.webRequest.onBeforeSendHeaders
// chrome.webRequest.onCompleted
// chrome.webRequest.onErrorOccurred
// chrome.webRequest.onHeadersReceived
// chrome.webRequest.onResponseStarted
// chrome.webRequest.onSendHeaders

// 监听请求头
chrome.webRequest.onBeforeRequest.addListener(details => {
        console.log(details)
}, {urls: ["<all_urls>"]}, ["blocking"]);



// 塞入请求头
chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
	// details.requestHeaders.push({
    //     name:"xxx",
    //     value:"xxxx"
    // });
    console.log(details, '塞入头')
    return {
        requestHeaders: details.requestHeaders
    };
},
    {
        urls: ["<all_urls>"]
    },
    ["blocking", "requestHeaders", "extraHeaders"]
);