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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.fetch = exports.Mock = void 0;\r\nconst fetch_1 = __importDefault(__webpack_require__(/*! ./fetch */ \"./src/fetch.ts\"));\r\nexports.fetch = fetch_1.default;\r\nconst mock_1 = __importDefault(__webpack_require__(/*! ./mock */ \"./src/mock.ts\"));\r\nexports.Mock = mock_1.default;\r\nconst match_1 = __importDefault(__webpack_require__(/*! ./utils/match */ \"./src/utils/match.ts\"));\r\n// Mock('https://123', 'get', (req) => {\r\n//     // console.log(req)\r\n//     return 123\r\n// })\r\n//\r\n// Mock('https://4566666', 'get', (req) => {\r\n//     // console.log(req)\r\n//     return 456\r\n// })\r\n//\r\n// fetch('https://123', {\r\n//     method: 'get'\r\n// }).then(response => {\r\n//     console.log(response)\r\n// })\r\nconst pattern = 'https://www.baidu.com/123/:id/:name/:age';\r\nconst url = 'https://www.baidu.com/123/1/hyq?age=10&price=20';\r\nconst result = (0, match_1.default)(pattern, url);\r\nconsole.log(result);\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/index.ts?");

/***/ }),

/***/ "./src/mock.ts":
/*!*********************!*\
  !*** ./src/mock.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst center_1 = __importDefault(__webpack_require__(/*! ./store/center */ \"./src/store/center.ts\"));\r\nfunction Mock(url, method, callback) {\r\n    center_1.default.$on(url + '-' + method, callback);\r\n}\r\nexports[\"default\"] = Mock;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/mock.ts?");

/***/ }),

/***/ "./src/store/center.ts":
/*!*****************************!*\
  !*** ./src/store/center.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// 事件中心类\r\nclass EventCenter {\r\n    // 初始化商店列表\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n    // 绑定事件\r\n    $on(eventID, callback) {\r\n        this.events[eventID] = callback;\r\n    }\r\n    // 触发事件\r\n    $emit(eventURL, req) {\r\n        const url = req.url;\r\n        for (const eventID in this.events) {\r\n            console.log(eventID);\r\n        }\r\n        return this.events[eventURL].apply(this, [req]);\r\n    }\r\n}\r\nlet center = new EventCenter();\r\nexports[\"default\"] = center;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/store/center.ts?");

/***/ }),

/***/ "./src/utils/match.ts":
/*!****************************!*\
  !*** ./src/utils/match.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction match(pattern, url) {\r\n    let pattern_temp = pattern;\r\n    // TODO: 测试是否存在查询参数\r\n    let params = /\\/:.*/.exec(pattern_temp);\r\n    // TODO: 将带查询参数的转化为正则字符串\r\n    if (params !== null) {\r\n        pattern_temp = pattern_temp.replace(/\\/:.*/, '');\r\n        let param = params[0];\r\n        console.log(pattern_temp);\r\n        console.log(param);\r\n        let temp = param.split('/:').splice(1);\r\n        console.log(temp);\r\n        temp = Array(temp.length).fill('.*');\r\n        console.log(temp);\r\n        pattern_temp = pattern_temp + '/' + temp.join('/');\r\n        console.log(pattern_temp);\r\n    }\r\n    const _pattern = new RegExp(pattern_temp);\r\n    const _url = url.split('?');\r\n    const res = _pattern.test(_url[0]);\r\n    return res;\r\n}\r\nexports[\"default\"] = match;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/utils/match.ts?");

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