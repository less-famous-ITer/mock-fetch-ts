"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const center_1 = __importDefault(require("./store/center"));
function Mock(url, method, callback) {
    center_1.default.$on(url + method, callback);
}
exports.default = Mock;
