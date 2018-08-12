import AuthService from './services/auth.service.js'
const auth = new AuthService()
export default (Vue) => {
    Vue.auth = auth
    Object.defineProperties(Vue.prototype, {
      $auth: {
        get () {
          return auth;
        }
      }
    })
}