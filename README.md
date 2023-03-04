# Mock-fetch-ts

overrides the native fetch to simulate the background interface

chinese doc: [mock-fetch-ts](https://www.yuque.com/u29138508/gki7q8/ofwzfpklbd1qwnyr?singleDoc)

english doc: [mock-fetch-ts](https://github.com/less-famous-ITer/mock-fetch-ts#readme)

## Feature

* Generate response data according to the data template
* Provide data simulation for native fetch
* Get the query and the params in Mock function

## Easy-Use

```
npm install mock-fetch-ts
```

```ts
import { fetch, Mock } from 'mock-fetch-ts'

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
```

## API docs

### fetch

```ts
fetch(url: string, config: fetchConfig): Promise<Response>
```

```ts
interface fetchConfig {
    method: string;
    headers?: {
        [key: string]: string
    }
    body?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    redirect?: string;
    referrer?: string;
    referrerPolicy?: string;
    integrity?: string;
}
```

### Mock

```ts
function Mock(
    url: string,
    method: string,
    callback: (req: MockRequest, params: object, query: object) => MockResponse)
```

Req is a wrapper for the request body, which can be called between callback functions

```ts
export interface MockResponse {
    headers?: object,
    ok?: boolean,
    status?: number,
    statusText?: string,
    type?: string,
    url?: string,
    body: object
}
```

## Questions

If you have any questions, please feel free to ask through [Issue](https://github.com/less-famous-ITer/mock-fetch-ts/issues/new).

## License

Mock.js is available under the terms of the [MIT](./LICENSE) License.



