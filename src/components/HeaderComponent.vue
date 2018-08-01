<template>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>Vue Todo</v-toolbar-title>
    </v-toolbar>
</template>
<script>
export default {
    methods: {
        changeDrawer () {
            this.$emit('changeDrawer')
        }
    }
}
</script>
