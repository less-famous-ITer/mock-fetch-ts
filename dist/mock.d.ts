import { MockRequest, MockResponse } from './store/center';
export default function Mock(url: string, method: string, callback: (req: MockRequest, params: object, query: object) => MockResponse): void;
