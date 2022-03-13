import localStorgeData from './localStorge.data';
import browerExtensionUtil from './brower_extension.util';
import {
    addOrUpdateData,
    getAll,
    getGiteeKey,
    getGiteeLocalStoreData,
} from './gitee.api';

// 获取书签
function getBookMarks(edit = false) {
    return new Promise((resolve, reject) => {
        let objAll = {};
        const next = (obj: any) => {
            objAll = { ...objAll, ...obj };
            if (
                !objAll.hasOwnProperty('getBookMarks') ||
                !objAll.hasOwnProperty('getRemoteBookMarks')
            ) {
                return;
            }
            resolve(
                handlerBooksMarks(
                    bookMarks ? bookMarks : [],
                    remoteBookMarkData
                )
            );
        };

        // 获取本地书签
        // tslint:disable-next-line: no-shadowed-variable
        let bookMarks: any = [];
        let remoteBookMarkData: any = null;

        if (!edit) {
            browerExtensionUtil
                .getBookmarks()
                .then((data) => {
                    if (data) {
                        bookMarks = data;
                    }
                    console.log('获取到的本地书签', bookMarks);
                    next({
                        getBookMarks: true,
                    });
                })
                .catch((err) => {
                    next({
                        getBookMarks: false,
                    });
                    console.log('没有获取到本地书签, 不在浏览器扩展中', err);
                });
        } else {
            next({
                getBookMarks: false,
            });
        }

        // 判断是否读取远程书签权限
        localStorgeData
            .getLocalVariable(getGiteeKey('booksMarks', 'private_open'))
            .then((v) => {
                if (!v) {
                    next({
                        getRemoteBookMarks: true,
                    });
                    return;
                }
                // 允许获取远程书签
                // 获取远程数据的accessToken
                getGiteeLocalStoreData('booksMarks', 'private')
                    .then((gf: any) => {
                        getAll(
                            gf.access,
                            gf.owner,
                            gf.repo,
                            'booksMarks',
                            gf.flag
                        )
                            .then((httpData) => {
                                remoteBookMarkData = httpData;
                                next({
                                    getRemoteBookMarks: true,
                                });
                            })
                            .catch((err) => {
                                console.log('获取远程数据不存在', err);
                                next({
                                    getRemoteBookMarks: false,
                                });
                            });
                    })
                    .catch((err) => {
                        console.log(
                            '获取远程数据的accessToken的值存在问题',
                            err
                        );
                        next({
                            getRemoteBookMarks: false,
                        });
                    });
            })
            .catch((err) => {
                console.log('没有获取到booksMarks, private_open的值', err);
                next({
                    getRemoteBookMarks: false,
                });
            });
    });
}

// 本地书签和远程书签 合并处理
function handlerBooksMarks(bookMarks: any[], remoteBookMarkData: any) {
    let remoteBookMarks = [];
    if (remoteBookMarkData && remoteBookMarkData.content) {
        remoteBookMarks = JSON.parse(
            decodeURIComponent(atob(remoteBookMarkData.content))
        );
        remoteBookMarks = remoteBookMarks.map((olDa: any) => {
            return {
                ...olDa,
                title: olDa.title || olDa.dateAdded,
                dateAdded: olDa.dateAdded,
            };
        });
    }
    if (bookMarks && bookMarks.length > 0) {
        bookMarks[0].title = '本地书签';
        remoteBookMarks = remoteBookMarks.filter(
            (v: any) => v.dateAdded !== bookMarks[0].dateAdded
        );
    }
    const machineMenu = [...bookMarks, ...remoteBookMarks];
    return machineMenu;
}

// 更新所有数据书签
function uploadBookMarks(bookMarks: any[]) {
    bookMarks = bookMarks ? bookMarks : [];
    return new Promise((relove, reject) => {
        getGiteeLocalStoreData('booksMarks', 'private')
            .then((daP: any) => {
                addOrUpdateData(
                    daP.access,
                    daP.owner,
                    daP.repo,
                    'booksMarks',
                    daP.flag,
                    bookMarks
                )
                    .then(() => {
                        relove(true);
                    })
                    .catch((err) => {
                        console.log('更新远程数据失败', err);
                        reject({ err });
                    });
            })
            .catch((err) => {
                console.log('获取私人标识报错', err);
                reject({ err });
            });
    });
}

