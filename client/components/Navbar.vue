<template>
    <v-app-bar style="position: sticky !important;">
      <v-toolbar-title><h2>SpaceX</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="font-weight-bold">Home</v-btn>
      <v-btn text to="/launches" class="font-weight-bold">launches</v-btn>
      <v-btn text to="/favourite" class="font-weight-bold">Favourite</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  