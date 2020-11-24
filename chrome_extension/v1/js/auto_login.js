function portalLogin_trrt() {
    const inputS = document.getElementsByTagName('input')
    const valueMap = {
        tenantKey: 'cxcloud-dev',
        username: '2400',
        password: '1',
        captcha: '1234'
    }
    for (let i = 0; i < inputS.length; i++) {
        const elemEl = inputS.item(i);
        const fromCtrlValue = elemEl.attributes.formcontrolname.value;
        if (valueMap.hasOwnProperty(fromCtrlValue)) {
            elemEl.value = valueMap[fromCtrlValue]
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("input", true, false);
            elemEl.dispatchEvent(evt);
        }
    }
    const submitBtu = document.getElementsByTagName('button').item(0)
    submitBtu.click()
}


window.onload = () => {
    var portalArr_trrt = [
        'portal-dev2-cxcloud.cticloud.cn'
    ]
    if (portalArr_trrt.includes(window.location.host)) {
        console.log('此页面进行的模拟登录方式')
        portalLogin_trrt();
    }
}