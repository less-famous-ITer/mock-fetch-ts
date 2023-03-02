/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch.ts":
/*!**********************!*\
  !*** ./src/fetch.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst center_1 = __importDefault(__webpack_require__(/*! ./store/center */ \"./src/store/center.ts\"));\r\nfunction fetch(url, config) {\r\n    // TODO: 将 url 和 config 解析到 req\r\n    const req = {\r\n        url,\r\n        method: config.method,\r\n    };\r\n    return new Promise(resolve => {\r\n        resolve(center_1.default.$emit(url + config.method, req));\r\n    });\r\n}\r\nexports[\"default\"] = fetch;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/fetch.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n// import Mock from './index.test.2'\r\n// import fetch from \"./index.test.3\";\r\n//\r\n// Mock('123', '4567', (req, res) => {\r\n//     console.log('123', 'func', req, res)\r\n// })\r\n//\r\n// // center.$emit('1234567', 1, 2)\r\n// fetch('1234567', 1, 9)\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.fetch = exports.Mock = void 0;\r\n// Mock(url, config, callback: (req, res) => {\r\n//     res, data\r\n// })\r\n//\r\n// fetch(url, config)\r\n// 解析url和config为eventID和req\r\n// 设置res和data\r\n// 返回对应callback的结果\r\nconst fetch_1 = __importDefault(__webpack_require__(/*! ./fetch */ \"./src/fetch.ts\"));\r\nexports.fetch = fetch_1.default;\r\nconst mock_1 = __importDefault(__webpack_require__(/*! ./mock */ \"./src/mock.ts\"));\r\nexports.Mock = mock_1.default;\r\n(0, mock_1.default)('https://123', 'get', (req) => {\r\n    // console.log(req)\r\n    return 123;\r\n});\r\n(0, fetch_1.default)('https://123', {\r\n    method: 'get'\r\n}).then(response => {\r\n    console.log(response);\r\n});\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/index.ts?");

/***/ }),

/***/ "./src/mock.ts":
/*!*********************!*\
  !*** ./src/mock.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst center_1 = __importDefault(__webpack_require__(/*! ./store/center */ \"./src/store/center.ts\"));\r\nfunction Mock(url, method, callback) {\r\n    center_1.default.$on(url + method, callback);\r\n}\r\nexports[\"default\"] = Mock;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/mock.ts?");

/***/ }),

/***/ "./src/store/center.ts":
/*!*****************************!*\
  !*** ./src/store/center.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// 事件中心类\r\nclass EventCenter {\r\n    // 初始化商店列表\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n    // 绑定事件\r\n    $on(eventID, callback) {\r\n        this.events[eventID] = callback;\r\n    }\r\n    // 触发事件\r\n    $emit(eventID, req) {\r\n        return this.events[eventID].apply(this, [req]);\r\n    }\r\n}\r\nlet center = new EventCenter();\r\nexports[\"default\"] = center;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/store/center.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;