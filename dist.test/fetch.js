"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const center_1 = __importDefault(require("./store/center"));
function fetch(url, config) {
    // TODO: 将 url 和 config 解析到 req
    const req = {
        url,
        method: config.method,
    };
    return new Promise(resolve => {
        resolve(center_1.default.$emit(url + config.method, req));
    });
}
exports.default = fetch;
