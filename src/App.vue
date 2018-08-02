<template>
    <v-app id="inspire">
      <sidebar-component :drawer="drawer"></sidebar-component>>
      <header-component @changeDrawer="changeDrawer"></header-component>
      <content-component></content-component>
      <footer-component></footer-component>
    </v-app>
</template>
<script>
import SidebarComponent from './components/SidebarComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import ContentComponent from './components/ContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
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
    components: {
      SidebarComponent,
      HeaderComponent,
      ContentComponent,
      FooterComponent
    }
}
</script>
