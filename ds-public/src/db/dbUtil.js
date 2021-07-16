

const fs = require('fs');
const path = require('path');


const db = {}

fs.readdirSync(__dirname).forEach(file => {
    if (file.endsWith('.json')) {
        const flieName = file.split('.')[0];
        db[flieName] = JSON.parse(fs.readFileSync(path.resolve(__dirname, file)).toString());
    }
})


function getDB(name, key) {
    return db[name][key]
}

function addDB(name, key, data, cb) {
    if(cb) {
        getDB(name, key).push(cb(data));
    } else {
        getDB(name, key).push(data);
    }
    fs.writeFileSync(path.resolve(__dirname, `${name}.json`), JSON.stringify(db[name]))
}


function getDBByKey(name, key, idKey, value) {
    const data = getDB(name, key).filter(v => v[idKey] === value);
    if (data.length > 0) {
        return data;
    }
    return null;
}

function updateDBByKey(name, key, idKey, data, cb) {
  
        const index = getDB(name, key).findIndex(v => v[idKey] === data[idKey]);
        if(index > -1) {

            if(cb) {
                db[name][key][index] = cb(data);

            } else {
                db[name][key][index] = data;
            }

            fs.writeFileSync(path.resolve(__dirname, `${name}.json`), JSON.stringify(db[name]))
            return true;
        } else {
            return false;
        }
   

}


function deleteDBByKey(name, key, idKey, value) {
    const data = getDB(name, key).filter(v => v[idKey] !== value);
    db[name][key] = [...data];
    fs.writeFileSync(path.resolve(__dirname, `${name}.json`), JSON.stringify(db[name]))
}


module.exports = {
    getDB,
    addDB,
    getDBByKey,
    deleteDBByKey,
    updateDBByKey
}