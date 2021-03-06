    chrome.bookmarks.getTree(markNodes => {
        console.log(markNodes)
        let str = traverseBoookMarks(markNodes, 0)
        document.getElementById('content').innerHTML = str
    });
    
    
    function traverseBoookMarks(bookmarks, levelParams) {
        let outputStr = ''
        const level = levelParams + 1
        bookmarks.forEach(element => {
            if(element.url) {
                outputStr = outputStr + `${setSpace(level)}<a class="margin10" href="${element.url}">${element.title}</a>`
            } else {
                outputStr = outputStr + `<div class="margin10">${setSpace(level)}${element.title}</div>` 
                if(element.children && element.children.length > 0) {
                    outputStr =  outputStr + traverseBoookMarks(element.children, level);
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
