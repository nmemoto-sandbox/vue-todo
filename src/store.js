import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: [
            {
              title: "Vue の学習",
              done: false 
            },
            {
              title: "k8s の学習",
              done: false
            },
            {
              title: "React の学習",
              done: false
            }
        ],
        message: ""
    },
    getters: {
        todos(state) {
            return state.todos
        },
        message(state) {
            return state.message
        }
    },
    mutations: {
        addTodo(state, payload) {
            state.todos.push({
                title: payload.title,
                done: false
            })
        },
        setMessage(state, payload) {
            state.message = payload.message
        }
    },
    actions: {
        addTodo({ commit }, title) {
            commit('addTodo', { title })
        },
        setMessage({ commit }, message) {
            commit('setMessage', { message }) 
        }
    }
  })

export default store