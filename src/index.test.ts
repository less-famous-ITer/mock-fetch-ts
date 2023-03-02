// import Mock from './index.test.2'
// import fetch from "./index.test.3";
//
// Mock('123', '4567', (req, res) => {
//     console.log('123', 'func', req, res)
// })
//
// // center.$emit('1234567', 1, 2)
// fetch('1234567', 1, 9)

// Mock(url, config, callback: (req, res) => {
//     res, data
// })
//
// fetch(url, config)
// 解析url和config为eventID和req
// 设置res和data
// 返回对应callback的结果

import fetch from './fetch';
import Mock from "./mock";

Mock('https://123', 'get', (req) => {
    // console.log(req)
    return {num:123}
})

fetch('https://123', {
    method: 'get'
}).then(response => {
    console.log(response)
})

export { Mock, fetch }
