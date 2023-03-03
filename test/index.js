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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst center_1 = __importDefault(__webpack_require__(/*! ./store/center */ \"./src/store/center.ts\"));\r\nfunction fetch(url, config) {\r\n    // TODO: 将 url 和 config 解析到 req\r\n    let req = {\r\n        url: '',\r\n        method: ''\r\n    };\r\n    if (config.hasOwnProperty('body')) {\r\n        req = {\r\n            url,\r\n            method: config.method,\r\n            body: config.body\r\n        };\r\n    }\r\n    else {\r\n        req = {\r\n            url,\r\n            method: config.method\r\n        };\r\n    }\r\n    // 发布事件\r\n    // 得到回调函数的返回值\r\n    const data = center_1.default.$emit(url + '-' + config.method, req);\r\n    // 实例化一个blob对象\r\n    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });\r\n    // 返回一个promise对象\r\n    return new Promise(resolve => {\r\n        resolve(new Response(blob, {\r\n            status: 200,\r\n            statusText: 'ok'\r\n        }));\r\n    });\r\n}\r\nexports[\"default\"] = fetch;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/fetch.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.fetch = exports.Mock = void 0;\r\nconst fetch_1 = __importDefault(__webpack_require__(/*! ./fetch */ \"./src/fetch.ts\"));\r\nexports.fetch = fetch_1.default;\r\nconst mock_1 = __importDefault(__webpack_require__(/*! ./mock */ \"./src/mock.ts\"));\r\nexports.Mock = mock_1.default;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/index.ts?");

/***/ }),

/***/ "./src/mock.ts":
/*!*********************!*\
  !*** ./src/mock.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst center_1 = __importDefault(__webpack_require__(/*! ./store/center */ \"./src/store/center.ts\"));\r\nfunction Mock(url, method, callback) {\r\n    // 订阅事件\r\n    // 注册回调\r\n    center_1.default.$on(url + '-' + method, callback);\r\n}\r\nexports[\"default\"] = Mock;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/mock.ts?");

/***/ }),

/***/ "./src/store/center.ts":
/*!*****************************!*\
  !*** ./src/store/center.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst match_1 = __importDefault(__webpack_require__(/*! ../utils/match */ \"./src/utils/match.ts\"));\r\n/**\r\n * 事件中心类\r\n * events: Event 事件列表\r\n * on: 订阅事件\r\n * emit: 发布事件\r\n */\r\nclass EventCenter {\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n    /**\r\n     * 订阅事件\r\n     * @param eventID\r\n     * @param callback\r\n     */\r\n    $on(eventID, callback) {\r\n        this.events[eventID] = callback;\r\n    }\r\n    /**\r\n     * 发布事件\r\n     * @param eventURL\r\n     * @param req\r\n     */\r\n    $emit(eventURL, req) {\r\n        // 遍历得到匹配eventURL的eventID\r\n        for (const eventID in this.events) {\r\n            // 匹配成功\r\n            if ((0, match_1.default)(eventID.split('-')[0], eventURL.split('-')[0])) {\r\n                // 调用eventID对应的回调函数\r\n                return this.events[eventID].apply(this, [req]);\r\n            }\r\n        }\r\n        // 未匹配成功\r\n        return {\r\n            error: 'NOT FOUND'\r\n        };\r\n    }\r\n}\r\n// 实例化\r\nlet center = new EventCenter();\r\nexports[\"default\"] = center;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/store/center.ts?");

/***/ }),

/***/ "./src/utils/match.ts":
/*!****************************!*\
  !*** ./src/utils/match.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/**\r\n * 匹配pattern和url\r\n * @param pattern\r\n * @param url\r\n */\r\nfunction match(pattern, url) {\r\n    // 暂存pattern\r\n    let pattern_temp = pattern;\r\n    // TODO: 将预设路径中的路径参数转化为.*进行正则匹配\r\n    let params = /\\/:.*/.exec(pattern_temp);\r\n    if (params !== null) {\r\n        // 提取预设路径参数中的URL\r\n        pattern_temp = pattern_temp.replace(/\\/:.*/, '');\r\n        // 将预设路径中的路径参数转化为.*用于后续匹配\r\n        let param = params[0];\r\n        let temp = param.split('/:').splice(1);\r\n        temp = Array(temp.length).fill('.*');\r\n        pattern_temp = pattern_temp + '/' + temp.join('/');\r\n    }\r\n    // 抛弃URL的查询参数\r\n    const _pattern = new RegExp(pattern_temp);\r\n    const _url = url.split('?');\r\n    // 完美匹配才返回true\r\n    if (_url[0].replace(_pattern, '').length !== 0) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\nexports[\"default\"] = match;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/utils/match.ts?");

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