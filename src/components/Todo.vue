<template>
    <div>
        {{ todo.title }} - {{ todo.done }}
    </div>
</template>
<script>
export default {
    props: ['todo']
}
</script>
