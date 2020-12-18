
const fs = require('fs')
const res = /this.translate.instant\(\'(\S*)\'\)/g

const paths = [
    'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/chailease/chailease-shared/service/constant.service.ts',
    'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/chailease/chailease-shared/time-range-picker/time-range-picker.component.ts'
]

paths.forEach(path => {
    const str = fs.readFileSync(path).toString()
    const newStr = str.replace(res, (a, b, c) => {
        return 'zh.' + b
    })
    fs.writeFileSync(path, newStr)
})
