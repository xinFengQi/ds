import { getAll, add, update } from '@/sevices/gitee.api';
import crypto from '@/sevices/crypto.util';

export function getPersonalSetting(md5UserName: string) {
    const decryptData =  crypto.encrypt(md5UserName, md5UserName).replaceAll('/', '');
    return new Promise((resolve, reject) => {
        getAll(
            '16cf2bb0ab7fa12779bfec47f2c3ee9a',
            'semonstrate',
            'demonstrate_storage',
            'username',
            decryptData
        )
            .then((v: any) => {
                if (v.content) {
                    resolve({
                        data: JSON.parse(decodeURIComponent(atob(v.content)))[0],
                        sha: v.sha,
                    });
                } else {
                    reject('未查询到账号信息');
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function addPersonalSetting(personalSetting: any, md5UserName: string) {
    const decryptData =  crypto.encrypt(md5UserName, md5UserName).replaceAll('/', '');
    const keyPath = `_data_username/${decryptData}.json`;
    return new Promise((resolve, reject) => {
        add(
            '16cf2bb0ab7fa12779bfec47f2c3ee9a',
            'semonstrate',
            'demonstrate_storage',
            keyPath,
            personalSetting
        )
            .then((v: any) => {
                resolve(v);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function updatePersonalSetting(personalSetting: any, sha: string, md5UserName: string) {
    const decryptData =  crypto.encrypt(md5UserName, md5UserName).replaceAll('/', '');
    const keyPath = `_data_username/${decryptData}.json`;
    return new Promise((resolve, reject) => {
        update(
            '16cf2bb0ab7fa12779bfec47f2c3ee9a',
            'semonstrate',
            'demonstrate_storage',
            keyPath,
            personalSetting,
            sha
        )
            .then((v: any) => {
                resolve(v);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
