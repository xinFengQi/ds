let extensionApi = window.chrome;

let environment = 'web';

var explorer = navigator.userAgent;
if (!window.vscode && explorer.indexOf("Chrome") >= 0 && explorer.indexOf("Safari") >= 0) {
    // 在chrome环境
    environment = 'chrome-extension'
    extensionApi = window.chrome;

}
if (explorer.indexOf("Firefox") >= 0) {
    // 在火狐环境中
    environment = 'firefox-extension'
    extensionApi = window.browser;
}
if (location.protocol === 'vscode-webview:') {
    environment = 'web'
    extensionApi = window.chrome;
}
console.log('=============================================', window, window.vscode, environment)
const extennsions = ['chrome-extension', 'firefox-extension'];

// 订阅数据监听的代码
let subIndex = 0;
let subs = [];

function webLocalStorgeValue(value) {
    if (typeof value === 'number') {
        return value + ''
    } else if (typeof value === 'object') {
        return JSON.stringify(value)
    } else if (!value) {
        value = '';
    }
    return value;
}

function getWebLocalStorgeValue(value) {
    if (!isNaN(Number(value))) {
        return Number(value);
    } else if (value.startsWith('[') && value.endsWith(']')) {
        return JSON.parse(value)
    }
    return value;
}

/**
 *
 * 设置变量
 * @param {*} key
 * @param {*} value 支持者数组,json,数值，字符串
 * @return {*} 
 */
function setLocalVariable(key, value) {
    return new Promise((resolve) => {
        let newvalue = value;
        if (extennsions.includes(environment)) {
            if (!extensionApi || !extensionApi.storage) {
                resolve(null);
                return;
            }
            extensionApi.storage.local.set({ [key]: newvalue }, () => {
                resolve(true);
            })
        } else if (environment === 'web') {
            newvalue = webLocalStorgeValue(value);
            localStorage.setItem(key, newvalue);
            resolve(true);
        } {
            resolve(null);
        }
        subs.filter(v => v.key === key).forEach(v => {
            v.fn.apply(this, [value])
        })
    })

}


// 获取变量
function getLocalVariable(key) {
    return new Promise((resolve) => {
        if (extennsions.includes(environment)) {
            if (!extensionApi || !extensionApi.storage) {
                resolve(null);
                return;
            }
            extensionApi.storage.local.get({ [key]: null }, (item) => {
                resolve(item[key])
            })
        } else if (environment === 'web') {
            const data = localStorage.getItem(key);
            if (data) {
                resolve(getWebLocalStorgeValue(data));
            } else {
                resolve(null);
            }
        } else {
            resolve(null);
        }
    })
}


async function getLocalVariableSub(key, cb) {
    const subI = subIndex + 1;
    const data = await getLocalVariable(key);
    cb(data);
    subs.push({ id: subI, key, fn: cb });
    return subI;
}

function deleteLocalVariableSub(subI) {
    this.subs = this.subs.filter(v => v.id !== subI);
}




// 获取书签
async function getBookmarks() {
    return new Promise((resolve) => {
        if (extensionApi && extensionApi.bookmarks) {
            extensionApi.bookmarks.getTree(markNodes => {
                resolve(markNodes[0])
            });
        } else {
            resolve(null);
        }
    })
}


// 新建带链接的菜单显示
function addLinkMenu(title, src) {
    if (!extensionApi || !extensionApi.extension || !extensionApi.contextMenus || !extensionApi.tabs) {
        return null;
    }
    const scriptCodeSrc = extensionApi.extension.getURL(src);
    extensionApi.contextMenus.create({
        title: title,
        onclick: function () {
            extensionApi.tabs.create({ url: scriptCodeSrc });
        },
    });
}

// 新建分割线菜单显示
function addSeparatorMenu(title) {
    if (!extensionApi || !extensionApi.contextMenus) {
        return null;
    }
    // 菜单分割线
    window.chrome.contextMenus.create({
        type: "separator",
        title: title ? title : new Date().getTime() + '',
        onclick: function () { },
    });
}

// 新建执行代码的菜单展示
function addExtrueCodeMenu(title, code) {
    if (!extensionApi || !extensionApi.contextMenus || !extensionApi.tabs) {
        return null;
    }
    const id = extensionApi.contextMenus.create({
        title: title,
        onclick: function () {
            extensionApi.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (!tabs.length) {
                    return null;
                }
                if (tabs[0].url.startsWith('chrome://')) {
                    alert('不允许在标签页执行代码');
                    return null;
                }
                const tabId = tabs[0].id;
                extensionApi.tabs.executeScript(tabId, { code: code });
            });
        }
    });
    return id;
}

// 根据id删除菜单
function deleteMenu(id) {
    if (!extensionApi || !extensionApi.contextMenus) {
        return null;
    }
    extensionApi.contextMenus.remove(id);
}


/**
 * 
 * 发送消息
 * @param {*} eventName
 * @param {*} data   发送的数据
 * @param {*} cb  发送被接收后的回调
 * @return {*} 
 */
function sendMessage(eventName, data, cb) {
    if (!extensionApi || !extensionApi.runtime) {
        return null;
    }
    if (environment === 'chrome-extension') {
        extensionApi.runtime.sendMessage({ name: eventName, data: data }, function (response) {
            cb(response)
        });
    } else if (environment === 'firefox-extension') {
        extensionApi.runtime.sendMessage({ name: eventName, data: data }).then((response) => {
            cb(response)
        })
    }

}

// 监听消息
function onMessage(eventName, responseData, cb) {
    if (!extensionApi || !extensionApi.runtime) {
        return null;
    }
    extensionApi.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.name === eventName) {
            cb(request.data)
        }
        sendResponse(responseData)
    });
}



export default {
    getBookmarks,
    getLocalVariable,
    getLocalVariableSub,
    deleteLocalVariableSub,
    setLocalVariable,
    addLinkMenu,
    addSeparatorMenu,
    addExtrueCodeMenu,
    deleteMenu,
    sendMessage,
    onMessage,
}