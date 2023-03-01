// 商店接口
interface Event {
    [houseNum: string]: Function;
}

interface Request {

}

interface Response {

}

interface Config {

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
    $on(houseNum: string, callback: (req: Request, res: Response) => void): void {
        this.events[houseNum] = callback
    }
    // 触发事件
    $emit(houseNum: string, req: Request, res: Response): void {
        this.events[houseNum].apply(this, [req, res])
    }
}

let center = new EventCenter()

// center.add('123', (...args: Array<any>) => {
//     console.log('fun1', args)
// })
//
// center.buy('123', 1, 2, 3)

export default center
