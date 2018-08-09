import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoListContent from './components/TodoListContent.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: TodoListContent}
    ]
})

export default router