<template>
    <div>
        <input type="checkbox" id="checkbox" value="todo.done" @change="changeStatus">
        <label :class="{done: todo.done}">{{ todo.title }}</label>
    </div>
</template>
<script>
export default {
    props: ['todo'],
    methods: {
        changeStatus() {
            this.$store.dispatch('changeStatus', this.todo.id)
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
