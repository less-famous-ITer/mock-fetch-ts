import center, { MockRequest, MockResponse } from './store/center';

interface fetchConfig {
    method: string;
    body?: object;
}

export default function fetch(url: string, config: fetchConfig) {

    // TODO: 将 url 和 config 解析到 req
    let req: MockRequest = {
        url: '',
        method: ''
    }
    if(config.hasOwnProperty('body')){
        req = {
            url,
            method: config.method,
            body: (config.body as object)
        }
    } else {
        req = {
            url,
            method: config.method
        }
    }

    // const req: MockRequest = {
    //     url,
    //     method: config.method,
    // }

    return new Promise(resolve => {
        resolve(
            center.$emit(url+'-'+config.method, req)
        )
    })

}
