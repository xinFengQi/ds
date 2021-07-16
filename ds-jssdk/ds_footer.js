if(!document.getElementsByTagName('body')) {
    alert('请把脚本引入加入到文档最后');
}
(function() {
    // 去掉字符串的换行和空格
    function deleteN(str) {
        return str.split('\n').map(v => v.trim()).join('')
    }
    // 创建div
    function createElement(prentNode, elementName, className) {
        var divElement = document.createElement(elementName);
        divElement.setAttribute('style', className);
        prentNode.appendChild(divElement);
        return divElement;
    }
    // 替换花括号
    function replaceTemplate(str, cssMap) {
        return str.replace(/\{\{.+?\}\}/g, (item) => {
            var itemkey = item.replace('{{', '').replace('}}', '')
            return cssMap[itemkey]
        })
    }
    // 链接钟无协议情况
    function httpTop(url) {
        return url.startsWith('http') ? url : 'http://' + url
    }
    // js加载完后执行
    window.onload = () => {
        var divContent = `
        <div style="{{contentDivClass}}">
            <div></div>
            <div></div>
            <div>
                <div style="{{frinedsNameClass}}">友情链接</div>
                <div >
                    {{friendsChainDivinnerHTML}}
                </div>
            </div>
        </div>
        <div style="{{filingDivClass}}">{{filingDivinnerText}}</div>
        `

        // 友链及其他div
        var contentDivClass = `display: flex;
                               justify-content: space-around;
                               align-items: center;
                               flex: 1;
                               padding: 10px 80px 0px 80px;`;
        // 友链样式
        var frinedsNameClass = `font-size: 17px;
                                margin-bottom: 10px;`;
        var aClass = `font-size: 14px;
                      line-height: 17px;
                      color: #000;
                      text-decoration: none`;
        // 备案号div样式
        var filingDivClass = `display: flex;
                             justify-content: center;
                             align-items: center;
                             padding: 10px 0;
                             font-size: 13px;
                             color: #929293`;
        // 备案内容
        filingDivinnerText = '皖ICP备20012562号 ©2020-ds '
            // 友链地址及名称
        friendsChainArr = [
            { value: 'www.baidu.com', label: '社会小屋' },
            { value: 'www.baidu.com', label: 'ds请求转发系统' },
            { value: 'www.baidu.com', label: 'ds登录注册中心' },
            { value: 'www.baidu.com', label: 'ds热部署系统' },
        ]
        friendsChainDivinnerHTML = ''
        friendsChainArr.forEach((item, index) => {
            friendsChainDivinnerHTML = friendsChainDivinnerHTML + `<div style=""><a style="{{aClass}}" href="${httpTop(item.value)}" target="_blank">${item.label}</a></div>\n`
        })
        var cssMap = {
            contentDivClass: deleteN(contentDivClass),
            filingDivClass: deleteN(filingDivClass),
            frinedsNameClass: deleteN(frinedsNameClass),
            aClass: deleteN(aClass),
            filingDivinnerText,
        }
        friendsChainDivinnerHTML = replaceTemplate(friendsChainDivinnerHTML, cssMap)

        cssMap = {
                ...cssMap,
                friendsChainDivinnerHTML: friendsChainDivinnerHTML

            }
            // 挂载到文档流中
        var body = document.getElementsByTagName('body').item(0)
            // 总的div样式
        var divClass = `background-color: #f6f6f6;
                        width: 100%;
                        display: flex;
                        flex-direction: column;`;
        var disPlayNo = 'display: none;'
        var fixedDivClass = `position: fixed;
                             bottom: 0;`;
        var divElement = createElement(body, 'div', deleteN(disPlayNo))
        divElement.innerHTML = replaceTemplate(divContent, cssMap);
        // 判断应该如何放置
        var windowHeight = window.innerHeight;
        var bodyHeight = body.clientHeight;
        var executeAdjustStyle = throttleDob(adjustStyle, 500)

        executeAdjustStyle(bodyHeight);

        // 防止频繁调用方法
        function throttleDob(func, wait) {
            var timer = null;
            return function() {
                var arg = arguments
                var that = this
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    func.apply(that, arg)
                }, wait);
            }
        }

        var bodyHeightParamsCache = ''

        // 根据高度修改放置位置
        function adjustStyle(bodyHeightParams) {
            if (bodyHeightParamsCache === bodyHeightParams) {
                return
            }
            bodyHeightParamsCache = bodyHeightParams
            if (windowHeight > bodyHeightParams) {
                body.removeChild(divElement)
                divElement.setAttribute('style', deleteN(divClass + fixedDivClass))
                body.appendChild(divElement)
            } else {
                body.removeChild(divElement)
                divElement.setAttribute('style', deleteN(divClass))
                body.appendChild(divElement)
            }
        }

        // 观察器的配置（需要观察什么变动）
        const config = { attributes: false, childList: true, subtree: true };

        // 当观察到变动时执行的回调函数
        const callback = function(mutationsList, observer) {
            var bodyHeightChange = body.clientHeight;
            executeAdjustStyle(bodyHeightChange)
        };

        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(callback);

        // 以上述配置开始观察目标节点
        observer.observe(body, config);

    }

})()