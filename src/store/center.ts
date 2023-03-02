// 商店接口
interface Event {
    [eventID: string]: Function;
}

export interface MockRequest {
    url: string,
    method: string,
    params?: {
        [key: string]: string
    },
    body?: {
        [key: string]: string
    }
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

        for(const eventID in this.events) {
            console.log(eventID)
        }

        return this.events[eventURL].apply(this, [req])
    }
}

let center = new EventCenter()

export default center
