
const fs = require('fs')

const { content_replace }  = require('./utils/content_replace');

const reg = /this.translate.instant\(\'(\S*)\'\)/g

const paths = [
    'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/chailease/chailease-shared/service/constant.service.ts',
    'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/chailease/chailease-shared/time-range-picker/time-range-picker.component.ts'
]

content_replace(paths, reg, (a, b, c) => {
    return 'zh.' + b
})

