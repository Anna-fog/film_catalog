<template>
  <div>
    <app-header></app-header>
    <app-results v-if="foundFilms.length" :foundFilms="foundFilms"></app-results>
    <pagination v-if="foundFilms.length"></pagination>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppResults from "./components/Results";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppResults,
    Pagination
  },

  computed: {
    foundFilms() {
      return this.$store.getters.foundFilms;
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
