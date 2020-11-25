var getScriptNameList = []

window.onload = () => {
    // 开始查询脚本
    RMethod('getScriptName', [], (item) => {
        getScriptNameList = [...item.getScriptName];
        console.log(item)
        var leftNameDiv = document.getElementById('left')
        var nameDiv = document.createElement('div')
        var htmlStr = ''
        item.getScriptName.forEach(v => {
            if(v && v.idtime) {
                htmlStr = htmlStr + `<div class="name" id="${v.idtime}">${v.name}</div>`
            }
        })
        nameDiv.innerHTML = htmlStr;
        leftNameDiv.appendChild(nameDiv)
    });
}

document.getElementById('left').addEventListener('click', (event) => {
    const timeId = event.target.id;
    const content =  getScriptNameList.filter(v => v && v.idtime && v.idtime+'' === timeId)[0];
    var rightNameDiv = document.getElementById('right')
    rightNameDiv.innerHTML = `<div>${content.content}</div>`
})

//  idtime  name  content
document.getElementById('sendMessage').addEventListener('click', () => {
    ADDMethod('getScriptName', { idtime: new Date().getTime(), name: '测试脚本', content: 'alert("测试js执行")' }, (item) => {
        getScriptNameList = item.getScriptName;
        console.log(item)
        // 告诉backgroud数据增加了一条
        messageUtil.sendMessage('ADD', 'getScriptName').then(
            function (v) {
                console.log('收到后台返回的信息', v)
            }
        )
    });

})
