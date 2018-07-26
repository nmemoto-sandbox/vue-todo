<template>
    <div>
        {{ todo.title }} - {{ showDone }}
    </div>
</template>
<script>
export default {
    props: ['todo'],
    computed: {
        showDone() {
            return this.todo.done ? "完了" : "未完了"
        }
    }
}
</script>
