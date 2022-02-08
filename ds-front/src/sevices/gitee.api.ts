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
    key2: 'public' | 'private'
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
                if (v[0] && v[1] && v[2] && v[3]) {
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
    key: string,
    path: string
) {
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/_data_${key}%2F${decodeURI(
        path
    )}.json?access_token=${accessToken}`;
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
    key: string,
    path: string,
    data: object
) {
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/_data_${key}%2F${decodeURI(
        path
    )}.json?access_token=${accessToken}`;
    const formData = new FormData();
    formData.append('access_token', accessToken);
    formData.append(
        'content',
        btoa(encodeURIComponent(JSON.stringify([data])))
    );
    formData.append('message', key + path + '新增任务列表');
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
    key: string,
    path: string,
    data: object,
    sha: string
) {
    const url = `https://gitee.com/api/v5/repos/${giteeOwner}/${giteeRepo}/contents/_data_${key}%2F${decodeURI(
        path
    )}.json?access_token=${accessToken}`;
    const formData = new FormData();
    formData.append('access_token', accessToken);
    formData.append(
        'content',
        btoa(encodeURIComponent(JSON.stringify([data])))
    );
    formData.append('sha', sha);

    return new Promise((relove, reject) => {
        axios.default
            .put(url, formData)
            .then((httpV) => {
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: 'gitee覆盖数据错误', err });
                reject(err);
            });
    });
}

// 新增或者编辑数据
export function addOrUpdateData(
    accessToken: string,
    giteeOwner: string,
    giteeRepo: string,
    key: string,
    path: string,
    data: object
) {
    return new Promise((relove, reject) => {
        getAll(accessToken, giteeOwner, giteeRepo, key, path)
            .then((vFile: any) => {
                if (vFile) {
                    update(
                        accessToken,
                        giteeOwner,
                        giteeRepo,
                        key,
                        path,
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
                add(accessToken, giteeOwner, giteeRepo, key, path, data)
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
