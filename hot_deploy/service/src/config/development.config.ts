import { ConfigInterface } from "./config.interface";

const config: ConfigInterface = {
    server: {
        value: '192.168.199.157',
        label: '第一个测试服务器',
        port: 11000,
        options: {
            dec: '第一个测试服务器',
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
        // {
        //     name: 'nginx',
        //     type: 'nginx',
        //     dec: '前端部署的nginx容器及反向代理工具',
        //     path: 'E:/_dfb_git/nginx-1.19.2',
        //     web: 'http://192.168.157.199:80/'
        // },
        // {
        //     name: 'tomcat',
        //     type: 'tomcat',
        //     dec: '前端部署容器及java部署容器',
        //     path: 'E:/_dfb_git/apache-tomcat-9.0.37',
        //     web: 'http://192.168.157.199:8081/'
        // },
        // {
        //     name: 'ds_node',
        //     type: 'ds_node',
        //     dec: '前端部署容器及一个node服务工程',
        //     path: 'E:/_dfb_git/ds/All/static_service/webApp'
        // },
        // {
        //     name: 'node_pm2',
        //     dec: '纯粹的node运行环境，基于pm2',
        //     type: 'node_pm2',
        // }
    ],
    gitsConfig: [
        // {
        //     gitdec: 'ds仓库',
        //     gitName: 'ds_dev',
        //     localPath: 'E://_dfb_git',
        //     gitLink: 'https://gitee.com/dongfubao/ds_dev.git'
        // },
        // {
        //     gitdec: 'ds仓库',
        //     gitName: 'ds',
        //     localPath: 'E://_dfb_git',
        //     gitLink: 'https://gitee.com/dongfubao/ds.git'
        // }
    ]
}

export default config