import center, { MockRequest } from './store/center';

export default function Mock(
    url: string,
    method: string,
    callback: (req: MockRequest) => object) {

    center.$on(url+'-'+method, callback)

}
