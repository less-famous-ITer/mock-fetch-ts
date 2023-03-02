import center, { MockRequest, MockResponse } from './store/center';

interface fetchConfig {
    method: string;
    body?: object;
}

export default function fetch(url: string, config: fetchConfig) {

    // TODO: 将 url 和 config 解析到 req
    const req: MockRequest = {
        url,
        method: config.method,
    }

    center.$emit(url+config.method, req)

}