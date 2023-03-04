import fetch from './fetch';
import Mock from "./mock";

Mock('https://www.baidu.com/12/:id', 'get', req => {

    console.log(req)

    console.log('==========')

    return {
        name: 'heyq',
        age: 20,
        title: 30
    }
})

fetch('https://www.baidu.com/12/13', {
    method: 'get',
    cache: 'no-store',
}).then(response => response.text()).then(result => console.log(result))

export { Mock, fetch }
