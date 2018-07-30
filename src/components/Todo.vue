<template>
    <div>
        <input type="checkbox" id="checkbox" value="todo.done" @change="changeStatus">
        <template v-if="this.editable">
            <input @keyup.enter="updateTitle" @blur="updateTitle" v-model="title" v-focus>
        </template>
        <template v-else>
            <label :class="{done: todo.done}" @click="changeEditable">{{ todo.title }}</label>
        </template>
    </div>
</template>
<script>
export default {
    props: ['todo'],
    data () {
        return {
            editable: false,
            title: this.todo.title
        }
    },
    methods: {
        changeStatus() {
            this.$store.dispatch('changeStatus', this.todo.id)
        },
        changeEditable() {
            this.editable = true
        },
        updateTitle() {
            if (this.title.length > 0) {
                this.editable = false
                this.$store.dispatch('updateTitle', { id: this.todo.id, title: this.title })
            } else {
                this.$store.dispatch('setMessage', '入力してください')
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
