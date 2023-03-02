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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst center_1 = __importDefault(__webpack_require__(/*! ./store/center */ \"./src/store/center.ts\"));\r\nfunction fetch(url, config) {\r\n    // TODO: 将 url 和 config 解析到 req\r\n    let req = {\r\n        url: '',\r\n        method: ''\r\n    };\r\n    if (config.hasOwnProperty('body')) {\r\n        req = {\r\n            url,\r\n            method: config.method,\r\n            body: config.body\r\n        };\r\n    }\r\n    else {\r\n        req = {\r\n            url,\r\n            method: config.method\r\n        };\r\n    }\r\n    const data = center_1.default.$emit(url + '-' + config.method, req);\r\n    // const bod = new FormData()\r\n    // bod.append('data', data)\r\n    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });\r\n    return new Promise(resolve => {\r\n        resolve(new Response(blob, {\r\n            status: 200,\r\n            statusText: 'ok'\r\n        }));\r\n    });\r\n}\r\nexports[\"default\"] = fetch;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/fetch.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.fetch = exports.Mock = void 0;\r\nconst fetch_1 = __importDefault(__webpack_require__(/*! ./fetch */ \"./src/fetch.ts\"));\r\nexports.fetch = fetch_1.default;\r\nconst mock_1 = __importDefault(__webpack_require__(/*! ./mock */ \"./src/mock.ts\"));\r\nexports.Mock = mock_1.default;\r\n(0, mock_1.default)('https://123', 'get', (req) => {\r\n    // console.log(req)\r\n    return 123;\r\n});\r\n(0, mock_1.default)('https://123/:name', 'get', (req) => {\r\n    // console.log(req)\r\n    // console.log(req.body)\r\n    return {\r\n        name: 'hyq',\r\n        age: '18'\r\n    };\r\n});\r\n(0, fetch_1.default)('https://123/heyq?&a=2&b=3', {\r\n    method: 'get',\r\n    body: JSON.stringify({ name: '12333' })\r\n}).then(response => response.text())\r\n    .then(result => console.log(result));\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/index.ts?");

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst match_1 = __importDefault(__webpack_require__(/*! ../utils/match */ \"./src/utils/match.ts\"));\r\n// 事件中心类\r\nclass EventCenter {\r\n    // 初始化商店列表\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n    // 绑定事件\r\n    $on(eventID, callback) {\r\n        this.events[eventID] = callback;\r\n    }\r\n    // 触发事件\r\n    $emit(eventURL, req) {\r\n        const url = req.url;\r\n        // 遍历匹配路径\r\n        for (const eventID in this.events) {\r\n            if ((0, match_1.default)(eventID.split('-')[0], eventURL.split('-')[0])) {\r\n                return this.events[eventID].apply(this, [req]);\r\n            }\r\n        }\r\n        return 'NOT FOUND';\r\n    }\r\n}\r\nlet center = new EventCenter();\r\nexports[\"default\"] = center;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/store/center.ts?");

/***/ }),

/***/ "./src/utils/match.ts":
/*!****************************!*\
  !*** ./src/utils/match.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/**\r\n * 匹配预设路径与URL\r\n * @param pattern\r\n * @param url\r\n */\r\nfunction match(pattern, url) {\r\n    // 存储预设路径\r\n    let pattern_temp = pattern;\r\n    // TODO: 将预设路径中的路径参数转化为.*进行正则匹配\r\n    let params = /\\/:.*/.exec(pattern_temp);\r\n    if (params !== null) {\r\n        console.log('预设路径中存在路径参数');\r\n        // 提取预设路径参数中的URL\r\n        pattern_temp = pattern_temp.replace(/\\/:.*/, '');\r\n        // 将预设路径中的路径参数转化为.*用于后续匹配\r\n        let param = params[0];\r\n        let temp = param.split('/:').splice(1);\r\n        temp = Array(temp.length).fill('.*');\r\n        pattern_temp = pattern_temp + '/' + temp.join('/');\r\n    }\r\n    // 抛弃URL的查询参数\r\n    const _pattern = new RegExp(pattern_temp);\r\n    const _url = url.split('?');\r\n    // 完美匹配才返回true\r\n    if (_url[0].replace(_pattern, '').length !== 0) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\nexports[\"default\"] = match;\r\n\n\n//# sourceURL=webpack://mock-fetch-ts/./src/utils/match.ts?");

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