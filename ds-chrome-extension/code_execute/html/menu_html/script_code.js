var getScriptNameList = []
var oldTimeId = ''

if (!document.getElementsByTagName('body')) {
    alert('请把脚本引入加入到文档最后');
}

// 必须要有的脚本
var initCode = [
    {
        idtime: '1',
        name: "cxCloud_2400",
        content: `function portalLogin_trrt() {
            const inputS = document.getElementsByTagName('input')
            const valueMap = {
                tenantKey: 'cxcloud-dev',
                username: '2400',
                password: '1',
                captcha: '1234'
            }
            for (let i = 0; i < inputS.length; i++) {
                const elemEl = inputS.item(i);
                if(!elemEl.attributes.formcontrolname) {
                    return
                }
                const fromCtrlValue = elemEl.attributes.formcontrolname.value;
                if (valueMap.hasOwnProperty(fromCtrlValue)) {
                    elemEl.value = valueMap[fromCtrlValue]
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent("input", true, false);
                    elemEl.dispatchEvent(evt);
                }
            }
            const submitBtu = document.getElementsByTagName('button').item(0)
            if(submitBtu) {
                submitBtu.click()
            }
        }
        portalLogin_trrt()`
    },
    {
        idtime: '2',
        name: "click_admin",
        content: `function portalLogin_trrt() {
            const valueMap = {
                enterpriseId: 'aliyun-test0',
                username: 'admin',   // 管理员账号
                cno: '',             // 坐席账号
                password: 'Aa123456',
                captcha: '1234'
            }
            if(valueMap.cno && valueMap.cno.length > 0) {
                const agentTab = document.getElementById('agentTab');
                agentTab.click()
            }
            if(valueMap.username && valueMap.username.length > 0) {
                const consoleTab = document.getElementById('consoleTab');
                consoleTab.click()
            }
            var ev = new Event('input', { bubbles: true });
            ev.simulated = true;
            const enterpriseId = document.getElementById('enterpriseId')
            const password = document.getElementById('password')
            const cno = document.getElementById('cno')
            const username = document.getElementById('username')
            enterpriseId.value = valueMap.enterpriseId;
            enterpriseId.dispatchEvent(ev);
            password.value = valueMap.password;
            password.dispatchEvent(ev);
            if (cno) {
                cno.value = valueMap.cno;
                cno.dispatchEvent(ev);
            }
            if (username) {
                username.value = valueMap.username;
                username.dispatchEvent(ev);
            }
            const submitBtu = document.getElementById('loginBtn')
            if (submitBtu) {
                submitBtu.click()
            }
        }
        portalLogin_trrt()`
    },
    {
        idtime: '3',
        name: "click_5201",
        content: `function portalLogin_trrt() {
            const valueMap = {
                enterpriseId: 'aliyun-test0',
                username: '',   // 管理员账号
                cno: '5201',             // 坐席账号
                password: 'Aa123456',
                captcha: '1234'
            }
            if(valueMap.cno && valueMap.cno.length > 0) {
                const agentTab = document.getElementById('agentTab');
                agentTab.click()
            }
            if(valueMap.username && valueMap.username.length > 0) {
                const consoleTab = document.getElementById('consoleTab');
                consoleTab.click()
            }
            var ev = new Event('input', { bubbles: true });
            ev.simulated = true;
            const enterpriseId = document.getElementById('enterpriseId')
            const password = document.getElementById('password')
            const cno = document.getElementById('cno')
            const username = document.getElementById('username')
            enterpriseId.value = valueMap.enterpriseId;
            enterpriseId.dispatchEvent(ev);
            password.value = valueMap.password;
            password.dispatchEvent(ev);
            if (cno) {
                cno.value = valueMap.cno;
                cno.dispatchEvent(ev);
            }
            if (username) {
                username.value = valueMap.username;
                username.dispatchEvent(ev);
            }
            const submitBtu = document.getElementById('loginBtn')
            if (submitBtu) {
                submitBtu.click()
            }
        }
        portalLogin_trrt()`
    }
]


// 开始查询脚本 并渲染
RMethod('getScriptName', [], (item) => {
    getScriptNameList = [...item.getScriptName];
    console.log(item)
    var leftNameDiv = document.getElementById('left')
    var nameDiv = document.createElement('div')
    var htmlStr = ''
    initCode = initCode.map(ic => { return { ...ic, isExist: false } })
    item.getScriptName.forEach(v => {
        if (v && v.idtime) {
            htmlStr = htmlStr + codeNameTel(v)
            const isExistIndex = initCode.findIndex(ic => ic.idtime === v.idtime)
            if (isExistIndex > -1) {
                initCode[isExistIndex].isExist = true
            }
        }
    })
    nameDiv.innerHTML = htmlStr;
    leftNameDiv.appendChild(nameDiv)

    // 渲染默认不存在的数据
    const showInitCode = initCode.filter(ic => !ic.isExist)
    showInitCode.forEach(icItem => {
        addCode(icItem)
    })
});

// 脚本名模板
function codeNameTel(v) {
    return `<div class="name" id="${v.idtime}">
    <div>${v.name}</div>
    <button id="del-${v.idtime}">删除</button>
    </div>`
}

