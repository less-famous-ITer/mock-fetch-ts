import center, { MockRequest } from './store/center';

/**
 * fetch配置对象
 * method: string 请求方法
 * body?: string 请求体
 */
interface fetchConfig {
    method: string;
    headers?: {
        [key: string]: string
    }
    body?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    redirect?: string;
    referrer?: string;
    referrerPolicy?: string;
    integrity?: string;
}

export default function fetch(url: string, config: fetchConfig): Promise<Response> {

    // TODO: 将 url 和 config 解析到 req
    let req: MockRequest = {
        url: '',
        method: ''
    }

    // if(config.hasOwnProperty('body')){
    //     req = {
    //         url,
    //         method: config.method,
    //         body: (config.body as string)
    //     }
    // } else {
    //     req = {
    //         url,
    //         method: config.method
    //     }
    // }

    req = {
        url,
        ...config
    }

    req = JSON.parse(JSON.stringify(req))

    // 发布事件
    // 得到回调函数的返回值
    const data = center.$emit(url+'-'+config.method, req)

    // 实例化一个blob对象
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'})

    // 返回一个promise对象
    return new Promise(resolve => {
        resolve(
            new Response(
                blob,
                {
                    status: 200,
                    statusText: 'ok'
                }
            )
        )
    })
}
