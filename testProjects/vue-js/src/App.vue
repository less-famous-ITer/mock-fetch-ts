<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Mock, fetch } from 'mock-fetch-ts'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
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
  },
  mounted() {
    fetch('https://www.baidu.com/12/13', {
      method: 'get',
      cache: 'no-store',
    }).then(response => {
      console.log(response.headers)
      console.log(response.status)
      console.log(response.statusText)
      return response.text()
    }).then(result => console.log(result))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
