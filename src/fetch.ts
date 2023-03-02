import center, { MockRequest, MockResponse } from './store/center';

interface fetchConfig {
    method: string;
    body?: string;
}

export default function fetch(url: string, config: fetchConfig): Promise<Response> {

    // TODO: 将 url 和 config 解析到 req
    let req: MockRequest = {
        url: '',
        method: ''
    }
    if(config.hasOwnProperty('body')){
        req = {
            url,
            method: config.method,
            body: (config.body as string)
        }
    } else {
        req = {
            url,
            method: config.method
        }
    }

    const data = center.$emit(url+'-'+config.method, req)
    // const bod = new FormData()
    // bod.append('data', data)

    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'})

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
