const giteePull = require('./gitee_pull.js');
const giteePush = require('./gitee_push.js');
const giteeUtil = require('./gitee_util.js');


module.exports = {
    ...giteePull,
    ...giteePush,
    ...giteeUtil,

}