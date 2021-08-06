const chromeApi = window.chrome;

// 设置变量
function setLocalVariable(key, value) {
    return new Promise((resolve) => {
        if (chromeApi && chromeApi.storage) {
            chromeApi.storage.sync.set({ [key]: value }, () => {
                resolve(true);
            })
        } else {
            resolve(null);
        }
    })

}


// 获取变量
async function getLocalVariable(key) {
    return new Promise((resolve) => {
        if (chromeApi && chromeApi.storage) {
            chromeApi.storage.sync.get({ [key]: null }, (item) => {
                resolve(item[key])
            })
        } else {
            resolve(null);
        }
    })

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



export default {
    getBookmarks,
    getLocalVariable,
    setLocalVariable
}