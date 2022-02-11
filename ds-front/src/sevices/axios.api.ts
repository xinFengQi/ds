import axios from 'axios';

export function getData(url: string) {
    return new Promise((relove, reject) => {
        axios
            .get(url)
            .then((httpV) => {
                if (httpV.data) {
                    relove(httpV.data);
                } else {
                    reject({ msg: '获取数据不存在' });
                }
            })
            .catch((err) => {
                reject({ msg: '获取数据错误', err });
            });
    });
}
