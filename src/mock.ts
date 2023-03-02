import center, { MockRequest } from './store/center';

export default function Mock(
    url: string,
    method: string,
    callback: (req: MockRequest) => void) {

    center.$on(url+'-'+method, callback)

}
