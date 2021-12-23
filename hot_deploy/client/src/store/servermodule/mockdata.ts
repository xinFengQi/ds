import { ServerOptions, ProjectsList } from './model'

const serverList: ServerOptions[] = [
    {
        value: "192.168.8.69",
        label: "测试服务器集群",
        cpuAlreadyUse: '32%',
        upnetUse: '48kb/s',
        downnetUse: '312kb/s',
        memoryAlreadyUse: '48%',
        options: {
          dec: "董富宝的测试服务器",
          domainName: "www.dongfubao.com.cn",
        },
        childrens: [
            {
                value: "192.168.8.70",
                cpuAlreadyUse: '32%',
                upnetUse: '48kb/s',
                downnetUse: '312kb/s',
                memoryAlreadyUse: '48%'

            },
            {
                value: "192.168.8.71",
                cpuAlreadyUse: '32%',
                upnetUse: '48kb/s',
                downnetUse: '312kb/s',
                memoryAlreadyUse: '48%'
            }
        ]
      },
      {
        value: "192.168.9.70",
        label: "测试服务器集群A",
        cpuAlreadyUse: '2%',
        upnetUse: '8kb/s',
        downnetUse: '12kb/s',
        memoryAlreadyUse: '8%',
        options: {
          dec: "董富宝的测试服务器A",
          domainName: "www.dongfubao.com.cn",
        },
        childrens: [
            {
                value: "192.168.9.71",
                cpuAlreadyUse: '32%',
                upnetUse: '4kb/s',
                downnetUse: '12kb/s',
                memoryAlreadyUse: '8%'

            },
            {
                value: "192.168.9.72",
                cpuAlreadyUse: '32%',
                upnetUse: '8kb/s',
                downnetUse: '12kb/s',
                memoryAlreadyUse: '8%'
            }
        ]
      },
]

const projects: ProjectsList[] = [
    {
      isDeploy: 0,
      hotconfig: {
        type: 'node_server_front',
        dec: '第一个测试的项目',
        name: 'test_front_one'
      },
      localaddress: '1',
    },
    {
      isDeploy: 1,
      hotconfig: {
        type: 'node_server_front',
        dec: '第一个测试的项目',
        name: 'test_front_one'
      },
      localaddress: '2',
    },
    {
      isDeploy: 0,
      hotconfig: {
        type: 'client_front',
        dec: '第一个测试的项目',
        name: 'client_front'
      },
      localaddress: '3',
    },
  ];

export {
    serverList,
    projects
}