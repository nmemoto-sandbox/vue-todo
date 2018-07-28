<template>
    <div>
        <todo v-for="(todo, i) in todos" :key="i" :todo="todo"></todo>
    </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
    components: {
        Todo
    },
    computed: {
        todos() {
            return this.$store.getters.todos
        }
    }
}
</script>