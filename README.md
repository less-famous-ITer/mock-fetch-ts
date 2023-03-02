# mock-fetch-ts

## 项目架构

采用发布订阅模式，事件中心提供了on（订阅）和emit（发布）。在fetch和mock中分别对事件的发布与订阅进行封装

## 使用步骤(以 react 项目为例)

1. npm install mock-fetch-ts
2. 新建一个test.js
    ```js
       import { Mock } from 'mock-fetch-ts'
    
    const user_mock = Mock('https://user', 'get', (req) => {
    return 'heyq'
    })
    
    export default user_mock
    ```
3. 导入模块并覆盖原生fetch
   ```js
   import './App.css';
   import { useState } from 'react'
   import user_mock from "./mocks/test";
   import { Mock, fetch } from 'mock-fetch-ts'
   
   Mock('https://test', 'get', (req) => {
     return '123Test'
   })
   
   function App() {
     const [test, setTest] = useState('')
     fetch('https://test', {
       method: 'get'
     }).then(response => {
       setTest(response)
     })
     const [user, setUser] = useState('')
     fetch('https://user', {
       method: 'get'
     }).then(response => {
       setUser(response)
     })
     return (
       <div className="App">
         Test: {test}
         User: {user}
       </div>
     );
   }
   export default App;
   ```
