import logo from './logo.svg';
import './App.css';
import { Mock, fetch } from 'mock-fetch-ts'
import {useEffect} from "react";

Mock('https://www.baidu.com/12/:id', 'get', req => {

  console.log(req.url)
  console.log(req.method)
  console.log(req.cache)

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

function App() {

  useEffect(() => {
    fetch('https://www.baidu.com/12/13', {
      method: 'get',
      cache: 'no-store',
    }).then(response => {
      console.log(response.headers)
      console.log(response.status)
      console.log(response.statusText)
      return response.text()
    }).then(result => console.log(result))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
