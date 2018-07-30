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
                this.$store.dispatch('addTodo', this.newTodo)
                this.newTodo = ''
                this.$store.dispatch('setMessage', '')
            } else {
                this.$store.dispatch('setMessage', '入力してください')
            }
        }
    }
}
</script>
