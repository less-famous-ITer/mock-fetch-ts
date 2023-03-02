"use strict";
// import Mock from './index.test.2'
// import fetch from "./index.test.3";
//
// Mock('123', '4567', (req, res) => {
//     console.log('123', 'func', req, res)
// })
//
// // center.$emit('1234567', 1, 2)
// fetch('1234567', 1, 9)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = exports.Mock = void 0;
// Mock(url, config, callback: (req, res) => {
//     res, data
// })
//
// fetch(url, config)
// 解析url和config为eventID和req
// 设置res和data
// 返回对应callback的结果
const fetch_1 = __importDefault(require("./fetch"));
exports.fetch = fetch_1.default;
const mock_1 = __importDefault(require("./mock"));
exports.Mock = mock_1.default;
(0, mock_1.default)('https://123', 'get', (req) => {
    // console.log(req)
    return 123;
});
(0, fetch_1.default)('https://123', {
    method: 'get'
}).then(response => {
    console.log(response);
});
