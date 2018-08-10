<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            app
        >
            <v-list dense>
                <router-link to="/todos" class="item">
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="primary" dark fixed app>
            <v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
            <v-toolbar-title><router-link to="/" class="title">Vue Todo</router-link></v-toolbar-title>
        </v-toolbar>
        <slot></slot>
        <v-footer color="primary" app>
            <span class="white--text">&copy; 2018</span>
        </v-footer>
    </div>
</template>
<script>
export default {
    data () {
        return {
            drawer: false
        }
    },
    methods: {
        changeDrawer: function() {
            this.drawer = !this.drawer
        }
    },
}
</script>
<style lang="scss" scoped>
    .title {
        text-decoration: none;
        color: white;
    }
    .item {
        text-decoration: none;
        color: black;
    }
</style>

