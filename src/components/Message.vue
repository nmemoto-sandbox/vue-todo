<template>
    <div class="danger">
        {{ message }}
    </div>
</template>
<script>
export default {
    computed: {
        message() {
            return this.$store.getters.message
        }
    }
}
</script>
<style lang="scss" scoped>
    .danger {
        color: red
    }
</style>


