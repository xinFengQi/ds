const fs = require('fs');
const path = require('path')

const jsonPath = 'dist/docs.json'
const distJsonIsExist = fs.existsSync (jsonPath);

if(!distJsonIsExist) {
    throw "json文件未生成"
}

const stencliJsonData = JSON.parse(fs.readFileSync(jsonPath).toString());

const  componentArr = stencliJsonData.components;
console.log(componentArr)