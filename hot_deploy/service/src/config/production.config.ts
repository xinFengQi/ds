import { ConfigInterface } from "./config.interface";

const config: ConfigInterface = {
    server: {
        value: '47.102.97.25',
        label: '阿里云-学生机-测试服务器',
        port: 11000,
        options: {
            dec: '测试服务器',
            domainName: 'www.dongfubao.com.cn'
        },
        // parentServer: {
        //     value: '192.168.199.1'
        // },
        // hostServer: {
        //     value: '192.168.199.157',
        //     port: 10000
        // }
    },
    nodeConfig: [
        {
            name: 'nginx',
            type: 'nginx',
            dec: '前端部署的nginx容器及反向代理工具',
            path: 'C:/Users/Administrator/Desktop/nginx-1.18.0',
            web: 'www.dongfubao.com.cn/'
        },
        {
            name: 'tomcat',
            type: 'tomcat',
            dec: '前端部署容器及java部署容器',
            path: 'C:/Program Files/Tomcat/tomcat9/smallQSClient',
            web: 'http://192.168.157.199:8081/'
        },
        // {
        //     name: 'ds_node',
        //     type: 'ds_node',
        //     dec: '前端部署容器及一个node服务工程',
        //     path: 'E:/_dfb_git/ds/All/static_service/webApp'
        // },
        {
            name: 'node_pm2',
            dec: '纯粹的node运行环境，基于pm2',
            type: 'node_pm2',
        }
    ],
    gitsConfig: [
        {
            gitdec: 'ds仓库',
            gitName: 'ds_dev',
            localPath: 'C://_dfb_git',
            gitLink: 'https://gitee.com/dongfubao/ds_dev.git'
        }
    ]
}

export default config