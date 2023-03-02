"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = __importDefault(require("../utils/match"));
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
    $emit(eventURL, req) {
        const url = req.url;
        // 遍历匹配路径
        for (const eventID in this.events) {
            if ((0, match_1.default)(eventID.split('-')[0], eventURL.split('-')[0])) {
                return this.events[eventID].apply(this, [req]);
            }
        }
        return 'NOT FOUND';
    }
}
let center = new EventCenter();
exports.default = center;
