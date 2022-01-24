window.onload = () => {
    console.log(window.ds)
    let inputData = '';

    const inputEl = document.getElementById('syncBookmarksInput');
    messageUtil.getData({ '__bookMarkDataGit': '' }).then(v => {
        inputEl.value = v.__bookMarkDataGit;
    })

    inputEl.addEventListener('input', (value) => {
        messageUtil.setData({ '__bookMarkDataGit': value.target.value })
    })

    document.getElementById('syncBookmarks').addEventListener('click', () => {
        console.log('点击事件')
        // 判断文件是否存在
        if (!window.ds.axios) {
            alert('不存在axios')
        }

        window.ds.axios.get(`https://gitee.com/api/v5/repos/dongfubao/ct/contents/chrome_bookMark%2F${inputEl.value}.json?access_token=e9694199cc954120b37d5d449a56a752`).then(v => {
            console.log('文件是否存在', v)
            let data = new FormData();
            data.append('access_token', 'e9694199cc954120b37d5d449a56a752')
            chrome.bookmarks.getTree(markNodes => {
                console.log(markNodes)
                if (v.data && ((Array.isArray(v.data) && v.data.length > 0) || !Array.isArray(v.data))) {
                    const oldContent = JSON.parse(decodeURIComponent(atob(v.data.content)));
                    console.log('内容是', oldContent)
                    const index = oldContent.findIndex(vs => vs.dateAdded === markNodes[0].dateAdded)
                    if(index < 0) {
                        oldContent.push(markNodes[0])
                    } else {
                        oldContent[index] = markNodes[0];
                    }
                    data.append('content', btoa(encodeURIComponent(JSON.stringify(oldContent))));
                    data.append('message', inputEl.value + '更新书签');
                    data.append('sha', v.data.sha);
                    window.ds.axios.put(`https://gitee.com/api/v5/repos/dongfubao/ct/contents/chrome_bookMark%2F${inputEl.value}.json`, data).then(v => {
                        if (v) {
                            console.log(v)
                            alert('更新成功')
                        }
                    })

                } else {
                    data.append('content', btoa(encodeURIComponent(JSON.stringify([markNodes]))));
                    data.append('message', inputEl.value + '新增书签');
                    window.ds.axios.post(`https://gitee.com/api/v5/repos/dongfubao/ct/contents/chrome_bookMark%2F${inputEl.value}.json`, data).then(v => {
                        if (v) {
                            console.log(v)
                            alert('新建成功')
                        }
                    })
                }
            });

        })







    })
}