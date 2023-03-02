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
(0, mock_1.default)('https://123', 'get', (req) => {
    // console.log(req)
    return 123;
});
(0, mock_1.default)('https://123/:name', 'get', (req) => {
    // console.log(req)
    // console.log(req.body)
    return {
        name: 'hyq',
        age: '18'
    };
});
(0, fetch_1.default)('https://123/heyq?&a=2&b=3', {
    method: 'get',
    body: JSON.stringify({ name: '12333' })
}).then(response => response.text())
    .then(result => console.log(result));
