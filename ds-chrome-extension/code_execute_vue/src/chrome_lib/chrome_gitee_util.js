
import chromeUtil from "./chrome_util";
import axios from "axios";

function getBookMarks(edit = false) {
    return new Promise((resolve, reject) => {
        // 先去获取本地书签
        const getBook = chromeUtil.getBookmarks();
        const getDsFlag = chromeUtil.getLocalVariable("__gitee_ds_flag");
        const getGiteeAccess = chromeUtil.getLocalVariable("__gitee_access_token");
        const getGiteeOwner = chromeUtil.getLocalVariable("__gitee_owner");
        const getGiteeRepo = chromeUtil.getLocalVariable("__gitee_repo");

        Promise.all([
            getBook,
            getDsFlag,
            getGiteeAccess,
            getGiteeOwner,
            getGiteeRepo,
        ]).then((v) => {
            let machineMenu = [];
            if (v[1] && v[2] && v[3] && v[4]) {
                const getMatkBookUrl = `https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/contents/chrome_bookMark%2F${v[1]}.json?access_token=${v[2]}`;
                axios.get(getMatkBookUrl).then((httpV) => {
                    if (
                        httpV.data &&
                        ((Array.isArray(httpV.data) && httpV.data.length > 0) ||
                            !Array.isArray(httpV.data))
                    ) {
                        let oldContent = JSON.parse(
                            decodeURIComponent(atob(httpV.data.content))
                        ).map((olDa) => {
                            return {
                                ...olDa,
                                title: olDa.title || olDa.dateAdded,
                                dateAdded: olDa.dateAdded,
                            };
                        });
                        if (v[0] && !edit) {
                            oldContent = oldContent.filter(
                                (de) => (de.dateAdded !== v[0].dateAdded && de.children[0].dateAdded !== v[0].children[0].dateAdded)
                            );
                            machineMenu = [
                                {
                                    ...v[0],
                                    title: "本地书签",
                                    dateAdded: v[0].dateAdded,
                                },
                                ...oldContent,
                            ];
                        } else {
                            machineMenu = [...oldContent];
                        }
                        console.log("内容是", this.machineMenu);
                        resolve(machineMenu)
                    } else {
                        reject({ msg: 'gitee的数据获取错误' })
                    }
                });
            } else {
                if (v[0]) {
                    machineMenu = [
                        {
                            ...v[0],
                            title: "本地书签",
                            dateAdded: v[0].dateAdded,
                        },
                    ];
                    resolve(machineMenu)
                } else {
                    reject({ msg: '本地书签未获取到' })
                }
            }
        });
    })
}

function uploadBookMarks() {
    return new Promise((resolve) => {


        // 先去获取本地书签
        const getBook = chromeUtil.getBookmarks();
        const getDsFlag = chromeUtil.getLocalVariable("__gitee_ds_flag");
        const getGiteeAccess = chromeUtil.getLocalVariable("__gitee_access_token");
        const getGiteeOwner = chromeUtil.getLocalVariable("__gitee_owner");
        const getGiteeRepo = chromeUtil.getLocalVariable("__gitee_repo");

        Promise.all([
            getBook,
            getDsFlag,
            getGiteeAccess,
            getGiteeOwner,
            getGiteeRepo,
        ]).then((v) => {
            if (!v[1] || !v[2] || !v[3] || !v[4]) {
                console.log('存在配置为空')
                resolve(false);
                return;
            }
            axios.get(`https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/contents/chrome_bookMark%2F${v[1]}.json?access_token`
                + `=${v[2]}`).then(vFile => {
                    console.log('文件是否存在', vFile);
                    let data = new FormData();
                    data.append('access_token', v[2]);
                    const markNodes = v[0];
                    if (!markNodes) {
                        alert('本地没有书签');
                        return;
                    }
                    if (vFile.data && ((Array.isArray(vFile.data) && vFile.data.length > 0) || !Array.isArray(vFile.data))) {
                        const oldContent = JSON.parse(decodeURIComponent(atob(vFile.data.content)));
                        console.log('内容是', oldContent)
                        const index = oldContent.findIndex(vs => (vs.dateAdded === markNodes.dateAdded || vs.children[0].dateAdded !== markNodes.children[0].dateAdded))
                        if (index < 0) {
                            oldContent.push(markNodes)
                        } else {
                            oldContent[index] = markNodes;
                        }
                        data.append('content', btoa(encodeURIComponent(JSON.stringify(oldContent))));
                        data.append('message', v[1] + '更新书签');
                        data.append('sha', vFile.data.sha);
                        axios.put(`https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/contents/`
                            + `chrome_bookMark%2F${v[1]}.json`, data).then(vUpdate => {
                                if (vUpdate) {
                                    console.log('远程更新本地书签', vUpdate)
                                    resolve(true);
                                } else {
                                    alert('更新失败')
                                }
                            })
                    } else {
                        data.append('content', btoa(encodeURIComponent(JSON.stringify([markNodes]))));
                        data.append('message', v[1] + '新增书签');
                        axios.post(`https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/`
                            + `contents/chrome_bookMark%2F${v[1]}.json`, data).then(vAdd => {
                                if (vAdd) {
                                    console.log('远程新建本地书签', vAdd)
                                    resolve(true);
                                } else {
                                    alert('新增失败')
                                }
                            })
                    }
                })

        });
    });
}


