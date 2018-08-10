<template>
  <v-jumbotron color="primary" dark height="500px">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Vue Todo</h3>
          <router-link to="/todos">
            <v-btn
                class="mx-0"
                flat
                large
                outline 
            >
                Let's start!
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
