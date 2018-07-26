<template>
  <div id="app">
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'app',
  data () {
    return {
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
      ]
    }
  },
  components: {
    TodoList: TodoList
  }
}
</script>
