<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Vue Todo</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
            <v-layout
                justify-center
                align-center
            >
                <v-flex text-xs-center>
                    <message></message>
                    <add-todo></add-todo>
                    <todo-list></todo-list>
                </v-flex>
            </v-layout>
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2018</span>
      </v-footer>
    </v-app>
</template>
<script>
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import Message from './components/Message.vue'
export default {
    data () {
      return {
        drawer: null
      }
    },
    components: {
      TodoList,
      AddTodo,
      Message
    }
}

</script>
