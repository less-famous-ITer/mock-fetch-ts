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
