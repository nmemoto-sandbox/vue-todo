<template>
  <div id="app">
    <message></message>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import Message from './components/Message.vue'
export default {
  name: 'app',
  components: {
    TodoList,
    AddTodo,
    Message
  }
}
</script>
