"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = __importDefault(require("./fetch"));
const mock_1 = __importDefault(require("./mock"));
(0, mock_1.default)('https://123', 'get', (req) => {
    return {};
});
(0, fetch_1.default)('https://123', {
    method: 'get'
});