function codeNameTelInnerHtml(v) {
    return `
    <div>${v.name}</div>
    <button id="del-${v.idtime}">删除</button>
    `
}

// 检测右边点击
document.getElementById('left').addEventListener('click', (event) => {
    console.log(event)
    const timeId = event.target.id;

    if (event.target.nodeName === 'DIV') {
        showCode(timeId)
    } else if (event.target.nodeName === 'BUTTON') {
        deleteCode(timeId)
    }
})
// 点击脚本名并渲染脚本
function showCode(timeId) {
    if (oldTimeId) {
        var oldleftNameIdDiv = document.getElementById(oldTimeId)
        oldleftNameIdDiv.style.backgroundColor = ''
        if (timeId === 'left') {
            oldTimeId = ''
            setContent('', '')
            return
        }
    }
    if (timeId === 'left') {
        return
    }
    oldTimeId = timeId;
    var leftNameIdDiv = document.getElementById(oldTimeId)
    if(leftNameIdDiv) {
        leftNameIdDiv.style.backgroundColor = '#f3f3f3'
    }
    const content = getScriptNameList.filter(v => v && v.idtime && v.idtime + '' === timeId)[0];
    content ? setContent(content.content, content.name) : null
}

// 针对页面进行赋值
function setContent(content, name) {
    var rightContentDiv = document.getElementById('right_codeContent')
    rightContentDiv.value = content
    var rightNameDiv = document.getElementById('right_codeName')
    rightNameDiv.value = name
}
// 判断页面有值并返回
function isContentEmtry() {
    var rightContentDiv = document.getElementById('right_codeContent')
    const rightContentDivValue = rightContentDiv.value.trim()
    var rightNameDiv = document.getElementById('right_codeName')
    const rightNameDivValue = rightNameDiv.value.trim()
    if (rightNameDivValue.length === 0) {
        alert('请填脚本名字！！！')
        return { isNoEmtry: false }
    }
    if (rightContentDivValue.length === 0) {
        alert('请填脚本内容！！！')
        return { isNoEmtry: false }
    }
    return {
        isNoEmtry: rightContentDivValue.length > 0 && rightNameDivValue.length > 0,
        name: rightNameDivValue,
        content: rightContentDivValue
    }
}

// 点击脚本删除
function deleteCode(timeId) {
    timeId = timeId.split('-')[1];
    if (confirm('你确定删除此条脚本吗？不可恢复')) {
        DELETEMethod('getScriptName', 'idtime', timeId, (item) => {
            getScriptNameList = item.getScriptName;
            var leftNameIdDiv = document.getElementById(timeId)
            leftNameIdDiv.parentNode.removeChild(leftNameIdDiv)
            messageUtil.sendMessage('D', 'getScriptName', { idtime: timeId }).then(
                function (v) {
                    console.log('收到后台返回的信息', v)
                }
            )
            if (oldTimeId) {
                setContent('', '')
                oldTimeId = ''
            }
        })

    }
}


// 监听另存为按钮
document.getElementById('btu_save_as').addEventListener('click', () => {
    console.log('另存为')
    const content = isContentEmtry();
    if (content.isNoEmtry) {
        const contentJson = { idtime: new Date().getTime(), name: content.name, content: content.content }
        addCode(contentJson)
    }
})

// 监听保存按钮
document.getElementById('btu_save').addEventListener('click', () => {
    console.log('保存')
    const content = isContentEmtry();
    if (content.isNoEmtry) {
        if (oldTimeId) {
            // 更新
            const contentJson = { idtime: oldTimeId, name: content.name, content: content.content }
            updateCode(contentJson)
        } else {
            const contentJson = { idtime: new Date().getTime(), name: content.name, content: content.content }
            addCode(contentJson)
        }
    }
})


//  idtime  name  content 增加脚本
document.getElementById('sendMessage').addEventListener('click', () => {
    const contentJson = { idtime: new Date().getTime(), name: '测试脚本', content: 'alert("测试js执行")' }
    addCode(contentJson)
})

function updateCode(content) {
    UPDATEMethod('getScriptName', 'idtime', content['idtime'], content, (item) => {
        getScriptNameList = item.getScriptName;
        console.log(item)
        // 页面更新一条
        var leftNameDiv = document.getElementById(content['idtime'])
        leftNameDiv.innerHTML = codeNameTelInnerHtml(content)
        // 告诉backgroud数据更新了一条
        messageUtil.sendMessage('UPDATE', 'getScriptName', content).then(
            function (v) {
                console.log('收到后台返回的信息', v)
            }
        )
    });
}

function addCode(content) {
    ADDMethod('getScriptName', content, (item) => {
        getScriptNameList = item.getScriptName;
        console.log(item)
        // 页面增加一条
        var leftNameDiv = document.getElementById('left')
        var leftNameIdDiv = document.createElement('div')
        leftNameIdDiv.innerHTML = codeNameTel(content)
        leftNameDiv.appendChild(leftNameIdDiv)
        // 告诉backgroud数据增加了一条
        messageUtil.sendMessage('ADD', 'getScriptName', content).then(
            function (v) {
                console.log('收到后台返回的信息', v)
            }
        )
    });
}

