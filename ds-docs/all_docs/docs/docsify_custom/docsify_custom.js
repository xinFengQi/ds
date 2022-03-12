
if (window.location.href.indexOf('dongfubao.gitee.io') > -1) {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        if (element.className === 'anchor') {
            continue;
        }
        console.log(element)
        element.href = element.href.replace('dongfubao.gitee.io', 'dongfubao.gitee.io/ct')
    }
}
