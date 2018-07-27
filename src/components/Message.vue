<template>
    <div class="danger">
        {{ message }}
    </div>
</template>
<script>
export default {
    props: {
        message: String
    }
}
</script>
<style lang="scss" scoped>
    .danger {
        color: red
    }
</style>


