import Vue from 'vue'
import env from '../../config'
const FETCH_API = `${env.API_ENDPOINT}/users`

export function signin(userinfo) {
    return Vue.http.post(`${FETCH_API}/signin`, { ...userinfo }).then(res => {
        return res
    })
}

export function signup(userinfo) {
    return Vue.http.post(`${FETCH_API}/signup`, { ...userinfo }).then(res => {
        return res
    })
}