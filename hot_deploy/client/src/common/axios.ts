import axios, { AxiosResponse } from 'axios'

// axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

const baseUrl = process.env.NODE_ENV === 'development' ? 
'http://192.168.199.157:11000': 
'http://47.102.97.25:11000'

// const codeMessage = {
    // 写关于http返回码问题
// }

// request拦截器
axios.interceptors.request.use(
    config => {
        // console.log('经过了requset拦截器', config);
        // const userInfo = localStorage.getItem('_userInfo');
        // if(userInfo) {
        //     const tokenId = JSON.parse(userInfo.tokenId);
        //     config.headers.tokenId = tokenId;
        // }
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
)

// respone拦截器
axios.interceptors.response.use(
    response => {
        // console.log('经过了response拦截器');
        const res = response.data;
        return res;
    },
    error => {
        console.log('请求发送错误',error);
    }
)

// eslint-disable-next-line
const get = (url: string): Promise<AxiosResponse<any>>  => {
  return axios.get(baseUrl + url);
}

// eslint-disable-next-line
const post = (url: string, body: any): Promise<AxiosResponse<any>> => {
    return axios.post(baseUrl + url, body);
}


export { post, get }



