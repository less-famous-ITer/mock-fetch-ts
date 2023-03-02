"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 事件中心类
class EventCenter {
    // 初始化商店列表
    constructor() {
        this.events = {};
    }
    // 绑定事件
    $on(eventID, callback) {
        this.events[eventID] = callback;
    }
    // 触发事件
    $emit(eventID, req) {
        return this.events[eventID].apply(this, [req]);
    }
}
let center = new EventCenter();
exports.default = center;
