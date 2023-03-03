<a name="YyOWI"></a>
## 简要使用
1. `npm install mock-fetch-ts`
2. 在模块中引入 Mock
```javascript
import { Mock } from 'mock-fetch-ts'
```

3. 对路径进行预设
```javascript
const user_mock = Mock('https://123/:name', 'get', (req) => {
    return {
        name: 'hyq',
        age: '18'
    }
})
```

4. 到处user_mock模块
```javascript
export default user_mock
```

5. 引入模块、引入fetch
```javascript
import user_mock from "./mocks/test";
import { fetch } from 'mock-fetch-ts'
```

6. 进行fetch
```javascript
fetch('https://123/heyq?&a=2&b=3', {
  method: 'get',
  body: JSON.stringify({name: '12333'})
})
```
<a name="a0uYY"></a>
## API
<a name="zLdc5"></a>
### Mock
```typescript
url: string,
method: string,
callback: (req: MockRequest) => object)
```

- url 支持查询参数与路径参数，即 `fetch(https://www.baidu.com/hh/1?a=1&b=2)` 会被 `mock(https://www.baidu.com/hh/:id)` 所捕获
- method 可以取任意值，只需要和 fetch 所匹配即可
- callback 回调函数接收一个 req 参数，返回一个对象（被res所捕获）。req 支持三个属性，url，method，可选的body，分别于fetch参数中的url，config.method，config.body 对应
<a name="MncCW"></a>
### fetch
```typescript
interface fetchConfig {
    method: string;
    body?: string;
}

url: string
config: fetchConfig)

```

- config 中 method 为必选项，body为可选项
- body 与原生 fetch 类型，需要进行 JSON.stringfy() 处理
- 返回值是一个原生的 promise 对象
