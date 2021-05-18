/*
存在基础表
ds_field
ds_module
ds_module_table
ds_system
ds_system_module
ds_table
ds_table_field
ds_tenant
ds_tenant_system
*/

/*
思路：
通过表数据生成对象 一表一对象
通过字段生成五条语句执行方法，

*/

const { mysqlExecute, SqlR, sqlTransaction } = require('./utild');
const fs = require('fs-extra');


const base_complie = {

    getSelectAllSql: async (res, readerTable, tableInfo, fields, deep, deepCount = 0) => {
        if (readerTable.includes(tableInfo.ds_key)) {
            return null;
        }
        if (deep !== undefined && deep === deepCount) {
            return null;
        }
        deepCount = deepCount + 1;
        readerTable.push(tableInfo.ds_key);
        const rightKeyFields = fields.filter(v => v.ds_right_field_id);
        if (rightKeyFields.length === 0) {
            return null;
        }
        const selectSqlOrigin =  [...fields.map(v => `${tableInfo.ds_key}_${v.ds_key}`)];
        let selectSql = deepCount < 2 ? [...fields.map(v => `${tableInfo.ds_key}.${v.ds_key} as ${tableInfo.ds_key}_${v.ds_key}`)]
            : [...fields.map(v => ` GROUP_CONCAT(${tableInfo.ds_key}.${v.ds_key}) as ${tableInfo.ds_key}_${v.ds_key}`)];
        let selectSqls = [selectSqlOrigin];
        let leftJoinSql = [];
        let leftJoinSqls = [];
        for (let i = 0; i < rightKeyFields.length; i++) {
            const v = rightKeyFields[i];
            const v_field = res.tables_fields.find(fi => fi.did === v.ds_right_field_id);
            const v_field_key = res.fields.find(fi => fi.did === v_field.ds_right_did).ds_key;
            const v_tableInfo_key = res.tables.find(ti => ti.did === v_field.ds_left_did).ds_key;
            if (!readerTable.includes(v_tableInfo_key)) {
                leftJoinSql.push(`left join ${v_tableInfo_key} on ${v_tableInfo_key}.${v_field_key}=${tableInfo.ds_key}.${v.ds_key} `);
                const data = await base_complie.getSelectAllSql(res, readerTable, res.sql[v_tableInfo_key], res.sql[v_tableInfo_key].fields, deep, deepCount)
                if (data) {
                    selectSql = [...selectSql, ...data.selectSql];
                    selectSqls = [...selectSqls, ...data.selectSqls];
                    leftJoinSql = [...leftJoinSql, ...data.leftJoinSql];
                    leftJoinSqls = [leftJoinSql, ...data.leftJoinSql]
                }
            }
        }
        return { selectSql,selectSqls, leftJoinSql, leftJoinSqls }
    },
    getSelectAllMethod: async (res, tableInfo) => {
        const readerTable = [];
        const sql = await base_complie.getSelectAllSql(res, readerTable, tableInfo, tableInfo.fields);
        let extrueSql = `select * from ${tableInfo.ds_key}`;
        if (sql) {
            sql.selectSqls.pop();
            sql.selectSqls.map(v => v.shift())
            extrueSql = `select ${sql.selectSql.filter(v => v !== '__gruop_by__').join(',')}
                            from ${tableInfo.ds_key}
                            ${sql.leftJoinSql.length > 0 ? sql.leftJoinSql.join(' ') : ''}
                            GROUP BY ${ sql.selectSqls.map(v => v.join(',')).join(',')}
                        `
            console.log(sql.selectSqls, extrueSql)
                    }
        return async () => {
            try {
                const data = await mysqlExecute(extrueSql)
                return data;
            } catch (error) {
                return error
            }
        }
    },
    getSelectOneAllMethod: async (res, tableInfo) => {
        return async (deep = 0) => {
            try {
                const readerTable = [];
                const sql = await base_complie.getSelectAllSql(res, readerTable, tableInfo, tableInfo.fields, deep);
                let extrueSql = `select * from ${tableInfo.ds_key}`;
                if (sql && deep > 0) {
                    extrueSql = `select ${sql.selectSql.join(',')}
                                    from ${tableInfo.ds_key}
                                    ${sql.leftJoinSql.length > 0 ? sql.leftJoinSql.join(' ') : ''}

                                `
                }
                const data = await mysqlExecute(extrueSql)
                return data;
            } catch (error) {
                return error
            }
        }
    },
    addOneDataMethod: (tableInfo) => {
        return async (data) => {
            try {
                const data = await mysqlExecute(
                    `insert into ${tableInfo.ds_key} SET ? `, data
                )
                return data;
            } catch (error) {
                return error
            }
        }
    }
}




async function initDBTable() {
    const sql = {}
    const tables = await mysqlExecute(SqlR(), [['*'], 'ds_table']);
    const allFields = await mysqlExecute(SqlR(), [['*'], 'ds_field']);
    const tables_fields = await mysqlExecute(SqlR(), [['*'], 'ds_table_field'])
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        sql[table.ds_key] = table;
        const getFieldByTableDidSql = `
            SELECT  *  FROM	ds_table_field 
            LEFT JOIN ds_table  on ds_table_field.ds_left_did= ds_table.did
            RIGHT JOIN ds_field on ds_table_field.ds_right_did= ds_field.did
            WHERE ds_left_did = ${table.did}
        `
        const fields = await mysqlExecute(getFieldByTableDidSql);
        sql[table.ds_key].fields = fields;
    }
    return { sql, tables, fields: allFields, tables_fields }
}

initDBTable().then(res => {
    res.tables.forEach(async (table, index) => {
        res.sql[table.ds_key].baseMethod = {
            getAll: await base_complie.getSelectAllMethod(res, res.sql[table.ds_key]),
            getOneAll: await base_complie.getSelectOneAllMethod(res, res.sql[table.ds_key]),
            addOne: await base_complie.addOneDataMethod(res, res.sql[table.ds_key])
        }
        fs.ensureFileSync(`./src/mysql/json/${table.ds_key}.json`)
        fs.writeFileSync(
            `./src/mysql/json/${table.ds_key}.json`,
            JSON.stringify(await res.sql[table.ds_key].baseMethod.getOneAll(2)))
    })
})