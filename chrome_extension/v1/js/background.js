// chrome.bookmarks.getTree(markNodes => {
//     this.marks = this.dumpTreeNodes(markNodes)[0].children;
// });


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
let getScriptNameList = []

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
        parentId: scriptCodeMenu,
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


