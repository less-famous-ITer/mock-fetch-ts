# Mock-fetch-ts

[![npm version](https://badge.fury.io/js/mock-fetch-ts.svg)](https://badge.fury.io/js/mock-fetch-ts)
[![GitHub version](https://badge.fury.io/gh/less-famous-ITer%2Fmock-fetch-ts.svg)](https://badge.fury.io/gh/less-famous-ITer%2Fmock-fetch-ts)

[![WeChat](https://img.shields.io/badge/WeChat-07C160?style=for-the-badge&logo=wechat&logoColor=white)](https://pic.imgdb.cn/item/6400b6c5f144a010072c4261.png)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/heyq46228168)

overrides the native fetch to simulate the background interface

official doc: [mock-fetch-ts](https://www.yuque.com/u29138508/gki7q8/ofwzfpklbd1qwnyr?singleDoc)

## Feature

* Generate response data according to the data template
* Provide data simulation for native fetch

## Easy-Use

```
npm install mock-fetch-ts
```

```ts
import { fetch, Mock } from 'mock-fetch-ts'

Mock('https://www.baidu.com/12/:id', 'get', req => {
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

fetch('https://www.baidu.com/12/13', {
    method: 'get',
    cache: 'no-store',
}).then(response => {
    console.log(response.headers)
    console.log(response.status)
    console.log(response.statusText)
    return response.text()
}).then(result => console.log(result))
```

## Questions

If you have any questions, please feel free to ask through [Issue](https://github.com/less-famous-ITer/mock-fetch-ts/issues/new).

## License

Mock.js is available under the terms of the [MIT](./LICENSE) License.



