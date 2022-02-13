//先导入pako
// import pako from 'pako'


const pako = require('pako');
const CryptoJS = require("crypto-js");


//秘钥必须为：8/16/32位
// 加密
function encrypt(str: string, aseKey: string) {
  return CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(aseKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}

// 解密
function decrypt(encrypt: string, aseKey: string) {
  return CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8);
}



// b64Data-->传入加密的数据进行解密
function unzip(b64Data: string) {
  var strData = atob(b64Data)
  const uintArray = strData.split(',').map(v => Number(v));
  var data = pako.inflate(uintArray, { to: 'string' })
  return data
}

// 压缩
function zip(str: string) {
  var binaryString = pako.deflate(str, { to: 'string', level: 9, });
  return btoa(binaryString)
}


export default {
  encrypt,
  decrypt,
  unzip,
  zip
}