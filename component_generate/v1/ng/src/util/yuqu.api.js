const request = require('request')
function getOptions(url) {
    return options = {
        url: 'https://www.yuque.com/api/v2/'+url,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'code_doc',
            'X-Auth-Token': 'D3HUkAJHLOhClXWt7KfKbHa6AdqKJ87kCgJlMYgi'
        }
    };
}

function getUserInfo() {
    request.get(getOptions('users'), (e,r,body) => {
        console.log(e,body)
    })
}

function getGroupInfo() {
    request.get(getOptions('users/532641/groups'), (e,r,body) => {
        console.log(e,body)
    })
}

function getReposByGroup() {
    request.get(getOptions('groups/2859134/repos'), (e,r,body) => {
        console.log(e,body)
    })
}

getReposByGroup()