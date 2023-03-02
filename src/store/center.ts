import match from "../utils/match";

// 事件接口
interface Event {
    [eventID: string]: Function;
}

export interface MockRequest {
    url: string,
    method: string,
    params?: object,
    body?: object
}

export interface MockResponse {

}

// 事件中心类
class EventCenter {
    // 事件列表
    public events: Event;
    // 初始化商店列表
    constructor() {
        this.events = {}
    }
    // 绑定事件
    $on(eventID: string, callback: Function) {
        this.events[eventID] = callback
    }
    // 触发事件
    $emit(eventURL: string, req: MockRequest) {

        const url = req.url

        // 遍历匹配路径
        for(const eventID in this.events) {
            if(match(eventID.split('-')[0], eventURL.split('-')[0])) {
                return this.events[eventID].apply(this, [req])
            }
        }

        return 'NOT FOUND'

    }
}

let center = new EventCenter()

export default center
