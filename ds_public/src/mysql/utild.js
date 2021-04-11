const mysql = require('mysql');
const async = require('async');


const connextionPool = mysql.createPool({
    host: 'rm-bp10k0b413vaajf23po.mysql.rds.aliyuncs.com',
    port: '3306',
    user: 'damon',
    password: 'Damon123456',
    database: 'information_schema'
});



module.exports.mysqlExecute = function (sql, param='') {
    return new Promise((resolve, reject) => {
        connextionPool.getConnection((err, conn) => {
            if (err) {
                console.log('mysql 连接失败', err);
            } else {
                conn.query(sql, param, (err, data) => {
                    if (err) {
                        console.log(`${sql}执行失败${err}`);
                        reject(err);
                    } else {
                        conn.release();
                        resolve(data)
                    }
                });
            }
        })
    });
}


// 执行事务
module.exports.sqlTransaction = function (sqlArr) {
    return new Promise((resolve, reject) => {
        connextionPool.getConnection((err, conn) => {
            if (err) {
                console.log('mysql连接失败');
                reject(err);
            } else {
                conn.beginTransaction((err) => {
                    if (err) {
                        console.log('开启事务失败');
                        reject(err);
                    } else {
                        let funArr = [];
                        sqlArr.forEach((sql) => {
                            const temp = (cb) => {
                                conn.query(sql.sql, sql.param, (err, data) => {
                                    if (err) {
                                        return cb(err, data);
                                    } else {
                                        return cb(null, data);
                                    }
                                })
                            }
                            funArr.push(temp);
                        })
                        async.series(funArr, (err, result) => {
                            if (err) {
                                conn.rollback(() => {
                                    conn.release();
                                    console.log(`执行语句${JSON.stringify(sqlArr)}失败`);
                                    reject(err);
                                })
                            } else {
                                conn.commit((error) => {
                                    if (error) {
                                        console.log('提交失败');
                                        reject(err);
                                    } else {
                                        conn.release();
                                        resolve(result);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    })
}