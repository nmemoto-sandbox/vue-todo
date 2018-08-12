import Vue from 'vue'
import Vuetify from 'vuetify'
import VueLocalStorage from 'vue-localstorage'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import App from './App.vue'
import store from './store.js'
import router from './router.js'
import auth from './authentication.js'

Vue.use(Vuetify)
Vue.use(VueLocalStorage)

Vue.use(auth);

new Vue({
  el: '#app',
  store,
  router,
  localStorage: {
    user: {
      type: Object,
    }
  },
  render: h => h(App),
  mounted () {
    const user = this.$localStorage.get('user')
    if (Object.keys(user).length > 0) {
      console.log(this.$localStorage.get('user'))
      this.$store.dispatch('setUser', this.$localStorage.get('user'))
    }
    this.$store.dispatch('setTodos')
  }
})