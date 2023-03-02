import fetch from './fetch';
import Mock from "./mock";

import match from "./utils/match";

// Mock('https://123', 'get', (req) => {
//     // console.log(req)
//     return 123
// })
//
// Mock('https://4566666', 'get', (req) => {
//     // console.log(req)
//     return 456
// })
//
// fetch('https://123', {
//     method: 'get'
// }).then(response => {
//     console.log(response)
// })

const pattern = 'https://www.baidu.com/123/:id/:name/:age'
const url = 'https://www.baidu.com/123/1/hyq?age=10&price=20'

const result = match(pattern, url)
console.log(result)
export { Mock, fetch }
