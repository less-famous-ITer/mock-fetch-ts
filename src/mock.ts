import center, { MockRequest } from './store/center';

export default function Mock(

    url: string,
    method: string,
    callback: (req: MockRequest) => object) {

    // 订阅事件
    // 注册回调
    center.$on(url+'-'+method, callback)

}
