chrome.bookmarks.getTree(markNodes => {
    console.log(markNodes)
    let str = traverseBoookMarksDs(markNodes, 0)
    document.getElementById('content').innerHTML = str
});

// 没有使用ds组件的
function traverseBoookMarks(bookmarks, levelParams) {
    let outputStr = ''
    const level = levelParams + 1
    bookmarks.forEach(element => {
        if (element.url) {
            outputStr = outputStr + `${setSpace(level)}<a class="margin10" href="${element.url}">${element.title}</a>`
        } else {
            outputStr = outputStr + `<div class="margin10">${setSpace(level)}${element.title}</div>`
            if (element.children && element.children.length > 0) {
                outputStr = outputStr + traverseBoookMarks(element.children, level);
            }

        }
    });
    return outputStr
}

// 使用ds组件的
function traverseBoookMarksDs(bookmarks, levelParams) {
    let outputStr = ''
    const level = levelParams + 1
    bookmarks.forEach(element => {
        if (element.url) {
            outputStr = outputStr + `${setSpace(level)}<ds-button class="margin10">
            <a href="${element.url}">${element.title}</a></ds-button>`
        } else {
            if (element.title) {
                outputStr = outputStr + `<ds-collapse class="margin10">
                    <ds-collapse-panel ds-is-active="true" name="${setSpace(level)}${element.title}">`
            }
            if (element.children && element.children.length > 0) {
                outputStr = outputStr + traverseBoookMarksDs(element.children, level);
            }
            if (element.title) {
                outputStr = outputStr + '</ds-collapse-panel></ds-collapse>'
            }


        }
    });
    return outputStr
}

function setSpace(level) {
    let str = ''
    for (let i = 0; i < level; i++) {
        str = str + '&nbsp;&nbsp;&nbsp;'
    }
    return str;
}