// 获取公共书签
function getPublicBookMarks() {
    return new Promise((resolve, reject) => {
        // 判断是否读取远程书签权限
        localStorgeData
            .getLocalVariable(getGiteeKey('booksMarks', 'public_open'))
            .then((v) => {
                if (!v) {
                    return;
                }
                // 允许获取远程书签
                // 获取远程数据的accessToken
                getGiteeLocalStoreData('booksMarks', 'public')
                    .then((gf: any) => {
                        getAll(
                            gf.access,
                            gf.owner,
                            gf.repo,
                            'booksMarks',
                            gf.flag
                        )
                            .then((httpData) => {
                                resolve(handlerBooksMarks([], httpData));
                            })
                            .catch((err) => {
                                console.log('获取远程数据不存在', err);
                                reject({ msg: err });
                            });
                    })
                    .catch((err) => {
                        console.log(
                            '获取远程数据的accessToken的值存在问题',
                            err
                        );
                        reject({ msg: err });
                    });
            })
            .catch((err) => {
                console.log('没有获取到booksMarks, private_open的值', err);
                reject({ msg: err });
            });
    });
}

// 获取任务列表
function getTasklist() {
    return new Promise((resolve, reject) => {
        let publicData: any = null;
        let privateData: any = null;
        let objAll = {};
        const next = (obj: any) => {
            objAll = { ...objAll, ...obj };
            if (
                !objAll.hasOwnProperty('public') ||
                !objAll.hasOwnProperty('private')
            ) {
                return;
            }
            resolve(handlerPublicPrivateDataSingle(publicData, privateData));
        };

        localStorgeData
            .getLocalVariable(getGiteeKey('tasklist', 'private_open'))
            .then((v) => {
                if (!v) {
                    next({
                        getRemoteBookMarks: true,
                    });
                    return;
                }
                getGiteeLocalStoreData('tasklist', 'private')
                    .then((daP: any) => {
                        getAll(
                            daP.access,
                            daP.owner,
                            daP.repo,
                            'tasklist',
                            daP.flag
                        )
                            .then((httpData) => {
                                privateData = httpData;
                                next({ private: true });
                            })
                            .catch((err) => {
                                console.log('获取远程数据不存在', err);
                                next({ private: false });
                            });
                    })
                    .catch((err) => {
                        console.log('获取私人标识报错', err);
                        next({ private: false });
                    });
            });

        localStorgeData
            .getLocalVariable(getGiteeKey('tasklist', 'public_open'))
            .then((v) => {
                if (!v) {
                    next({
                        getRemoteBookMarks: true,
                    });
                    return;
                }
                getGiteeLocalStoreData('tasklist', 'public')
                    .then((daP: any) => {
                        getAll(
                            daP.access,
                            daP.owner,
                            daP.repo,
                            'tasklist',
                            daP.flag
                        )
                            .then((httpData) => {
                                publicData = httpData;
                                next({ public: true });
                            })
                            .catch((err) => {
                                console.log('获取远程数据不存在', err);
                                next({ public: false });
                            });
                    })
                    .catch((err) => {
                        console.log('获取公共标识报错', err);
                        next({ public: false });
                    });
            });
    });
}


function handlerPublicPrivateDataSingle(publicData: any, privateData: any) {
    const retuObj = {
        publicDatas: [],
        privateDatas: [],
    };

    if (publicData && publicData.content) {
        retuObj.publicDatas = JSON.parse(
            decodeURIComponent(atob(publicData.content))
        );
        retuObj.publicDatas = retuObj.publicDatas;
    }
    if (privateData && privateData.content) {
        retuObj.privateDatas = JSON.parse(
            decodeURIComponent(atob(privateData.content))
        );
        retuObj.privateDatas = retuObj.privateDatas;
    }
    return retuObj;
}



