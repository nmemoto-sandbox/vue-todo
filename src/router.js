import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoListContent from './components/TodoListContent.vue'
import Landing from './layouts/Landing.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/',        component: Landing },
        { path: '/todos',   component: TodoListContent }
    ]
})

export default router