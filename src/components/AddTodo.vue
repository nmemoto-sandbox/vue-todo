<template>
    <div>
        <input v-model="newTodo">
        <button @click="addNewTodo">Add</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        addNewTodo: function() {
            if (this.newTodo.length > 0) {
                this.$emit('addTodo', this.newTodo)
                this.newTodo = ''
                this.$emit('setMessage', '')
            } else {
                this.$emit('setMessage', '入力してください')
            }
        }
    }
}
</script>
