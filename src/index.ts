import fetch from './fetch';
import Mock from "./mock";

Mock('https://www.baidu.com/12/:id/:ppp', 'get', (req, params, query) => {

    console.log(params)

    console.log(query)

    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.cache)

    return {
        headers: {
            ACC: 'accccc'
        },
        ok: true,
        status: 404,
        statusText: 'NOT FOUND',
        url: 'http1',
        body: {
            name: 'hey',
            age: 20
        }
    }
})

fetch('https://www.baidu.com/12/13/yyy', {
    method: 'get',
    cache: 'no-store',
}).then(response => {
    // console.log(response.headers)
    // console.log(response.status)
    // console.log(response.statusText)
    return response.text()
}).then(result => console.log(result))

fetch('https://www.baidu.com/12/13/hhh?a=1&b=2', {
    method: 'get',
    cache: 'no-store',
}).then(response => {
    // console.log(response.headers)
    // console.log(response.status)
    // console.log(response.statusText)
    return response.text()
}).then(result => console.log(result))

export { Mock, fetch }
