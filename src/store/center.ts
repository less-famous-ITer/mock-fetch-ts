import match from "../utils/match";

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
    url: string,
    method: string,
    headers?: {
        [key: string]: string
    },
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
    headers?: object,
    ok?: boolean,
    status?: number,
    statusText?: string,
    type?: string,
    url?: string,
    body: object,
}

/**
 * 事件中心类
 * events: Event 事件列表
 * on: 订阅事件
 * emit: 发布事件
 */
class EventCenter {

    public events: Event;
    constructor() {
        this.events = {}
    }

    /**
     * 订阅事件
     * @param eventID
     * @param callback
     */
    $on(eventID: string, callback: Function) {
        this.events[eventID] = callback
    }

    /**
     * 发布事件
     * @param eventURL
     * @param req
     */
    $emit(eventURL: string, req: MockRequest) {

        // 遍历得到匹配eventURL的eventID
        for(const eventID in this.events) {
            // 匹配成功

            const match_res = match(eventID.split('-')[0], eventURL.split('-')[0])

            if(match_res.bool) {
                // 调用eventID对应的回调函数
                return this.events[eventID].apply(this, [req, match_res.params, match_res.query])
            }
        }

        // 未匹配成功
        return {
            error: 'NOT FOUND'
        }
    }
}

// 实例化
let center = new EventCenter()

export default center
