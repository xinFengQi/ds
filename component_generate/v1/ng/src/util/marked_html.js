const marked = require('marked')

function mdToHtml(content) {
    return  createTemplate().replace('{{{content}}}', marked(content))
}


function createTemplate() {
    const template = `<!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>md文件转html页面</title>
        <style>
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
        </head>
        <body>
            <article class="markdown-body">
                {{{content}}}
            </article>  
        </body>
    </html>`;
    return template;
}

module.exports = {
    mdToHtml
}

