<template>
    <div class="danger">
        {{ message }}
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(['message'])
}
</script>
<style lang="scss" scoped>
    .danger {
        color: red
    }
</style>


