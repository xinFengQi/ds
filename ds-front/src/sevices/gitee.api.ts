import * as axios from 'axios';

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
                relove(httpV.data);
            })
            .catch((err) => {
                reject({ msg: 'gitee的数据获取错误', err });
                reject(err);
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
            .then((vFile) => {
                if (vFile) {
                    update(accessToken, giteeOwner, giteeRepo, key, path, data)
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
