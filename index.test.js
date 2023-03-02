import { Mock, fetch } from './dist/index'

Mock('https://123', 'get', (req) => {
    // console.log(req)
    return 123
})

fetch('https://123', {
    method: 'get'
}).then(response => {
    console.log(response)
})
