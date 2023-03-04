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
    return {
        headers: {
            ACC: 'accccc'
        },
        ok: true,
        status: 404,
        statusText: 'NOT FOUND',
        url: 'http1',
        body: {
            name: 'hey',
            age: 20
        }
    };
});
(0, fetch_1.default)('https://www.baidu.com/12/13', {
    method: 'get',
    cache: 'no-store',
}).then(response => {
    console.log(response.headers);
    console.log(response.status);
    console.log(response.statusText);
    return response.text();
}).then(result => console.log(result));
