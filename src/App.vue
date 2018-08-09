<template>
    <v-app id="inspire">
      <basic>
        <router-view />
      </basic>
    </v-app>
</template>
<script>
import Basic from './layouts/Basic.vue'
export default {
    components: {
      Basic
    }
}
</script>
