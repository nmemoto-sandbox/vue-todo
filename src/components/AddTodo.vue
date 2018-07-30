<template>
    <div>
        <input v-model="newTodo">
        <button @click="addNewTodo">Add</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        ...mapActions([
            'addTodo',
            'setMessage'
        ]),
        addNewTodo: function() {
            if (this.newTodo.length > 0) {
                this.addTodo(this.newTodo)
                this.newTodo = ''
                this.setMessage('')
            } else {
                this.setMessage('入力してください')
            }
        }
    }
}
</script>
