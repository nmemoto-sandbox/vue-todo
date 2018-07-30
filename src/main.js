import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  mounted () {
    axios.get('src/todos.json')
      .then(res => {
        this.$store.dispatch('setTodos', res.data)
      })
  }
})
