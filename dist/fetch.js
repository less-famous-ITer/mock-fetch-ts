"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const center_1 = __importDefault(require("./store/center"));
function fetch(url, config) {
    // TODO: 将 url 和 config 解析到 req
    let req = {
        url: '',
        method: ''
    };
    if (config.hasOwnProperty('body')) {
        req = {
            url,
            method: config.method,
            body: config.body
        };
    }
    else {
        req = {
            url,
            method: config.method
        };
    }
    const data = center_1.default.$emit(url + '-' + config.method, req);
    // const bod = new FormData()
    // bod.append('data', data)
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    return new Promise(resolve => {
        resolve(new Response(blob, {
            status: 200,
            statusText: 'ok'
        }));
    });
}
exports.default = fetch;
