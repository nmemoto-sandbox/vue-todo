<template>
  <div id="app">
    <message :message="message"></message>
    <add-todo @addTodo="addTodo" @setMessage="setMessage"></add-todo>
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import Message from './components/Message.vue'
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
      ],
      message: ''
    }
  },
  methods: {
    addTodo: function(title) {
      this.todos.push({
        title,
        done: false
      })
    },
    setMessage: function(msg) {
      this.message = msg
    }
  },
  components: {
    TodoList,
    AddTodo,
    Message
  }
}
</script>
