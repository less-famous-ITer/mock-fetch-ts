/**
 * eventID: string 事件ID
 * Function: 该事件对应回调函数
 */
interface Event {
    [eventID: string]: Function;
}
/**
 * url: string 路径
 * method: string 请求方法
 * body?: string 请求参数
 */
export interface MockRequest {
    url: string;
    method: string;
    headers?: {
        [key: string]: string;
    };
    body?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    redirect?: string;
    referrer?: string;
    referrerPolicy?: string;
    integrity?: string;
}
export interface MockResponse {
    headers?: object;
    ok?: boolean;
    status?: number;
    statusText?: string;
    type?: string;
    url?: string;
    body: object;
}
/**
 * 事件中心类
 * events: Event 事件列表
 * on: 订阅事件
 * emit: 发布事件
 */
declare class EventCenter {
    events: Event;
    constructor();
    /**
     * 订阅事件
     * @param eventID
     * @param callback
     */
    $on(eventID: string, callback: Function): void;
    /**
     * 发布事件
     * @param eventURL
     * @param req
     */
    $emit(eventURL: string, req: MockRequest): any;
}
declare let center: EventCenter;
export default center;