function handlerPublicPrivateData(publicData: any, privateData: any) {
    const retuObj = {
        publicDatas: [],
        privateDatas: [],
    };

    if (publicData && publicData.content) {
        retuObj.publicDatas = JSON.parse(
            decodeURIComponent(atob(publicData.content))
        );
        retuObj.publicDatas = retuObj.publicDatas[0];
    }
    if (privateData && privateData.content) {
        retuObj.privateDatas = JSON.parse(
            decodeURIComponent(atob(privateData.content))
        );
        retuObj.privateDatas = retuObj.privateDatas[0];
    }
    return retuObj;
}

// 更新任务列表
function uploadTaskList(taskList: any[]) {
    const newTaskList = taskList.map((v: any) => {
        return {
            title: v.title,
            time: v.time,
            content: v.content,
        };
    });
    return new Promise((relove, reject) => {
        console.log(Array.isArray(newTaskList))
        getGiteeLocalStoreData('tasklist', 'private')
            .then((daP: any) => {
                addOrUpdateData(
                    daP.access,
                    daP.owner,
                    daP.repo,
                    'tasklist',
                    daP.flag,
                    newTaskList
                )
                    .then(() => {
                        relove(true);
                    })
                    .catch((err) => {
                        console.log('更新远程数据失败', err);
                        reject({ err });
                    });
            })
            .catch((err) => {
                console.log('获取私人标识报错', err);
                reject({ err });
            });
    });
}

// 获取代码
function getCodes() {
    return new Promise((resolve, reject) => {
        let publicData: any = null;
        let privateData: any = null;
        let objAll = {};
        const next = (obj: any) => {
            objAll = { ...objAll, ...obj };
            if (
                !objAll.hasOwnProperty('public') ||
                !objAll.hasOwnProperty('private')
            ) {
                return;
            }
            resolve(handlerPublicPrivateData(publicData, privateData));
        };
        localStorgeData
            .getLocalVariable(getGiteeKey('codes', 'private_open'))
            .then((v) => {
                if (!v) {
                    next({
                        getRemoteBookMarks: true,
                    });
                    return;
                }
                getGiteeLocalStoreData('codes', 'private')
                    .then((daP: any) => {
                        getAll(
                            daP.access,
                            daP.owner,
                            daP.repo,
                            'codes',
                            daP.flag
                        )
                            .then((httpData: any) => {
                                privateData = httpData;
                                next({ private: true });
                            })
                            .catch((err) => {
                                console.log('获取远程数据不存在', err);
                                next({ private: false });
                            });
                    })
                    .catch((err) => {
                        console.log('获取私人标识报错', err);
                        next({ private: false });
                    });
            });

        localStorgeData
            .getLocalVariable(getGiteeKey('codes', 'public_open'))
            .then((v) => {
                if (!v) {
                    next({
                        getRemoteBookMarks: true,
                    });
                    return;
                }
                getGiteeLocalStoreData('codes', 'public')
                    .then((daP: any) => {
                        getAll(
                            daP.access,
                            daP.owner,
                            daP.repo,
                            'codes',
                            daP.flag
                        )
                            .then((httpData) => {
                                publicData = httpData;
                                next({ public: true });
                            })
                            .catch((err) => {
                                console.log('获取远程数据不存在', err);
                                next({ public: false });
                            });
                    })
                    .catch((err) => {
                        console.log('获取公共标识报错', err);
                        next({ public: false });
                    });
            });
    });
}

// 更新代码
function uploadCodes(codes: any[]) {
    return new Promise((relove, reject) => {
        getGiteeLocalStoreData('codes', 'private')
            .then((daP: any) => {
                addOrUpdateData(
                    daP.access,
                    daP.owner,
                    daP.repo,
                    'codes',
                    daP.flag,
                    codes
                )
                    .then(() => {
                        relove(true);
                    })
                    .catch((err) => {
                        console.log('更新远程数据失败', err);
                        reject({ err });
                    });
            })
            .catch((err) => {
                console.log('获取私人标识报错', err);
                reject({ err });
            });
    });
}

export default {
    getBookMarks,
    getPublicBookMarks,
    uploadBookMarks,
    getTasklist,
    uploadTaskList,
    getCodes,
    uploadCodes,
};
