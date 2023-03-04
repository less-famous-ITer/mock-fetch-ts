"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = __importDefault(require("../utils/match"));
/**
 * 事件中心类
 * events: Event 事件列表
 * on: 订阅事件
 * emit: 发布事件
 */
class EventCenter {
    constructor() {
        this.events = {};
    }
    /**
     * 订阅事件
     * @param eventID
     * @param callback
     */
    $on(eventID, callback) {
        this.events[eventID] = callback;
    }
    /**
     * 发布事件
     * @param eventURL
     * @param req
     */
    $emit(eventURL, req) {
        // 遍历得到匹配eventURL的eventID
        for (const eventID in this.events) {
            // 匹配成功
            const match_res = (0, match_1.default)(eventID.split('-')[0], eventURL.split('-')[0]);
            if (match_res.bool) {
                // 调用eventID对应的回调函数
                return this.events[eventID].apply(this, [req, match_res.params, match_res.query]);
            }
        }
        // 未匹配成功
        return {
            error: 'NOT FOUND'
        };
    }
}
// 实例化
let center = new EventCenter();
exports.default = center;
