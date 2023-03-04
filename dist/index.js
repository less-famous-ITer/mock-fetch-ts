"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = exports.Mock = void 0;
const fetch_1 = __importDefault(require("./fetch"));
exports.fetch = fetch_1.default;
const mock_1 = __importDefault(require("./mock"));
exports.Mock = mock_1.default;
(0, mock_1.default)('https://www.baidu.com/12/:id', 'get', req => {
    console.log(req);
    console.log('==========');
    return {
        name: 'heyq',
        age: 20,
        title: 30
    };
});
(0, fetch_1.default)('https://www.baidu.com/12/13', {
    method: 'get',
    cache: 'no-store',
}).then(response => response.text()).then(result => console.log(result));