function getCode() {
    // 先去获取本地书签
    const getDsFlag = chromeUtil.getLocalVariable("__gitee_code_ds_flag");
    const getDsPublicFlag = chromeUtil.getLocalVariable("__gitee_code_ds_pubilc_flag");
    const getGiteeAccess = chromeUtil.getLocalVariable("__gitee_code_access_token");
    const getGiteeOwner = chromeUtil.getLocalVariable("__gitee_code_owner");
    const getGiteeRepo = chromeUtil.getLocalVariable("__gitee_code_repo");

    return new Promise((resolve) => {
        Promise.all([
            getDsFlag,
            getDsPublicFlag,
            getGiteeAccess,
            getGiteeOwner,
            getGiteeRepo,
        ]).then((v) => {
            if (!v[0] || !v[2] || !v[3] || !v[4]) {
                console.log('存在配置为空')
                resolve(false);
                return;
            }
            const getPrivateCode = axios.get(`https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/contents/chrome_codeScript%2F${v[0]}.json?access_token=${v[2]}`);
            const getPublicCode = axios.get(`https://gitee.com/api/v5/repos/${v[3]}/${v[4]}/contents/chrome_codeScript%2F${v[1]}.json?access_token=${v[2]}`)
            Promise.all([getPrivateCode, v[1] ? getPublicCode : null]).then(code => {
                const privateCode = code[0].data, publicCode = code[1] && code[1].data;
                const retuObj = {};
                if (privateCode && ((Array.isArray(privateCode) && privateCode.length > 0) ||
                    !Array.isArray(privateCode))) {
                    console.log('存在私人脚本')
                    retuObj.privateCode = JSON.parse(decodeURIComponent(atob(privateCode.content)));
                }
                if (publicCode && ((Array.isArray(publicCode) && publicCode.length > 0) ||
                    !Array.isArray(publicCode))) {
                    console.log('存在公共脚本脚本')
                    retuObj.publicCode = JSON.parse(decodeURIComponent(atob(publicCode.content)));
                }
                resolve(retuObj)
            })
        });
    })

}

function uploadCode(codeList) {
    // 先去获取本地书签
    const getDsFlag = chromeUtil.getLocalVariable("__gitee_code_ds_flag");
    const getGiteeAccess = chromeUtil.getLocalVariable("__gitee_code_access_token");
    const getGiteeOwner = chromeUtil.getLocalVariable("__gitee_code_owner");
    const getGiteeRepo = chromeUtil.getLocalVariable("__gitee_code_repo");
    console.log(codeList);
    return new Promise((resolve) => {
        Promise.all([
            getDsFlag,
            getGiteeAccess,
            getGiteeOwner,
            getGiteeRepo,
        ]).then((v) => {
            if (!v[0] || !v[1] || !v[2] || !v[3]) {
                console.log('存在配置为空')
                resolve(false);
                return;
            }
            axios.get(`https://gitee.com/api/v5/repos/${v[2]}/${v[3]}/contents/chrome_codeScript%2F${v[0]}.json?access_token`
                + `=${v[1]}`).then(vFile => {
                    console.log('文件是否存在', vFile);
                    let data = new FormData();
                    data.append('access_token', v[1]);
                    if (vFile.data && ((Array.isArray(vFile.data) && vFile.data.length > 0) || !Array.isArray(vFile.data))) {
                        data.append('content', btoa(encodeURIComponent(JSON.stringify(codeList))));
                        data.append('message', v[1] + '更新书签');
                        data.append('sha', vFile.data.sha);
                        axios.put(`https://gitee.com/api/v5/repos/${v[2]}/${v[3]}/contents/`
                            + `chrome_codeScript%2F${v[0]}.json`, data).then(vUpdate => {
                                if (vUpdate) {
                                    console.log('远程更新脚本库', vUpdate)
                                    resolve(true);
                                } else {
                                    alert('更新失败')
                                }
                            })
                    } else {
                        data.append('content', btoa(encodeURIComponent(JSON.stringify(codeList))));
                        data.append('message', v[1] + '新增书签');
                        axios.post(`https://gitee.com/api/v5/repos/${v[2]}/${v[3]}/`
                            + `contents/chrome_codeScript%2F${v[0]}.json`, data).then(vAdd => {
                                if (vAdd) {
                                    console.log('远程新建脚本', vAdd)
                                    resolve(true);
                                } else {
                                    alert('新增失败')
                                }
                            })
                    }
                });
        });
    });
}


export default {
    getBookMarks,
    uploadBookMarks,
    getCode,
    uploadCode
}