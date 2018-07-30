import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: [],
        message: ""
    },
    getters: {
        todos: state => {
            return state.todos
        },
        message: state =>  {
            return state.message
        }
    },
    mutations: {
        setTodos(state, payload) {
            state.todos = payload.todos
        },
        addTodo(state, payload) {
            const ids = state.todos.map(todo => todo.id)
            state.todos.push({
                id: Math.max(...ids) + 1,
                title: payload.title,
                done: false
            })
        },
        setMessage(state, payload) {
            state.message = payload.message
        },
        changeStatus(state, payload) {
            const arrayNum = state.todos.findIndex((todo) => todo.id === payload.id)
            state.todos[arrayNum].done = !state.todos[arrayNum].done
        },
        updateTitle(state, payload) {
            const arrayNum = state.todos.findIndex((todo) => todo.id === payload.id)
            state.todos[arrayNum].title = payload.title
        }
    },
    actions: {
        setTodos({ commit }, todos) {
            commit('setTodos', { todos })
        },
        addTodo({ commit }, title) {
            commit('addTodo', { title })
        },
        setMessage({ commit }, message) {
            commit('setMessage', { message }) 
        },
        changeStatus({ commit }, id) {
            commit('changeStatus', { id } )
        },
        updateTitle({ commit }, { id, title }) {
            commit('updateTitle', { id, title })
        }
    }
  })

export default store