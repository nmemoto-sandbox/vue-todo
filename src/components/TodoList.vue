<template>
    <div>
        <todo v-for="(todo, i) in todos" :key="i" :todo="todo"></todo>
    </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
    props: {
        todos: Array
    },
    components: {
        Todo
    }
}
</script>