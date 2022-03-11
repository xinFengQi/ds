import { getExtensionApi, isChrome, isFirefox } from './environment';

// 获取书签
function getBookmarks() {
    return new Promise((resolve) => {
        if (getExtensionApi() && getExtensionApi().bookmarks) {
            getExtensionApi().bookmarks.getTree((markNodes: any[]) => {
                resolve(markNodes);
            });
        } else {
            resolve(null);
        }
    });
}

// 新建带链接的菜单显示
function addLinkMenu(title: string, src: string) {
    if (
        !getExtensionApi() ||
        !getExtensionApi().extension ||
        !getExtensionApi().contextMenus ||
        !getExtensionApi().tabs
    ) {
        return null;
    }
    const scriptCodeSrc = getExtensionApi().extension.getURL(src);
    getExtensionApi().contextMenus.create({
        title,
        onclick: () => {
            getExtensionApi().tabs.create({ url: scriptCodeSrc });
        },
    });
}

// 新建分割线菜单显示
function addSeparatorMenu(title?: string) {
    if (!getExtensionApi() || !getExtensionApi().contextMenus) {
        return null;
    }
    // 菜单分割线
    (window as any).chrome.contextMenus.create({
        type: 'separator',
        title: title ? title : new Date().getTime() + '',
        // tslint:disable-next-line: no-empty
        onclick: () => {},
    });
}

// 新建执行代码的菜单展示
function addExtrueCodeMenu(title: string, code: string) {
    if (
        !getExtensionApi() ||
        !getExtensionApi().contextMenus ||
        !getExtensionApi().tabs
    ) {
        return null;
    }
    const id = getExtensionApi().contextMenus.create({
        title,
        onclick: () => {
            getExtensionApi().tabs.query(
                { active: true, currentWindow: true },
                (tabs: any[]) => {
                    if (!tabs.length) {
                        return null;
                    }
                    if (tabs[0].url.startsWith('chrome://')) {
                        alert('不允许在标签页执行代码');
                        return null;
                    }
                    const tabId = tabs[0].id;
                    getExtensionApi().tabs.executeScript(tabId, { code });
                }
            );
        },
    });
    return id;
}

// 根据id删除菜单
function deleteMenu(id: number) {
    if (!getExtensionApi() || !getExtensionApi().contextMenus) {
        return null;
    }
    getExtensionApi().contextMenus.remove(id);
}

/**
 *
 * 发送消息
 * @param {*} eventName
 * @param {*} data   发送的数据
 * @param {*} cb  发送被接收后的回调
 * @return {*}
 */
function sendMessage(eventName: string, data: any, cb: any) {
    if (!getExtensionApi() || !getExtensionApi().runtime) {
        return null;
    }
    if (isChrome()) {
        getExtensionApi().runtime.sendMessage(
            { name: eventName, data: data },
            (response: any) => {
                cb(response);
            }
        );
    } else if (isFirefox()) {
        getExtensionApi()
            .runtime.sendMessage({ name: eventName, data })
            .then((response: any) => {
                cb(response);
            });
    }
}

// 监听消息
function onMessage(eventName: string, responseData: any, cb: any) {
    if (!getExtensionApi() || !getExtensionApi().runtime) {
        return null;
    }
    getExtensionApi().runtime.onMessage.addListener(
        (request: any, sender: any, sendResponse: any) => {
            if (request.name === eventName) {
                cb(request.data);
            }
            sendResponse(responseData);
        }
    );
}

export default {
    addSeparatorMenu,
    addExtrueCodeMenu,
    sendMessage,
    deleteMenu,
    onMessage,
    getBookmarks,
    addLinkMenu,
};
