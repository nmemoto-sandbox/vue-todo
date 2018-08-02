<template>
    <v-list>
        <todo v-for="(todo, i) in todos" :key="i" :todo="todo"></todo>
    </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from './Todo.vue'
export default {
    components: {
        Todo
    },
    computed: mapGetters(['todos'])
}
</script>