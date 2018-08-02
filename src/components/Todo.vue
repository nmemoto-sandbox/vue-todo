<template>
    <v-list-tile>
        <v-list-tile-action>
            <v-checkbox :value="todo.done" @change="changeStatus(todo.id)"></v-checkbox>
        </v-list-tile-action>

        <template v-if="this.editable">
            <v-text-field @keyup.enter="updateTodoTitle" @blur="updateTodoTitle" v-model="title" v-focus></v-text-field>
        </template>
        <template v-else>
            <v-list-tile-content @click="changeEditable">
                <v-list-tile-title :class="{done: todo.done}">{{ todo.title }}</v-list-tile-title>
            </v-list-tile-content>
        </template>
    </v-list-tile>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['todo'],
    data () {
        return {
            editable: false,
            title: this.todo.title
        }
    },
    methods: {
        ...mapActions([
            'changeStatus',
            'updateTitle',
            'setMessage'
        ]),
        changeEditable() {
            this.editable = true
        },
        updateTodoTitle() {
            if (this.title.length > 0) {
                this.editable = false
                this.setMessage('')
                this.updateTitle({ id: this.todo.id, title: this.title })
            } else {
                this.setMessage('入力してください')
            }
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.getElementsByTagName('input')[0].focus()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .done {
        color: gray;
        text-decoration: line-through;
    }
</style>
