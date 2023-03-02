import fetch from './fetch';
import Mock from "./mock";

Mock('https://123', 'get', (req) => {
    return {}
})

fetch('https://123', {
    method: 'get'
})
