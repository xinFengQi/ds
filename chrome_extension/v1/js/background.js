// 右键菜单创建
const allMenu = chrome.contextMenus.create({
	title: "ds_扩展",
	onclick: function(){}
});

// 脚本管理
scriptCodeSrc = chrome.extension.getURL('html/menu_html/script_code.html');
chrome.contextMenus.create({
    title: "脚本管理",
    parentId: allMenu,
	onclick: function(){
        chrome.tabs.create({url: scriptCodeSrc});
    }
});


// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    switch(request.option) {
        case 'R':
            RMethod(request.messageId, request.message, sendResponse)
            break;
        case 'ADD':
            ADDMethod(request.messageId, request.message, sendResponse)
            break;
    }
        sendResponse('123333333333333333333')
	// console.log(request, sender, sendResponse);
});




