import fetch from './fetch';
import Mock from "./mock";

Mock('https://123', 'get', (req) => {
    // console.log(req)
    return {}
})

Mock('https://123/:name', 'get', (req) => {
    // console.log(req)
    // console.log(req.body)
    return {
        name: 'hyq',
        age: '18'
    }
})

fetch('https://123/heyq?&a=2&b=3', {
    method: 'get',
    body: JSON.stringify({name: '12333'})
}).then(response => response.text())
    .then(result => console.log(result))
//     .then(response => {
//     console.log('https://123/heyq?&a=2&b=3')
//     console.log(response)
// })

// fetch('https://123', {
//     method: 'get'
// }).then(response => {
//     console.log('https://123')
//     console.log(response)
// }
// )

export { Mock, fetch }
