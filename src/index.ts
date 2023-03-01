import store from './store/store';

// 原生fetch
// const _fetch = store()

import fetch from './fetch'

fetch('https://echo.apifox.com/get?q1=<q1>&q2=<q2>')

// var myHeaders = new Headers();
// myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
//
// fetch("https://echo.apifox.com/get?q1=<q1>&q2=<q2>")
//     .then(response => console.log(response))
//
// _fetch("https://echo.apifox.com/get?q1=<q1>&q2=<q2>", {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
