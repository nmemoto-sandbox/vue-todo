import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import App from './App.vue'
import store from './store.js'
import router from './router.js'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted () {
    this.$store.dispatch('setTodos')
  }
})
