<template>
    <basic>
        <v-content>
            <v-container fluid fill-height>
                <v-layout
                    row
                >
                    <v-flex xs12 sm6 offset-sm3>
                        <message></message>
                        <add-todo></add-todo>
                        <todo-list></todo-list>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </basic>
</template>
<script>
import Basic from '../layouts/Basic.vue'
import TodoList from './TodoList.vue'
import AddTodo from './AddTodo.vue'
import Message from './Message.vue'
export default {
    components: {
        Basic,
        TodoList,
        AddTodo,
        Message
    }
}
</script>
