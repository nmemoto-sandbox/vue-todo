import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import axios from 'axios'
import App from './App.vue'
import store from './store.js'

Vue.use(Vuetify)

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
