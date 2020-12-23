


function gettocRouterLink(arr) {
    const templateA = `<div class="nav"><router-link to="/{{{router}}}">{{{routername}}}</router-link></div>`;
    const templateB = `const {{{routerName}}} = { template: \`{{{template}}}\` }`
    const templateC = `{ path: '/{{{routerName}}}', component: {{{routerName}}} }`
    const templateD = `const routes = [
        {{{templateC}}}
    ];`
    let strA = ''
    let strB = ''
    let strC = ''
    arr.forEach(element => {
        const keys = element.key.replace(/-/g, '_');
        strA = strA + templateA.replace('{{{router}}}',keys).replace('{{{routername}}}', element.dec.title) + '\n'
        strB = strB + templateB.replace('{{{routerName}}}', keys).replace('{{{template}}}', element.vuehtml) + '\n'
        strC = strC + templateC.replace('{{{routerName}}}', keys).replace('{{{routerName}}}', keys) + ',\n'
    });
    strC = templateD.replace('{{{templateC}}}', strC) + '\n'
    return getIndexHtml(strA, strB + strC)
}

function getIndexHtml(toc, router) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>组件文档</title>
    </head>
    <link rel="stylesheet" href="resource/purple/purple.css">
    <style>
        html {
            width: 100%;
            height: 100%;
        }
    
        body {
            width: 100%;
            height: 100%;
        }
    
        #app {
            display: flex;
            height: 100%;
            padding: 20px;
            overflow: scroll;
        }
    
        .left {
            min-width: 280px;
            background-color: rgb(237, 241, 241);
        }
        .nav {
            padding: 10px 0px 0px 4px;
        }
    
        .main {
            flex: 1;
            min-width: 880px;
        }
    
        .right {
            min-width: 200px;
            background-color: rgb(241, 247, 247);
        }
    
        .markdown-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 980px;
            margin: 0 auto;
            padding: 45px;
        }
    
        @media (max-width: 767px) {
            .markdown-body {
                padding: 15px;
            }
        }
    </style>
    
    <body>
        <div id="app">
            <div class="left">
               ${toc}
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
            <div class="right">
    
            </div>
        </div>
    </body>
    <script>
        window.onload = () => {
           ${router}
    
            const router = new VueRouter({
                routes
            })
    
            const vue = new Vue({
                router
            }).$mount("#app")
        }
    
    
    </script>
    <script src="./resource/vue.js"></script>
    <script src="./resource/vue-router.js"></script>
    </html>`
}


module.exports = {
    gettocRouterLink
}