import center, { MockRequest, MockResponse } from './store/center';

export default function Mock(

    url: string,
    method: string,
    callback: (req: MockRequest) => MockResponse) {

    // 订阅事件
    // 注册回调
    center.$on(url+'-'+method, callback)

}
