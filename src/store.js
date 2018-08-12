import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as TodoAPI from './lib/TodoAPI.js'

const store = new Vuex.Store({
    state: {
        todos: [],
        message: "",
        user: null
    },
    getters: {
        todos: state => {
            return state.todos
        },
        message: state =>  {
            return state.message
        },
        user: state => {
            return state.user
        } 
    },
    mutations: {
        login(state, payload) {
            state.user = payload.user
        },
        logout(state) {
            state.user = null
            Vue.auth.logout()
        },
        setTodos(state, payload) {
            state.todos = payload.todos
        },
        addTodo(state, payload) {
            state.todos.push(payload.todo)
        },
        deleteTodo(state, payload) {
            state.todos = state.todos.filter(todo => todo.id !== payload.id)
        },
        setMessage(state, payload) {
            state.message = payload.message
        },
        changeStatus(state, payload) {
            const arrayNum = state.todos.findIndex((todo) => todo.id === payload.id)
            state.todos[arrayNum].done = !state.todos[arrayNum].done
        },
        updateName(state, payload) {
            const arrayNum = state.todos.findIndex((todo) => todo.id === payload.id)
            state.todos[arrayNum].name = payload.name
        }
    },
    actions: {
        setUser({ commit }, user ) {
            commit('login', { user })
        },
        login({ commit }) {
            Vue.auth.login().then(
              user => {
                if (user) {
                  commit('login', { user })
                  Vue.localStorage.set('user', user)
                }
              },
              () => {
              }
            );
        },
        logout({ commit }) {
            Vue.localStorage.remove('user')
            commit('logout')
        },
        setTodos({ commit }) {
            TodoAPI.findAll().then(todos => {
                commit('setTodos', { todos })
            })
        },
        addTodo({ commit }, name) {
            TodoAPI.create({ name, done: false}).then(todo => {
                commit('addTodo', { todo })
            })
        },
        deleteTodo({ commit }, id) {
            TodoAPI.remove(id).then(()=>{
                commit('deleteTodo', { id })
            })
        },
        setMessage({ commit }, message) {
            commit('setMessage', { message }) 
        },
        changeStatus({ commit, state }, id) {
            const done = !state.todos.find(todo => todo.id === id).done
            TodoAPI.patch(id, { done }).then(todo => {
                commit('changeStatus', { id } )
            })
        },
        updateName({ commit }, { id, name }) {
            TodoAPI.patch(id, { name }).then(todo => {
                commit('updateName', { id, name: todo.name })
            })
        }
    }
  })

export default store