
export enum ResponseStatus {
    success = 200,
    error = 500, //服务器内部错误
    noFound = 404,
    Forbidden = 403,
    reslock = 423, // 资源被锁
    tooManyRes =429, // 请求过多
}

export function handlerResponse(status: ResponseStatus, data: any) {
    return {status: status, data: data}
}
