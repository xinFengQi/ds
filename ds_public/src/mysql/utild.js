const mysql = require('mysql');
const async = require('async');
const uuid = require('uuid')

const connextionPool = mysql.createPool({
    host: 'rm-bp10k0b413vaajf23po.mysql.rds.aliyuncs.com',
    port: '3306',
    user: 'damon',
    password: 'Damon123456',
    database: 'ds_public'
});



// 查询
module.exports.SqlR = function (start=0, end=-1) {
    // param ['*'] or ['a','b','c'],'dtable_name'
    // select a,b,c from dtable_name
    let sqlA = 'select ?? from ?? ';
    const sqlB = 'SELECT FOUND_ROWS() as total';
    const sqlArr = [];
    if (end > 0) {
        sqlA = sqlA + 'limit ' + start + ',' + end;
        sqlArr.push(sqlA); sqlArr.push(sqlB);
        return sqlArr;
    } else {
        return sqlA;
    }
}

// 查询一条数据，添加查询
module.exports.SqlRWhile = function() {
        // param ['a','b','c'],'dtable_name',{d:2,e:3}
     // select a,b,c from dtable_name where d=2 and e = 3
     return 'select ?? from ?? where ? ';
}

// 增加一条数据
module.exports.SqlC = function() {
    // param 'dtable_name',{a:1,b:2}
    return 'insert into ?? SET ?'
}

// 更新数据
module.exports.SqlU = function() {
    // param 'dtable_name', {c:1,d:2} ,{a:1,b:2}
    return 'update ?? set ? where ?'
}

// 删除一条数据
module.exports.SqlD = function() {
    // param 'dtable_name', {c:1,d:2}
    return 'delete from ?? where ?';
}


module.exports.getUUID = function() {
    return uuid.v1();
}



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