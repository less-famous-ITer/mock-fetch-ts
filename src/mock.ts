import center, { MockRequest, MockResponse } from './store/center';

export default function Mock(

    url: string,
    method: string,
    callback: (req: MockRequest, params: object, query: object) => MockResponse) {

    // 订阅事件
    // 注册回调
    center.$on(url+'-'+method, callback)

}
