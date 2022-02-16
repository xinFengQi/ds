import * as axios from 'axios';
import localStorgeData from './localStorge.data';

export function getConfigData(url: string) {
    return axios.default.get(url);
}

export function getGiteeKey(key1: string, key2: string) {
    return `__gitee_${key1}_${key2}`;
}

export function getGiteeObjectKey(key1: string, key2: 'public' | 'private') {
    return {
        accessToken: {
            varName: getGiteeKey(key1, key2 + '_access_token'),
        },
        owner: {
            varName: getGiteeKey(key1, key2 + '_owner'),
        },
        repo: {
            varName: getGiteeKey(key1, key2 + '_repo'),
        },
    };
}

export function getGiteeArrKey(key1: string, key2: 'public' | 'private') {
    return [
        getGiteeKey(key1, key2 + '_access_token'),
        getGiteeKey(key1, key2 + '_owner'),
        getGiteeKey(key1, key2 + '_repo'),
    ];
}

export function getGiteeLocalStoreData(
    key: string,
    key2: 'public' | 'private',
    isGitee?: boolean
) {
    return new Promise((resolve, reject) => {
        const getDsFlag = localStorgeData.getLocalVariable(
            `__gitee_${key}_${key2}_flag`
        );
        const getGiteeAccess = localStorgeData.getLocalVariable(
            `__gitee_${key}_${key2}_access_token`
        );
        const getGiteeOwner = localStorgeData.getLocalVariable(
            `__gitee_${key}_${key2}_owner`
        );
        const getGiteeRepo = localStorgeData.getLocalVariable(
            `__gitee_${key}_${key2}_repo`
        );
        Promise.all([getDsFlag, getGiteeAccess, getGiteeOwner, getGiteeRepo])
            .then((v) => {
                const data = {
                    flag: v[0],
                    access: v[1],
                    owner: v[2],
                    repo: v[3],
                };
                if (((v[0] && !isGitee) || isGitee) && v[1] && v[2] && v[3]) {
                    resolve(data);
                } else {
                    reject({ msg: '存在值为空', data });
                }
            })
            .catch((err) => {
                reject({ msg: err });
            });
    });
}

// 查
export function getAll(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    key: string | null,
    path: string
) {
    let keyPath = path;
    if (key) {
        keyPath = `_data_${key}/${path}.json`;
    }
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/${decodeURI(
        keyPath
    )}?access_token=${accessToken}`;
    return new Promise((relove, reject) => {
        axios.default
            .get(url)
            .then((httpV) => {
                if (httpV.data) {
                    relove(httpV.data);
                } else {
                    reject({ msg: 'gitee的数据不存在' });
                }
            })
            .catch((err) => {
                reject({ msg: 'gitee的数据获取错误', err });
            });
    });
}

// 查
export function getFileData(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    path: string
) {
    const url =
        `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/` +
        `${path}?access_token=${accessToken}`;
    return new Promise((relove, reject) => {
        axios.default
            .get(url)
            .then((httpV) => {
                if (httpV.data) {
                    relove(httpV.data);
                } else {
                    reject({ msg: 'gitee的数据不存在' });
                }
            })
            .catch((err) => {
                reject({ msg: 'gitee的数据获取错误', err });
            });
    });
}

// 新增
function add(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    path: string,
    data: any
) {
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/${decodeURI(
        path
    )}?access_token=${accessToken}`;
    const formData = new FormData();
    formData.append('access_token', accessToken);
    let inputData = '';
    if (typeof data === 'string' && data.startsWith('data') && data.indexOf(';base64,')) {
        inputData = data.split(';base64,')[1];
    } else {
        inputData = btoa(encodeURIComponent(JSON.stringify([data])));
    }
    formData.append('content', inputData ? inputData : '');
    formData.append('message', path + '新增数据');
    return new Promise((relove, reject) => {
        axios.default
            .post(url, formData)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: 'gitee新增数据错误', err });
                reject(err);
            });
    });
}

// 更新
function update(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    path: string,
    data: any,
    sha: string
) {
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/${decodeURI(
        path
    )}?access_token=${accessToken}`;
    const formData = new FormData();
    formData.append('access_token', accessToken);
    let inputData = '';
    if (typeof data === 'string' && data.startsWith('data') && data.indexOf(';base64,')) {
        inputData = data.split(';base64,')[1];
    } else {
        inputData = btoa(encodeURIComponent(JSON.stringify([data])));
    }
    formData.append('content', inputData ? inputData : '');
    formData.append('sha', sha);
    formData.append('message', path + '更新数据');
    return new Promise((relove, reject) => {
        axios.default
            .put(url, formData)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: 'gitee覆盖数据错误', err });
            });
    });
}

// 新增或者编辑数据
export function addOrUpdateData(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    key: string | null,
    path: string,
    data: object
) {
    return new Promise((relove, reject) => {
        if (path.startsWith('/')) {
            path = path.replace('/', '');
        }
        getAll(accessToken, giteeOwner, giteeRepo, key, path)
            .then((vFile: any) => {
                let keyPath = path;
                if (key) {
                    keyPath = `_data_${key}/${path}.json`;
                }
                if ((vFile && vFile.length > 0) || vFile.sha) {
                    update(
                        accessToken,
                        giteeOwner,
                        giteeRepo,
                        keyPath,
                        data,
                        vFile.sha
                    )
                        .then((v) => {
                            relove(v);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                    return;
                }
                add(accessToken, giteeOwner, giteeRepo, keyPath, data)
                    .then((v) => {
                        relove(v);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function deleteFile(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    path: string,
    sha: string,
    message: string
) {
    const url =
        ` https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/` +
        `${path}?access_token=${accessToken}&sha=${sha}&message=${message}`;
    return new Promise((relove, reject) => {
        axios.default
            .delete(url)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: '删除文件错误', err });
            });
    });
}

// 查询目录
export function getAllTree(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    sha?: string
) {
    if (!sha) {
        sha = 'master';
    }
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/git/trees/${sha}?access_token=${accessToken}&recursive=1`;
    return new Promise((relove, reject) => {
        axios.default
            .get(url)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: '获取目录树错误', err });
            });
    });
}

// 获取md渲染文本
export function getMdHtml(accessToken: string, text: string) {
    const url = `https://gitee.com/api/v5/markdown`;
    const formData = new FormData();
    formData.append('access_token', accessToken);
    formData.append('text', text);
    return new Promise((relove, reject) => {
        axios.default
            .post(url, formData)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: '获取md渲染html错误', err });
            });
    });
}


// pages构建，pages付费用户才能用
export function buildPages(accessToken: string, owner: string, repo: string) {
    const url = ` https://gitee.com/api/v5/repos/${owner}/${repo}/pages/builds`;
    const formData = new FormData();
    formData.append('access_token', accessToken);
    return new Promise((relove, reject) => {
        axios.default
            .post(url, formData)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: '构建pages报错', err });
            });
    });
}