<template>
    <div>
        <input type="checkbox" id="checkbox" value="todo.done" @change="changeStatus(todo.id)">
        <template v-if="this.editable">
            <input @keyup.enter="updateTodoTitle" @blur="updateTodoTitle" v-model="title" v-focus>
        </template>
        <template v-else>
            <label :class="{done: todo.done}" @click="changeEditable">{{ todo.title }}</label>
        </template>
    </div>
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
                this.updateTitle({ id: this.todo.id, title: this.title })
            } else {
                this.setMessage('入力してください')
            }
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
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
