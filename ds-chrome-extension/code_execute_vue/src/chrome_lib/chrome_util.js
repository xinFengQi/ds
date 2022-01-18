const chromeApi = window.chrome;

let environment = 'web';
if (document.location.href.startsWith('chrome-extension')) {
    // 在chrome环境
    environment = 'chrome-extension'
}

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
        if (environment === 'chrome-extension') {
            if (!chromeApi || !chromeApi.storage) {
                resolve(null);
                return;
            }
            chromeApi.storage.sync.set({ [key]: newvalue }, () => {
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
async function getLocalVariable(key) {
    return new Promise((resolve) => {
        if (environment === 'chrome-extension') {
            if (!chromeApi || !chromeApi.storage) {
                resolve(null);
                return;
            }
            chromeApi.storage.sync.get({ [key]: null }, (item) => {
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

        if (chromeApi && chromeApi.bookmarks) {
            chromeApi.bookmarks.getTree(markNodes => {
                resolve(markNodes[0])
            });
        } else {
            resolve(null);
        }
    })
}


// 新建带链接的菜单显示
function addLinkMenu(title, src) {
    if (!chromeApi || !chromeApi.extension || !chromeApi.contextMenus || !chromeApi.tabs) {
        return null;
    }
    const scriptCodeSrc = chromeApi.extension.getURL(src);
    chromeApi.contextMenus.create({
        title: title,
        onclick: function () {
            chromeApi.tabs.create({ url: scriptCodeSrc });
        },
    });
}

// 新建分割线菜单显示
function addSeparatorMenu(title) {
    if (!chromeApi || !chromeApi.contextMenus) {
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
    if (!chromeApi || !chromeApi.contextMenus || !chromeApi.tabs) {
        return null;
    }
    const id = chromeApi.contextMenus.create({
        title: title,
        onclick: function () {
            chromeApi.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                console.log(tabs,)
                if (!tabs.length) {
                    return null;
                }
                if (tabs[0].url.startsWith('chrome://')) {
                    alert('不允许在标签页执行代码');
                    return null;
                }
                const tabId = tabs[0].id;
                chromeApi.tabs.executeScript(tabId, { code: code });
            });
        }
    });
    return id;
}

// 根据id删除菜单
function deleteMenu(id) {
    if (!chromeApi || !chromeApi.contextMenus) {
        return null;
    }
    chromeApi.contextMenus.remove(id);
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
    if (!chromeApi || !chromeApi.runtime) {
        return null;
    }
    chromeApi.runtime.sendMessage({ name: eventName, data: data }, function (response) {
        cb(response)
    });
}

// 监听消息
function onMessage(eventName, responseData, cb) {
    if (!chromeApi || !chromeApi.runtime) {
        return null;
    }
    chromeApi.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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